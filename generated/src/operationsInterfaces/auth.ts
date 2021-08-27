import {
  AuthGetTokenOptionalParams,
  AuthGetTokenResponse,
  AuthGetApiDomainIpOptionalParams,
  AuthGetApiDomainIpResponse
} from "../models";

/** Interface representing a Auth. */
export interface Auth {
  /**
   * 每个应用有独立的secret，获取到的access_token只能本应用使用，所以每个应用的access_token应该分开来获取
   * @param corpid 企业ID
   * @param corpsecret 应用的凭证密钥
   * @param options The options parameters.
   */
  getToken(
    corpid: string,
    corpsecret: string,
    options?: AuthGetTokenOptionalParams
  ): Promise<AuthGetTokenResponse>;
  /**
   * 获取企业微信API域名IP段
   * @param accessToken
   * @param options The options parameters.
   */
  getApiDomainIp(
    accessToken: string,
    options?: AuthGetApiDomainIpOptionalParams
  ): Promise<AuthGetApiDomainIpResponse>;
}
