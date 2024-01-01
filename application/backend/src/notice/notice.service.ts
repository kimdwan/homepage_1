import { Injectable } from "@nestjs/common";

@Injectable()
export class NoticeService {

  upload() {
    return "업로드 되어유"
  }

  view() {
    return "게시물 보고싶어여?"
  }

}