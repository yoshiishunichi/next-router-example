import { useRouter } from "next/router";
import { FC, memo } from "react";

const Header1: FC = () => {
  console.log("useRouterの方を描画");
  const router = useRouter();

  return (
    <header>
      <h1>ヘッダー1</h1>
      <p>useRouterから参照したパス: {router.pathname}</p>
    </header>
  );
};

export default memo(Header1);
