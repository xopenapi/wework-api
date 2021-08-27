import {
  AgentsGetOptionalParams,
  AgentsGetResponse,
  AgentsListOptionalParams,
  AgentsListResponse,
  AgentsSetModelOptionalParams,
  AgentsSetModelResponse
} from "../models";

/** Interface representing a Agents. */
export interface Agents {
  /**
   * 对于互联企业的应用，如果需要获取应用可见范围内其他互联企业的部门与成员，请调用互联企业-获取应用可见范围接口
   * @param accessToken
   * @param agentid
   * @param options The options parameters.
   */
  get(
    accessToken: string,
    agentid: string,
    options?: AgentsGetOptionalParams
  ): Promise<AgentsGetResponse>;
  /**
   * 获取access_token对应的应用列表
   * @param accessToken
   * @param options The options parameters.
   */
  list(
    accessToken: string,
    options?: AgentsListOptionalParams
  ): Promise<AgentsListResponse>;
  /**
   * 设置应用
   * @param accessToken
   * @param options The options parameters.
   */
  set(
    accessToken: string,
    options?: AgentsSetModelOptionalParams
  ): Promise<AgentsSetModelResponse>;
}
