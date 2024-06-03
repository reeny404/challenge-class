function Page({ children }) {
  console.log(children);
  return <main className="px-5 py-10">{children}</main>;
}

export default Page;
