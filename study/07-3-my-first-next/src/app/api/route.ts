const GET = async () => {
  return new Response("", { headers: { 'Set-Cookie': 'accessToken=blabal; Max-Age=50000' } })
};