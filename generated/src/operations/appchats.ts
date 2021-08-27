import { Appchats } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  AppchatsCreateOptionalParams,
  AppchatsCreateResponse,
  AppchatsUpdateOptionalParams,
  AppchatsUpdateResponse,
  AppchatsGetOptionalParams,
  AppchatsGetResponse
} from "../models";

/** Class containing Appchats operations. */
export class AppchatsImpl implements Appchats {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Appchats class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

  /**
   * 创建群聊会话
   * @param accessToken
   * @param options The options parameters.
   */
  create(
    accessToken: string,
    options?: AppchatsCreateOptionalParams
  ): Promise<AppchatsCreateResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      createOperationSpec
    );
  }

  /**
   * 修改群聊会话
   * @param accessToken
   * @param options The options parameters.
   */
  update(
    accessToken: string,
    options?: AppchatsUpdateOptionalParams
  ): Promise<AppchatsUpdateResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      updateOperationSpec
    );
  }

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
  ): Promise<AppchatsGetResponse> {
    return this.client.sendOperationRequest(
      { accessToken, chatid, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/appchat/create",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CreateAppchatRsp
    }
  },
  requestBody: Parameters.body48,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/appchat/update",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body49,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/appchat/get",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetAppchatReq
    }
  },
  queryParameters: [Parameters.accessToken, Parameters.chatid],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
