import { FetchOptions, UseFetchReturnType } from '@/packages/@cyberutopian/fetch';
import type { TableProps } from 'antd';
interface TableRequestType {
  pageIndex?: number;
  pageSize?: number;
}
export interface PaginationResponseType<R> {
  records: R[];
  pageIndex: number;
  pageSize: number;
  total: number;
}
export interface UseTableProviderType<T = any, R = any> {
  tableOptions?: {};
  /** @param 表格请求参数 */
  requestParams: {
    url?: string;
    req?: T & TableRequestType;
  };
  /** @param 表情请求实例 */
  request: (
    data: {
      url?: string;
      req?: T;
    },
    options?: FetchOptions,
  ) => UseFetchReturnType<T & TableRequestType, PaginationResponseType<R>>;
}
interface UseTableProviderResultType<T, R = any> {
  tableProps: TableProps<any>;
  selectedRows: R[];
  changePage: (pageIndex?: number) => void;
  sendRequest: UseFetchReturnType['sendRequest'];
  rawData: any;
}
declare const useTableProvider: <T, R>(props: UseTableProviderType<T, R>) => UseTableProviderResultType<T, R>;
export default useTableProvider;
