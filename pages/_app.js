import App from "next/app";
import React from "react";
import Layout from "../hoc/Layout";
import "../styles/global.css";

export default class MyApp extends App {
  componentDidMount() {
    localStorage.clear();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
