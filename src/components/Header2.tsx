import Router from "next/router";
import { FC, memo, useEffect, useState } from "react";

const Header2: FC = () => {
  console.log("Routerの方を描画");

  const [path, setPath] = useState<string>();

  useEffect(() => {
    setPath(Router.pathname);
  }, []);

  return (
    <header>
      <h1>ヘッダー2</h1>
      <p>Routerから参照したパス: {path}</p>
    </header>
  );
};

export default memo(Header2);
