## 오늘 배울 것
**useQuery**  : 데이터를 읽기 위한 훅
**useMutation** : 데이터를 조작(Create, Update, Delete)하기 위한 훅
| const ______ = useQuery(options);
| const ______ = useMutation(options);

**Devtools** :: ReactQueryDevtools 컴포넌트

## Devtools import 예시
```
<QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools />
</QueryClientProvider>
```

## useQuery 사용 예시
```
/**
 useQuery({
   queryKey : 가져온 데이터를 어떤 키에다가 저장할 것인지,
        1번 요소 : 데이터 모델명을 string으로 넣는다.
        2번 요소 : meta 데이터 (설명)
   queryFn : 데이터를 가져오는 함수
 });
 */

 const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", { id: productId }],
    queryFn: () => api.products.getProduct(productId),
    // refetchOnWindowFocus: true, // focus될 떄마다 (탭 선택 등) 데이터 리로딩
    // refetchInterval: 1000, // n초마다 데이터 리로딩
  });
```

## useMutation 사용 예시
```
// mutationFn 을 받는다. 핵심은 응답의 mutate 와 mutateAsync임
const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: (variables) => axios.post(ENDPOINT, { value: variables }),
    onSuccess: (result) => { // mutate 두번째 인자 안에 
      console.log(result);
      alert("성공");
    },
    onError: () => {
      alert("실패");
    },
  });

const handleClickButton = async (e) => {
    try {
      mutate(e.target.value, { onSuccess: () => alert("성공했다규!") });
    } catch (e) {
      // 에러 발생했다고 알려주기
    }
};
```

## axios 사용법
```
const client = axios.create({ baseURL: this.#baseURL });

async function getBrands () {
    const response = await client.get("/brands");
    const data = response.data;
    return data.result;
}

async function createPosts() {
    await axios.post(ENDPOINT, { value: variables })
}
```