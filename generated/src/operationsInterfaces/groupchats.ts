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

/** Interface representing a Groupchats. */
export interface Groupchats {
  /**
   * 企业可通过此接口，将已离职成员为群主的群，分配给另一个客服成员。
   * @param accessToken
   * @param options The options parameters.
   */
  transfer(
    accessToken: string,
    options?: GroupchatsTransferOptionalParams
  ): Promise<GroupchatsTransferResponse>;
  /**
   * 该接口用于获取配置过客户群管理的客户群列表。
   * @param accessToken
   * @param options The options parameters.
   */
  list(
    accessToken: string,
    options?: GroupchatsListOptionalParams
  ): Promise<GroupchatsListResponse>;
  /**
   * 通过客户群ID，获取详情。包括群名、群成员列表、群成员入群时间、入群方式。（客户群是由具有客户群使用权限的成员创建的外部群）
   * @param accessToken
   * @param options The options parameters.
   */
  get(
    accessToken: string,
    options?: GroupchatsGetOptionalParams
  ): Promise<GroupchatsGetResponse>;
  /**
   * 获取指定日期的统计数据。注意，企业微信仅存储180天的数据。
   * @param accessToken
   * @param options The options parameters.
   */
  getStatistic(
    accessToken: string,
    options?: GroupchatsGetStatisticOptionalParams
  ): Promise<GroupchatsGetStatisticResponse>;
}
