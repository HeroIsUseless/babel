import fs from "fs";
import archivedSyntaxPkgs from "./archived-syntax-pkgs.json" with { type: "json" };
const root = new URL("../..", import.meta.url);

let output = `/* This file is automatically generated by scripts/generators/archived-libs-typings.js */

`;

for (const pkgName of archivedSyntaxPkgs) {
  output += `declare module "${pkgName}" {
  import { declare } from "@babel/helper-plugin-utils";
  let exports: {default: ReturnType<typeof declare>};
  export = exports;
}
`;
}

fs.writeFileSync(new URL("./lib/archived-libs.d.ts", root), output);