export enum STATUS {
  OK,
  NOT_FOUND,
  ERROR
}

export enum LoginStatusCode {
  OK,
  USERNAME_NOT_FOUND,
  WRONG
}

export enum RegisterStatusCode {
  OK,
  REPEATED_USERNAME
}

export const SALT = 'hello'