# \UserApi

All URIs are relative to *https://qyapi.weixin.qq.com/cgi-bin*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Authsucc**](UserApi.md#Authsucc) | **Get** /user/authsucc | 二次验证
[**Batchdelete**](UserApi.md#Batchdelete) | **Post** /user/batchdelete | 批量删除成员
[**ConvertToOpenid**](UserApi.md#ConvertToOpenid) | **Post** /user/convert_to_openid | userid与openid互换
[**Create**](UserApi.md#Create) | **Post** /user/create | 创建成员
[**Delete**](UserApi.md#Delete) | **Get** /user/delete | 删除成员
[**Get**](UserApi.md#Get) | **Get** /user/get | 读取成员
[**Invite**](UserApi.md#Invite) | **Post** /batch/invite | 邀请成员
[**List**](UserApi.md#List) | **Get** /user/list | 获取部门成员详情
[**Simplelist**](UserApi.md#Simplelist) | **Get** /user/simplelist | 获取部门成员
[**Update**](UserApi.md#Update) | **Post** /user/update | 更新成员



## Authsucc

> BaseResponse Authsucc(ctx, accessToken, userid)

二次验证

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accessToken** | **string**|  | 
**userid** | **string**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Batchdelete

> BaseResponse Batchdelete(ctx, body)

批量删除成员

批量删除成员

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**body** | [**BatchDeleteUserReq**](BatchDeleteUserReq.md)|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ConvertToOpenid

> ConvertToOpenidRsp ConvertToOpenid(ctx, accessToken, body)

userid与openid互换

userid转openid

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accessToken** | **string**|  | 
**body** | [**ConvertToOpenidReq**](ConvertToOpenidReq.md)|  | 

### Return type

[**ConvertToOpenidRsp**](ConvertToOpenidRsp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Create

> BaseResponse Create(ctx, accessToken, body)

创建成员

创建成员

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accessToken** | **string**|  | 
**body** | [**CreateUserReq**](CreateUserReq.md)|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Delete

> BaseResponse Delete(ctx, accessToken, userid)

删除成员

删除成员

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accessToken** | **string**|  | 
**userid** | **string**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Get

> GetUserRsp Get(ctx, accessToken, userid)

读取成员

读取成员

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accessToken** | **string**|  | 
**userid** | **string**|  | 

### Return type

[**GetUserRsp**](GetUserRsp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Invite

> InviteRsp Invite(ctx, accessToken, body)

邀请成员

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accessToken** | **string**|  | 
**body** | [**InviteReq**](InviteReq.md)|  | 

### Return type

[**InviteRsp**](InviteRsp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## List

> ListUserRsp List(ctx, accessToken, departmentId, optional)

获取部门成员详情

获取部门成员详情

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accessToken** | **string**| 调用接口凭证 | 
**departmentId** | **int32**| 获取的部门id | 
 **optional** | ***ListOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ListOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fetchChild** | **optional.Int32**| 1/0：是否递归获取子部门下面的成员 | 

### Return type

[**ListUserRsp**](ListUserRsp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Simplelist

> SimplelistRsp Simplelist(ctx, accessToken, departmentId, optional)

获取部门成员

获取部门成员

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accessToken** | **string**|  | 
**departmentId** | **int32**|  | 
 **optional** | ***SimplelistOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a SimplelistOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fetchChild** | **optional.Int32**|  | 

### Return type

[**SimplelistRsp**](SimplelistRsp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Update

> BaseResponse Update(ctx, body)

更新成员

更新成员

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**body** | [**UpdateUserReq**](UpdateUserReq.md)|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

