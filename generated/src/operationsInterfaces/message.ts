import {
  SendMessageReq,
  MessageSendOptionalParams,
  MessageSendResponse,
  MessageUpdateTaskcardOptionalParams,
  MessageUpdateTaskcardResponse
} from "../models";

/** Interface representing a Message. */
export interface Message {
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
  ): Promise<MessageSendResponse>;
  /**
   * 应用可以发送任务卡片消息，发送之后可再通过接口更新用户任务卡片消息的替换文案信息。
   * @param accessToken
   * @param options The options parameters.
   */
  updateTaskcard(
    accessToken: string,
    options?: MessageUpdateTaskcardOptionalParams
  ): Promise<MessageUpdateTaskcardResponse>;
}
