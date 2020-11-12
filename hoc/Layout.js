import Head from "next/head";
import React from "react";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Menu App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </Head>

      <main className="container-fluid">{props.children}</main>
    </div>
  );
};
export default Layout;
