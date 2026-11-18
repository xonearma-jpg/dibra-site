// worker.js - DIBRA Cloudflare Worker
// Serves index.html + verifies Flutterwave payments

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // --- API: Verify Payment ---
    if (url.pathname === "/api/verify-payment" && request.method === "POST") {
      try {
        const body = await request.json();
        const { transaction_id, tx_ref } = body;

        if (!transaction_id) {
          return Response.json({ success: false, message: "No transaction_id" }, { status: 400 });
        }

        // Verify with Flutterwave using SECRET KEY from env (never in frontend)
        const verifyRes = await fetch(`https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`, {
          headers: { Authorization: `Bearer ${env.FLW_SECRET_KEY}` }
        });
        const verifyData = await verifyRes.json();

        if (verifyData.status === "success" && verifyData.data?.status === "successful") {
          // LOG ORDER - You can forward to WhatsApp / Email / Google Sheet here
          console.log("✅ NEW DIBRA ORDER:", JSON.stringify({ ...body, verified_amount: verifyData.data.amount, currency: verifyData.data.currency, flw_ref: verifyData.data.flw_ref }));

          // Optional: Forward to your WhatsApp via any webhook you set later
          // await fetch(env.ORDER_WEBHOOK_URL, { method: "POST", body: JSON.stringify(body) });

          return Response.json({ success: true, data: verifyData.data });
        } else {
          return Response.json({ success: false, message: "Payment not successful" }, { status: 400 });
        }
      } catch (e) {
        return Response.json({ success: false, message: e.message }, { status: 500 });
      }
    }

    // --- Serve index.html for all other routes ---
    // In Cloudflare Workers with Assets, this will serve your static file.
    // If you use Workers + Pages, just deploy index.html as static asset.
    return env.ASSETS ? env.ASSETS.fetch(request) : new Response("DIBRA site - Please deploy with Assets. index.html missing.", { status: 404 });
  }
};
