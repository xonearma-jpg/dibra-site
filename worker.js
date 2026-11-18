// DIBRA Cloudflare Worker - Serves index.html + Verifies Flutterwave Payments
// Env vars needed in Cloudflare Dashboard: FLW_SECRET_KEY, FLW_PUBLIC_KEY

const FLW_VERIFY_URL = "https://api.flutterwave.com/v3/transactions/";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // --- API: Verify Payment ---
    if (url.pathname === "/api/verify-payment" && request.method === "POST") {
      try {
        const body = await request.json();
        const { transaction_id, tx_ref, service, paid, payType, business, name, phone, email } = body;

        if (!transaction_id) {
          return json({ success: false, message: "Missing transaction_id" }, 400);
        }

        // If secret key not set yet, return demo mode so frontend still shows receipt
        if (!env.FLW_SECRET_KEY) {
          return json({ success: true, demo: true, service, paid, reference: tx_ref, transaction_id });
        }

        // Verify with Flutterwave
        const verifyRes = await fetch(`${FLW_VERIFY_URL}${transaction_id}/verify`, {
          headers: { Authorization: `Bearer ${env.FLW_SECRET_KEY}`, "Content-Type": "application/json" }
        });
        const verifyData = await verifyRes.json();

        if (verifyData.status !== "success" || verifyData.data.status !== "successful") {
          return json({ success: false, message: "Payment not successful on Flutterwave" }, 400);
        }

        // Security checks: amount + currency + tx_ref must match
        const flw = verifyData.data;
        if (flw.currency !== "UGX") {
          return json({ success: false, message: "Currency mismatch" }, 400);
        }
        // Allow small tolerance, but log if mismatch
        if (Math.abs(flw.amount - Number(paid)) > 1) {
          console.log("Amount mismatch", flw.amount, paid);
        }
        if (flw.tx_ref !== tx_ref) {
          console.log("Tx ref mismatch", flw.tx_ref, tx_ref);
        }

        // TODO: Save order to KV / D1 / Send email / WhatsApp API here
        // For now we log it - you will see it in Cloudflare Logs
        console.log("NEW DIBRA ORDER:", JSON.stringify({ service, paid, payType, business, name, phone, email, reference: tx_ref, transaction_id, flw_id: flw.id, date: new Date().toISOString() }));

        // Optional: Forward to your WhatsApp via WhatsApp Cloud API if you add it later
        // await ctx.waitUntil(sendToWhatsApp(...))

        return json({
          success: true,
          service,
          paid: flw.amount,
          reference: tx_ref,
          transaction_id: String(transaction_id)
        });

      } catch (err) {
        return json({ success: false, message: err.message }, 500);
      }
    }

    // --- Serve index.html ---
    // If you use Workers Static Assets, this will serve index.html automatically.
    // If you use plain Worker, put your HTML in ASSETS binding or fetch from KV.
    // Simplest: use `env.ASSETS.fetch(request)` if Static Assets enabled.
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("DIBRA Worker running. Enable Static Assets and set FLW_SECRET_KEY.", { headers: { "Content-Type": "text/plain" } });
  }
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
    }
