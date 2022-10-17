import { NextPage } from "next";
import Link from "next/link";

const OtherPage: NextPage = () => {
  return (
    <div>
      <h2>別のページです。</h2>
      <Link href="/">
        <a>トップへ</a>
      </Link>
    </div>
  );
};

export default OtherPage;
