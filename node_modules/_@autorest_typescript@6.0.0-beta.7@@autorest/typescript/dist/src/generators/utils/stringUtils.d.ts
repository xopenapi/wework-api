export declare enum IndentationType {
    None = 0,
    JSDocParam = 1
}
export interface WrapStringOptions {
    indentationType?: IndentationType;
    paramNameLength?: number;
    width?: number;
}
export declare const wrapString: (string: string, { width, indentationType, paramNameLength }?: WrapStringOptions) => string;
//# sourceMappingURL=stringUtils.d.ts.map