/*
 * 企业微信服务端API
 *
 * 企业微信服务端API.
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi
// InviteReq InviteReq
type InviteReq struct {
	User []string `json:"user,omitempty"`
	Party []string `json:"party,omitempty"`
	Tag []string `json:"tag,omitempty"`
}
