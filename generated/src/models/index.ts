import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

/** TokenRsp */
export interface TokenRsp {
  errcode?: number;
  errmsg?: string;
  accessToken?: string;
  expiresIn?: number;
}

/** GetApiDomainIpRsp */
export interface GetApiDomainIpRsp {
  errcode?: number;
  errmsg?: string;
  ipList?: string[];
}

/** CreateUserReq */
export interface CreateUserReq {
  /** 成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节。只能由数字、字母和“_-@.”四种字符组成，且第一个字符必须是数字或字母。 */
  userid?: string;
  /** 成员名称。长度为1~64个utf8字符 */
  name?: string;
  /** 成员别名。长度1~32个utf8字符 */
  alias?: string;
  /** 手机号码。企业内必须唯一，mobile/email二者不能同时为空 */
  mobile?: string;
  /** 成员所属部门id列表,不超过20个 */
  department?: number[];
  /** 部门内的排序值 */
  order?: number[];
  /** 职务信息 */
  position?: string;
  /** 性别 */
  gender?: number;
  /** 邮箱 */
  email?: string;
  /** 座机 */
  telephone?: string;
  /** 个数必须和参数department的个数一致 */
  isLeaderInDept?: number;
  /** 成员头像的mediaid */
  avatarMediaid?: string;
  /** 启用/禁用成员。1表示启用成员，0表示禁用成员 */
  enable?: number;
  /** 自定义字段 */
  extattr?: ExtAttrs;
}

/** ExtAttrs */
export interface ExtAttrs {
  attrs?: ExtAttr[];
}

/** ExtAttr */
export interface ExtAttr {
  type?: number;
  name?: string;
  text?: TextMsg;
  /** Any object */
  web?: Record<string, unknown>;
}

export interface TextMsg {
  content?: string;
}

export interface BaseResponse {
  errcode?: number;
  errmsg?: string;
}

/** User */
export interface GetUserRsp {
  errcode?: number;
  errmsg?: string;
  /** 成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节。只能由数字、字母和“_-@.”四种字符组成，且第一个字符必须是数字或字母。 */
  userid?: string;
  /** 成员名称。长度为1~64个utf8字符 */
  name?: string;
  /** 成员所属部门id列表,不超过20个 */
  department?: number[];
  /** 部门内的排序值 */
  order?: number[];
  /** 职务信息 */
  position?: string;
  /** 手机号码。企业内必须唯一，mobile/email二者不能同时为空 */
  mobile?: string;
  /** 性别 */
  gender?: number;
  /** 邮箱 */
  email?: string;
  /** 个数必须和参数department的个数一致 */
  isLeaderInDept?: number;
  /** 成员头像的mediaid */
  avatar?: string;
  /** 头像缩略图url */
  thumbAvatar?: string;
  /** 座机 */
  telephone?: string;
  /** 成员别名。长度1~32个utf8字符 */
  alias?: string;
  /** 地址 */
  address?: string;
  /** 全局唯一。对于同一个服务商，不同应用获取到企业内同一个成员的open_userid是相同的，最多64个字节。仅第三方应用可获取 */
  openUserid?: string;
  /** 主部门 */
  mainDepartment?: string;
  /** 激活状态 1=已激活，2=已禁用，4=未激活，5=退出企业。 */
  status?: number;
  /** 员工个人二维码，扫描可添加为外部联系人(注意返回的是一个url，可在浏览器上打开该url以展示二维码)；第三方仅通讯录应用可获取。 */
  qrCode?: string;
  /** 对外职务 */
  externalPosition?: string;
  /** 成员对外属性 */
  externalProfile?: ExternalProfile;
  /** 自定义字段 */
  extattr?: ExtAttrs;
}

/** ExternalProfile */
export interface ExternalProfile {
  externalCorpName?: string;
  externalAttr?: ExtAttr[];
}

/** UpdateUserReq */
export interface UpdateUserReq {
  userid?: string;
  name?: string;
  department?: number[];
  order?: number[];
  position?: string;
  mobile?: string;
  gender?: number;
  email?: string;
  isLeaderInDept?: number[];
  enable?: number;
  avatarMediaid?: string;
  telephone?: string;
  alias?: string;
  address?: string;
  mainDepartment?: number;
  /** ExtAttrs */
  extattr?: ExtAttrs;
  externalPosition?: string;
  /** ExternalProfile */
  externalProfile?: ExternalProfile;
}

/** BatchDeleteUserReq */
export interface BatchDeleteUserReq {
  useridlist?: string[];
}

/** SimplelistRsp */
export interface SimplelistRsp {
  errcode?: number;
  errmsg?: string;
  userlist?: SimplelistRspUserlistItem[];
}

export interface SimplelistRspUserlistItem {
  userid?: string;
  name?: string;
  department?: number[];
  openUserid?: string;
}

/** ListUserRsp */
export interface ListUserRsp {
  errcode?: number;
  errmsg?: string;
  userlist?: User[];
}

/** User */
export interface User {
  /** 成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节。只能由数字、字母和“_-@.”四种字符组成，且第一个字符必须是数字或字母。 */
  userid?: string;
  /** 成员名称。长度为1~64个utf8字符 */
  name?: string;
  /** 成员所属部门id列表,不超过20个 */
  department?: number[];
  /** 部门内的排序值 */
  order?: number[];
  /** 职务信息 */
  position?: string;
  /** 手机号码。企业内必须唯一，mobile/email二者不能同时为空 */
  mobile?: string;
  /** 性别 */
  gender?: number;
  /** 邮箱 */
  email?: string;
  /** 个数必须和参数department的个数一致 */
  isLeaderInDept?: number;
  /** 成员头像的mediaid */
  avatar?: string;
  /** 头像缩略图url */
  thumbAvatar?: string;
  /** 座机 */
  telephone?: string;
  /** 成员别名。长度1~32个utf8字符 */
  alias?: string;
  /** 地址 */
  address?: string;
  /** 全局唯一。对于同一个服务商，不同应用获取到企业内同一个成员的open_userid是相同的，最多64个字节。仅第三方应用可获取 */
  openUserid?: string;
  /** 主部门 */
  mainDepartment?: string;
  /** 激活状态 1=已激活，2=已禁用，4=未激活，5=退出企业。 */
  status?: number;
  /** 员工个人二维码，扫描可添加为外部联系人(注意返回的是一个url，可在浏览器上打开该url以展示二维码)；第三方仅通讯录应用可获取。 */
  qrCode?: string;
  /** 对外职务 */
  externalPosition?: string;
  /** 成员对外属性 */
  externalProfile?: ExternalProfile;
  /** 自定义字段 */
  extattr?: ExtAttrs;
  enable?: number;
  hideMobile?: number;
  englishName?: string;
}

export interface ConvertToOpenidReq {
  errcode?: number;
  errmsg?: string;
  userid?: string;
}

export interface ConvertToOpenidRsp {
  openid?: string;
}

/** InviteReq */
export interface InviteReq {
  user?: string[];
  party?: string[];
  tag?: string[];
}

export interface InviteRsp {
  errcode?: number;
  errmsg?: string;
  invaliduser?: string[];
  invalidparty?: string[];
  invalidtag?: string[];
}

/** GetJoinQrcodeRsp */
export interface GetJoinQrcodeRsp {
  errmsg?: string;
  errcode?: number;
  joinQrcode?: string;
}

/** GetActiveStatRsp */
export interface GetActiveStatRsp {
  errmsg?: string;
  errcode?: number;
  activeCnt?: number;
}

/** SendMessageReq */
export interface SendMessageReq {
  touser?: string;
  toparty?: string;
  totag?: string;
  msgtype?: string;
  agentid?: number;
  text?: TextMsg;
  image?: ImageMsg;
  voice?: VoiceMsg;
  video?: VideoMsg;
  textcard?: TextcardMsg;
  news?: NewsMsg;
  mpnews?: MPNewsMsg;
  markdown?: MarkdownMsg;
  miniprogramNotice?: MiniProgramMsg;
  taskcard?: TaskcardMsg;
}

export interface ImageMsg {
  mediaId?: string;
}

export interface VoiceMsg {
  mediaId?: string;
}

export interface VideoMsg {
  mediaId?: string;
  title?: string;
  description?: string;
}

export interface TextcardMsg {
  title?: string;
  description?: string;
  url?: string;
  btntxt?: string;
}

export interface NewsMsg {
  articles?: ArticleMsg[];
}

export interface ArticleMsg {
  title?: string;
  description?: string;
  url?: string;
  picurl?: string;
}

export interface MPNewsMsg {
  articles?: MPArticleMsg[];
}

export interface MPArticleMsg {
  title?: string;
  thumbMediaId?: string;
  author?: string;
  contentSourceUrl?: string;
  content?: string;
  digest?: string;
}

export interface MarkdownMsg {
  content?: string;
}

export interface MiniProgramMsg {
  appid?: string;
  page?: string;
  title?: string;
  description?: string;
  emphasisFirstItem?: boolean;
  contentItem?: MiniProgramMsgContentItem[];
}

export interface MiniProgramMsgContentItem {
  key?: string;
  value?: string;
}

export interface TaskcardMsg {
  title?: string;
  description?: string;
  url?: string;
  taskId?: string;
  btn?: Btn[];
}

export interface Btn {
  key?: string;
  name?: string;
  replaceName?: string;
  color?: string;
  isBold?: boolean;
}

export interface SendMessageRsp {
  errmsg?: string;
  errcode?: number;
  invaliduser?: string;
  invalidparty?: string;
  invalidtag?: string;
}

/** UpdateTaskcardReq */
export interface UpdateTaskcardReq {
  userid?: string[];
  agentid?: number;
  taskId?: string;
  replaceName?: string;
}

/** UpdateTaskcardRsp */
export interface UpdateTaskcardRsp {
  errmsg?: string;
  errcode?: number;
  invaliduser?: string[];
}

/** CreateTagReq */
export interface CreateTagReq {
  tagname?: string;
  tagid?: number;
}

/** CreateTagRsp */
export interface CreateTagRsp {
  errcode?: number;
  errmsg?: string;
  tagid?: number;
}

/** UpdateTagReq */
export interface UpdateTagReq {
  tagid?: number;
  tagname?: string;
}

/** AddTagUsers */
export interface AddTagUsersReq {
  tagid?: number;
  userlist?: string[];
  partylist?: number[];
}

/** DeleteTagUsersReq */
export interface DeleteTagUsersReq {
  tagid?: number;
  userlist?: string[];
  partylist?: number[];
}

/** GetTagUsersRsp */
export interface GetTagUsersRsp {
  errmsg?: string;
  errcode?: number;
  tagname?: string;
  userlist?: GetTagUsersRspUserlistItem[];
  partylist?: number[];
}

export interface GetTagUsersRspUserlistItem {
  userid?: string;
  name?: string;
}

/** GetTagListRsp */
export interface GetTagListRsp {
  errmsg?: string;
  errcode?: number;
  taglist?: TagListInfo[];
}

