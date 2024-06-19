// path가 있어야 제대로 셋팅이 되었음 확인 필요
const GET = async () => {
  return new Response("", { headers: { 'Set-Cookie': 'accessToken=blabal; Max-Age=50000' } })
};