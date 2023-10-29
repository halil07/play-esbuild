import { reactive } from "vue"

export const state = reactive({
  files: new Map([
    [
      "index.tsx",
      {
        content: `const h1 = <h1 onclick="alert(5)">Hellö</h1>;\nconsole.log(h1);\ndocument.body.append(h1)`
      },
    ],
    [
      "esbuild.config.json",
      {
        content: JSON.stringify(
          { format: "cjs", "minify": true, "jsx": "automatic", "jsxImportSource":"jsx-dom/min"  },
          null,
          2
        ),
      },
    ],
  ]),
})
