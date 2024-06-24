## components ui lib
- https://ui.shadcn.com/
- https://mui.com/

## tailwindcss 동적 css 도와주는
- https://cva.style/docs

##
```
  // 첫번째 인자<array | string> : 조합과 무관한 class
  // 두번째 인자 : 조합
  const chipVariants = cva(
    ["text-sm", "border", "rounded-full", "px-2.5", "py-0.5"],
    {
      variants: {
        intent: {
          primary: "bg-blue-500 border-blue-500 text-white",
          secondary: "bg-gray-500 border-gray-500 text-white",
          danger: "bg-red-500 border-red-500 text-white",
          warning: "bg-yellow-500 border-yellow-500 text-white",
          info: "bg-violet-500 border-violet-500 text-white",
          default: "bg-white border-black-500 text-black",
        },
      },
      // compoundVariants: [], //
      defaultVariants: { intent: "default" }, // 초기값은 어떤 것으로 할 것인지
    }
  );
```