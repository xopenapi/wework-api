import {
  LinkedcorpsPermListOptionalParams,
  LinkedcorpsPermListResponse,
  LinkedcorpsGetUserOptionalParams,
  LinkedcorpsGetUserResponse,
  LinkedcorpsGetUserSimplelistOptionalParams,
  LinkedcorpsGetUserSimplelistResponse,
  LinkedcorpsGetUserListOptionalParams,
  LinkedcorpsGetUserListResponse,
  LinkedcorpsGetDepartmentListOptionalParams,
  LinkedcorpsGetDepartmentListResponse
} from "../models";

/** Interface representing a Linkedcorps. */
export interface Linkedcorps {
  /**
   * 本接口只返回互联企业中非本企业内的成员和部门的信息，如果要获取本企业的可见范围，请调用“获取应用”接口
   * @param accessToken
   * @param options The options parameters.
   */
  permList(
    accessToken: string,
    options?: LinkedcorpsPermListOptionalParams
  ): Promise<LinkedcorpsPermListResponse>;
  /**
   * 获取互联企业成员详细信息
   * @param accessToken
   * @param options The options parameters.
   */
  getUser(
    accessToken: string,
    options?: LinkedcorpsGetUserOptionalParams
  ): Promise<LinkedcorpsGetUserResponse>;
  /**
   * 获取互联企业部门成员
   * @param accessToken
   * @param options The options parameters.
   */
  getUserSimplelist(
    accessToken: string,
    options?: LinkedcorpsGetUserSimplelistOptionalParams
  ): Promise<LinkedcorpsGetUserSimplelistResponse>;
  /**
   * 获取互联企业部门成员详情
   * @param accessToken
   * @param options The options parameters.
   */
  getUserList(
    accessToken: string,
    options?: LinkedcorpsGetUserListOptionalParams
  ): Promise<LinkedcorpsGetUserListResponse>;
  /**
   * 获取互联企业部门列表
   * @param accessToken
   * @param options The options parameters.
   */
  getDepartmentList(
    accessToken: string,
    options?: LinkedcorpsGetDepartmentListOptionalParams
  ): Promise<LinkedcorpsGetDepartmentListResponse>;
}
