import {
  CreateTagReq,
  TagsCreateOptionalParams,
  TagsCreateResponse,
  UpdateTagReq,
  TagsUpdateOptionalParams,
  TagsUpdateResponse,
  TagsDeleteOptionalParams,
  TagsDeleteResponse,
  AddTagUsersReq,
  TagsAddUsersOptionalParams,
  TagsAddUsersResponse,
  DeleteTagUsersReq,
  TagsDeleteUsersOptionalParams,
  TagsDeleteUsersResponse,
  TagsGetUsersOptionalParams,
  TagsGetUsersResponse,
  TagsGetListOptionalParams,
  TagsGetListResponse
} from "../models";

/** Interface representing a Tags. */
export interface Tags {
  /**
   * 创建企业内部标签
   * @param accessToken
   * @param body CreateTagReq
   * @param options The options parameters.
   */
  create(
    accessToken: string,
    body: CreateTagReq,
    options?: TagsCreateOptionalParams
  ): Promise<TagsCreateResponse>;
  /**
   * 更新内部标签名字
   * @param accessToken
   * @param body UpdateTagReq
   * @param options The options parameters.
   */
  update(
    accessToken: string,
    body: UpdateTagReq,
    options?: TagsUpdateOptionalParams
  ): Promise<TagsUpdateResponse>;
  /**
   * 删除企业内部标签
   * @param accessToken
   * @param tagid
   * @param options The options parameters.
   */
  delete(
    accessToken: string,
    tagid: number,
    options?: TagsDeleteOptionalParams
  ): Promise<TagsDeleteResponse>;
  /**
   * 增加标签成员
   * @param accessToken
   * @param body AddTagUsers
   * @param options The options parameters.
   */
  addUsers(
    accessToken: string,
    body: AddTagUsersReq,
    options?: TagsAddUsersOptionalParams
  ): Promise<TagsAddUsersResponse>;
  /**
   * 删除标签成员
   * @param accessToken
   * @param body DeleteTagUsersReq
   * @param options The options parameters.
   */
  deleteUsers(
    accessToken: string,
    body: DeleteTagUsersReq,
    options?: TagsDeleteUsersOptionalParams
  ): Promise<TagsDeleteUsersResponse>;
  /**
   * 获取标签成员
   * @param accessToken
   * @param tagid
   * @param options The options parameters.
   */
  getUsers(
    accessToken: string,
    tagid: string,
    options?: TagsGetUsersOptionalParams
  ): Promise<TagsGetUsersResponse>;
  /**
   * 获取标签列表
   * @param accessToken
   * @param options The options parameters.
   */
  getList(
    accessToken: string,
    options?: TagsGetListOptionalParams
  ): Promise<TagsGetListResponse>;
}