export interface TagListInfo {
  tagid?: number;
  tagname?: string;
}

/** GetFollowUserListRsp */
export interface GetFollowUserListRsp {
  errmsg?: string;
  errcode?: number;
  followUser?: string[];
}

/** AddContactWayRsp */
export interface AddContactWayReq {
  type?: number;
  scene?: number;
  style?: number;
  remark?: string;
  skipVerify?: boolean;
  state?: string;
  user?: string[];
  party?: number[];
  /** 是否临时会话模式，true表示使用临时会话模式，默认为false */
  isTemp?: boolean;
  expiresIn?: number;
  /** 可进行临时会话的客户unionid，该参数仅在is_temp为true时有效，如不指定则不进行限制 */
  unionid?: string;
  conclusions?: AddContactWayReqConclusions;
}

export interface AddContactWayReqConclusions {
  text?: AddContactWayReqConclusionsText;
  image?: AddContactWayReqConclusionsImage;
  link?: AddContactWayReqConclusionsLink;
  miniprogram?: AddContactWayReqConclusionsMiniprogram;
}

export interface AddContactWayReqConclusionsText {
  content?: string;
}

export interface AddContactWayReqConclusionsImage {
  mediaId?: string;
}

export interface AddContactWayReqConclusionsLink {
  title?: string;
  picurl?: string;
  desc?: string;
  url?: string;
}

export interface AddContactWayReqConclusionsMiniprogram {
  title?: string;
  picMediaId?: string;
  appid?: string;
  page?: string;
}

/** AddContactWayRsp */
export interface AddContactWayRsp {
  errcode?: number;
  errmsg?: string;
  configId?: string;
  qrCode?: string;
}

/** GetContactWayReq */
export interface GetContactWayReq {
  configId?: string;
}

/** GetContactWayRsp */
export interface GetContactWayRsp {
  errmsg?: string;
  errcode?: number;
  contactWay?: GetContactWayRspContactWay;
}

export interface GetContactWayRspContactWay {
  configId?: string;
  type?: number;
  scene?: number;
  style?: number;
  remark?: string;
  skipVerify?: boolean;
  state?: string;
  user?: string[];
  party?: number[];
  /** 是否临时会话模式，true表示使用临时会话模式，默认为false */
  isTemp?: boolean;
  expiresIn?: number;
  /** 可进行临时会话的客户unionid，该参数仅在is_temp为true时有效，如不指定则不进行限制 */
  unionid?: string;
  conclusions?: GetContactWayRspContactWayConclusions;
}

export interface GetContactWayRspContactWayConclusions {
  text?: GetContactWayRspContactWayConclusionsText;
  image?: GetContactWayRspContactWayConclusionsImage;
  link?: GetContactWayRspContactWayConclusionsLink;
  miniprogram?: GetContactWayRspContactWayConclusionsMiniprogram;
}

export interface GetContactWayRspContactWayConclusionsText {
  content?: string;
}

export interface GetContactWayRspContactWayConclusionsImage {
  mediaId?: string;
}

export interface GetContactWayRspContactWayConclusionsLink {
  title?: string;
  picurl?: string;
  desc?: string;
  url?: string;
}

export interface GetContactWayRspContactWayConclusionsMiniprogram {
  title?: string;
  picMediaId?: string;
  appid?: string;
  page?: string;
}

/** UpdateContactWayReq */
export interface UpdateContactWayReq {
  configId?: string;
  remark?: string;
  skipVerify?: boolean;
  style?: number;
  state?: string;
  user?: string[];
  party?: number[];
  /** 临时会话二维码有效期，以秒为单位 */
  expiresIn?: number;
  chatExpiresIn?: number;
  unionid?: string;
  conclusions?: UpdateContactWayReqConclusions;
}

export interface UpdateContactWayReqConclusions {
  text?: UpdateContactWayReqConclusionsText;
  image?: UpdateContactWayReqConclusionsImage;
  link?: UpdateContactWayReqConclusionsLink;
  miniprogram?: UpdateContactWayReqConclusionsMiniprogram;
}

export interface UpdateContactWayReqConclusionsText {
  content?: string;
}

export interface UpdateContactWayReqConclusionsImage {
  mediaId?: string;
}

export interface UpdateContactWayReqConclusionsLink {
  title?: string;
  picurl?: string;
  desc?: string;
  url?: string;
}

export interface UpdateContactWayReqConclusionsMiniprogram {
  title?: string;
  picMediaId?: string;
  appid?: string;
  page?: string;
}

/** DelContactWayReq */
export interface DelContactWayReq {
  configId?: string;
}

/** CloseTempChatReq */
export interface CloseTempChatReq {
  userid?: string;
  externalUserid?: string;
}

/** GetExternalContactListRsp */
export interface GetExternalContactListRsp {
  errcode?: number;
  errmsg?: string;
  externalUserid?: string[];
}

/** GetExternalContactDetailRsp */
export interface GetExternalContactDetailRsp {
  errcode?: number;
  nextCursor?: string;
  followUser?: GetExternalContactDetailRspFollowUserItem[];
  externalContact?: GetExternalContactDetailRspExternalContact;
}

export interface GetExternalContactDetailRspFollowUserItem {
  userid?: string;
  remark?: string;
  description?: string;
  createtime?: number;
  remarkCorpName?: string;
  operUserid?: string;
  addWay?: number;
  state?: string;
  remarkMobiles?: string[];
  tags?: Components18Bg4T3SchemasGetexternalcontactdetailrspPropertiesFollowUserItemsPropertiesTagsItems[];
}

export interface Components18Bg4T3SchemasGetexternalcontactdetailrspPropertiesFollowUserItemsPropertiesTagsItems {
  groupName?: string;
  tagName?: string;
  tagId?: string;
  type?: number;
}

export interface GetExternalContactDetailRspExternalContact {
  externalContact?: GetExternalContactDetailRspExternalContactExternalContact;
}

export interface GetExternalContactDetailRspExternalContactExternalContact {
  externalUserid?: string;
  name?: string;
  position?: string;
  avatar?: string;
  corpName?: string;
  corpFullName?: string;
  type?: number;
  gender?: number;
  unionid?: string;
  externalProfile?: GetExternalContactDetailRspExternalContactExternalProfile;
}

export interface GetExternalContactDetailRspExternalContactExternalProfile {
  externalAttr?: GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItem[];
}

export interface GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItem {
  type?: number;
  name?: string;
  web?: GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemWeb;
  text?: GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemText;
  miniprogram?: GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemMiniprogram;
}

export interface GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemWeb {
  url?: string;
  title?: string;
}

export interface GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemText {
  value?: string;
}

export interface GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemMiniprogram {
  appid?: string;
  pagepath?: string;
  title?: string;
}

/** GetExternalContactBatchUserReq */
export interface GetExternalContactBatchUserReq {
  userid?: string;
  cursor?: string;
  limit?: number;
}

/** GetExternalContactBatchUserRsp */
export interface GetExternalContactBatchUserRsp {
  errcode?: number;
  errmsg?: string;
  externalContactList?: GetExternalContactBatchUserRspExternalContactListItem[];
}

export interface GetExternalContactBatchUserRspExternalContactListItem {
  remark?: string;
  description?: string;
  createtime?: number;
  tagId?: string[];
  remarkCorpName?: string;
  remarkMobiles?: string[];
  operUserid?: string;
  addWay?: number;
  externalContact?: GetExternalContactBatchUserRspExternalContactListItemExternalContact;
}

export interface GetExternalContactBatchUserRspExternalContactListItemExternalContact {
  externalUserid?: string;
  name?: string;
  position?: string;
  avatar?: string;
  corpName?: string;
  corpFullName?: string;
  type?: number;
  gender?: number;
  unionid?: string;
  externalProfile?: ComponentsJey806SchemasGetexternalcontactbatchuserrspPropertiesExternalContactListItemsPropertiesExternalContactPropertiesExternalProfile;
}

export interface ComponentsJey806SchemasGetexternalcontactbatchuserrspPropertiesExternalContactListItemsPropertiesExternalContactPropertiesExternalProfile {
  externalAttr?: GetExternalContactBatchUserRspExternalContactListPropertiesItemsItem[];
}

export interface GetExternalContactBatchUserRspExternalContactListPropertiesItemsItem {
  type?: number;
  name?: string;
  web?: GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemWeb;
  text?: GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemText;
  miniprogram?: GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemMiniprogram;
}

export interface GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemWeb {
  url?: string;
  title?: string;
}

export interface GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemText {
  value?: string;
}

export interface GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemMiniprogram {
  appid?: string;
  pagepath?: string;
  title?: string;
}

/** UpdateExternalContactRemarkReq */
export interface UpdateExternalContactRemarkReq {
  userid?: string;
  externalUserid?: string;
  remark?: string;
  description?: string;
  remarkCompany?: string;
  remarkMobiles?: string[];
  remarkPicMediaid?: string;
}

/** GetCorpTagListReq */
export interface GetCorpTagListReq {
  tagId?: string[];
  groupId?: string[];
}

/** GetCorpTagListRsp */
export interface GetCorpTagListRsp {
  errcode?: number;
  errmsg?: string;
  tagGroup?: GetCorpTagListRspTagGroupItem[];
}

export interface GetCorpTagListRspTagGroupItem {
  groupId?: string;
  groupName?: string;
  createTime?: number;
  order?: number;
  deleted?: boolean;
  tag?: GetCorpTagListRspTagGroupPropertiesItemsItem[];
}

export interface GetCorpTagListRspTagGroupPropertiesItemsItem {
  id?: string;
  name?: string;
  createTime?: number;
  order?: number;
  deleted?: boolean;
}

/** AddCorpTagReq */
export interface AddCorpTagReq {
  groupId?: string;
  groupName?: string;
  order?: number;
  tag?: AddCorpTagReqTagItem[];
  /** 授权方安装的应用agentid。仅旧的第三方多应用套件需要填此参数 */
  agentid?: number;
}

export interface AddCorpTagReqTagItem {
  name?: string;
  order?: number;
}

/** AddCorpTagRsp */
export interface AddCorpTagRsp {
  errmsg?: string;
  errcode?: number;
  tagGroup?: AddCorpTagRspTagGroup;
}

export interface AddCorpTagRspTagGroup {
  groupId?: string;
  groupName?: string;
  createTime?: number;
  order?: number;
  tag?: AddCorpTagRspTagGroupTagItem[];
}

export interface AddCorpTagRspTagGroupTagItem {
  id?: string;
  name?: string;
  cretateTime?: number;
  order?: number;
}

/** EditCorpTagReq */
export interface EditCorpTagReq {
  id?: string;
  name?: string;
  order?: string;
  agentid?: number;
}

/** DelCorpTagReq */
export interface DelCorpTagReq {
  tagId?: string[];
  groupId?: string[];
  /** 授权方安装的应用agentid。仅旧的第三方多应用套件需要填此参数 */
  agentid?: string;
}

/** MarkCorpTagReq */
export interface MarkCorpContactTagReq {
  userid?: string;
  externalUserid?: string;
  addTag?: string[];
  removeTag?: string[];
}

