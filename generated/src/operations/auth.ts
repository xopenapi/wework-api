import { Auth } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  AuthGetTokenOptionalParams,
  AuthGetTokenResponse,
  AuthGetApiDomainIpOptionalParams,
  AuthGetApiDomainIpResponse
} from "../models";

/** Class containing Auth operations. */
export class AuthImpl implements Auth {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Auth class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

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
  ): Promise<AuthGetTokenResponse> {
    return this.client.sendOperationRequest(
      { corpid, corpsecret, options },
      getTokenOperationSpec
    );
  }

  /**
   * 获取企业微信API域名IP段
   * @param accessToken
   * @param options The options parameters.
   */
  getApiDomainIp(
    accessToken: string,
    options?: AuthGetApiDomainIpOptionalParams
  ): Promise<AuthGetApiDomainIpResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getApiDomainIpOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getTokenOperationSpec: coreClient.OperationSpec = {
  path: "/gettoken",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TokenRsp
    }
  },
  queryParameters: [Parameters.corpid, Parameters.corpsecret],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getApiDomainIpOperationSpec: coreClient.OperationSpec = {
  path: "/get_api_domain_ip",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetApiDomainIpRsp
    }
  },
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
