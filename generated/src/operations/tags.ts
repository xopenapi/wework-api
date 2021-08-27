import { Tags } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  CreateTagReq,
  TagsCreateOptionalParams,
  TagsCreateResponse,
  UpdateTagReq,
  TagsUpdateOptionalParams,
  TagsUpdateResponse,
  TagsDeleteOptionalParams,
  TagsDeleteResponse,
  AddTagUsersReq,
  TagsAddUsersOptionalParams,
  TagsAddUsersResponse,
  DeleteTagUsersReq,
  TagsDeleteUsersOptionalParams,
  TagsDeleteUsersResponse,
  TagsGetUsersOptionalParams,
  TagsGetUsersResponse,
  TagsGetListOptionalParams,
  TagsGetListResponse
} from "../models";

/** Class containing Tags operations. */
export class TagsImpl implements Tags {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Tags class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

  /**
   * 创建企业内部标签
   * @param accessToken
   * @param body CreateTagReq
   * @param options The options parameters.
   */
  create(
    accessToken: string,
    body: CreateTagReq,
    options?: TagsCreateOptionalParams
  ): Promise<TagsCreateResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      createOperationSpec
    );
  }

  /**
   * 更新内部标签名字
   * @param accessToken
   * @param body UpdateTagReq
   * @param options The options parameters.
   */
  update(
    accessToken: string,
    body: UpdateTagReq,
    options?: TagsUpdateOptionalParams
  ): Promise<TagsUpdateResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      updateOperationSpec
    );
  }

  /**
   * 删除企业内部标签
   * @param accessToken
   * @param tagid
   * @param options The options parameters.
   */
  delete(
    accessToken: string,
    tagid: number,
    options?: TagsDeleteOptionalParams
  ): Promise<TagsDeleteResponse> {
    return this.client.sendOperationRequest(
      { accessToken, tagid, options },
      deleteOperationSpec
    );
  }

  /**
   * 增加标签成员
   * @param accessToken
   * @param body AddTagUsers
   * @param options The options parameters.
   */
  addUsers(
    accessToken: string,
    body: AddTagUsersReq,
    options?: TagsAddUsersOptionalParams
  ): Promise<TagsAddUsersResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      addUsersOperationSpec
    );
  }

  /**
   * 删除标签成员
   * @param accessToken
   * @param body DeleteTagUsersReq
   * @param options The options parameters.
   */
  deleteUsers(
    accessToken: string,
    body: DeleteTagUsersReq,
    options?: TagsDeleteUsersOptionalParams
  ): Promise<TagsDeleteUsersResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      deleteUsersOperationSpec
    );
  }

  /**
   * 获取标签成员
   * @param accessToken
   * @param tagid
   * @param options The options parameters.
   */
  getUsers(
    accessToken: string,
    tagid: string,
    options?: TagsGetUsersOptionalParams
  ): Promise<TagsGetUsersResponse> {
    return this.client.sendOperationRequest(
      { accessToken, tagid, options },
      getUsersOperationSpec
    );
  }

  /**
   * 获取标签列表
   * @param accessToken
   * @param options The options parameters.
   */
  getList(
    accessToken: string,
    options?: TagsGetListOptionalParams
  ): Promise<TagsGetListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getListOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/tag/create",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CreateTagRsp
    }
  },
  requestBody: Parameters.body9,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/tag/update",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body10,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/tag/delete",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  queryParameters: [Parameters.accessToken, Parameters.tagid],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const addUsersOperationSpec: coreClient.OperationSpec = {
  path: "/tag/addtagusers",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body11,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteUsersOperationSpec: coreClient.OperationSpec = {
  path: "/tag/deltagusers",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body12,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUsersOperationSpec: coreClient.OperationSpec = {
  path: "/tag/get",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetTagUsersRsp
    }
  },
  queryParameters: [Parameters.accessToken, Parameters.tagid1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getListOperationSpec: coreClient.OperationSpec = {
  path: "/tag/list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetTagListRsp
    }
  },
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