/** TransferCustomerReq */
export interface TransferCustomerReq {
  handoverUserid?: string;
  takeoverUserid?: string;
  externalUserid?: string[];
  transferSuccessMsg?: string;
}

/** TransferCustomerRsp */
export interface TransferCustomerRsp {
  errcode?: number;
  errmsg?: string;
  customer?: TransferCustomerRspCustomerItem[];
}

export interface TransferCustomerRspCustomerItem {
  externalUserid?: string;
  errcode?: number;
}

/** GetTransferResultReq */
export interface GetTransferResultReq {
  handoverUserid?: string;
  takeoverUserid?: string;
  cursor?: string;
}

/** GetTransferResultRsp */
export interface GetTransferResultRsp {
  errmsg?: string;
  errcode?: number;
  nextCursor?: string;
  customer?: GetTransferResultRspCustomerItem[];
}

export interface GetTransferResultRspCustomerItem {
  externalUserid?: string;
  status?: number;
  takeoverTime?: number;
}

/** GetUnassignedListReq */
export interface GetUnassignedListReq {
  pageId?: number;
  cursor?: string;
  pageSize?: number;
}

/** GetUnassignedListRsp */
export interface GetUnassignedListRsp {
  errcode?: number;
  errmsg?: string;
  isLast?: boolean;
  nextCursor?: string;
  info?: GetUnassignedListRspInfoItem[];
}

export interface GetUnassignedListRspInfoItem {
  handoverUserid?: string;
  externalUserid?: string;
  dimissionTime?: number;
}

/** ResignedTransferCustomerReq */
export interface ResignedTransferCustomerReq {
  handoverUserid?: string;
  takeoverUserid?: string;
  externalUserid?: string[];
}

/** ResignedTransferCustomerRsp */
export interface ResignedTransferCustomerRsp {
  errcode?: number;
  errmsg?: string;
  customer?: ResignedTransferCustomerRspCustomerItem[];
}

export interface ResignedTransferCustomerRspCustomerItem {
  externalUserid?: string;
  errcode?: number;
}

/** ResignedTransferResultReq */
export interface ResignedTransferResultReq {
  handoverUserid?: string;
  takeoverUserid?: string;
  cursor?: string;
}

/** ResignedTransferResultRsp */
export interface ResignedTransferResultRsp {
  errmsg?: string;
  errcode?: number;
  customer?: ResignedTransferResultRspCustomerItem[];
}

export interface ResignedTransferResultRspCustomerItem {
  externalUserid?: string;
  status?: number;
  takeoverTime?: number;
}

/** GroupchatTransferReq */
export interface GroupchatTransferReq {
  chatIdList?: string[];
  newOwner?: string;
}

/** GroupchatTransferRsp */
export interface GroupchatTransferRsp {
  errmsg?: string;
  errcode?: number;
  failedChatList?: GroupchatTransferRspFailedChatListItem[];
}

export interface GroupchatTransferRspFailedChatListItem {
  chatId?: string;
  errcode?: number;
  errmsg?: string;
}

/** GroupchatListReq */
export interface GroupchatListReq {
  /** 客户群跟进状态过滤。0 - 所有列表(即不过滤);1 - 离职待继承;2 - 离职继承中;3 - 离职继承完成;默认为0 */
  statusFilter?: number;
  ownerFilter?: GroupchatListReqOwnerFilter;
  cursor?: string;
  limit?: number;
}

export interface GroupchatListReqOwnerFilter {
  useridList?: string[];
}

/** GroupchatListRsp */
export interface GroupchatListRsp {
  errcode?: number;
  errmsg?: string;
  groupChatList?: GroupchatListRspGroupChatListItem[];
  nextCursor?: string;
}

export interface GroupchatListRspGroupChatListItem {
  chatId?: string;
  status?: number;
}

/** GetGroupchatReq */
export interface GetGroupchatReq {
  chatId?: string;
  needName?: number;
}

/** GetGroupchatRsp */
export interface GetGroupchatRsp {
  errmsg?: string;
  errcode?: number;
  groupChat?: GetGroupchatRspGroupChat;
}

export interface GetGroupchatRspGroupChat {
  chatId?: string;
  name?: string;
  owner?: string;
  notice?: string;
  createTime?: number;
  memberList?: GetGroupchatRspGroupChatMemberListItem[];
  adminList?: GetGroupchatRspGroupChatAdminListItem[];
}

export interface GetGroupchatRspGroupChatMemberListItem {
  userid?: string;
  type?: number;
  joinTime?: number;
  joinScene?: number;
  invitor?: GetGroupchatRspGroupChatMemberListItemInvitor;
  unionid?: string;
  name?: string;
  groupNickname?: string;
}

export interface GetGroupchatRspGroupChatMemberListItemInvitor {
  userid?: string;
}

export interface GetGroupchatRspGroupChatAdminListItem {
  userid?: string;
}

/** ConvertOpengidToChatidReq */
export interface ConvertOpengidToChatidReq {
  opengid?: string;
}

/** ConvertOpengidToChatidRsp */
export interface ConvertOpengidToChatidRsp {
  errcode?: number;
  errmsg?: string;
  chatId?: string;
}

/** GetMomentListReq */
export interface GetMomentListReq {
  /** 朋友圈记录开始时间。Unix时间戳 */
  startTime?: number;
  /** 朋友圈记录结束时间。Unix时间戳 */
  endTime?: number;
  creator?: string;
  /** 朋友圈类型。0：企业发表 1：个人发表 2：所有，包括个人创建以及企业创建，默认情况下为所有类型 */
  filterType?: number;
  cursor?: string;
  limit?: number;
}

/** GetMomentListRsp */
export interface GetMomentListRsp {
  errmsg?: string;
  errcode?: number;
  nextCursor?: string;
  momentList?: GetMomentListRspMomentListItem[];
}

export interface GetMomentListRspMomentListItem {
  momentId?: string;
  creator?: string;
  createTime?: number;
  createType?: number;
  visibleType?: number;
  text?: GetMomentListRspMomentListItemText;
  image?: GetMomentListRspMomentListPropertiesItemsItem[];
  video?: GetMomentListRspMomentListItemVideo;
  link?: GetMomentListRspMomentListItemLink;
  location?: GetMomentListRspMomentListItemLocation;
}

export interface GetMomentListRspMomentListItemText {
  content?: string;
}

export interface GetMomentListRspMomentListPropertiesItemsItem {
  mediaId?: string;
}

export interface GetMomentListRspMomentListItemVideo {
  mediaId?: string;
  thumbMediaId?: string;
}

export interface GetMomentListRspMomentListItemLink {
  title?: string;
  url?: string;
}

export interface GetMomentListRspMomentListItemLocation {
  latitude?: string;
  longitude?: string;
  name?: string;
}

/** GetMomentTaskReq */
export interface GetMomentTaskReq {
  momentId?: string;
  cursor?: string;
  limit?: number;
}

/** GetMomentTaskRsp */
export interface GetMomentTaskRsp {
  errcode?: number;
  errmsg?: string;
  nextCursor?: string;
  taskList?: GetMomentTaskRspTaskListItem[];
}

export interface GetMomentTaskRspTaskListItem {
  userid?: string;
  publishStatus?: number;
}

/** GetMomentCustomerListReq */
export interface GetMomentCustomerListReq {
  momentId?: string;
  userid?: string;
  cursor?: string;
  limit?: number;
}

/** GetMomentCustomerListRsp */
export interface GetMomentCustomerListRsp {
  errmsg?: string;
  errcode?: number;
  nextCursor?: string;
  customerList?: GetMomentCustomerListRspCustomerListItem[];
}

export interface GetMomentCustomerListRspCustomerListItem {
  userid?: string;
  externalUserid?: string;
}

/** GetMomentSendResultReq */
export interface GetMomentSendResultReq {
  momentId?: string;
  userid?: string;
  cursor?: string;
  limit?: number;
}

/** GetMomentSendResultRsp */
export interface GetMomentSendResultRsp {
  errcode?: number;
  errmsg?: string;
  nextCursor?: string;
  customerList?: GetMomentSendResultRspCustomerListItem[];
}

export interface GetMomentSendResultRspCustomerListItem {
  externalUserid?: string;
}

/** GetMomentCommentsReq */
export interface GetMomentCommentsReq {
  momentId?: string;
  userid?: string;
}

/** GetMomentCommentsRsp */
export interface GetMomentCommentsRsp {
  errmsg?: string;
  errcode?: number;
  commentList?: GetMomentCommentsRspCommentListItem[];
}

export interface GetMomentCommentsRspCommentListItem {
  externalUserid?: string;
  createTime?: number;
  likeList?: GetMomentCommentsRspCommentListPropertiesItemsItem[];
}

export interface GetMomentCommentsRspCommentListPropertiesItemsItem {
  externalUserid?: string;
  createTime?: number;
}

/** AddMsgTemplateReq */
export interface AddMsgTemplateReq {
  chatType?: string;
  externalUserid?: string[];
  sender?: string;
  text?: AddMsgTemplateReqText;
  attachments?: AddMsgTemplateReqAttachmentsItem[];
}

export interface AddMsgTemplateReqText {
  content?: string;
}

export interface AddMsgTemplateReqAttachmentsItem {
  msgtype?: string;
  image?: AddMsgTemplateReqAttachmentsItemImage;
  link?: AddMsgTemplateReqAttachmentsItemLink;
  miniprogram?: AddMsgTemplateReqAttachmentsItemMiniprogram;
  video?: AddMsgTemplateReqAttachmentsItemVideo;
}

export interface AddMsgTemplateReqAttachmentsItemImage {
  mediaId?: string;
  picUrl?: string;
}

export interface AddMsgTemplateReqAttachmentsItemLink {
  title?: string;
  picurl?: string;
  desc?: string;
  url?: string;
}

export interface AddMsgTemplateReqAttachmentsItemMiniprogram {
  title?: string;
  picMediaId?: string;
  appid?: string;
  page?: string;
}

export interface AddMsgTemplateReqAttachmentsItemVideo {
  mediaId?: string;
}

/** AddMsgTemplateRsp */
export interface AddMsgTemplateRsp {
  errcode?: number;
  errmsg?: string;
  msgid?: string;
  failList?: string[];
}

/** GetGroupmsgListV2Req */
export interface GetGroupmsgListV2Req {
  chatType?: string;
  startTime?: number;
  endTime?: number;
  creator?: string;
  /** 创建人类型。0：企业发表 1：个人发表 2：所有，包括个人创建以及企业创建，默认情况下为所有类型 */
  filterType?: number;
  limit?: number;
  cursor?: string;
}

/** GetGroupmsgListV2Rsp */
export interface GetGroupmsgListV2Rsp {
  errmsg?: string;
  errcode?: number;
  nextCursor?: string;
  attachments?: GetGroupmsgListV2RspAttachmentsItem[];
}

