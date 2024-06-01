type AxiosRequestConfig<Params = undefined> = Params extends undefinded
  ? { config?: import('axios').AxiosRequestConfig }
  : { params: Params; config?: import('axios').AxiosRequestConfig };
