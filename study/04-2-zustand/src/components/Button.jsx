import useLoginStore from "../zustand/login.store";

function Button() {
  const logIn = useLoginStore((state) => state.logIn);
  const logOut = useLoginStore((state) => state.logOut);
  // const { logIn, logOut } = useLoginStore(
  //   useShallow((state) => {
  //     logIn : state.logIn, logOut : state.logOut;
  //   })
  // );

  console.log("버튼 리렌더링");

  return (
    <>
      <button onClick={logIn}>login</button>
      <button onClick={logOut}>logout</button>
    </>
  );
}
export default Button;
