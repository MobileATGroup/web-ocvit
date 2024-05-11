declare module 'react-html-parser';
declare module "*.svg" {
  import React = require("react")
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

interface Window {
  NextPublic: {
    lang: "Vi"
    version: string
  }
}
declare global {
  declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_APP_VERSION: string;
      NEXT_PUBLIC_API_HOST: string;
    }
  }
}