import * as OpenAPI from "fumadocs-openapi";
import { rimraf } from "rimraf";

export async function generateDocs() {
  await rimraf("../content/docs/openai/(generated)");

  await Promise.all([
    OpenAPI.generateFiles({
      input: ["./sutra-api-service.yaml"],
      output: "../content/docs/openai/(generated)",
      per: "operation",
    }),
  ]);
}
