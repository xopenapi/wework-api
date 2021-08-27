import { Groupchats } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  GroupchatsTransferOptionalParams,
  GroupchatsTransferResponse,
  GroupchatsListOptionalParams,
  GroupchatsListResponse,
  GroupchatsGetOptionalParams,
  GroupchatsGetResponse,
  GroupchatsGetStatisticOptionalParams,
  GroupchatsGetStatisticResponse
} from "../models";

/** Class containing Groupchats operations. */
export class GroupchatsImpl implements Groupchats {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Groupchats class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

  /**
   * 企业可通过此接口，将已离职成员为群主的群，分配给另一个客服成员。
   * @param accessToken
   * @param options The options parameters.
   */
  transfer(
    accessToken: string,
    options?: GroupchatsTransferOptionalParams
  ): Promise<GroupchatsTransferResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      transferOperationSpec
    );
  }

  /**
   * 该接口用于获取配置过客户群管理的客户群列表。
   * @param accessToken
   * @param options The options parameters.
   */
  list(
    accessToken: string,
    options?: GroupchatsListOptionalParams
  ): Promise<GroupchatsListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      listOperationSpec
    );
  }

  /**
   * 通过客户群ID，获取详情。包括群名、群成员列表、群成员入群时间、入群方式。（客户群是由具有客户群使用权限的成员创建的外部群）
   * @param accessToken
   * @param options The options parameters.
   */
  get(
    accessToken: string,
    options?: GroupchatsGetOptionalParams
  ): Promise<GroupchatsGetResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getOperationSpec
    );
  }

  /**
   * 获取指定日期的统计数据。注意，企业微信仅存储180天的数据。
   * @param accessToken
   * @param options The options parameters.
   */
  getStatistic(
    accessToken: string,
    options?: GroupchatsGetStatisticOptionalParams
  ): Promise<GroupchatsGetStatisticResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getStatisticOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const transferOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/groupchat/transfer",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GroupchatTransferRsp
    }
  },
  requestBody: Parameters.body43,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/groupchat/list",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GroupchatListRsp
    }
  },
  requestBody: Parameters.body44,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/groupchat/get",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetGroupchatRsp
    }
  },
  requestBody: Parameters.body45,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getStatisticOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/groupchat/statistic",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetGroupchatStatisticRsp
    }
  },
  requestBody: Parameters.body46,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
