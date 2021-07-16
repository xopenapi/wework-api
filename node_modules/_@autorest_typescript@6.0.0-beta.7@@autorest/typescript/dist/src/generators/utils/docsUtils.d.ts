import { OptionalKind, ParameterDeclarationStructure } from "ts-morph";
export declare type ParameterWithDescription = OptionalKind<ParameterDeclarationStructure & {
    description: string;
}>;
export declare function generateOperationJSDoc(params?: ParameterWithDescription[], description?: string): string;
//# sourceMappingURL=docsUtils.d.ts.map