import { ClientDetails } from "../models/clientDetails";
import { Project, CodeBlockWriter } from "ts-morph";
import { Mapper } from "@azure/core-http";
export declare function generateMappers(clientDetails: ClientDetails, project: Project): void;
export declare function writeMapper(writer: CodeBlockWriter, mapper: Mapper): void;
//# sourceMappingURL=mappersGenerator.d.ts.map