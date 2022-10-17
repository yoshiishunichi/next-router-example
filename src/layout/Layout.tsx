import { FC, ReactNode } from "react";

import Header1 from "components/Header1";
import Header2 from "components/Header2";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header1 />
      <Header2 />
      <main>{children}</main>
    </>
  );
};

export default Layout;
