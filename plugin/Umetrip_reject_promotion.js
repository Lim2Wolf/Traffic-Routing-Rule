const version = "V1.0.1";
const headers = $request.headers || {};
const rpid = headers.rpid || headers.Rpid || "";

if (rpid.includes("1000002") || rpid.includes("1000019")) {
  $done({
    response: {
      status: 404,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: "{}"
    }
  });
} else {
  $done({});
}
