# UserRsp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessToken** | **string** |  | [optional] 
**Userid** | **string** | 成员UserID。对应管理端的帐号，企业内必须唯一。不区分大小写，长度为1~64个字节。只能由数字、字母和“_-@.”四种字符组成，且第一个字符必须是数字或字母。 | [optional] 
**Name** | **string** | 成员名称。长度为1~64个utf8字符 | [optional] 
**Alias** | **string** | 成员别名。长度1~32个utf8字符 | [optional] 
**Mobile** | **string** | 手机号码。企业内必须唯一，mobile/email二者不能同时为空 | [optional] 
**Department** | **[]int32** | 成员所属部门id列表,不超过20个 | [optional] 
**Order** | **[]int32** | 部门内的排序值 | [optional] 
**Position** | **string** | 职务信息 | [optional] 
**Gender** | **int32** | 性别 | [optional] 
**Email** | **string** | 邮箱 | [optional] 
**Telephone** | **string** | 座机 | [optional] 
**IsLeaderInDept** | **int32** | 个数必须和参数department的个数一致 | [optional] 
**AvatarMediaid** | **string** | 成员头像的mediaid | [optional] 
**Enable** | **int32** | 启用/禁用成员。1表示启用成员，0表示禁用成员 | [optional] 
**Extattr** | **map[string]interface{}** | 自定义字段 | [optional] 
**Errcode** | **string** |  | [optional] 
**Errmsg** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


