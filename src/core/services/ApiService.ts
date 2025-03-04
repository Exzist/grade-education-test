import type { App } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static vueInstance: App;

  /**
   * @description initialize vue axios
   * @param vue vue app instance
   */
  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL =
      import.meta.env.VITE_API_URL;
    ApiService.vueInstance.axios.defaults.headers.common["X-API-Key"] =
      import.meta.env.VITE_API_KEY;
  }

  /**
   * @description send the HTTP GET request
   * @param resource
   * @param params
   * @returns Promise<T>
   */
  public static query<T>(resource: string, params: any): Promise<T> {
    return ApiService.vueInstance.axios.get(resource, params);
  }
}

export default ApiService;
