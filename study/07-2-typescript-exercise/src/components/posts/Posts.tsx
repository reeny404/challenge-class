import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const endpoint: string = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  // const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     axios.get<Post[]>(endpoint).then((res) => setPosts(res.data));
  //   })();
  // }, []);

  const { data: posts = [] } = useQuery<Post[], string, Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get<Post[]>(endpoint).then((res) => res.data),
  });

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          [{post.id}] {post.title}
        </li>
      ))}
    </ol>
  );
}

type Post = {
  id: number;
  title: string;
};

export default Posts;
