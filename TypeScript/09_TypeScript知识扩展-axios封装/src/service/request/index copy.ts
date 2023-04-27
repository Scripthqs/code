import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
// import type { AxiosRequestConfig, AxiosResponse } from "axios"

// // 针对AxiosRequestConfig配置进行扩展
// export interface HYInterceptors<T = AxiosResponse> {
//   requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig 
//   requestFailureFn?: (err: any) => any 
//   responseSuccessFn?: (res: T) => T
//   responseFailureFn?: (err: any) => any 
// }

// export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
//   interceptors?: HYInterceptors<T>
// }

class Request {
  instance: AxiosInstance;
  // request实例 => axios 实例
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
  //封装网络请求的方法
  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export default Request;