export interface GetGroupmsgListV2RspAttachmentsItem {
  msgtype?: string;
  image?: GetGroupmsgListV2RspAttachmentsItemImage;
  link?: GetGroupmsgListV2RspAttachmentsItemLink;
  miniprogram?: GetGroupmsgListV2RspAttachmentsItemMiniprogram;
  video?: GetGroupmsgListV2RspAttachmentsItemVideo;
}

export interface GetGroupmsgListV2RspAttachmentsItemImage {
  mediaId?: string;
  picUrl?: string;
}

export interface GetGroupmsgListV2RspAttachmentsItemLink {
  title?: string;
  picurl?: string;
  desc?: string;
  url?: string;
}

export interface GetGroupmsgListV2RspAttachmentsItemMiniprogram {
  title?: string;
  picMediaId?: string;
  appid?: string;
  page?: string;
}

export interface GetGroupmsgListV2RspAttachmentsItemVideo {
  mediaId?: string;
}

/** GetGroupmsgTaskReq */
export interface GetGroupmsgTaskReq {
  msgid?: string;
  limit?: number;
  cursor?: string;
}

/** GetGroupmsgTaskRsp */
export interface GetGroupmsgTaskRsp {
  errmsg?: string;
  errcode?: number;
  nextCursor?: string;
  taskList?: GetGroupmsgTaskRspTaskListItem[];
}

export interface GetGroupmsgTaskRspTaskListItem {
  userid?: string;
  status?: number;
  sendTime?: number;
}

/** GetGroupmsgSendResultReq */
export interface GetGroupmsgSendResultReq {
  msgid?: string;
  userid?: string;
  limit?: number;
  cursor?: string;
}

/** GetGroupmsgSendResultRsp */
export interface GetGroupmsgSendResultRsp {
  errcode?: number;
  errmsg?: string;
  nextCursor?: string;
  sendList?: GetGroupmsgSendResultRspSendListItem[];
}

export interface GetGroupmsgSendResultRspSendListItem {
  externalUserid?: string;
  chatId?: string;
  userid?: string;
  status?: number;
  sendTime?: number;
}

/** SendWelcomeMsgReq */
export interface SendWelcomeMsgReq {
  welcomeCode?: string;
  text?: SendWelcomeMsgReqText;
  attachments?: SendWelcomeMsgReqAttachmentsItem[];
}

export interface SendWelcomeMsgReqText {
  content?: string;
}

export interface SendWelcomeMsgReqAttachmentsItem {
  msgtype?: string;
  image?: SendWelcomeMsgReqAttachmentsItemImage;
  link?: SendWelcomeMsgReqAttachmentsItemLink;
  miniprogram?: SendWelcomeMsgReqAttachmentsItemMiniprogram;
  video?: SendWelcomeMsgReqAttachmentsItemVideo;
}

export interface SendWelcomeMsgReqAttachmentsItemImage {
  mediaId?: string;
  picUrl?: string;
}

export interface SendWelcomeMsgReqAttachmentsItemLink {
  title?: string;
  picurl?: string;
  desc?: string;
  url?: string;
}

export interface SendWelcomeMsgReqAttachmentsItemMiniprogram {
  title?: string;
  picMediaId?: string;
  appid?: string;
  page?: string;
}

export interface SendWelcomeMsgReqAttachmentsItemVideo {
  mediaId?: string;
}

/** SendWelcomeMsgRsp */
export interface SendWelcomeMsgRsp {
  errmsg?: string;
  errcode?: number;
}

/** AddGroupWelcomeTemplateReq */
export interface AddGroupWelcomeTemplateReq {
  text?: AddGroupWelcomeTemplateReqText;
  image?: AddGroupWelcomeTemplateReqImage;
  link?: AddGroupWelcomeTemplateReqLink;
  miniprogram?: AddGroupWelcomeTemplateReqMiniprogram;
  /** 授权方安装的应用agentid。仅旧的第三方多应用套件需要填此参数 */
  agentid?: number;
  /** 是否通知成员将这条入群欢迎语应用到客户群中，0-不通知，1-通知， 不填则通知 */
  notify?: number;
}

export interface AddGroupWelcomeTemplateReqText {
  content?: string;
}

export interface AddGroupWelcomeTemplateReqImage {
  mediaId?: string;
  picUrl?: string;
}

export interface AddGroupWelcomeTemplateReqLink {
  title?: string;
  picurl?: string;
  desc?: string;
  url?: string;
}

export interface AddGroupWelcomeTemplateReqMiniprogram {
  title?: string;
  picMediaId?: string;
  appid?: string;
  page?: string;
}

/** AddGroupWelcomeTemplateRsp */
export interface AddGroupWelcomeTemplateRsp {
  errcode?: number;
  errmsg?: string;
  templateId?: string;
}

/** GetUserBehaviorDataReq */
export interface GetUserBehaviorDataReq {
  userid?: string[];
  partyid?: number[];
  startTime?: number;
  endTime?: number;
}

/** GetUserBehaviorDataRsp */
export interface GetUserBehaviorDataRsp {
  errmsg?: string;
  errcode?: number;
  behaviorData?: GetUserBehaviorDataRspBehaviorDataItem[];
}

export interface GetUserBehaviorDataRspBehaviorDataItem {
  statTime?: number;
  chatCnt?: number;
  messageCnt?: number;
  replyPercentage?: number;
  avgReplyTime?: number;
  negativeFeedbackCnt?: number;
  newApplyCnt?: number;
  newContactCnt?: number;
}

/** GetGroupchatStatisticReq */
export interface GetGroupchatStatisticReq {
  dayBeginTime?: number;
  dayEndTime?: number;
  ownerFilter?: GetGroupchatStatisticReqOwnerFilter;
  orderBy?: number;
  orderAsc?: number;
  offset?: number;
  limit?: number;
}

export interface GetGroupchatStatisticReqOwnerFilter {
  useridList?: string[];
}

/** GetGroupchatStatisticRsp */
export interface GetGroupchatStatisticRsp {
  errcode?: number;
  errmsg?: string;
  total?: number;
  nextOffset?: number;
  items?: GetGroupchatStatisticRspItemsItem[];
}

export interface GetGroupchatStatisticRspItemsItem {
  owner?: string;
  data?: GetGroupchatStatisticRspItemsPropertiesItemsItem[];
}

export interface GetGroupchatStatisticRspItemsPropertiesItemsItem {
  newChatCnt?: number;
  chatTotal?: number;
  chatHasMsg?: number;
  newMemberCnt?: number;
  memberTotal?: number;
  memberHasMsg?: number;
  msgTotal?: number;
}

/** GetGroupchatStatisticGroupByDayReq */
export interface GetGroupchatStatisticGroupByDayReq {
  dayBeginTime?: number;
  dayEndTime?: number;
  ownerFilter?: GetGroupchatStatisticGroupByDayReqOwnerFilter;
}

export interface GetGroupchatStatisticGroupByDayReqOwnerFilter {
  useridList?: string[];
}

/** GetGroupchatStatisticGroupByDayRsp */
export interface GetGroupchatStatisticGroupByDayRsp {
  errmsg?: string;
  errcode?: number;
  items?: GetGroupchatStatisticGroupByDayRspItems;
}

export interface GetGroupchatStatisticGroupByDayRspItems {
  statTime?: number;
  data?: GetGroupchatStatisticGroupByDayRspItemData;
}

export interface GetGroupchatStatisticGroupByDayRspItemData {
  newChatCnt?: number;
  chatTotal?: number;
  chatHasMsg?: number;
  newMemberCnt?: number;
  memberTotal?: number;
  memberHasMsg?: number;
  msgTotal?: number;
}

/** MediaUploadRsp */
export interface MediaUploadRsp {
  errcode?: number;
  errmsg?: string;
  type?: string;
  mediaId?: string;
  createdAt?: string;
}

/** MediaUploadImgRsp */
export interface MediaUploadImgRsp {
  errmsg?: string;
  errcode?: number;
  url?: string;
}

/** CreateAppchatReq */
export interface CreateAppchatReq {
  name?: string;
  owner?: string;
  chatid?: string;
  userlist?: string[];
}

/** CreateAppchatRsp */
export interface CreateAppchatRsp {
  errcode?: number;
  errmsg?: string;
  chatid?: string;
}

/** UpdateAppchatReq */
export interface UpdateAppchatReq {
  chatid?: string;
  name?: string;
  owner?: string;
  addUserList?: string[];
  delUserList?: string[];
}

/** GetAppchatReq */
export interface GetAppchatReq {
  errmsg?: string;
  errcode?: number;
  chatInfo?: GetAppchatReqChatInfo;
}

export interface GetAppchatReqChatInfo {
  chatid?: string;
  name?: string;
  owner?: string;
  userlist?: string[];
}

/** CreateDepartmentReq */
export interface CreateDepartmentReq {
  /** 部门名称。同一个层级的部门名称不能重复。长度限制为1~32个字符，字符不能包括\:?”<>｜ */
  name?: string;
  nameEn?: string;
  parentid?: number;
  order?: number;
  /** 部门id，32位整型，指定时必须大于1。若不填该参数，将自动生成id */
  id?: number;
}

/** CreateDepartmentRsp */
export interface CreateDepartmentRsp {
  errcode?: number;
  errmsg?: string;
  id?: number;
}

/** UpdateDepartmentReq */
export interface UpdateDepartmentReq {
  id?: number;
  name?: string;
  nameEn?: string;
  parentid?: number;
  order?: number;
}

/** GetDepartmentListRsp */
export interface GetDepartmentListRsp {
  errmsg?: string;
  errcode?: number;
  department?: GetDepartmentListRspDepartmentItem[];
}

export interface GetDepartmentListRspDepartmentItem {
  id?: number;
  name?: string;
  nameEn?: string;
  parentid?: number;
  order?: number;
}

/** GetAgentPermListRsp */
export interface GetAgentPermListRsp {
  errcode?: number;
  errmsg?: string;
  userids?: string[];
  departmentIds?: string[];
}

/** GetLinkedcorpUserReq */
export interface GetLinkedcorpUserReq {
  /** 该字段用的是互联应用可见范围接口返回的userids参数，用的是 CorpId + ’/‘ + USERID 拼成的字符串; "CORPID/USERID" */
  userid?: string;
}

/** GetLinkedcorpUserRsp */
export interface GetLinkedcorpUserRsp {
  errmsg?: string;
  errcode?: number;
  userInfo?: GetLinkedcorpUserRspUserInfo;
}

export interface GetLinkedcorpUserRspUserInfo {
  userid?: string;
  name?: string;
  department?: string[];
  mobile?: string;
  telephone?: string;
  email?: string;
  position?: string;
  corpid?: string;
  extattr?: GetLinkedcorpUserRspUserInfoExtattr;
}

export interface GetLinkedcorpUserRspUserInfoExtattr {
  attrs?: GetLinkedcorpUserRspUserInfoExtattrAttrsItem[];
}

export interface GetLinkedcorpUserRspUserInfoExtattrAttrsItem {
  name?: string;
  value?: string;
  type?: number;
  text?: GetLinkedcorpUserRspUserInfoExtattrAttrsItemText;
  web?: GetLinkedcorpUserRspUserInfoExtattrAttrsItemWeb;
}

