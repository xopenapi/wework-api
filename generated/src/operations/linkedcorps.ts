import { Linkedcorps } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  LinkedcorpsPermListOptionalParams,
  LinkedcorpsPermListResponse,
  LinkedcorpsGetUserOptionalParams,
  LinkedcorpsGetUserResponse,
  LinkedcorpsGetUserSimplelistOptionalParams,
  LinkedcorpsGetUserSimplelistResponse,
  LinkedcorpsGetUserListOptionalParams,
  LinkedcorpsGetUserListResponse,
  LinkedcorpsGetDepartmentListOptionalParams,
  LinkedcorpsGetDepartmentListResponse
} from "../models";

/** Class containing Linkedcorps operations. */
export class LinkedcorpsImpl implements Linkedcorps {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Linkedcorps class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

  /**
   * 本接口只返回互联企业中非本企业内的成员和部门的信息，如果要获取本企业的可见范围，请调用“获取应用”接口
   * @param accessToken
   * @param options The options parameters.
   */
  permList(
    accessToken: string,
    options?: LinkedcorpsPermListOptionalParams
  ): Promise<LinkedcorpsPermListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      permListOperationSpec
    );
  }

  /**
   * 获取互联企业成员详细信息
   * @param accessToken
   * @param options The options parameters.
   */
  getUser(
    accessToken: string,
    options?: LinkedcorpsGetUserOptionalParams
  ): Promise<LinkedcorpsGetUserResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getUserOperationSpec
    );
  }

  /**
   * 获取互联企业部门成员
   * @param accessToken
   * @param options The options parameters.
   */
  getUserSimplelist(
    accessToken: string,
    options?: LinkedcorpsGetUserSimplelistOptionalParams
  ): Promise<LinkedcorpsGetUserSimplelistResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getUserSimplelistOperationSpec
    );
  }

  /**
   * 获取互联企业部门成员详情
   * @param accessToken
   * @param options The options parameters.
   */
  getUserList(
    accessToken: string,
    options?: LinkedcorpsGetUserListOptionalParams
  ): Promise<LinkedcorpsGetUserListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getUserListOperationSpec
    );
  }

  /**
   * 获取互联企业部门列表
   * @param accessToken
   * @param options The options parameters.
   */
  getDepartmentList(
    accessToken: string,
    options?: LinkedcorpsGetDepartmentListOptionalParams
  ): Promise<LinkedcorpsGetDepartmentListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getDepartmentListOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const permListOperationSpec: coreClient.OperationSpec = {
  path: "/linkedcorp/agent/get_perm_list",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetAgentPermListRsp
    }
  },
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUserOperationSpec: coreClient.OperationSpec = {
  path: "/linkedcorp/user/get",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetLinkedcorpUserRsp
    }
  },
  requestBody: Parameters.body53,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUserSimplelistOperationSpec: coreClient.OperationSpec = {
  path: "/linkedcorp/user/simplelist",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetLinkedcorpUserSimplelistRsp
    }
  },
  requestBody: Parameters.body54,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUserListOperationSpec: coreClient.OperationSpec = {
  path: "/linkedcorp/user/list",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetLinkedcorpUserListRsp
    }
  },
  requestBody: Parameters.body55,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDepartmentListOperationSpec: coreClient.OperationSpec = {
  path: "/linkedcorp/department/list",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetLinkedcorpDepartmentListRsp
    }
  },
  requestBody: Parameters.body56,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
