import {
  CreateUserReq,
  UsersCreateOptionalParams,
  UsersCreateResponse,
  UsersGetOptionalParams,
  UsersGetResponse,
  UpdateUserReq,
  UsersUpdateOptionalParams,
  UsersUpdateResponse,
  UsersDeleteOptionalParams,
  UsersDeleteResponse,
  BatchDeleteUserReq,
  UsersDeleteBatchOptionalParams,
  UsersDeleteBatchResponse,
  UsersGetDepartmentSimplelistOptionalParams,
  UsersGetDepartmentSimplelistResponse,
  UsersGetDepartmentUserDetailOptionalParams,
  UsersGetDepartmentUserDetailResponse,
  ConvertToOpenidReq,
  UsersConvertUseridToOpenidOptionalParams,
  UsersConvertUseridToOpenidResponse,
  UsersAuthsuccOptionalParams,
  UsersAuthsuccResponse,
  InviteReq,
  UsersInviteOptionalParams,
  UsersInviteResponse,
  UsersGetActiveStatOptionalParams,
  UsersGetActiveStatResponse,
  UsersSyncBatchOptionalParams,
  UsersSyncBatchResponse,
  UsersReplaceBatchOptionalParams,
  UsersReplaceBatchResponse
} from "../models";

/** Interface representing a Users. */
export interface Users {
  /**
   * 创建成员
   * @param accessToken
   * @param body CreateUserReq
   * @param options The options parameters.
   */
  create(
    accessToken: string,
    body: CreateUserReq,
    options?: UsersCreateOptionalParams
  ): Promise<UsersCreateResponse>;
  /**
   * 读取成员
   * @param accessToken
   * @param userid
   * @param options The options parameters.
   */
  get(
    accessToken: string,
    userid: string,
    options?: UsersGetOptionalParams
  ): Promise<UsersGetResponse>;
  /**
   * 更新成员
   * @param body UpdateUserReq
   * @param options The options parameters.
   */
  update(
    body: UpdateUserReq,
    options?: UsersUpdateOptionalParams
  ): Promise<UsersUpdateResponse>;
  /**
   * 删除成员
   * @param accessToken
   * @param userid
   * @param options The options parameters.
   */
  delete(
    accessToken: string,
    userid: string,
    options?: UsersDeleteOptionalParams
  ): Promise<UsersDeleteResponse>;
  /**
   * 批量删除成员
   * @param body BatchDeleteUserReq
   * @param options The options parameters.
   */
  deleteBatch(
    body: BatchDeleteUserReq,
    options?: UsersDeleteBatchOptionalParams
  ): Promise<UsersDeleteBatchResponse>;
  /**
   * 获取部门成员
   * @param accessToken
   * @param departmentId
   * @param options The options parameters.
   */
  getDepartmentSimplelist(
    accessToken: string,
    departmentId: number,
    options?: UsersGetDepartmentSimplelistOptionalParams
  ): Promise<UsersGetDepartmentSimplelistResponse>;
  /**
   * 获取部门成员详情
   * @param accessToken 调用接口凭证
   * @param departmentId 获取的部门id
   * @param options The options parameters.
   */
  getDepartmentUserDetail(
    accessToken: string,
    departmentId: number,
    options?: UsersGetDepartmentUserDetailOptionalParams
  ): Promise<UsersGetDepartmentUserDetailResponse>;
  /**
   * userid转openid
   * @param accessToken
   * @param body
   * @param options The options parameters.
   */
  convertUseridToOpenid(
    accessToken: string,
    body: ConvertToOpenidReq,
    options?: UsersConvertUseridToOpenidOptionalParams
  ): Promise<UsersConvertUseridToOpenidResponse>;
  /**
   * 二次验证
   * @param accessToken
   * @param userid
   * @param options The options parameters.
   */
  authsucc(
    accessToken: string,
    userid: string,
    options?: UsersAuthsuccOptionalParams
  ): Promise<UsersAuthsuccResponse>;
  /**
   * 邀请成员
   * @param accessToken
   * @param body InviteReq
   * @param options The options parameters.
   */
  invite(
    accessToken: string,
    body: InviteReq,
    options?: UsersInviteOptionalParams
  ): Promise<UsersInviteResponse>;
  /**
   * 获取企业活跃成员数
   * @param accessToken
   * @param dateParam
   * @param options The options parameters.
   */
  getActiveStat(
    accessToken: string,
    dateParam: string,
    options?: UsersGetActiveStatOptionalParams
  ): Promise<UsersGetActiveStatResponse>;
  /**
   * 本接口以userid（帐号）为主键，增量更新企业微信通讯录成员。请先下载CSV模板(下载增量更新成员模版)，根据需求填写文件内容。注意事项：1.模板中的部门需填写部门ID，多个部门用分号分隔，部门ID必须为数字，根部门的部门id默认为1;2.文件中存在、通讯录中也存在的成员，更新成员在文件中指定的字段值;3.文件中存在、通讯录中不存在的成员，执行添加操作;4.通讯录中存在、文件中不存在的成员，保持不变;5.成员字段更新规则：可自行添加扩展字段。文件中有指定的字段，以指定的字段值为准；文件中没指定的字段，不更新;
   * @param accessToken
   * @param options The options parameters.
   */
  syncBatch(
    accessToken: string,
    options?: UsersSyncBatchOptionalParams
  ): Promise<UsersSyncBatchResponse>;
  /**
   * 本接口以userid为主键，全量覆盖企业的通讯录成员，任务完成后企业的通讯录成员与提交的文件完全保持一致。请先下载CSV文件(下载全量覆盖成员模版)，根据需求填写文件内容。注意事项：1.模板中的部门需填写部门ID，多个部门用分号分隔，部门ID必须为数字，根部门的部门id默认为1;2.文件中存在、通讯录中也存在的成员，完全以文件为准;3.文件中存在、通讯录中不存在的成员，执行添加操作;4.通讯录中存在、文件中不存在的成员，执行删除操作。出于安全考虑，下面两种情形系统将中止导入并返回相应的错误码。4.1.需要删除的成员多于50人，且多于现有人数的20%以上;4.2.需要删除的成员少于50人，且多于现有人数的80%以上5.成员字段更新规则：可自行添加扩展字段。文件中有指定的字段，以指定的字段值为准；文件中没指定的字段，不更新
   * @param accessToken
   * @param options The options parameters.
   */
  replaceBatch(
    accessToken: string,
    options?: UsersReplaceBatchOptionalParams
  ): Promise<UsersReplaceBatchResponse>;
}
