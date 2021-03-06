export interface ICompletionHandler {
    (err: any, ret: any) : void;
}

export interface IAjaxon {
    (method: string, url: string, data:any, done: ICompletionHandler, headers?: any, rejectUnauthorized?:boolean) : void;
}

declare var _default: ($: any) => IAjaxon;
export {_default as getAJaxon};