import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  MediasUploadOptionalParams,
  MediasUploadResponse,
  MediasUploadImgOptionalParams,
  MediasUploadImgResponse,
  MediasGetOptionalParams,
  MediasGetResponse,
  MediasGetJssdkOptionalParams,
  MediasGetJssdkResponse
} from "../models";

/** Interface representing a Medias. */
export interface Medias {
  /**
   * 素材上传得到media_id，该media_id仅三天内有效;media_id在同一企业内应用之间可以共享
   * @param accessToken
   * @param typeParam 媒体文件类型，分别有图片（image）、语音（voice）、视频（video），普通文件（file）
   * @param options The options parameters.
   */
  upload(
    accessToken: string,
    typeParam: string,
    options?: MediasUploadOptionalParams
  ): Promise<MediasUploadResponse>;
  /**
   * 上传图片得到图片URL，该URL永久有效;返回的图片URL，仅能用于图文消息正文中的图片展示，或者给客户发送欢迎语等；若用于非企业微信环境下的页面，图片将被屏蔽。每个企业每天最多可上传100张图片
   * @param accessToken
   * @param filename
   * @param options The options parameters.
   */
  uploadImg(
    accessToken: string,
    filename: coreRestPipeline.RequestBodyType,
    options?: MediasUploadImgOptionalParams
  ): Promise<MediasUploadImgResponse>;
  /**
   * 获取临时素材
   * @param accessToken
   * @param mediaId
   * @param options The options parameters.
   */
  get(
    accessToken: string,
    mediaId: string,
    options?: MediasGetOptionalParams
  ): Promise<MediasGetResponse>;
  /**
   * 可以使用本接口获取从JSSDK的uploadVoice接口上传的临时语音素材，格式为speex，16K采样率。该音频比上文的临时素材获取接口（格式为amr，8K采样率）更加清晰，适合用作语音识别等对音质要求较高的业务。
   * @param accessToken
   * @param mediaId
   * @param options The options parameters.
   */
  getJssdk(
    accessToken: string,
    mediaId: string,
    options?: MediasGetJssdkOptionalParams
  ): Promise<MediasGetJssdkResponse>;
}
