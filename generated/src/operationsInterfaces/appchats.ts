import {
  AppchatsCreateOptionalParams,
  AppchatsCreateResponse,
  AppchatsUpdateOptionalParams,
  AppchatsUpdateResponse,
  AppchatsGetOptionalParams,
  AppchatsGetResponse
} from "../models";

/** Interface representing a Appchats. */
export interface Appchats {
  /**
   * 创建群聊会话
   * @param accessToken
   * @param options The options parameters.
   */
  create(
    accessToken: string,
    options?: AppchatsCreateOptionalParams
  ): Promise<AppchatsCreateResponse>;
  /**
   * 修改群聊会话
   * @param accessToken
   * @param options The options parameters.
   */
  update(
    accessToken: string,
    options?: AppchatsUpdateOptionalParams
  ): Promise<AppchatsUpdateResponse>;
  /**
   * 获取群聊会话
   * @param accessToken
   * @param chatid
   * @param options The options parameters.
   */
  get(
    accessToken: string,
    chatid: string,
    options?: AppchatsGetOptionalParams
  ): Promise<AppchatsGetResponse>;
}
