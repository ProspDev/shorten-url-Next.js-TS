import { type PropsWithChildren } from "react";
import Head from "next/head";
// styles
import { NotoSans } from "styles/fonts";

interface LayoutProps extends PropsWithChildren {
  pageTitle?: string;
}

export default function MainLayout({ pageTitle, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{pageTitle || "Shorten URL"}</title>
      </Head>
      <div className={`${NotoSans.className}`}>{children}</div>
    </>
  );
}
