import {
  ExternalcontactsGetFollowUserListOptionalParams,
  ExternalcontactsGetFollowUserListResponse,
  AddContactWayReq,
  ExternalcontactsAddContactWayOptionalParams,
  ExternalcontactsAddContactWayResponse,
  GetContactWayReq,
  ExternalcontactsGetContactWayOptionalParams,
  ExternalcontactsGetContactWayResponse,
  UpdateContactWayReq,
  ExternalcontactsUpdateContactWayOptionalParams,
  ExternalcontactsUpdateContactWayResponse,
  DelContactWayReq,
  ExternalcontactsDelContactWayOptionalParams,
  ExternalcontactsDelContactWayResponse,
  CloseTempChatReq,
  ExternalcontactsCloseTempChatOptionalParams,
  ExternalcontactsCloseTempChatResponse,
  ExternalcontactsGetListOptionalParams,
  ExternalcontactsGetListResponse,
  ExternalcontactsGetDetailOptionalParams,
  ExternalcontactsGetDetailResponse,
  ExternalcontactsGetBatchUserOptionalParams,
  ExternalcontactsGetBatchUserResponse,
  UpdateExternalContactRemarkReq,
  ExternalcontactsRemarkOptionalParams,
  ExternalcontactsRemarkResponse,
  ExternalcontactsGetTagListOptionalParams,
  ExternalcontactsGetTagListResponse,
  ExternalcontactsAddTagOptionalParams,
  ExternalcontactsAddTagResponse,
  ExternalcontactsEditTagOptionalParams,
  ExternalcontactsEditTagResponse,
  ExternalcontactsDelTagOptionalParams,
  ExternalcontactsDelTagResponse,
  ExternalcontactsMarkTagOptionalParams,
  ExternalcontactsMarkTagResponse,
  ExternalcontactsTransferCustomerOptionalParams,
  ExternalcontactsTransferCustomerResponse,
  ExternalcontactsTransferResultOptionalParams,
  ExternalcontactsTransferResultResponse,
  ExternalcontactsGetUnassignedListOptionalParams,
  ExternalcontactsGetUnassignedListResponse,
  ExternalcontactsTransferResignedCustomerOptionalParams,
  ExternalcontactsTransferResignedCustomerResponse,
  ExternalcontactsGetTransferResignedResultOptionalParams,
  ExternalcontactsGetTransferResignedResultResponse,
  ExternalcontactsConvertOpengidToChatidOptionalParams,
  ExternalcontactsConvertOpengidToChatidResponse,
  ExternalcontactsGetMomentListOptionalParams,
  ExternalcontactsGetMomentListResponse,
  ExternalcontactsGetMomentTaskOptionalParams,
  ExternalcontactsGetMomentTaskResponse,
  ExternalcontactsGetMomentCustomerListOptionalParams,
  ExternalcontactsGetMomentCustomerListResponse,
  ExternalcontactsGetMomentSendResultOptionalParams,
  ExternalcontactsGetMomentSendResultResponse,
  ExternalcontactsGetMomentCommentsOptionalParams,
  ExternalcontactsGetMomentCommentsResponse,
  ExternalcontactsAddMsgTemplateOptionalParams,
  ExternalcontactsAddMsgTemplateResponse,
  ExternalcontactsGetGroupmsgListV2OptionalParams,
  ExternalcontactsGetGroupmsgListV2Response,
  ExternalcontactsGetGroupmsgTaskOptionalParams,
  ExternalcontactsGetGroupmsgTaskResponse,
  ExternalcontactsGetGroupmsgSendResultOptionalParams,
  ExternalcontactsGetGroupmsgSendResultResponse,
  ExternalcontactsSendWelcomeMsgOptionalParams,
  ExternalcontactsSendWelcomeMsgResponse,
  ExternalcontactsAddGroupWelcomeTemplateOptionalParams,
  ExternalcontactsAddGroupWelcomeTemplateResponse,
  ExternalcontactsGetUserBehaviorDataOptionalParams,
  ExternalcontactsGetUserBehaviorDataResponse
} from "../models";

