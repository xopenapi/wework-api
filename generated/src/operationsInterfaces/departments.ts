import {
  DepartmentsCreateOptionalParams,
  DepartmentsCreateResponse,
  DepartmentsUpdateOptionalParams,
  DepartmentsUpdateResponse,
  DepartmentsDeleteOptionalParams,
  DepartmentsDeleteResponse,
  DepartmentsListOptionalParams,
  DepartmentsListResponse,
  DepartmentsReplaceBatchOptionalParams,
  DepartmentsReplaceBatchResponse,
  DepartmentsGetBatchResultOptionalParams,
  DepartmentsGetBatchResultResponse
} from "../models";

/** Interface representing a Departments. */
export interface Departments {
  /**
   * 创建部门
   * @param accessToken
   * @param options The options parameters.
   */
  create(
    accessToken: string,
    options?: DepartmentsCreateOptionalParams
  ): Promise<DepartmentsCreateResponse>;
  /**
   * 更新部门
   * @param accessToken
   * @param options The options parameters.
   */
  update(
    accessToken: string,
    options?: DepartmentsUpdateOptionalParams
  ): Promise<DepartmentsUpdateResponse>;
  /**
   * 删除部门
   * @param accessToken
   * @param id
   * @param options The options parameters.
   */
  delete(
    accessToken: string,
    id: number,
    options?: DepartmentsDeleteOptionalParams
  ): Promise<DepartmentsDeleteResponse>;
  /**
   * 获取部门列表
   * @param accessToken
   * @param options The options parameters.
   */
  list(
    accessToken: string,
    options?: DepartmentsListOptionalParams
  ): Promise<DepartmentsListResponse>;
  /**
   * 本接口以partyid为键，全量覆盖企业的通讯录组织架构，任务完成后企业的通讯录组织架构与提交的文件完全保持一致。请先下载CSV文件(下载全量覆盖部门模版)，根据需求填写文件内容。注意事项：1.文件中存在、通讯录中也存在的部门，执行修改操作;2.文件中存在、通讯录中不存在的部门，执行添加操作;3.文件中不存在、通讯录中存在的部门，当部门下没有任何成员或子部门时，执行删除操作;4.文件中不存在、通讯录中存在的部门，当部门下仍有成员或子部门时，暂时不会删除，当下次导入成员把人从部门移出后自动删除;5.CSV文件中，部门名称、部门ID、父部门ID为必填字段，部门ID必须为数字，根部门的部门id默认为1；排序为可选字段，置空或填0不修改排序,
   * order值大的排序靠前。
   * @param accessToken
   * @param options The options parameters.
   */
  replaceBatch(
    accessToken: string,
    options?: DepartmentsReplaceBatchOptionalParams
  ): Promise<DepartmentsReplaceBatchResponse>;
  /**
   * 获取异步任务结果
   * @param accessToken
   * @param jonid
   * @param options The options parameters.
   */
  getBatchResult(
    accessToken: string,
    jonid: string,
    options?: DepartmentsGetBatchResultOptionalParams
  ): Promise<DepartmentsGetBatchResultResponse>;
}
