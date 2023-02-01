import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        display: "flex",
        gap: 5,
      }}
    >
      <Image src="/logo.svg" alt="logo" width="30" height="10" />
      <span>Decoding Ethereum EIPs</span>
    </div>
  ),
  project: {
    link: "https://github.com/keshavsharma25/DecodingEthereumEIPs",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
