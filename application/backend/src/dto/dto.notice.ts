import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

// 나중에 이미지는 어떻게 넣을지 공부해서 수정
export class NoticeDto {
  
  @IsNotEmpty()
  @IsEmail()
  email : string

  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  detail : string

}