import { Groupchat } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  GroupchatGetStatisticGroupByDayOptionalParams,
  GroupchatGetStatisticGroupByDayResponse
} from "../models";

/** Class containing Groupchat operations. */
export class GroupchatImpl implements Groupchat {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Groupchat class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

  /**
   * 获取「群聊数据统计」数据 - 按自然日聚合的方式
   * @param accessToken
   * @param options The options parameters.
   */
  getStatisticGroupByDay(
    accessToken: string,
    options?: GroupchatGetStatisticGroupByDayOptionalParams
  ): Promise<GroupchatGetStatisticGroupByDayResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getStatisticGroupByDayOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getStatisticGroupByDayOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/groupchat/statistic_group_by_day",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetGroupchatStatisticGroupByDayRsp
    }
  },
  requestBody: Parameters.body47,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
