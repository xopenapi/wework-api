import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  CreateUserReq as CreateUserReqMapper,
  UpdateUserReq as UpdateUserReqMapper,
  BatchDeleteUserReq as BatchDeleteUserReqMapper,
  ConvertToOpenidReq as ConvertToOpenidReqMapper,
  InviteReq as InviteReqMapper,
  BatchSyncuserReq as BatchSyncuserReqMapper,
  BatchReplaceuserReq as BatchReplaceuserReqMapper,
  SendMessageReq as SendMessageReqMapper,
  UpdateTaskcardReq as UpdateTaskcardReqMapper,
  CreateTagReq as CreateTagReqMapper,
  UpdateTagReq as UpdateTagReqMapper,
  AddTagUsersReq as AddTagUsersReqMapper,
  DeleteTagUsersReq as DeleteTagUsersReqMapper,
  AddContactWayReq as AddContactWayReqMapper,
  GetContactWayReq as GetContactWayReqMapper,
  UpdateContactWayReq as UpdateContactWayReqMapper,
  DelContactWayReq as DelContactWayReqMapper,
  CloseTempChatReq as CloseTempChatReqMapper,
  GetExternalContactBatchUserReq as GetExternalContactBatchUserReqMapper,
  UpdateExternalContactRemarkReq as UpdateExternalContactRemarkReqMapper,
  GetCorpTagListReq as GetCorpTagListReqMapper,
  AddCorpTagReq as AddCorpTagReqMapper,
  EditCorpTagReq as EditCorpTagReqMapper,
  DelCorpTagReq as DelCorpTagReqMapper,
  MarkCorpContactTagReq as MarkCorpContactTagReqMapper,
  TransferCustomerReq as TransferCustomerReqMapper,
  GetTransferResultReq as GetTransferResultReqMapper,
  GetUnassignedListReq as GetUnassignedListReqMapper,
  ResignedTransferCustomerReq as ResignedTransferCustomerReqMapper,
  ResignedTransferResultReq as ResignedTransferResultReqMapper,
  ConvertOpengidToChatidReq as ConvertOpengidToChatidReqMapper,
  GetMomentListReq as GetMomentListReqMapper,
  GetMomentTaskReq as GetMomentTaskReqMapper,
  GetMomentCustomerListReq as GetMomentCustomerListReqMapper,
  GetMomentSendResultReq as GetMomentSendResultReqMapper,
  GetMomentCommentsReq as GetMomentCommentsReqMapper,
  AddMsgTemplateReq as AddMsgTemplateReqMapper,
  GetGroupmsgListV2Req as GetGroupmsgListV2ReqMapper,
  GetGroupmsgTaskReq as GetGroupmsgTaskReqMapper,
  GetGroupmsgSendResultReq as GetGroupmsgSendResultReqMapper,
  SendWelcomeMsgReq as SendWelcomeMsgReqMapper,
  AddGroupWelcomeTemplateReq as AddGroupWelcomeTemplateReqMapper,
  GetUserBehaviorDataReq as GetUserBehaviorDataReqMapper,
  GroupchatTransferReq as GroupchatTransferReqMapper,
  GroupchatListReq as GroupchatListReqMapper,
  GetGroupchatReq as GetGroupchatReqMapper,
  GetGroupchatStatisticReq as GetGroupchatStatisticReqMapper,
  GetGroupchatStatisticGroupByDayReq as GetGroupchatStatisticGroupByDayReqMapper,
  CreateAppchatReq as CreateAppchatReqMapper,
  UpdateAppchatReq as UpdateAppchatReqMapper,
  CreateDepartmentReq as CreateDepartmentReqMapper,
  UpdateDepartmentReq as UpdateDepartmentReqMapper,
  BatchReplacepartyReq as BatchReplacepartyReqMapper,
  GetLinkedcorpUserReq as GetLinkedcorpUserReqMapper,
  GetLinkedcorpUserSimplelistReq as GetLinkedcorpUserSimplelistReqMapper,
  GetLinkedcorpUserListReq as GetLinkedcorpUserListReqMapper,
  GetLinkedcorpDepartmentListReq as GetLinkedcorpDepartmentListReqMapper,
  GetServiceProviderTokenReq as GetServiceProviderTokenReqMapper,
  GetServiceSuiteTokenReq as GetServiceSuiteTokenReqMapper,
  SetServiceSessionInfoReq as SetServiceSessionInfoReqMapper,
  GetServicePermanentCodeReq as GetServicePermanentCodeReqMapper,
  GetServiceAuthInfoReq as GetServiceAuthInfoReqMapper,
  GetServiceCorpTokenReq as GetServiceCorpTokenReqMapper,
  GetServiceAdminListReq as GetServiceAdminListReqMapper,
  SetAgentReq as SetAgentReqMapper,
  CreateMenuReq as CreateMenuReqMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const corpid: OperationQueryParameter = {
  parameterPath: "corpid",
  mapper: {
    serializedName: "corpid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const corpsecret: OperationQueryParameter = {
  parameterPath: "corpsecret",
  mapper: {
    serializedName: "corpsecret",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accessToken: OperationQueryParameter = {
  parameterPath: "accessToken",
  mapper: {
    serializedName: "access_token",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: CreateUserReqMapper
};

export const userid: OperationQueryParameter = {
  parameterPath: "userid",
  mapper: {
    serializedName: "userid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: UpdateUserReqMapper
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: BatchDeleteUserReqMapper
};

export const departmentId: OperationQueryParameter = {
  parameterPath: "departmentId",
  mapper: {
    serializedName: "department_id",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const fetchChild: OperationQueryParameter = {
  parameterPath: ["options", "fetchChild"],
  mapper: {
    serializedName: "fetch_child",
    type: {
      name: "Number"
    }
  }
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: ConvertToOpenidReqMapper
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: InviteReqMapper
};

export const dateParam: OperationQueryParameter = {
  parameterPath: "dateParam",
  mapper: {
    serializedName: "date",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body5: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: BatchSyncuserReqMapper
};

export const body6: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: BatchReplaceuserReqMapper
};

export const sizeType: OperationQueryParameter = {
  parameterPath: ["options", "sizeType"],
  mapper: {
    serializedName: "size_type",
    type: {
      name: "String"
    }
  }
};

export const body7: OperationParameter = {
  parameterPath: "body",
  mapper: SendMessageReqMapper
};

export const body8: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UpdateTaskcardReqMapper
};

export const body9: OperationParameter = {
  parameterPath: "body",
  mapper: CreateTagReqMapper
};

export const body10: OperationParameter = {
  parameterPath: "body",
  mapper: UpdateTagReqMapper
};

export const tagid: OperationQueryParameter = {
  parameterPath: "tagid",
  mapper: {
    serializedName: "tagid",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const body11: OperationParameter = {
  parameterPath: "body",
  mapper: AddTagUsersReqMapper
};

export const body12: OperationParameter = {
  parameterPath: "body",
  mapper: DeleteTagUsersReqMapper
};

export const tagid1: OperationQueryParameter = {
  parameterPath: "tagid",
  mapper: {
    serializedName: "tagid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body13: OperationParameter = {
  parameterPath: "body",
  mapper: AddContactWayReqMapper
};

export const body14: OperationParameter = {
  parameterPath: "body",
  mapper: GetContactWayReqMapper
};

export const body15: OperationParameter = {
  parameterPath: "body",
  mapper: UpdateContactWayReqMapper
};

export const body16: OperationParameter = {
  parameterPath: "body",
  mapper: DelContactWayReqMapper
};

export const body17: OperationParameter = {
  parameterPath: "body",
  mapper: CloseTempChatReqMapper
};

export const externalUserid: OperationQueryParameter = {
  parameterPath: "externalUserid",
  mapper: {
    serializedName: "external_userid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cursor: OperationQueryParameter = {
  parameterPath: ["options", "cursor"],
  mapper: {
    serializedName: "cursor",
    type: {
      name: "String"
    }
  }
};

export const body18: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetExternalContactBatchUserReqMapper
};

export const body19: OperationParameter = {
  parameterPath: "body",
  mapper: UpdateExternalContactRemarkReqMapper
};

export const body20: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetCorpTagListReqMapper
};

export const body21: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: AddCorpTagReqMapper
};

export const body22: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: EditCorpTagReqMapper
};

export const body23: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DelCorpTagReqMapper
};

export const body24: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: MarkCorpContactTagReqMapper
};

export const body25: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: TransferCustomerReqMapper
};

export const body26: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetTransferResultReqMapper
};

export const body27: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetUnassignedListReqMapper
};

export const body28: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ResignedTransferCustomerReqMapper
};

