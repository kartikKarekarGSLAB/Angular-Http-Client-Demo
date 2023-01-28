/**
 * @interface
 */
export interface ResponseBase<T> {
  status: {
    statusCode: number;
    errorKey: string;
    errorMessage: string;
  };
  payload?: T;
  payloadList?: T[];
}