export interface GetLinkedcorpUserRspUserInfoExtattrAttrsItemText {
  value?: string;
}

export interface GetLinkedcorpUserRspUserInfoExtattrAttrsItemWeb {
  url?: string;
  title?: string;
}

/** GetLinkedcorpUserSimplelistReq */
export interface GetLinkedcorpUserSimplelistReq {
  departmentId?: string;
  fetchChild?: boolean;
}

/** GetLinkedcorpUserSimplelistRsp */
export interface GetLinkedcorpUserSimplelistRsp {
  errcode?: number;
  errmsg?: string;
  userlist?: GetLinkedcorpUserSimplelistRspUserlist;
}

export interface GetLinkedcorpUserSimplelistRspUserlist {
  userid?: string;
  name?: string;
  department?: string[];
  corpid?: string;
}

/** GetLinkedcorpUserListReq */
export interface GetLinkedcorpUserListReq {
  /** 该字段用的是互联应用可见范围接口返回的department_ids参数，用的是 linkedid + ’/‘ + department_id 拼成的字符串 */
  departmentId?: string;
  fetchChild?: boolean;
}

/** GetLinkedcorpUserListRsp */
export interface GetLinkedcorpUserListRsp {
  errmsg?: string;
  errcode?: number;
  userlist?: GetLinkedcorpUserListRspUserlistItem[];
}

export interface GetLinkedcorpUserListRspUserlistItem {
  userid?: string;
  name?: string;
  mobile?: string;
  telephone?: string;
  email?: string;
  position?: string;
  corpid?: string;
  department?: string[];
  extattr?: GetLinkedcorpUserListRspUserlistItemExtattr;
}

export interface GetLinkedcorpUserListRspUserlistItemExtattr {
  attrs?: GetLinkedcorpUserListRspUserlistPropertiesItemsItem[];
}

export interface GetLinkedcorpUserListRspUserlistPropertiesItemsItem {
  name?: string;
  type?: number;
  text?: GetLinkedcorpUserListRspUserlistItemExtattrAttrsItemText;
  web?: GetLinkedcorpUserListRspUserlistItemExtattrAttrsItemWeb;
}

export interface GetLinkedcorpUserListRspUserlistItemExtattrAttrsItemText {
  value?: string;
}

export interface GetLinkedcorpUserListRspUserlistItemExtattrAttrsItemWeb {
  url?: string;
  title?: string;
}

/** GetLinkedcorpDepartmentListReq */
export interface GetLinkedcorpDepartmentListReq {
  /** 该字段用的是互联应用可见范围接口返回的department_ids参数，用的是 linkedid + ’/‘ + department_id 拼成的字符串 */
  departmentId?: string;
}

/** GetLinkedcorpDepartmentListRsp */
export interface GetLinkedcorpDepartmentListRsp {
  errcode?: number;
  errmsg?: string;
  departmentList?: GetLinkedcorpDepartmentListRspDepartmentListItem[];
}

export interface GetLinkedcorpDepartmentListRspDepartmentListItem {
  departmentId?: number;
  departmentName?: string;
  parentid?: string;
  order?: number;
}

/** BatchSyncuserReq */
export interface BatchSyncuserReq {
  mediaId?: string;
  toInvite?: boolean;
  callback?: BatchSyncuserReqCallback;
}

export interface BatchSyncuserReqCallback {
  url?: string;
  token?: string;
  encodingaeskey?: string;
}

/** BatchSyncuserRsp */
export interface BatchSyncuserRsp {
  errmsg?: string;
  errcode?: number;
  jonid?: string;
}

/** BatchReplaceuserReq */
export interface BatchReplaceuserReq {
  mediaId?: string;
  toInvite?: boolean;
  callback?: BatchReplaceuserReqCallback;
}

export interface BatchReplaceuserReqCallback {
  url?: string;
  token?: string;
  encodingaeskey?: string;
}

/** BatchReplaceuserRsp */
export interface BatchReplaceuserRsp {
  errcode?: number;
  errmsg?: string;
  jobid?: string;
}

/** BatchReplacepartyReq */
export interface BatchReplacepartyReq {
  mediaId?: string;
  toInvite?: boolean;
  callback?: BatchReplacepartyReqCallback;
}

export interface BatchReplacepartyReqCallback {
  url?: string;
  token?: string;
  encodingaeskey?: string;
}

/** BatchReplacepartyRsp */
export interface BatchReplacepartyRsp {
  errmsg?: string;
  errcode?: number;
  jobid?: string;
}

/** BatchGetresultRsp */
export interface BatchGetresultRsp {
  errmsg?: string;
  errcode?: number;
  status?: number;
  type?: string;
  total?: number;
  percentage?: number;
  result?: BatchGetresultRspResultItem[];
}

export interface BatchGetresultRspResultItem {
  userid?: string;
  errmsg?: string;
  errcode?: number;
  action?: number;
  partyid?: number;
}

/** GetServiceProviderTokenReq */
export interface GetServiceProviderTokenReq {
  corpid?: string;
  providerSecret?: string;
}

/** GetServiceProviderTokenRsp */
export interface GetServiceProviderTokenRsp {
  providerAccessToken?: string;
  expiresIn?: number;
}

/** GetServiceSuiteTokenReq */
export interface GetServiceSuiteTokenReq {
  suiteId?: string;
  suiteSecret?: string;
  suiteTicket?: string;
}

/** GetServiceSuiteTokenRsp */
export interface GetServiceSuiteTokenRsp {
  errmsg?: string;
  errcode?: number;
  suiteAccessToken?: string;
  expiresIn?: number;
}

/** GetServicePreAuthCodeRsp */
export interface GetServicePreAuthCodeRsp {
  errmsg?: string;
  errcode?: number;
  preAuthCode?: string;
  expiresIn?: number;
}

/** SetServiceSessionInfoReq */
export interface SetServiceSessionInfoReq {
  preAuthCode?: string;
  sessionInfo?: SetServiceSessionInfoReqSessionInfo;
}

export interface SetServiceSessionInfoReqSessionInfo {
  /** 允许进行授权的应用id，如1、2、3， 不填或者填空数组都表示允许授权套件内所有应用（仅旧的多应用套件可传此参数，新开发者可忽略） */
  appid?: number[];
  /** 授权类型：0 正式授权， 1 测试授权。 默认值为0。注意，请确保应用在正式发布后的授权类型为“正式授权” */
  authType?: number;
}

/** GetServicePermanentCodeReq */
export interface GetServicePermanentCodeReq {
  authCode?: string;
}

/** GetServicePermanentCodeRsp */
export interface GetServicePermanentCodeRsp {
  errmsg?: string;
  errcode?: number;
  accessToken?: string;
  expiresIn?: number;
  permanentCode?: string;
  dealerCorpInfo?: GetServicePermanentCodeRspDealerCorpInfo;
  authCorpInfo?: GetServicePermanentCodeRspAuthCorpInfo;
  authInfo?: GetServicePermanentCodeRspAuthInfoItem[];
  authUserInfo?: GetServicePermanentCodeRspAuthUserInfo;
  registerCodeInfo?: GetServicePermanentCodeRspRegisterCodeInfo;
}

export interface GetServicePermanentCodeRspDealerCorpInfo {
  corpid?: string;
  corpName?: string;
}

export interface GetServicePermanentCodeRspAuthCorpInfo {
  corpid?: string;
  corpName?: string;
  corpType?: string;
  corpSquareLogoUrl?: string;
  corpUserMax?: number;
  corpAgentMax?: number;
  corpFullName?: string;
  verifiedEndTime?: number;
  subjectType?: number;
  corpWxqrcode?: string;
  corpScale?: string;
  corpIndustry?: string;
  corpSubIndustry?: string;
  location?: string;
}

export interface GetServicePermanentCodeRspAuthInfoItem {
  agentid?: number;
  name?: string;
  roundLogoUrl?: string;
  squareLogoUrl?: string;
  appid?: number;
  authMode?: number;
  privilege?: GetServicePermanentCodeRspAuthInfoItemPrivilege;
  sharedFrom?: GetServicePermanentCodeRspAuthInfoItemSharedFrom;
}

export interface GetServicePermanentCodeRspAuthInfoItemPrivilege {
  /** 权限等级。1:通讯录基本信息只读2:通讯录全部信息只读3:通讯录全部信息读写4:单个基本信息只读5:通讯录全部信息只写 */
  level?: number;
  allowParty?: number[];
  allowUser?: string[];
  allowTag?: number[];
  extraParty?: number[];
  extraUser?: string[];
  extraTag?: number[];
}

export interface GetServicePermanentCodeRspAuthInfoItemSharedFrom {
  corpid?: string;
}

export interface GetServicePermanentCodeRspAuthUserInfo {
  userid?: string;
  openUserid?: string;
  /** 授权管理员的name，可能为空（企业互联由上级企业共享第三方应用给下级时，不返回授权的管理员信息） */
  name?: string;
  avatar?: string;
}

export interface GetServicePermanentCodeRspRegisterCodeInfo {
  registerCode?: string;
  templateId?: string;
  state?: string;
}

/** GetServiceAuthInfoReq */
export interface GetServiceAuthInfoReq {
  authCorpid?: string;
  permanentCode?: string;
}

/** GetServiceAuthInfoRsp */
export interface GetServiceAuthInfoRsp {
  errmsg?: string;
  errcode?: number;
  expiresIn?: number;
  permanentCode?: string;
  dealerCorpInfo?: GetServiceAuthInfoRspDealerCorpInfo;
  authInfo?: GetServiceAuthInfoRspAuthInfoItem[];
}

export interface GetServiceAuthInfoRspDealerCorpInfo {
  corpid?: string;
  corpName?: string;
  authCorpInfo?: GetServiceAuthInfoRspDealerCorpInfoAuthCorpInfo;
}

export interface GetServiceAuthInfoRspDealerCorpInfoAuthCorpInfo {
  corpid?: string;
  corpName?: string;
  corpType?: string;
  corpSquareLogoUrl?: string;
  corpUserMax?: number;
  corpAgentMax?: number;
  corpFullName?: string;
  verifiedEndTime?: number;
  subjectType?: number;
  corpWxqrcode?: string;
  corpScale?: string;
  corpIndustry?: string;
  corpSubIndustry?: string;
  location?: string;
}

export interface GetServiceAuthInfoRspAuthInfoItem {
  agentid?: number;
  name?: string;
  roundLogoUrl?: string;
  squareLogoUrl?: string;
  appid?: number;
  authMode?: number;
  privilege?: GetServiceAuthInfoRspAuthInfoItemPrivilege;
  sharedFrom?: GetServiceAuthInfoRspAuthInfoItemSharedFrom;
}

