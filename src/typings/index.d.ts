declare namespace ApiData {
  interface Data<T = any> {
    code: number
    data: T
    msg: string
  }
}
