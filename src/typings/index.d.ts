declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const vueComponent: DefineComponent<{}, {}, any>
  export default vueComponent
}

declare namespace ApiData {
  interface Data<T = any> {
    code: number
    data: T
    msg: string
  }
}
