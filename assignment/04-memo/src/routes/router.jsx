import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { DetailPage } from "../pages/DetailPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <>정보 없음</>,
      },
      {
        path: "/:memoId",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
