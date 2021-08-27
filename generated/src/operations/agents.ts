import { Agents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  AgentsGetOptionalParams,
  AgentsGetResponse,
  AgentsListOptionalParams,
  AgentsListResponse,
  AgentsSetModelOptionalParams,
  AgentsSetModelResponse
} from "../models";

/** Class containing Agents operations. */
export class AgentsImpl implements Agents {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Agents class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

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
  ): Promise<AgentsGetResponse> {
    return this.client.sendOperationRequest(
      { accessToken, agentid, options },
      getOperationSpec
    );
  }

  /**
   * 获取access_token对应的应用列表
   * @param accessToken
   * @param options The options parameters.
   */
  list(
    accessToken: string,
    options?: AgentsListOptionalParams
  ): Promise<AgentsListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      listOperationSpec
    );
  }

  /**
   * 设置应用
   * @param accessToken
   * @param options The options parameters.
   */
  set(
    accessToken: string,
    options?: AgentsSetModelOptionalParams
  ): Promise<AgentsSetModelResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      setOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/agent/get",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetAgentRsp
    }
  },
  queryParameters: [Parameters.accessToken, Parameters.agentid],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/agent/list",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetAgentListRsp
    }
  },
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const setOperationSpec: coreClient.OperationSpec = {
  path: "/agent/set",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SetAgentRsp
    }
  },
  requestBody: Parameters.body64,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
