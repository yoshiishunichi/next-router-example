import Router from "next/router";
import { FC, useEffect, useState } from "react";

const Header2: FC = () => {
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

export default Header2;
