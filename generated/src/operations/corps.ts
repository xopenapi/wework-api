import { Corps } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WeworkApiContext } from "../weworkApiContext";
import {
  CorpsGetJoinQrcodeOptionalParams,
  CorpsGetJoinQrcodeResponse
} from "../models";

/** Class containing Corps operations. */
export class CorpsImpl implements Corps {
  private readonly client: WeworkApiContext;

  /**
   * Initialize a new instance of the class Corps class.
   * @param client Reference to the service client
   */
  constructor(client: WeworkApiContext) {
    this.client = client;
  }

  /**
   * 获取加入企业二维码
   * @param accessToken
   * @param options The options parameters.
   */
  getJoinQrcode(
    accessToken: string,
    options?: CorpsGetJoinQrcodeOptionalParams
  ): Promise<CorpsGetJoinQrcodeResponse> {
    return this.client.sendOperationRequest(
      { accessToken, options },
      getJoinQrcodeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getJoinQrcodeOperationSpec: coreClient.OperationSpec = {
  path: "/corp/get_join_qrcode",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetJoinQrcodeRsp
    }
  },
  queryParameters: [Parameters.accessToken, Parameters.sizeType],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
