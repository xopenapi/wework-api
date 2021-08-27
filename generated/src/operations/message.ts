import { Message } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  SendMessageReq,
  MessageSendOptionalParams,
  MessageSendResponse,
  MessageUpdateTaskcardOptionalParams,
  MessageUpdateTaskcardResponse
} from "../models";

/** Class containing Message operations. */
export class MessageImpl implements Message {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Message class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

  /**
   * 应用支持推送文本、图片、视频、文件、图文等类型
   * @param accessToken
   * @param body SendMessageReq
   * @param options The options parameters.
   */
  send(
    accessToken: string,
    body: SendMessageReq,
    options?: MessageSendOptionalParams
  ): Promise<MessageSendResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      sendOperationSpec
    );
  }

  /**
   * 应用可以发送任务卡片消息，发送之后可再通过接口更新用户任务卡片消息的替换文案信息。
   * @param accessToken
   * @param options The options parameters.
   */
  updateTaskcard(
    accessToken: string,
    options?: MessageUpdateTaskcardOptionalParams
  ): Promise<MessageUpdateTaskcardResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      updateTaskcardOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const sendOperationSpec: coreClient.OperationSpec = {
  path: "/message/send",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SendMessageRsp
    }
  },
  requestBody: Parameters.body7,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTaskcardOperationSpec: coreClient.OperationSpec = {
  path: "/message/update_taskcard",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateTaskcardRsp
    }
  },
  requestBody: Parameters.body8,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
