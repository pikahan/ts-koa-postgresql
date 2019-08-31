export interface Response<T> {
  code: number,
  message: string,
  response?: T
}

export enum ResponseCode {
  OK,
  ERROR
}