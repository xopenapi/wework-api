import { Services } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  ServicesGetProviderTokenOptionalParams,
  ServicesGetProviderTokenResponse,
  ServicesGetSuiteTokenOptionalParams,
  ServicesGetSuiteTokenResponse,
  ServicesGetPreAuthCodeOptionalParams,
  ServicesGetPreAuthCodeResponse,
  ServicesSetSessionInfoOptionalParams,
  ServicesSetSessionInfoResponse,
  ServicesGetPermanentCodeOptionalParams,
  ServicesGetPermanentCodeResponse,
  ServicesGetAuthInfoOptionalParams,
  ServicesGetAuthInfoResponse,
  ServicesGetCorpTokenOptionalParams,
  ServicesGetCorpTokenResponse,
  ServicesGetAdminListOptionalParams,
  ServicesGetAdminListResponse
} from "../models";

/** Class containing Services operations. */
export class ServicesImpl implements Services {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Services class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

  /**
   * 获取服务商凭证
   * @param options The options parameters.
   */
  getProviderToken(
    options?: ServicesGetProviderTokenOptionalParams
  ): Promise<ServicesGetProviderTokenResponse> {
    return this.client.sendOperationRequest(
      { options },
      getProviderTokenOperationSpec
    );
  }

  /**
   * 该API用于获取第三方应用凭证（suite_access_token）。由于第三方服务商可能托管了大量的企业，其安全问题造成的影响会更加严重，故API中除了合法来源IP校验之外，还额外增加了suite_ticket作为安全凭证。获取suite_access_token时，需要suite_ticket参数。suite_ticket由企业微信后台定时推送给“指令回调URL”，每十分钟更新一次，见推送suite_ticket。suite_ticket实际有效期为30分钟，可以容错连续两次获取suite_ticket失败的情况，但是请永远使用最新接收到的suite_ticket。通过本接口获取的suite_access_token有效期为2小时，开发者需要进行缓存，不可频繁获取。
   * @param options The options parameters.
   */
  getSuiteToken(
    options?: ServicesGetSuiteTokenOptionalParams
  ): Promise<ServicesGetSuiteTokenResponse> {
    return this.client.sendOperationRequest(
      { options },
      getSuiteTokenOperationSpec
    );
  }

  /**
   * 该API用于获取预授权码。预授权码用于企业授权时的第三方服务商安全验证。
   * @param suiteAccessToken
   * @param options The options parameters.
   */
  getPreAuthCode(
    suiteAccessToken: string,
    options?: ServicesGetPreAuthCodeOptionalParams
  ): Promise<ServicesGetPreAuthCodeResponse> {
    return this.client.sendOperationRequest(
      { suiteAccessToken, options },
      getPreAuthCodeOperationSpec
    );
  }

  /**
   * 该接口可对某次授权进行配置。可支持测试模式（应用未发布时）。
   * @param suiteAccessToken
   * @param options The options parameters.
   */
  setSessionInfo(
    suiteAccessToken: string,
    options?: ServicesSetSessionInfoOptionalParams
  ): Promise<ServicesSetSessionInfoResponse> {
    return this.client.sendOperationRequest(
      { suiteAccessToken, options },
      setSessionInfoOperationSpec
    );
  }

  /**
   * 该API用于使用临时授权码换取授权方的永久授权码，并换取授权信息、企业access_token，临时授权码一次有效。建议第三方以userid为主键，来建立自己的管理员账号。
   * @param suiteAccessToken
   * @param options The options parameters.
   */
  getPermanentCode(
    suiteAccessToken: string,
    options?: ServicesGetPermanentCodeOptionalParams
  ): Promise<ServicesGetPermanentCodeResponse> {
    return this.client.sendOperationRequest(
      { suiteAccessToken, options },
      getPermanentCodeOperationSpec
    );
  }

  /**
   * 该API用于通过永久授权码换取企业微信的授权信息。 永久code的获取，是通过临时授权码使用get_permanent_code 接口获取到的permanent_code。
   * @param suiteAccessToken
   * @param options The options parameters.
   */
  getAuthInfo(
    suiteAccessToken: string,
    options?: ServicesGetAuthInfoOptionalParams
  ): Promise<ServicesGetAuthInfoResponse> {
    return this.client.sendOperationRequest(
      { suiteAccessToken, options },
      getAuthInfoOperationSpec
    );
  }

  /**
   * 第三方服务商在取得企业的永久授权码后，通过此接口可以获取到企业的access_token。获取后可通过通讯录、应用、消息等企业接口来运营这些应用。此处获得的企业access_token与企业获取access_token拿到的token，本质上是一样的，只不过获取方式不同。获取之后，就跟普通企业一样使用token调用API接口
   * @param suiteAccessToken
   * @param options The options parameters.
   */
  getCorpToken(
    suiteAccessToken: string,
    options?: ServicesGetCorpTokenOptionalParams
  ): Promise<ServicesGetCorpTokenResponse> {
    return this.client.sendOperationRequest(
      { suiteAccessToken, options },
      getCorpTokenOperationSpec
    );
  }

  /**
   * 第三方服务商可以用此接口获取授权企业中某个第三方应用的管理员列表(不包括外部管理员)，以便服务商在用户进入应用主页之后根据是否管理员身份做权限的区分。该应用必须与SUITE_ACCESS_TOKEN对应的suiteid对应，否则没权限查看
   * @param suiteAccessToken
   * @param options The options parameters.
   */
  getAdminList(
    suiteAccessToken: string,
    options?: ServicesGetAdminListOptionalParams
  ): Promise<ServicesGetAdminListResponse> {
    return this.client.sendOperationRequest(
      { suiteAccessToken, options },
      getAdminListOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getProviderTokenOperationSpec: coreClient.OperationSpec = {
  path: "/service/get_provider_token",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetServiceProviderTokenRsp
    }
  },
  requestBody: Parameters.body57,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSuiteTokenOperationSpec: coreClient.OperationSpec = {
  path: "/service/get_suite_token",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetServiceSuiteTokenRsp
    }
  },
  requestBody: Parameters.body58,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getPreAuthCodeOperationSpec: coreClient.OperationSpec = {
  path: "/service/get_pre_auth_code",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetServicePreAuthCodeRsp
    }
  },
  queryParameters: [Parameters.suiteAccessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const setSessionInfoOperationSpec: coreClient.OperationSpec = {
  path: "/service/set_session_info",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body59,
  queryParameters: [Parameters.suiteAccessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getPermanentCodeOperationSpec: coreClient.OperationSpec = {
  path: "/service/get_permanent_code",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetServicePermanentCodeRsp
    }
  },
  requestBody: Parameters.body60,
  queryParameters: [Parameters.suiteAccessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAuthInfoOperationSpec: coreClient.OperationSpec = {
  path: "/service/get_auth_info",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetServiceAuthInfoRsp
    }
  },
  requestBody: Parameters.body61,
  queryParameters: [Parameters.suiteAccessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getCorpTokenOperationSpec: coreClient.OperationSpec = {
  path: "/service/get_corp_token",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetServiceCorpTokenRsp
    }
  },
  requestBody: Parameters.body62,
  queryParameters: [Parameters.suiteAccessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAdminListOperationSpec: coreClient.OperationSpec = {
  path: "/service/get_admin_list",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetServiceAdminListRsp
    }
  },
  requestBody: Parameters.body63,
  queryParameters: [Parameters.suiteAccessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
