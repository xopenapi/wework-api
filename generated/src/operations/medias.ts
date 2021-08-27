import { Medias } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
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

/** Class containing Medias operations. */
export class MediasImpl implements Medias {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Medias class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

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
  ): Promise<MediasUploadResponse> {
    return this.client.sendOperationRequest(
      { accessToken, typeParam, options },
      uploadOperationSpec
    );
  }

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
  ): Promise<MediasUploadImgResponse> {
    return this.client.sendOperationRequest(
      { accessToken, filename, options },
      uploadImgOperationSpec
    );
  }

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
  ): Promise<MediasGetResponse> {
    return this.client.sendOperationRequest(
      { accessToken, mediaId, options },
      getOperationSpec
    );
  }

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
  ): Promise<MediasGetJssdkResponse> {
    return this.client.sendOperationRequest(
      { accessToken, mediaId, options },
      getJssdkOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const uploadOperationSpec: coreClient.OperationSpec = {
  path: "/media/upload",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MediaUploadRsp
    }
  },
  formDataParameters: [Parameters.filename],
  queryParameters: [Parameters.accessToken, Parameters.typeParam],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  serializer
};
const uploadImgOperationSpec: coreClient.OperationSpec = {
  path: "/media/uploadimg",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MediaUploadImgRsp
    }
  },
  formDataParameters: [Parameters.filename1],
  queryParameters: [Parameters.accessToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/media/get",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    }
  },
  queryParameters: [Parameters.accessToken, Parameters.mediaId],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept2],
  serializer
};
const getJssdkOperationSpec: coreClient.OperationSpec = {
  path: "/media/get/jssdk",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    }
  },
  queryParameters: [Parameters.accessToken, Parameters.mediaId],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept2],
  serializer
};
