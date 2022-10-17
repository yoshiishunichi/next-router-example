import Link from "next/link";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h2>トップページです。</h2>
      <Link href="/other/">
        <a>別のページへ</a>
      </Link>
    </div>
  );
};

export default Home;
