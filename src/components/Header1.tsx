import { useRouter } from "next/router";
import { FC } from "react";

const Header1: FC = () => {
  const router = useRouter();

  return (
    <header>
      <h1>ヘッダー1</h1>
      <p>useRouterから参照したパス: {router.pathname}</p>
    </header>
  );
};

export default Header1;
