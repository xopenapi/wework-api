# \MessageApi

All URIs are relative to *https://qyapi.weixin.qq.com/cgi-bin*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Send**](MessageApi.md#Send) | **Post** /message/send | 发送消息



## Send

> SendMessageRsp Send(ctx, accessToken, body)

发送消息

应用支持推送文本、图片、视频、文件、图文等类型

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accessToken** | **string**|  | 
**body** | [**SendMessageReq**](SendMessageReq.md)|  | 

### Return type

[**SendMessageRsp**](SendMessageRsp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