export interface GetServiceAuthInfoRspAuthInfoItemPrivilege {
  /** 权限等级。1:通讯录基本信息只读2:通讯录全部信息只读3:通讯录全部信息读写4:单个基本信息只读5:通讯录全部信息只写 */
  level?: number;
  allowParty?: number[];
  allowUser?: string[];
  allowTag?: number[];
  extraParty?: number[];
  extraUser?: string[];
  extraTag?: number[];
}

export interface GetServiceAuthInfoRspAuthInfoItemSharedFrom {
  corpid?: string;
}

/** GetServiceCorpTokenReq */
export interface GetServiceCorpTokenReq {
  /** 授权方corpid */
  authCorpid?: string;
  /** 永久授权码，通过get_permanent_code获取 */
  permanentCode?: string;
}

/** GetServiceCorpTokenRsp */
export interface GetServiceCorpTokenRsp {
  errmsg?: string;
  errcode?: number;
  accessToken?: string;
  expiresIn?: number;
}

/** GetServiceAdminListReq */
export interface GetServiceAdminListReq {
  authCorpid?: string;
  agentid?: number;
}

/** GetServiceAdminListRsp */
export interface GetServiceAdminListRsp {
  errmsg?: string;
  errcode?: number;
  admin?: GetServiceAdminListRspAdminItem[];
}

export interface GetServiceAdminListRspAdminItem {
  userid?: string;
  openUserid?: string;
  authType?: number;
}

/** GetAgentReq */
export interface GetAgentRsp {
  errcode?: number;
  errmsg?: string;
  agentid?: number;
  name?: string;
  squareLogoUrl?: string;
  description?: string;
  close?: number;
  redirectDomain?: string;
  reportLocationFlag?: number;
  isreportenter?: number;
  homeUrl?: string;
  allowUserinfos?: GetAgentRspAllowUserinfos;
  allowPartys?: GetAgentRspAllowPartys;
  allowTags?: GetAgentRspAllowTags;
}

export interface GetAgentRspAllowUserinfos {
  user?: GetAgentRspAllowUserinfosUserItem[];
}

export interface GetAgentRspAllowUserinfosUserItem {
  userid?: string;
}

export interface GetAgentRspAllowPartys {
  partyid?: number[];
}

export interface GetAgentRspAllowTags {
  tagid?: number[];
}

/** GetAgentListRsp */
export interface GetAgentListRsp {
  errcode?: number;
  errmsg?: string;
  agentlist?: GetAgentListRspAgentlistItem[];
}

export interface GetAgentListRspAgentlistItem {
  name?: string;
  agentid?: number;
  squareLogoUrl?: string;
}

/** SetAgentReq */
export interface SetAgentReq {
  agentid?: number;
  reportLocationFlag?: number;
  logoMediaid?: string;
  name?: string;
  description?: string;
  redirectDomain?: string;
  isreportenter?: number;
  homeUrl?: string;
}

/** SetAgentRsp */
export interface SetAgentRsp {
  errcode?: number;
  errmsg?: string;
}

/** CreateMenuReq */
export interface CreateMenuReq {
  button?: CreateMenuReqButtonItem[];
}

export interface CreateMenuReqButtonItem {
  type?: string;
  name?: string;
  key?: string;
  subButton?: CreateMenuReqButtonPropertiesItemsItem[];
}

export interface CreateMenuReqButtonPropertiesItemsItem {
  type?: string;
  name?: string;
  key?: string;
  pagepath?: string;
  appid?: string;
}

/** CreateMenuRsp */
export interface CreateMenuRsp {
  errcode?: number;
  errmsg?: string;
}

/** GetMenuRsp */
export interface GetMenuRsp {
  errmsg?: string;
  errcode?: number;
  button?: GetMenuRspButtonItem[];
}

export interface GetMenuRspButtonItem {
  type?: string;
  name?: string;
  key?: string;
  subButton?: GetMenuRspButtonPropertiesItemsItem[];
}

export interface GetMenuRspButtonPropertiesItemsItem {
  type?: string;
  name?: string;
  key?: string;
  pagepath?: string;
  appid?: string;
}

/** GetServicePreAuthCodeReq */
export interface GetServicePreAuthCodeReq {
  corpid?: string;
  providerSecret?: string;
}

/** BatchGetresultUser */
export interface BatchGetresultUser {
  userid?: string;
  errcode?: number;
  errmsg?: string;
}

/** BatchGetresultParty */
export interface BatchGetresultParty {
  action?: number;
  partyid?: number;
  errcode?: number;
  errmsg?: string;
}

/** LinkedcorpUserInfoAttrText */
export interface LinkedcorpUserInfoAttrText {
  name?: string;
  value?: string;
  type?: number;
  text?: LinkedcorpUserInfoAttrTextText;
}

export interface LinkedcorpUserInfoAttrTextText {
  value?: string;
}

/** LinkedcorpUserInfoAttrWeb */
export interface LinkedcorpUserInfoAttrWeb {
  name?: string;
  type?: number;
  web?: LinkedcorpUserInfoAttrWebWeb;
}

export interface LinkedcorpUserInfoAttrWebWeb {
  url?: string;
  title?: string;
}

export interface GroupMsgImage {
  msgtype?: string;
  image?: GroupMsgImageImage;
}

export interface GroupMsgImageImage {
  mediaId?: string;
  picUrl?: string;
}

export interface GroupMsgLink {
  msgtype?: string;
  link?: GroupMsgLinkLink;
}

export interface GroupMsgLinkLink {
  title?: string;
  picurl?: string;
  desc?: string;
  url?: string;
}

export interface GroupMsgMiniprogram {
  msgtype?: string;
  miniprogram?: GroupMsgMiniprogramMiniprogram;
}

export interface GroupMsgMiniprogramMiniprogram {
  title?: string;
  picMediaId?: string;
  appid?: string;
  page?: string;
}

export interface GroupMsgVideo {
  msgtype?: string;
  video?: GroupMsgVideoVideo;
}

export interface GroupMsgVideoVideo {
  mediaId?: string;
}

export interface BatchUserFollowInfo {
  followInfo?: BatchUserFollowInfoFollowInfo;
}

export interface BatchUserFollowInfoFollowInfo {
  remark?: string;
  description?: string;
  createtime?: number;
  tagId?: string[];
  remarkCorpName?: string;
  remarkMobiles?: string[];
  operUserid?: string;
  addWay?: number;
}

export interface ProfileMiniprogram {
  type?: number;
  name?: string;
  miniprogram?: ProfileMiniprogramMiniprogram;
}

export interface ProfileMiniprogramMiniprogram {
  appid?: string;
  pagepath?: string;
  title?: string;
}

export interface ExternalContact {
  externalContact?: ExternalContactExternalContact;
}

export interface ExternalContactExternalContact {
  externalUserid?: string;
  name?: string;
  position?: string;
  avatar?: string;
  corpName?: string;
  corpFullName?: string;
  type?: number;
  gender?: number;
  unionid?: string;
  externalProfile?: ExternalContactExternalProfile;
}

export interface ExternalContactExternalProfile {
  externalAttr?: ExternalContactExternalProfileExternalAttrItem[];
}

export interface ExternalContactExternalProfileExternalAttrItem {
  type?: number;
  name?: string;
  web?: ExternalContactExternalProfileExternalAttrItemWeb;
  text?: ExternalContactExternalProfileExternalAttrItemText;
  miniprogram?: ExternalContactExternalProfileExternalAttrItemMiniprogram;
}

export interface ExternalContactExternalProfileExternalAttrItemWeb {
  url?: string;
  title?: string;
}

export interface ExternalContactExternalProfileExternalAttrItemText {
  value?: string;
}

export interface ExternalContactExternalProfileExternalAttrItemMiniprogram {
  appid?: string;
  pagepath?: string;
  title?: string;
}

export interface ProfileWeb {
  type?: number;
  name?: string;
  web?: ProfileWebWeb;
}

export interface ProfileWebWeb {
  url?: string;
  title?: string;
}

export interface ProfileText {
  type?: number;
  name?: string;
  text?: ProfileTextText;
}

export interface ProfileTextText {
  value?: string;
}

export interface ContactFollowUser {
  userid?: string;
  remark?: string;
  description?: string;
  createtime?: number;
  remarkCorpName?: string;
  operUserid?: string;
  addWay?: number;
  state?: string;
  remarkMobiles?: string[];
  tags?: ContactFollowUserTagsItem[];
}

export interface ContactFollowUserTagsItem {
  groupName?: string;
  tagName?: string;
  tagId?: string;
  type?: number;
}

export interface TagUserInfo {
  userid?: string;
  name?: string;
}

export interface FileMsg {
  mediaId?: string;
}

export interface PathsDyq687MediaUploadPostRequestbodyContentMultipartFormDataSchema {
  filename?: coreRestPipeline.RequestBodyType;
}

