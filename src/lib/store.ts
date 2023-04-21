import { reactive } from "vue"

export const state = reactive({
  files: new Map([
    [
      "index.tsx",
      {
        content: "console.log('Hello, world!')",
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