export const body29: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ResignedTransferResultReqMapper
};

export const body30: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ConvertOpengidToChatidReqMapper
};

export const body31: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetMomentListReqMapper
};

export const body32: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetMomentTaskReqMapper
};

export const body33: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetMomentCustomerListReqMapper
};

export const body34: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetMomentSendResultReqMapper
};

export const body35: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetMomentCommentsReqMapper
};

export const body36: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: AddMsgTemplateReqMapper
};

export const body37: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetGroupmsgListV2ReqMapper
};

export const body38: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetGroupmsgTaskReqMapper
};

export const body39: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetGroupmsgSendResultReqMapper
};

export const body40: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: SendWelcomeMsgReqMapper
};

export const body41: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: AddGroupWelcomeTemplateReqMapper
};

export const body42: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetUserBehaviorDataReqMapper
};

export const body43: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GroupchatTransferReqMapper
};

export const body44: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GroupchatListReqMapper
};

export const body45: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetGroupchatReqMapper
};

export const body46: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetGroupchatStatisticReqMapper
};

export const body47: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetGroupchatStatisticGroupByDayReqMapper
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "multipart/form-data",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const filename: OperationParameter = {
  parameterPath: ["options", "filename"],
  mapper: {
    serializedName: "filename",
    type: {
      name: "Stream"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const typeParam: OperationQueryParameter = {
  parameterPath: "typeParam",
  mapper: {
    serializedName: "type",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filename1: OperationParameter = {
  parameterPath: "filename",
  mapper: {
    serializedName: "filename",
    required: true,
    type: {
      name: "Stream"
    }
  }
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/octet-stream",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const mediaId: OperationQueryParameter = {
  parameterPath: "mediaId",
  mapper: {
    serializedName: "media_id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body48: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: CreateAppchatReqMapper
};

export const body49: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UpdateAppchatReqMapper
};

export const chatid: OperationQueryParameter = {
  parameterPath: "chatid",
  mapper: {
    serializedName: "chatid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body50: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: CreateDepartmentReqMapper
};

export const body51: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UpdateDepartmentReqMapper
};

export const id: OperationQueryParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const id1: OperationQueryParameter = {
  parameterPath: ["options", "id"],
  mapper: {
    serializedName: "id",
    type: {
      name: "Number"
    }
  }
};

export const body52: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: BatchReplacepartyReqMapper
};

export const jonid: OperationQueryParameter = {
  parameterPath: "jonid",
  mapper: {
    serializedName: "jonid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body53: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetLinkedcorpUserReqMapper
};

export const body54: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetLinkedcorpUserSimplelistReqMapper
};

export const body55: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetLinkedcorpUserListReqMapper
};

export const body56: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetLinkedcorpDepartmentListReqMapper
};

export const body57: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetServiceProviderTokenReqMapper
};

export const body58: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetServiceSuiteTokenReqMapper
};

export const suiteAccessToken: OperationQueryParameter = {
  parameterPath: "suiteAccessToken",
  mapper: {
    serializedName: "suite_access_token",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body59: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: SetServiceSessionInfoReqMapper
};

export const body60: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetServicePermanentCodeReqMapper
};

export const body61: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetServiceAuthInfoReqMapper
};

export const body62: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetServiceCorpTokenReqMapper
};

export const body63: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GetServiceAdminListReqMapper
};

export const agentid: OperationQueryParameter = {
  parameterPath: "agentid",
  mapper: {
    serializedName: "agentid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body64: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: SetAgentReqMapper
};

export const body65: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: CreateMenuReqMapper
};
