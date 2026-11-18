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
          console.log("✅ NEW DIBRA ORDER:", JSON.stringify({ ...body, verified_amount: verifyData.data.amount }));
          return Response.json({ success: true, data: verifyData.data });
        } else {
          return Response.json({ success: false }, { status: 400 });
        }
      } catch (e) {
        return Response.json({ success: false, message: e.message }, { status: 500 });
      }
    }
    return env.ASSETS ? env.ASSETS.fetch(request) : new Response("DIBRA site - index.html missing", { status: 404 });
  }
};
