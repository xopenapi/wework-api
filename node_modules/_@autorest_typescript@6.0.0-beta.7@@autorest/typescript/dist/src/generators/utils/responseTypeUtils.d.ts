import { ClientDetails } from "../../models/clientDetails";
import { TypeDetails } from "../../models/modelDetails";
import { OperationDetails } from "../../models/operationDetails";
/**
 * Helper function that gets a set of object model names,
 * this can be used to check for possible duplicate names
 * while generating other models
 */
export declare function getAllModelsNames(clientDetails: ClientDetails): Set<string>;
/**
 * Determines the correct name to use for a response type
 * taking in consideration the already existing object models
 * to avoid name collisions
 * @param responseName The raw response name
 * @param modelNames Set of existing model names
 */
export declare function getResponseTypeName(responseName: string, modelNames: Set<string>): string;
/**
 * Given an Operation, this function finds the response type name and adds it to the imported models.
 * This function checks for a possible model name, or returns the default "RestResponse" type from core-http.
 */
export declare function getOperationResponseType(operation: OperationDetails, importedModels: Set<string>, modelNames: Set<string>): string;
/**
 * This function extracts the body type for pageable operations. This is used to later on
 * be able to return an array of items, instead of the Response objects. This will get the type
 * of the "value" property from the response on a pageable operation.
 */
export declare function getPagingResponseBodyType(operation: OperationDetails): TypeDetails | undefined;
//# sourceMappingURL=responseTypeUtils.d.ts.map