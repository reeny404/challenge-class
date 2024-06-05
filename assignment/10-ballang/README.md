https://instructor-young.notion.site/1455b1eab22e4c8d94bf2693209959fb


## invalidateQueries

const queryClient = useQueryClient();
queryClient.invalidateQueries({ queryKey: ["cart"] }); // 
queryClient.invalidateQueries({ queryKey: ["cart"], exact : true }); // 정확하게 요 키를 가진 애만!