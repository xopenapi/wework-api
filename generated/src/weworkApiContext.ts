import * as coreClient from "@azure/core-client";
import { WeworkApiOptionalParams } from "./models";

export class WeworkApiContext extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the WeworkApiContext class.
   * @param options The parameter options
   */
  constructor(options?: WeworkApiOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: WeworkApiOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-@xopenapi/wework/0.0.10`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://qyapi.weixin.qq.com/cgi-bin"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://qyapi.weixin.qq.com/cgi-bin";
  }
}
