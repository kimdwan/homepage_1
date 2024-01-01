import { NoticeService } from "./notice.service";
export declare class NoticeController {
    private service;
    constructor(service: NoticeService);
    upload(): string;
    view(): string;
}