/** Interface representing a Externalcontacts. */
export interface Externalcontacts {
  /**
   * 企业和第三方服务商可通过此接口获取配置了客户联系功能的成员列表。
   * @param accessToken
   * @param options The options parameters.
   */
  getFollowUserList(
    accessToken: string,
    options?: ExternalcontactsGetFollowUserListOptionalParams
  ): Promise<ExternalcontactsGetFollowUserListResponse>;
  /**
   * 企业可以在管理后台-客户联系-加客户中配置成员的「联系我」的二维码或者小程序按钮，客户通过扫描二维码或点击小程序上的按钮，即可获取成员联系方式,主动联系到成员。企业可通过此接口为具有客户联系功能的成员生成专属的「联系我」二维码或者「联系我」按钮。
   * @param accessToken
   * @param body AddContactWayRsp
   * @param options The options parameters.
   */
  addContactWay(
    accessToken: string,
    body: AddContactWayReq,
    options?: ExternalcontactsAddContactWayOptionalParams
  ): Promise<ExternalcontactsAddContactWayResponse>;
  /**
   * 获取企业配置的「联系我」二维码和「联系我」小程序按钮。
   * @param accessToken
   * @param body GetContactWayReq
   * @param options The options parameters.
   */
  getContactWay(
    accessToken: string,
    body: GetContactWayReq,
    options?: ExternalcontactsGetContactWayOptionalParams
  ): Promise<ExternalcontactsGetContactWayResponse>;
  /**
   * 更新企业配置的「联系我」二维码和「联系我」小程序按钮中的信息，如使用人员和备注等。
   * @param accessToken
   * @param body UpdateContactWayReq
   * @param options The options parameters.
   */
  updateContactWay(
    accessToken: string,
    body: UpdateContactWayReq,
    options?: ExternalcontactsUpdateContactWayOptionalParams
  ): Promise<ExternalcontactsUpdateContactWayResponse>;
  /**
   * 删除一个已配置的「联系我」二维码或者「联系我」小程序按钮。
   * @param accessToken
   * @param body DelContactWayReq
   * @param options The options parameters.
   */
  delContactWay(
    accessToken: string,
    body: DelContactWayReq,
    options?: ExternalcontactsDelContactWayOptionalParams
  ): Promise<ExternalcontactsDelContactWayResponse>;
  /**
   * 将指定的企业成员和客户之前的临时会话断开，断开前会自动下发已配置的结束语。
   * @param accessToken
   * @param body CloseTempChatReq
   * @param options The options parameters.
   */
  closeTempChat(
    accessToken: string,
    body: CloseTempChatReq,
    options?: ExternalcontactsCloseTempChatOptionalParams
  ): Promise<ExternalcontactsCloseTempChatResponse>;
  /**
   * 企业可通过此接口获取指定成员添加的客户列表。客户是指配置了客户联系功能的成员所添加的外部联系人。没有配置客户联系功能的成员，所添加的外部联系人将不会作为客户返回。
   * @param accessToken
   * @param userid
   * @param options The options parameters.
   */
  getList(
    accessToken: string,
    userid: string,
    options?: ExternalcontactsGetListOptionalParams
  ): Promise<ExternalcontactsGetListResponse>;
  /**
   * 企业可通过此接口，根据外部联系人的userid（如何获取?），拉取客户详情。
   * @param accessToken
   * @param externalUserid
   * @param options The options parameters.
   */
  getDetail(
    accessToken: string,
    externalUserid: string,
    options?: ExternalcontactsGetDetailOptionalParams
  ): Promise<ExternalcontactsGetDetailResponse>;
  /**
   * 企业/第三方可通过此接口获取指定成员添加的客户信息列表。
   * @param accessToken
   * @param options The options parameters.
   */
  getBatchUser(
    accessToken: string,
    options?: ExternalcontactsGetBatchUserOptionalParams
  ): Promise<ExternalcontactsGetBatchUserResponse>;
  /**
   * 企业可通过此接口修改指定用户添加的客户的备注信息。
   * @param accessToken
   * @param body UpdateExternalContactRemarkReq
   * @param options The options parameters.
   */
  remark(
    accessToken: string,
    body: UpdateExternalContactRemarkReq,
    options?: ExternalcontactsRemarkOptionalParams
  ): Promise<ExternalcontactsRemarkResponse>;
  /**
   * 企业可通过此接口获取企业客户标签详情。
   * @param accessToken
   * @param options The options parameters.
   */
  getTagList(
    accessToken: string,
    options?: ExternalcontactsGetTagListOptionalParams
  ): Promise<ExternalcontactsGetTagListResponse>;
  /**
   * 企业可通过此接口向客户标签库中添加新的标签组和标签，每个企业最多可配置3000个企业标签。
   * @param accessToken
   * @param options The options parameters.
   */
  addTag(
    accessToken: string,
    options?: ExternalcontactsAddTagOptionalParams
  ): Promise<ExternalcontactsAddTagResponse>;
  /**
   * 企业可通过此接口编辑客户标签/标签组的名称或次序值。
   * @param accessToken
   * @param options The options parameters.
   */
  editTag(
    accessToken: string,
    options?: ExternalcontactsEditTagOptionalParams
  ): Promise<ExternalcontactsEditTagResponse>;
  /**
   * 企业可通过此接口删除客户标签库中的标签，或删除整个标签组。
   * @param accessToken
   * @param options The options parameters.
   */
  delTag(
    accessToken: string,
    options?: ExternalcontactsDelTagOptionalParams
  ): Promise<ExternalcontactsDelTagResponse>;
  /**
   * 企业可通过此接口为指定成员的客户添加上由企业统一配置的标签。
   * @param accessToken
   * @param options The options parameters.
   */
  markTag(
    accessToken: string,
    options?: ExternalcontactsMarkTagOptionalParams
  ): Promise<ExternalcontactsMarkTagResponse>;
  /**
   * 企业可通过此接口，转接在职成员的客户给其他成员。
   * @param accessToken
   * @param options The options parameters.
   */
  transferCustomer(
    accessToken: string,
    options?: ExternalcontactsTransferCustomerOptionalParams
  ): Promise<ExternalcontactsTransferCustomerResponse>;
  /**
   * 企业和第三方可通过此接口查询在职成员的客户转接情况。
   * @param accessToken
   * @param options The options parameters.
   */
  transferResult(
    accessToken: string,
    options?: ExternalcontactsTransferResultOptionalParams
  ): Promise<ExternalcontactsTransferResultResponse>;
  /**
   * 企业和第三方可通过此接口，获取所有离职成员的客户列表，并可进一步调用分配离职成员的客户接口将这些客户重新分配给其他企业成员。
   * @param accessToken
   * @param options The options parameters.
   */
  getUnassignedList(
    accessToken: string,
    options?: ExternalcontactsGetUnassignedListOptionalParams
  ): Promise<ExternalcontactsGetUnassignedListResponse>;
  /**
   * 企业可通过此接口，分配离职成员的客户给其他成员。
   * @param accessToken
   * @param options The options parameters.
   */
  transferResignedCustomer(
    accessToken: string,
    options?: ExternalcontactsTransferResignedCustomerOptionalParams
  ): Promise<ExternalcontactsTransferResignedCustomerResponse>;
  /**
   * 企业和第三方可通过此接口查询离职成员的客户分配情况。
   * @param accessToken
   * @param options The options parameters.
   */
  getTransferResignedResult(
    accessToken: string,
    options?: ExternalcontactsGetTransferResignedResultOptionalParams
  ): Promise<ExternalcontactsGetTransferResignedResultResponse>;
  /**
   * 用户在微信里的客户群里打开小程序时，某些场景下可以获取到群的opengid，如果该群是企业微信的客户群，则企业或第三方可以调用此接口将一个opengid转换为客户群chat_id
   * @param accessToken
   * @param options The options parameters.
   */
  convertOpengidToChatid(
    accessToken: string,
    options?: ExternalcontactsConvertOpengidToChatidOptionalParams
  ): Promise<ExternalcontactsConvertOpengidToChatidResponse>;
  /**
   * 企业和第三方应用可通过该接口获取企业全部的发表内容。
   * @param accessToken
   * @param options The options parameters.
   */
  getMomentList(
    accessToken: string,
    options?: ExternalcontactsGetMomentListOptionalParams
  ): Promise<ExternalcontactsGetMomentListResponse>;
  /**
   * 企业和第三方应用可通过该接口获取企业发表的朋友圈成员执行情况.第三方应用调用需要企业授权客户朋友圈下获取企业全部的发表记录的权限
   * @param accessToken
   * @param options The options parameters.
   */
  getMomentTask(
    accessToken: string,
    options?: ExternalcontactsGetMomentTaskOptionalParams
  ): Promise<ExternalcontactsGetMomentTaskResponse>;
  /**
   * 企业和第三方应用可通过该接口获取客户朋友圈创建时，选择的客户可见范围
   * @param accessToken
   * @param options The options parameters.
   */
  getMomentCustomerList(
    accessToken: string,
    options?: ExternalcontactsGetMomentCustomerListOptionalParams
  ): Promise<ExternalcontactsGetMomentCustomerListResponse>;
  /**
   * 企业和第三方应用可通过该接口获取客户朋友圈发表后，可在微信朋友圈中查看的客户列表
   * @param accessToken
   * @param options The options parameters.
   */
  getMomentSendResult(
    accessToken: string,
    options?: ExternalcontactsGetMomentSendResultOptionalParams
  ): Promise<ExternalcontactsGetMomentSendResultResponse>;
  /**
   * 企业和第三方应用可通过此接口获取客户朋友圈的互动数据。
   * @param accessToken
   * @param options The options parameters.
   */
  getMomentComments(
    accessToken: string,
    options?: ExternalcontactsGetMomentCommentsOptionalParams
  ): Promise<ExternalcontactsGetMomentCommentsResponse>;
  /**
   * 企业跟第三方应用可通过此接口添加企业群发消息的任务并通知成员发送给相关客户或客户群。（注：企业微信终端需升级到2.7.5版本及以上）注意：调用该接口并不会直接发送消息给客户/客户群，需要成员确认后才会执行发送（客服人员的企业微信需要升级到2.7.5及以上版本）旧接口创建企业群发已经废弃，接口升级后支持发送视频文件，并且支持最多同时发送9个附件。同一个企业每个自然月内仅可针对一个客户/客户群发送4条消息，超过接收上限的客户将无法再收到群发消息。
   * @param accessToken
   * @param options The options parameters.
   */
  addMsgTemplate(
    accessToken: string,
    options?: ExternalcontactsAddMsgTemplateOptionalParams
  ): Promise<ExternalcontactsAddMsgTemplateResponse>;
  /**
   * 企业和第三方应用可通过此接口获取企业与成员的群发记录。群发任务记录的起止时间间隔不能超过1个月
   * @param accessToken
   * @param options The options parameters.
   */
  getGroupmsgListV2(
    accessToken: string,
    options?: ExternalcontactsGetGroupmsgListV2OptionalParams
  ): Promise<ExternalcontactsGetGroupmsgListV2Response>;
  /**
   * 获取群发成员发送任务列表
   * @param accessToken
   * @param options The options parameters.
   */
  getGroupmsgTask(
    accessToken: string,
    options?: ExternalcontactsGetGroupmsgTaskOptionalParams
  ): Promise<ExternalcontactsGetGroupmsgTaskResponse>;
  /**
   * 获取企业群发成员执行结果
   * @param accessToken
   * @param options The options parameters.
   */
  getGroupmsgSendResult(
    accessToken: string,
    options?: ExternalcontactsGetGroupmsgSendResultOptionalParams
  ): Promise<ExternalcontactsGetGroupmsgSendResultResponse>;
  /**
   * 企业微信在向企业推送添加外部联系人事件时，会额外返回一个welcome_code，企业以此为凭据调用接口，即可通过成员向新添加的客户发送个性化的欢迎语。为了保证用户体验以及避免滥用，企业仅可在收到相关事件后20秒内调用，且只可调用一次。如果企业已经在管理端为相关成员配置了可用的欢迎语，则推送添加外部联系人事件时不会返回welcome_code。每次添加新客户时可能有多个企业自建应用/第三方应用收到带有welcome_code的回调事件，但仅有最先调用的可以发送成功。后续调用将返回41051（externaluser
   * has started chatting）错误，请用户根据实际使用需求，合理设置应用可见范围，避免冲突。旧接口发送新客户欢迎语已经废弃，接口升级后支持发送视频文件，并且最多支持同时发送9个附件
   * @param accessToken
   * @param options The options parameters.
   */
  sendWelcomeMsg(
    accessToken: string,
    options?: ExternalcontactsSendWelcomeMsgOptionalParams
  ): Promise<ExternalcontactsSendWelcomeMsgResponse>;
  /**
   * 企业可通过此API向企业的入群欢迎语素材库中添加素材。每个企业的入群欢迎语素材库中，最多容纳100个素材。text中支持配置多个%NICKNAME%(大小写敏感)形式的欢迎语，当配置了欢迎语占位符后，发送给客户时会自动替换为客户的昵称;text、image、link和miniprogram四者不能同时为空；text与另外三者可以同时发送，此时将会以两条消息的形式触达客户;image、link和miniprogram只能有一个，如果三者同时填，则按image、link、miniprogram的优先顺序取参，也就是说，如果image与link同时传值，则只有image生效。media_id和pic_url只需填写一个，两者同时填写时使用media_id，二者不可同时为空。
   * @param accessToken
   * @param options The options parameters.
   */
  addGroupWelcomeTemplate(
    accessToken: string,
    options?: ExternalcontactsAddGroupWelcomeTemplateOptionalParams
  ): Promise<ExternalcontactsAddGroupWelcomeTemplateResponse>;
  /**
   * 企业可通过此接口获取成员联系客户的数据，包括发起申请数、新增客户数、聊天数、发送消息数和删除/拉黑成员的客户数等指标。
   * @param accessToken
   * @param options The options parameters.
   */
  getUserBehaviorData(
    accessToken: string,
    options?: ExternalcontactsGetUserBehaviorDataOptionalParams
  ): Promise<ExternalcontactsGetUserBehaviorDataResponse>;
}