export interface Paths1661VofMediaUploadimgPostRequestbodyContentMultipartFormDataSchema {
  filename: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface AuthGetTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getToken operation. */
export type AuthGetTokenResponse = TokenRsp;

/** Optional parameters. */
export interface AuthGetApiDomainIpOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getApiDomainIp operation. */
export type AuthGetApiDomainIpResponse = GetApiDomainIpRsp;

/** Optional parameters. */
export interface UsersCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type UsersCreateResponse = BaseResponse;

/** Optional parameters. */
export interface UsersGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type UsersGetResponse = GetUserRsp;

/** Optional parameters. */
export interface UsersUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type UsersUpdateResponse = BaseResponse;

/** Optional parameters. */
export interface UsersDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delete operation. */
export type UsersDeleteResponse = BaseResponse;

/** Optional parameters. */
export interface UsersDeleteBatchOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteBatch operation. */
export type UsersDeleteBatchResponse = BaseResponse;

/** Optional parameters. */
export interface UsersGetDepartmentSimplelistOptionalParams
  extends coreClient.OperationOptions {
  fetchChild?: number;
}

/** Contains response data for the getDepartmentSimplelist operation. */
export type UsersGetDepartmentSimplelistResponse = SimplelistRsp;

/** Optional parameters. */
export interface UsersGetDepartmentUserDetailOptionalParams
  extends coreClient.OperationOptions {
  /** 1/0：是否递归获取子部门下面的成员 */
  fetchChild?: number;
}

/** Contains response data for the getDepartmentUserDetail operation. */
export type UsersGetDepartmentUserDetailResponse = ListUserRsp;

/** Optional parameters. */
export interface UsersConvertUseridToOpenidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the convertUseridToOpenid operation. */
export type UsersConvertUseridToOpenidResponse = ConvertToOpenidRsp;

/** Optional parameters. */
export interface UsersAuthsuccOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the authsucc operation. */
export type UsersAuthsuccResponse = BaseResponse;

/** Optional parameters. */
export interface UsersInviteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the invite operation. */
export type UsersInviteResponse = InviteRsp;

/** Optional parameters. */
export interface UsersGetActiveStatOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getActiveStat operation. */
export type UsersGetActiveStatResponse = GetActiveStatRsp;

/** Optional parameters. */
export interface UsersSyncBatchOptionalParams
  extends coreClient.OperationOptions {
  /** BatchSyncuserReq */
  body?: BatchSyncuserReq;
}

/** Contains response data for the syncBatch operation. */
export type UsersSyncBatchResponse = BatchSyncuserRsp;

/** Optional parameters. */
export interface UsersReplaceBatchOptionalParams
  extends coreClient.OperationOptions {
  /** BatchReplaceuserReq */
  body?: BatchReplaceuserReq;
}

/** Contains response data for the replaceBatch operation. */
export type UsersReplaceBatchResponse = BatchReplaceuserRsp;

/** Optional parameters. */
export interface CorpsGetJoinQrcodeOptionalParams
  extends coreClient.OperationOptions {
  sizeType?: string;
}

/** Contains response data for the getJoinQrcode operation. */
export type CorpsGetJoinQrcodeResponse = GetJoinQrcodeRsp;

/** Optional parameters. */
export interface MessageSendOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the send operation. */
export type MessageSendResponse = SendMessageRsp;

/** Optional parameters. */
export interface MessageUpdateTaskcardOptionalParams
  extends coreClient.OperationOptions {
  /** UpdateTaskcardReq */
  body?: UpdateTaskcardReq;
}

/** Contains response data for the updateTaskcard operation. */
export type MessageUpdateTaskcardResponse = UpdateTaskcardRsp;

/** Optional parameters. */
export interface TagsCreateOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type TagsCreateResponse = CreateTagRsp;

/** Optional parameters. */
export interface TagsUpdateOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type TagsUpdateResponse = BaseResponse;

/** Optional parameters. */
export interface TagsDeleteOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the delete operation. */
export type TagsDeleteResponse = BaseResponse;

/** Optional parameters. */
export interface TagsAddUsersOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the addUsers operation. */
export type TagsAddUsersResponse = BaseResponse;

/** Optional parameters. */
export interface TagsDeleteUsersOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteUsers operation. */
export type TagsDeleteUsersResponse = BaseResponse;

/** Optional parameters. */
export interface TagsGetUsersOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getUsers operation. */
export type TagsGetUsersResponse = GetTagUsersRsp;

/** Optional parameters. */
export interface TagsGetListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getList operation. */
export type TagsGetListResponse = GetTagListRsp;

/** Optional parameters. */
export interface ExternalcontactsGetFollowUserListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getFollowUserList operation. */
export type ExternalcontactsGetFollowUserListResponse = GetFollowUserListRsp;

/** Optional parameters. */
export interface ExternalcontactsAddContactWayOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the addContactWay operation. */
export type ExternalcontactsAddContactWayResponse = AddContactWayRsp;

/** Optional parameters. */
export interface ExternalcontactsGetContactWayOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getContactWay operation. */
export type ExternalcontactsGetContactWayResponse = GetContactWayRsp;

/** Optional parameters. */
export interface ExternalcontactsUpdateContactWayOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateContactWay operation. */
export type ExternalcontactsUpdateContactWayResponse = BaseResponse;

/** Optional parameters. */
export interface ExternalcontactsDelContactWayOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delContactWay operation. */
export type ExternalcontactsDelContactWayResponse = BaseResponse;

/** Optional parameters. */
export interface ExternalcontactsCloseTempChatOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the closeTempChat operation. */
export type ExternalcontactsCloseTempChatResponse = BaseResponse;

/** Optional parameters. */
export interface ExternalcontactsGetListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getList operation. */
export type ExternalcontactsGetListResponse = GetExternalContactListRsp;

/** Optional parameters. */
export interface ExternalcontactsGetDetailOptionalParams
  extends coreClient.OperationOptions {
  cursor?: string;
}

/** Contains response data for the getDetail operation. */
export type ExternalcontactsGetDetailResponse = GetExternalContactDetailRsp;

/** Optional parameters. */
export interface ExternalcontactsGetBatchUserOptionalParams
  extends coreClient.OperationOptions {
  /** GetExternalContactBatchUserReq */
  body?: GetExternalContactBatchUserReq;
}

/** Contains response data for the getBatchUser operation. */
export type ExternalcontactsGetBatchUserResponse = GetExternalContactBatchUserRsp;

/** Optional parameters. */
export interface ExternalcontactsRemarkOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the remark operation. */
export type ExternalcontactsRemarkResponse = BaseResponse;

/** Optional parameters. */
export interface ExternalcontactsGetTagListOptionalParams
  extends coreClient.OperationOptions {
  /** GetCorpTagListReq */
  body?: GetCorpTagListReq;
}

/** Contains response data for the getTagList operation. */
export type ExternalcontactsGetTagListResponse = GetCorpTagListRsp;

/** Optional parameters. */
export interface ExternalcontactsAddTagOptionalParams
  extends coreClient.OperationOptions {
  /** AddCorpTagReq */
  body?: AddCorpTagReq;
}

/** Contains response data for the addTag operation. */
export type ExternalcontactsAddTagResponse = AddCorpTagRsp;

/** Optional parameters. */
export interface ExternalcontactsEditTagOptionalParams
  extends coreClient.OperationOptions {
  /** EditCorpTagReq */
  body?: EditCorpTagReq;
}

/** Contains response data for the editTag operation. */
export type ExternalcontactsEditTagResponse = BaseResponse;

/** Optional parameters. */
export interface ExternalcontactsDelTagOptionalParams
  extends coreClient.OperationOptions {
  /** DelCorpTagReq */
  body?: DelCorpTagReq;
}

/** Contains response data for the delTag operation. */
export type ExternalcontactsDelTagResponse = BaseResponse;

/** Optional parameters. */
export interface ExternalcontactsMarkTagOptionalParams
  extends coreClient.OperationOptions {
  /** MarkCorpTagReq */
  body?: MarkCorpContactTagReq;
}

/** Contains response data for the markTag operation. */
export type ExternalcontactsMarkTagResponse = BaseResponse;

/** Optional parameters. */
export interface ExternalcontactsTransferCustomerOptionalParams
  extends coreClient.OperationOptions {
  /** TransferCustomerReq */
  body?: TransferCustomerReq;
}

/** Contains response data for the transferCustomer operation. */
export type ExternalcontactsTransferCustomerResponse = TransferCustomerRsp;

/** Optional parameters. */
export interface ExternalcontactsTransferResultOptionalParams
  extends coreClient.OperationOptions {
  /** GetTransferResultReq */
  body?: GetTransferResultReq;
}

/** Contains response data for the transferResult operation. */
export type ExternalcontactsTransferResultResponse = GetTransferResultRsp;

/** Optional parameters. */
export interface ExternalcontactsGetUnassignedListOptionalParams
  extends coreClient.OperationOptions {
  /** GetUnassignedListReq */
  body?: GetUnassignedListReq;
}

/** Contains response data for the getUnassignedList operation. */
export type ExternalcontactsGetUnassignedListResponse = GetUnassignedListRsp;

/** Optional parameters. */
export interface ExternalcontactsTransferResignedCustomerOptionalParams
  extends coreClient.OperationOptions {
  /** ResignedTransferCustomerReq */
  body?: ResignedTransferCustomerReq;
}

/** Contains response data for the transferResignedCustomer operation. */
export type ExternalcontactsTransferResignedCustomerResponse = ResignedTransferCustomerRsp;

/** Optional parameters. */
export interface ExternalcontactsGetTransferResignedResultOptionalParams
  extends coreClient.OperationOptions {
  /** ResignedTransferResultReq */
  body?: ResignedTransferResultReq;
}

/** Contains response data for the getTransferResignedResult operation. */
export type ExternalcontactsGetTransferResignedResultResponse = ResignedTransferResultRsp;

/** Optional parameters. */
export interface ExternalcontactsConvertOpengidToChatidOptionalParams
  extends coreClient.OperationOptions {
  /** ConvertOpengidToChatidReq */
  body?: ConvertOpengidToChatidReq;
}

/** Contains response data for the convertOpengidToChatid operation. */
export type ExternalcontactsConvertOpengidToChatidResponse = ConvertOpengidToChatidRsp;

/** Optional parameters. */
export interface ExternalcontactsGetMomentListOptionalParams
  extends coreClient.OperationOptions {
  /** GetMomentListReq */
  body?: GetMomentListReq;
}

/** Contains response data for the getMomentList operation. */
export type ExternalcontactsGetMomentListResponse = GetMomentListRsp;

/** Optional parameters. */
export interface ExternalcontactsGetMomentTaskOptionalParams
  extends coreClient.OperationOptions {
  /** GetMomentTaskReq */
  body?: GetMomentTaskReq;
}

/** Contains response data for the getMomentTask operation. */
export type ExternalcontactsGetMomentTaskResponse = GetMomentTaskRsp;

/** Optional parameters. */
export interface ExternalcontactsGetMomentCustomerListOptionalParams
  extends coreClient.OperationOptions {
  /** GetMomentCustomerListReq */
  body?: GetMomentCustomerListReq;
}

/** Contains response data for the getMomentCustomerList operation. */
export type ExternalcontactsGetMomentCustomerListResponse = GetMomentCustomerListRsp;

/** Optional parameters. */
export interface ExternalcontactsGetMomentSendResultOptionalParams
  extends coreClient.OperationOptions {
  /** GetMomentSendResultReq */
  body?: GetMomentSendResultReq;
}

/** Contains response data for the getMomentSendResult operation. */
export type ExternalcontactsGetMomentSendResultResponse = GetMomentSendResultRsp;

/** Optional parameters. */
export interface ExternalcontactsGetMomentCommentsOptionalParams
  extends coreClient.OperationOptions {
  /** GetMomentCommentsReq */
  body?: GetMomentCommentsReq;
}

/** Contains response data for the getMomentComments operation. */
export type ExternalcontactsGetMomentCommentsResponse = GetMomentCommentsRsp;

/** Optional parameters. */
export interface ExternalcontactsAddMsgTemplateOptionalParams
  extends coreClient.OperationOptions {
  /** AddMsgTemplateReq */
  body?: AddMsgTemplateReq;
}

/** Contains response data for the addMsgTemplate operation. */
export type ExternalcontactsAddMsgTemplateResponse = AddMsgTemplateRsp;

/** Optional parameters. */
export interface ExternalcontactsGetGroupmsgListV2OptionalParams
  extends coreClient.OperationOptions {
  /** GetGroupmsgListV2Req */
  body?: GetGroupmsgListV2Req;
}

/** Contains response data for the getGroupmsgListV2 operation. */
export type ExternalcontactsGetGroupmsgListV2Response = GetGroupmsgListV2Rsp;

/** Optional parameters. */
export interface ExternalcontactsGetGroupmsgTaskOptionalParams
  extends coreClient.OperationOptions {
  /** GetGroupmsgTaskReq */
  body?: GetGroupmsgTaskReq;
}

/** Contains response data for the getGroupmsgTask operation. */
export type ExternalcontactsGetGroupmsgTaskResponse = GetGroupmsgTaskRsp;

/** Optional parameters. */
export interface ExternalcontactsGetGroupmsgSendResultOptionalParams
  extends coreClient.OperationOptions {
  /** GetGroupmsgSendResultReq */
  body?: GetGroupmsgSendResultReq;
}

/** Contains response data for the getGroupmsgSendResult operation. */
export type ExternalcontactsGetGroupmsgSendResultResponse = GetGroupmsgSendResultRsp;

/** Optional parameters. */
export interface ExternalcontactsSendWelcomeMsgOptionalParams
  extends coreClient.OperationOptions {
  /** SendWelcomeMsgReq */
  body?: SendWelcomeMsgReq;
}

/** Contains response data for the sendWelcomeMsg operation. */
export type ExternalcontactsSendWelcomeMsgResponse = SendWelcomeMsgRsp;

/** Optional parameters. */
export interface ExternalcontactsAddGroupWelcomeTemplateOptionalParams
  extends coreClient.OperationOptions {
  /** AddGroupWelcomeTemplateReq */
  body?: AddGroupWelcomeTemplateReq;
}

/** Contains response data for the addGroupWelcomeTemplate operation. */
export type ExternalcontactsAddGroupWelcomeTemplateResponse = AddGroupWelcomeTemplateRsp;

/** Optional parameters. */
export interface ExternalcontactsGetUserBehaviorDataOptionalParams
  extends coreClient.OperationOptions {
  /** GetUserBehaviorDataReq */
  body?: GetUserBehaviorDataReq;
}

/** Contains response data for the getUserBehaviorData operation. */
export type ExternalcontactsGetUserBehaviorDataResponse = GetUserBehaviorDataRsp;

/** Optional parameters. */
export interface GroupchatsTransferOptionalParams
  extends coreClient.OperationOptions {
  /** GroupchatTransferReq */
  body?: GroupchatTransferReq;
}

/** Contains response data for the transfer operation. */
export type GroupchatsTransferResponse = GroupchatTransferRsp;

/** Optional parameters. */
export interface GroupchatsListOptionalParams
  extends coreClient.OperationOptions {
  /** GroupchatListReq */
  body?: GroupchatListReq;
}

/** Contains response data for the list operation. */
export type GroupchatsListResponse = GroupchatListRsp;

/** Optional parameters. */
export interface GroupchatsGetOptionalParams
  extends coreClient.OperationOptions {
  /** GetGroupchatReq */
  body?: GetGroupchatReq;
}

/** Contains response data for the get operation. */
export type GroupchatsGetResponse = GetGroupchatRsp;

/** Optional parameters. */
export interface GroupchatsGetStatisticOptionalParams
  extends coreClient.OperationOptions {
  /** GetGroupchatStatisticReq */
  body?: GetGroupchatStatisticReq;
}

/** Contains response data for the getStatistic operation. */
export type GroupchatsGetStatisticResponse = GetGroupchatStatisticRsp;

/** Optional parameters. */
export interface GroupchatGetStatisticGroupByDayOptionalParams
  extends coreClient.OperationOptions {
  /** GetGroupchatStatisticGroupByDayReq */
  body?: GetGroupchatStatisticGroupByDayReq;
}

/** Contains response data for the getStatisticGroupByDay operation. */
export type GroupchatGetStatisticGroupByDayResponse = GetGroupchatStatisticGroupByDayRsp;

/** Optional parameters. */
export interface MediasUploadOptionalParams
  extends coreClient.OperationOptions {
  filename?: coreRestPipeline.RequestBodyType;
}

/** Contains response data for the upload operation. */
export type MediasUploadResponse = MediaUploadRsp;

/** Optional parameters. */
export interface MediasUploadImgOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the uploadImg operation. */
export type MediasUploadImgResponse = MediaUploadImgRsp;

/** Optional parameters. */
export interface MediasGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type MediasGetResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface MediasGetJssdkOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getJssdk operation. */
export type MediasGetJssdkResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface AppchatsCreateOptionalParams
  extends coreClient.OperationOptions {
  /** CreateAppchatReq */
  body?: CreateAppchatReq;
}

/** Contains response data for the create operation. */
export type AppchatsCreateResponse = CreateAppchatRsp;

/** Optional parameters. */
export interface AppchatsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** UpdateAppchatReq */
  body?: UpdateAppchatReq;
}

