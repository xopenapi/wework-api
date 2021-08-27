import { Externalcontacts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
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

/** Class containing Externalcontacts operations. */
export class ExternalcontactsImpl implements Externalcontacts {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Externalcontacts class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

  /**
   * 企业和第三方服务商可通过此接口获取配置了客户联系功能的成员列表。
   * @param accessToken
   * @param options The options parameters.
   */
  getFollowUserList(
    accessToken: string,
    options?: ExternalcontactsGetFollowUserListOptionalParams
  ): Promise<ExternalcontactsGetFollowUserListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getFollowUserListOperationSpec
    );
  }

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
  ): Promise<ExternalcontactsAddContactWayResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      addContactWayOperationSpec
    );
  }

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
  ): Promise<ExternalcontactsGetContactWayResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      getContactWayOperationSpec
    );
  }

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
  ): Promise<ExternalcontactsUpdateContactWayResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      updateContactWayOperationSpec
    );
  }

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
  ): Promise<ExternalcontactsDelContactWayResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      delContactWayOperationSpec
    );
  }

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
  ): Promise<ExternalcontactsCloseTempChatResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      closeTempChatOperationSpec
    );
  }

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
  ): Promise<ExternalcontactsGetListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, userid, options },
      getListOperationSpec
    );
  }

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
  ): Promise<ExternalcontactsGetDetailResponse> {
    return this.client.sendOperationRequest(
      { accessToken, externalUserid, options },
      getDetailOperationSpec
    );
  }

  /**
   * 企业/第三方可通过此接口获取指定成员添加的客户信息列表。
   * @param accessToken
   * @param options The options parameters.
   */
  getBatchUser(
    accessToken: string,
    options?: ExternalcontactsGetBatchUserOptionalParams
  ): Promise<ExternalcontactsGetBatchUserResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getBatchUserOperationSpec
    );
  }

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
  ): Promise<ExternalcontactsRemarkResponse> {
    return this.client.sendOperationRequest(
      { accessToken, body, options },
      remarkOperationSpec
    );
  }

  /**
   * 企业可通过此接口获取企业客户标签详情。
   * @param accessToken
   * @param options The options parameters.
   */
  getTagList(
    accessToken: string,
    options?: ExternalcontactsGetTagListOptionalParams
  ): Promise<ExternalcontactsGetTagListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getTagListOperationSpec
    );
  }

  /**
   * 企业可通过此接口向客户标签库中添加新的标签组和标签，每个企业最多可配置3000个企业标签。
   * @param accessToken
   * @param options The options parameters.
   */
  addTag(
    accessToken: string,
    options?: ExternalcontactsAddTagOptionalParams
  ): Promise<ExternalcontactsAddTagResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      addTagOperationSpec
    );
  }

  /**
   * 企业可通过此接口编辑客户标签/标签组的名称或次序值。
   * @param accessToken
   * @param options The options parameters.
   */
  editTag(
    accessToken: string,
    options?: ExternalcontactsEditTagOptionalParams
  ): Promise<ExternalcontactsEditTagResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      editTagOperationSpec
    );
  }

  /**
   * 企业可通过此接口删除客户标签库中的标签，或删除整个标签组。
   * @param accessToken
   * @param options The options parameters.
   */
  delTag(
    accessToken: string,
    options?: ExternalcontactsDelTagOptionalParams
  ): Promise<ExternalcontactsDelTagResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      delTagOperationSpec
    );
  }

  /**
   * 企业可通过此接口为指定成员的客户添加上由企业统一配置的标签。
   * @param accessToken
   * @param options The options parameters.
   */
  markTag(
    accessToken: string,
    options?: ExternalcontactsMarkTagOptionalParams
  ): Promise<ExternalcontactsMarkTagResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      markTagOperationSpec
    );
  }

  /**
   * 企业可通过此接口，转接在职成员的客户给其他成员。
   * @param accessToken
   * @param options The options parameters.
   */
  transferCustomer(
    accessToken: string,
    options?: ExternalcontactsTransferCustomerOptionalParams
  ): Promise<ExternalcontactsTransferCustomerResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      transferCustomerOperationSpec
    );
  }

  /**
   * 企业和第三方可通过此接口查询在职成员的客户转接情况。
   * @param accessToken
   * @param options The options parameters.
   */
  transferResult(
    accessToken: string,
    options?: ExternalcontactsTransferResultOptionalParams
  ): Promise<ExternalcontactsTransferResultResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      transferResultOperationSpec
    );
  }

  /**
   * 企业和第三方可通过此接口，获取所有离职成员的客户列表，并可进一步调用分配离职成员的客户接口将这些客户重新分配给其他企业成员。
   * @param accessToken
   * @param options The options parameters.
   */
  getUnassignedList(
    accessToken: string,
    options?: ExternalcontactsGetUnassignedListOptionalParams
  ): Promise<ExternalcontactsGetUnassignedListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getUnassignedListOperationSpec
    );
  }

  /**
   * 企业可通过此接口，分配离职成员的客户给其他成员。
   * @param accessToken
   * @param options The options parameters.
   */
  transferResignedCustomer(
    accessToken: string,
    options?: ExternalcontactsTransferResignedCustomerOptionalParams
  ): Promise<ExternalcontactsTransferResignedCustomerResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      transferResignedCustomerOperationSpec
    );
  }

  /**
   * 企业和第三方可通过此接口查询离职成员的客户分配情况。
   * @param accessToken
   * @param options The options parameters.
   */
  getTransferResignedResult(
    accessToken: string,
    options?: ExternalcontactsGetTransferResignedResultOptionalParams
  ): Promise<ExternalcontactsGetTransferResignedResultResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getTransferResignedResultOperationSpec
    );
  }

  /**
   * 用户在微信里的客户群里打开小程序时，某些场景下可以获取到群的opengid，如果该群是企业微信的客户群，则企业或第三方可以调用此接口将一个opengid转换为客户群chat_id
   * @param accessToken
   * @param options The options parameters.
   */
  convertOpengidToChatid(
    accessToken: string,
    options?: ExternalcontactsConvertOpengidToChatidOptionalParams
  ): Promise<ExternalcontactsConvertOpengidToChatidResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      convertOpengidToChatidOperationSpec
    );
  }

  /**
   * 企业和第三方应用可通过该接口获取企业全部的发表内容。
   * @param accessToken
   * @param options The options parameters.
   */
  getMomentList(
    accessToken: string,
    options?: ExternalcontactsGetMomentListOptionalParams
  ): Promise<ExternalcontactsGetMomentListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getMomentListOperationSpec
    );
  }

  /**
   * 企业和第三方应用可通过该接口获取企业发表的朋友圈成员执行情况.第三方应用调用需要企业授权客户朋友圈下获取企业全部的发表记录的权限
   * @param accessToken
   * @param options The options parameters.
   */
  getMomentTask(
    accessToken: string,
    options?: ExternalcontactsGetMomentTaskOptionalParams
  ): Promise<ExternalcontactsGetMomentTaskResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getMomentTaskOperationSpec
    );
  }

  /**
   * 企业和第三方应用可通过该接口获取客户朋友圈创建时，选择的客户可见范围
   * @param accessToken
   * @param options The options parameters.
   */
  getMomentCustomerList(
    accessToken: string,
    options?: ExternalcontactsGetMomentCustomerListOptionalParams
  ): Promise<ExternalcontactsGetMomentCustomerListResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getMomentCustomerListOperationSpec
    );
  }

  /**
   * 企业和第三方应用可通过该接口获取客户朋友圈发表后，可在微信朋友圈中查看的客户列表
   * @param accessToken
   * @param options The options parameters.
   */
  getMomentSendResult(
    accessToken: string,
    options?: ExternalcontactsGetMomentSendResultOptionalParams
  ): Promise<ExternalcontactsGetMomentSendResultResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getMomentSendResultOperationSpec
    );
  }

  /**
   * 企业和第三方应用可通过此接口获取客户朋友圈的互动数据。
   * @param accessToken
   * @param options The options parameters.
   */
  getMomentComments(
    accessToken: string,
    options?: ExternalcontactsGetMomentCommentsOptionalParams
  ): Promise<ExternalcontactsGetMomentCommentsResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getMomentCommentsOperationSpec
    );
  }

  /**
   * 企业跟第三方应用可通过此接口添加企业群发消息的任务并通知成员发送给相关客户或客户群。（注：企业微信终端需升级到2.7.5版本及以上）注意：调用该接口并不会直接发送消息给客户/客户群，需要成员确认后才会执行发送（客服人员的企业微信需要升级到2.7.5及以上版本）旧接口创建企业群发已经废弃，接口升级后支持发送视频文件，并且支持最多同时发送9个附件。同一个企业每个自然月内仅可针对一个客户/客户群发送4条消息，超过接收上限的客户将无法再收到群发消息。
   * @param accessToken
   * @param options The options parameters.
   */
  addMsgTemplate(
    accessToken: string,
    options?: ExternalcontactsAddMsgTemplateOptionalParams
  ): Promise<ExternalcontactsAddMsgTemplateResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      addMsgTemplateOperationSpec
    );
  }

  /**
   * 企业和第三方应用可通过此接口获取企业与成员的群发记录。群发任务记录的起止时间间隔不能超过1个月
   * @param accessToken
   * @param options The options parameters.
   */
  getGroupmsgListV2(
    accessToken: string,
    options?: ExternalcontactsGetGroupmsgListV2OptionalParams
  ): Promise<ExternalcontactsGetGroupmsgListV2Response> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getGroupmsgListV2OperationSpec
    );
  }

  /**
   * 获取群发成员发送任务列表
   * @param accessToken
   * @param options The options parameters.
   */
  getGroupmsgTask(
    accessToken: string,
    options?: ExternalcontactsGetGroupmsgTaskOptionalParams
  ): Promise<ExternalcontactsGetGroupmsgTaskResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getGroupmsgTaskOperationSpec
    );
  }

  /**
   * 获取企业群发成员执行结果
   * @param accessToken
   * @param options The options parameters.
   */
  getGroupmsgSendResult(
    accessToken: string,
    options?: ExternalcontactsGetGroupmsgSendResultOptionalParams
  ): Promise<ExternalcontactsGetGroupmsgSendResultResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getGroupmsgSendResultOperationSpec
    );
  }

  /**
   * 企业微信在向企业推送添加外部联系人事件时，会额外返回一个welcome_code，企业以此为凭据调用接口，即可通过成员向新添加的客户发送个性化的欢迎语。为了保证用户体验以及避免滥用，企业仅可在收到相关事件后20秒内调用，且只可调用一次。如果企业已经在管理端为相关成员配置了可用的欢迎语，则推送添加外部联系人事件时不会返回welcome_code。每次添加新客户时可能有多个企业自建应用/第三方应用收到带有welcome_code的回调事件，但仅有最先调用的可以发送成功。后续调用将返回41051（externaluser
   * has started chatting）错误，请用户根据实际使用需求，合理设置应用可见范围，避免冲突。旧接口发送新客户欢迎语已经废弃，接口升级后支持发送视频文件，并且最多支持同时发送9个附件
   * @param accessToken
   * @param options The options parameters.
   */
  sendWelcomeMsg(
    accessToken: string,
    options?: ExternalcontactsSendWelcomeMsgOptionalParams
  ): Promise<ExternalcontactsSendWelcomeMsgResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      sendWelcomeMsgOperationSpec
    );
  }

  /**
   * 企业可通过此API向企业的入群欢迎语素材库中添加素材。每个企业的入群欢迎语素材库中，最多容纳100个素材。text中支持配置多个%NICKNAME%(大小写敏感)形式的欢迎语，当配置了欢迎语占位符后，发送给客户时会自动替换为客户的昵称;text、image、link和miniprogram四者不能同时为空；text与另外三者可以同时发送，此时将会以两条消息的形式触达客户;image、link和miniprogram只能有一个，如果三者同时填，则按image、link、miniprogram的优先顺序取参，也就是说，如果image与link同时传值，则只有image生效。media_id和pic_url只需填写一个，两者同时填写时使用media_id，二者不可同时为空。
   * @param accessToken
   * @param options The options parameters.
   */
  addGroupWelcomeTemplate(
    accessToken: string,
    options?: ExternalcontactsAddGroupWelcomeTemplateOptionalParams
  ): Promise<ExternalcontactsAddGroupWelcomeTemplateResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      addGroupWelcomeTemplateOperationSpec
    );
  }

  /**
   * 企业可通过此接口获取成员联系客户的数据，包括发起申请数、新增客户数、聊天数、发送消息数和删除/拉黑成员的客户数等指标。
   * @param accessToken
   * @param options The options parameters.
   */
  getUserBehaviorData(
    accessToken: string,
    options?: ExternalcontactsGetUserBehaviorDataOptionalParams
  ): Promise<ExternalcontactsGetUserBehaviorDataResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getUserBehaviorDataOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getFollowUserListOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_follow_user_list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetFollowUserListRsp
    }
  },
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const addContactWayOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/add_contact_way",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AddContactWayRsp
    }
  },
  requestBody: Parameters.body13,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getContactWayOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_contact_way",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetContactWayRsp
    }
  },
  requestBody: Parameters.body14,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateContactWayOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/update_contact_way",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body15,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const delContactWayOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/del_contact_way",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body16,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const closeTempChatOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/close_temp_chat",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body17,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getListOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetExternalContactListRsp
    }
  },
  queryParameters: [Parameters.accessToken, Parameters.userid],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getDetailOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetExternalContactDetailRsp
    }
  },
  queryParameters: [
    Parameters.accessToken,
    Parameters.externalUserid,
    Parameters.cursor
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getBatchUserOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/batch/get_by_user",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetExternalContactBatchUserRsp
    }
  },
  requestBody: Parameters.body18,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const remarkOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/remark",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body19,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getTagListOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_corp_tag_list",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetCorpTagListRsp
    }
  },
  requestBody: Parameters.body20,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const addTagOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/add_corp_tag",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AddCorpTagRsp
    }
  },
  requestBody: Parameters.body21,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const editTagOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/edit_corp_tag",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body22,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const delTagOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/del_corp_tag",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body23,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const markTagOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/mark_tag",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponse
    }
  },
  requestBody: Parameters.body24,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const transferCustomerOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/transfer_customer",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TransferCustomerRsp
    }
  },
  requestBody: Parameters.body25,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const transferResultOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/transfer_result",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetTransferResultRsp
    }
  },
  requestBody: Parameters.body26,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUnassignedListOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_unassigned_list",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetUnassignedListRsp
    }
  },
  requestBody: Parameters.body27,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const transferResignedCustomerOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/resigned/transfer_customer",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResignedTransferCustomerRsp
    }
  },
  requestBody: Parameters.body28,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getTransferResignedResultOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/resigned/transfer_result",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResignedTransferResultRsp
    }
  },
  requestBody: Parameters.body29,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const convertOpengidToChatidOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/opengid_to_chatid",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ConvertOpengidToChatidRsp
    }
  },
  requestBody: Parameters.body30,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getMomentListOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_moment_list",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetMomentListRsp
    }
  },
  requestBody: Parameters.body31,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getMomentTaskOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_moment_task",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetMomentTaskRsp
    }
  },
  requestBody: Parameters.body32,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getMomentCustomerListOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_moment_customer_list",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetMomentCustomerListRsp
    }
  },
  requestBody: Parameters.body33,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getMomentSendResultOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_moment_send_result",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetMomentSendResultRsp
    }
  },
  requestBody: Parameters.body34,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getMomentCommentsOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_moment_comments",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetMomentCommentsRsp
    }
  },
  requestBody: Parameters.body35,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const addMsgTemplateOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/add_msg_template",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AddMsgTemplateRsp
    }
  },
  requestBody: Parameters.body36,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getGroupmsgListV2OperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_groupmsg_list_v2",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetGroupmsgListV2Rsp
    }
  },
  requestBody: Parameters.body37,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getGroupmsgTaskOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_groupmsg_task",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetGroupmsgTaskRsp
    }
  },
  requestBody: Parameters.body38,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getGroupmsgSendResultOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_groupmsg_send_result",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetGroupmsgSendResultRsp
    }
  },
  requestBody: Parameters.body39,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const sendWelcomeMsgOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/send_welcome_msg",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SendWelcomeMsgRsp
    }
  },
  requestBody: Parameters.body40,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const addGroupWelcomeTemplateOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/group_welcome_template/add",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AddGroupWelcomeTemplateRsp
    }
  },
  requestBody: Parameters.body41,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUserBehaviorDataOperationSpec: coreClient.OperationSpec = {
  path: "/externalcontact/get_user_behavior_data",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetUserBehaviorDataRsp
    }
  },
  requestBody: Parameters.body42,
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
