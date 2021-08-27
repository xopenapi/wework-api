import {
  MenusCreateOptionalParams,
  MenusCreateResponse,
  MenusGetOptionalParams,
  MenusGetResponse,
  MenusDeleteOptionalParams,
  MenusDeleteResponse
} from "../models";

/** Interface representing a Menus. */
export interface Menus {
  /**
   * 自定义菜单接口可实现多种类型按钮
   * @param accessToken
   * @param options The options parameters.
   */
  create(
    accessToken: string,
    options?: MenusCreateOptionalParams
  ): Promise<MenusCreateResponse>;
  /**
   * 获取菜单
   * @param accessToken
   * @param agentid
   * @param options The options parameters.
   */
  get(
    accessToken: string,
    agentid: string,
    options?: MenusGetOptionalParams
  ): Promise<MenusGetResponse>;
  /**
   * 删除菜单
   * @param accessToken
   * @param agentid
   * @param options The options parameters.
   */
  delete(
    accessToken: string,
    agentid: string,
    options?: MenusDeleteOptionalParams
  ): Promise<MenusDeleteResponse>;
}
