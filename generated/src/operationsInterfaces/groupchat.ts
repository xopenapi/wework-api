import {
  GroupchatGetStatisticGroupByDayOptionalParams,
  GroupchatGetStatisticGroupByDayResponse
} from "../models";

/** Interface representing a Groupchat. */
export interface Groupchat {
  /**
   * 获取「群聊数据统计」数据 - 按自然日聚合的方式
   * @param accessToken
   * @param options The options parameters.
   */
  getStatisticGroupByDay(
    accessToken: string,
    options?: GroupchatGetStatisticGroupByDayOptionalParams
  ): Promise<GroupchatGetStatisticGroupByDayResponse>;
}
