import { Project, InterfaceDeclaration } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { OperationGroupDetails } from "../models/operationDetails";
/**
 * Function that writes the code for all the operations.
 * It will generate one file per operation group and each file contains:
 *    - A class definition for the operation group
 *    - Methods and overrides for each operation
 *    - OperationSpecs for each operation
 * @param clientDetails client details
 * @param project project for code generation
 */
export declare function generateOperationsInterfaces(clientDetails: ClientDetails, project: Project): void;
/**
 * Write operations signatures, extracted from OperationGroupDetails, to the generated file
 */
export declare function writeOperations(operationGroupDetails: OperationGroupDetails, operationGroupInterface: InterfaceDeclaration, importedModels: Set<string>, modelNames: Set<string>, clientDetails: ClientDetails): void;
//# sourceMappingURL=operationInterfaceGenerator.d.ts.map