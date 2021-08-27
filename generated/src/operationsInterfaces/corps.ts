import {
  CorpsGetJoinQrcodeOptionalParams,
  CorpsGetJoinQrcodeResponse
} from "../models";

/** Interface representing a Corps. */
export interface Corps {
  /**
   * 获取加入企业二维码
   * @param accessToken
   * @param options The options parameters.
   */
  getJoinQrcode(
    accessToken: string,
    options?: CorpsGetJoinQrcodeOptionalParams
  ): Promise<CorpsGetJoinQrcodeResponse>;
}
