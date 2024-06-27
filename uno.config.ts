import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  rules: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [/^p-([.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })]
  ],
  shortcuts: [['wh-full', 'w-full h-full']],
  presets: [presetUno()]
})
