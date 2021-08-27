import { Menus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  MenusCreateOptionalParams,
  MenusCreateResponse,
  MenusGetOptionalParams,
  MenusGetResponse,
  MenusDeleteOptionalParams,
  MenusDeleteResponse
} from "../models";

/** Class containing Menus operations. */
export class MenusImpl implements Menus {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Menus class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

  /**
   * 自定义菜单接口可实现多种类型按钮
   * @param accessToken
   * @param options The options parameters.
   */
  create(
    accessToken: string,
    options?: MenusCreateOptionalParams
  ): Promise<MenusCreateResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      createOperationSpec
    );
  }

  /**
   * 获取菜单
   * @param accessToken
   * @param agentid
   * @param options The options parameters.
   */
  get(
    accessToken: string,
    agentid: string,
    options?: MenusGetOptionalParams
  ): Promise<MenusGetResponse> {
    return this.client.sendOperationRequest(
      { accessToken, agentid, options },
      getOperationSpec
    );
  }

  /**
   * 删除菜单
   * @param accessToken
   * @param agentid
   * @param options The options parameters.
   */
  delete(
    accessToken: string,
    agentid: string,
    options?: MenusDeleteOptionalParams
  ): Promise<MenusDeleteResponse> {
    return this.client.sendOperationRequest(
      { accessToken, agentid, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/menu/create",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CreateMenuRsp
    }
  },
  requestBody: Parameters.body65,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/menu/get",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetMenuRsp
    }
  },
  queryParameters: [Parameters.accessToken, Parameters.agentid],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/menu/delete",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  queryParameters: [Parameters.accessToken, Parameters.agentid],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
