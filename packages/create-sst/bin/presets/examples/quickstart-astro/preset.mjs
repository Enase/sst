import { patch, extend, extract, install, cmd, str_replace } from "create-sst";
export default [
  extract(),
  install({
    packages: ["sst", "astro-sst", "aws-cdk-lib@2.72.1", "constructs@10.1.156"],
    dev: true,
  }),
  install({
    packages: ["@aws-sdk/client-s3", "@aws-sdk/s3-request-presigner", "astro"],
  }),
];
