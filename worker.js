export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/verify-payment" && request.method === "POST") {
      try {
        const body = await request.json();
        const { transaction_id } = body;
        if (!transaction_id) return Response.json({ success: false }, { status: 400 });
        const verifyRes = await fetch(`https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`, {
          headers: { Authorization: `Bearer ${env.FLW_SECRET_KEY}` }
        });
        const verifyData = await verifyRes.json();
        if (verifyData.status === "success" && verifyData.data?.status === "successful") {
          console.log("✅ NEW DIBRA ORDER:", JSON.stringify(body));
          return Response.json({ success: true, data: verifyData.data });
        }
        return Response.json({ success: false }, { status: 400 });
      } catch (e) { return Response.json({ success: false, message: e.message }, { status: 500 }); }
    }
    return env.ASSETS ? env.ASSETS.fetch(request) : new Response("DIBRA site - deploy with Assets", { status: 404 });
  }
};
