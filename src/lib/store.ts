import { reactive } from "vue"

export const state = reactive({
  files: new Map([
    [
      "index.tsx",
      {
        content: `import {sum} from "./sum";\nconsole.log(sum([1,2,3,45,6,87,5,12]))`
      },
    ],
    [
      "sum.tsx",
      {
        content: `import lodash from "lodash";\nexport const sum = lodash.sum`,
      },
    ],
    [
      "esbuild.config.json",
      {
        content: JSON.stringify(
          { format: "cjs", minify: true },
          null,
          2
        ),
      },
    ],
  ]),
})
