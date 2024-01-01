import { Controller, Get, Post } from "@nestjs/common";
import { NoticeService } from "./notice.service";

@Controller("notice")
export class NoticeController {
  constructor(private service:NoticeService) {}
  
  @Post('upload')
  upload() {
    return this.service.upload()
  }

  @Get("view")
  view() {
    return this.service.view()
  }


}