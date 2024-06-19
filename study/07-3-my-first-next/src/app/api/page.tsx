import { cookies } from "next/headers";

function page() {
  const accessToken = cookies().get("accessToken")?.value;
  const isAccessTokenValid = !!accessToken;
  return (
    <div>
      page
      {isAccessTokenValid ? "회원" : "비회원"}
    </div>
  );
}

export default page;