/** Contains response data for the update operation. */
export type AppchatsUpdateResponse = BaseResponse;

/** Optional parameters. */
export interface AppchatsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AppchatsGetResponse = GetAppchatReq;

/** Optional parameters. */
export interface DepartmentsCreateOptionalParams
  extends coreClient.OperationOptions {
  /** CreateDepartmentReq */
  body?: CreateDepartmentReq;
}

/** Contains response data for the create operation. */
export type DepartmentsCreateResponse = CreateDepartmentRsp;

/** Optional parameters. */
export interface DepartmentsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** UpdateDepartmentReq */
  body?: UpdateDepartmentReq;
}

/** Contains response data for the update operation. */
export type DepartmentsUpdateResponse = BaseResponse;

/** Optional parameters. */
export interface DepartmentsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delete operation. */
export type DepartmentsDeleteResponse = BaseResponse;

/** Optional parameters. */
export interface DepartmentsListOptionalParams
  extends coreClient.OperationOptions {
  id?: number;
}

/** Contains response data for the list operation. */
export type DepartmentsListResponse = GetDepartmentListRsp;

/** Optional parameters. */
export interface DepartmentsReplaceBatchOptionalParams
  extends coreClient.OperationOptions {
  /** BatchReplacepartyReq */
  body?: BatchReplacepartyReq;
}

/** Contains response data for the replaceBatch operation. */
export type DepartmentsReplaceBatchResponse = BatchReplacepartyRsp;

/** Optional parameters. */
export interface DepartmentsGetBatchResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBatchResult operation. */
export type DepartmentsGetBatchResultResponse = BatchGetresultRsp;

/** Optional parameters. */
export interface LinkedcorpsPermListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the permList operation. */
export type LinkedcorpsPermListResponse = GetAgentPermListRsp;

/** Optional parameters. */
export interface LinkedcorpsGetUserOptionalParams
  extends coreClient.OperationOptions {
  /** GetLinkedcorpUserReq */
  body?: GetLinkedcorpUserReq;
}

/** Contains response data for the getUser operation. */
export type LinkedcorpsGetUserResponse = GetLinkedcorpUserRsp;

/** Optional parameters. */
export interface LinkedcorpsGetUserSimplelistOptionalParams
  extends coreClient.OperationOptions {
  /** GetLinkedcorpUserSimplelistReq */
  body?: GetLinkedcorpUserSimplelistReq;
}

/** Contains response data for the getUserSimplelist operation. */
export type LinkedcorpsGetUserSimplelistResponse = GetLinkedcorpUserSimplelistRsp;

/** Optional parameters. */
export interface LinkedcorpsGetUserListOptionalParams
  extends coreClient.OperationOptions {
  /** GetLinkedcorpUserListReq */
  body?: GetLinkedcorpUserListReq;
}

/** Contains response data for the getUserList operation. */
export type LinkedcorpsGetUserListResponse = GetLinkedcorpUserListRsp;

/** Optional parameters. */
export interface LinkedcorpsGetDepartmentListOptionalParams
  extends coreClient.OperationOptions {
  /** GetLinkedcorpDepartmentListReq */
  body?: GetLinkedcorpDepartmentListReq;
}

/** Contains response data for the getDepartmentList operation. */
export type LinkedcorpsGetDepartmentListResponse = GetLinkedcorpDepartmentListRsp;

/** Optional parameters. */
export interface ServicesGetProviderTokenOptionalParams
  extends coreClient.OperationOptions {
  /** GetServiceProviderTokenReq */
  body?: GetServiceProviderTokenReq;
}

/** Contains response data for the getProviderToken operation. */
export type ServicesGetProviderTokenResponse = GetServiceProviderTokenRsp;

/** Optional parameters. */
export interface ServicesGetSuiteTokenOptionalParams
  extends coreClient.OperationOptions {
  /** GetServiceSuiteTokenReq */
  body?: GetServiceSuiteTokenReq;
}

/** Contains response data for the getSuiteToken operation. */
export type ServicesGetSuiteTokenResponse = GetServiceSuiteTokenRsp;

/** Optional parameters. */
export interface ServicesGetPreAuthCodeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getPreAuthCode operation. */
export type ServicesGetPreAuthCodeResponse = GetServicePreAuthCodeRsp;

/** Optional parameters. */
export interface ServicesSetSessionInfoOptionalParams
  extends coreClient.OperationOptions {
  /** SetServiceSessionInfoReq */
  body?: SetServiceSessionInfoReq;
}

/** Contains response data for the setSessionInfo operation. */
export type ServicesSetSessionInfoResponse = BaseResponse;

/** Optional parameters. */
export interface ServicesGetPermanentCodeOptionalParams
  extends coreClient.OperationOptions {
  /** GetServicePermanentCodeReq */
  body?: GetServicePermanentCodeReq;
}

/** Contains response data for the getPermanentCode operation. */
export type ServicesGetPermanentCodeResponse = GetServicePermanentCodeRsp;

/** Optional parameters. */
export interface ServicesGetAuthInfoOptionalParams
  extends coreClient.OperationOptions {
  /** GetServiceAuthInfoReq */
  body?: GetServiceAuthInfoReq;
}

/** Contains response data for the getAuthInfo operation. */
export type ServicesGetAuthInfoResponse = GetServiceAuthInfoRsp;

/** Optional parameters. */
export interface ServicesGetCorpTokenOptionalParams
  extends coreClient.OperationOptions {
  /** GetServiceCorpTokenReq */
  body?: GetServiceCorpTokenReq;
}

/** Contains response data for the getCorpToken operation. */
export type ServicesGetCorpTokenResponse = GetServiceCorpTokenRsp;

/** Optional parameters. */
export interface ServicesGetAdminListOptionalParams
  extends coreClient.OperationOptions {
  /** GetServiceAdminListReq */
  body?: GetServiceAdminListReq;
}

/** Contains response data for the getAdminList operation. */
export type ServicesGetAdminListResponse = GetServiceAdminListRsp;

/** Optional parameters. */
export interface AgentsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AgentsGetResponse = GetAgentRsp;

/** Optional parameters. */
export interface AgentsListOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type AgentsListResponse = GetAgentListRsp;

/** Optional parameters. */
export interface AgentsSetModelOptionalParams
  extends coreClient.OperationOptions {
  /** SetAgentReq */
  body?: SetAgentReq;
}

/** Contains response data for the set operation. */
export type AgentsSetModelResponse = SetAgentRsp;

/** Optional parameters. */
export interface MenusCreateOptionalParams extends coreClient.OperationOptions {
  /** CreateMenuReq */
  body?: CreateMenuReq;
}

/** Contains response data for the create operation. */
export type MenusCreateResponse = CreateMenuRsp;

/** Optional parameters. */
export interface MenusGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type MenusGetResponse = GetMenuRsp;

/** Optional parameters. */
export interface MenusDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delete operation. */
export type MenusDeleteResponse = BaseResponse;

/** Optional parameters. */
export interface WeworkApiOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
