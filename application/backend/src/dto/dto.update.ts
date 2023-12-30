import {  IsIn, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class UpdateDto {

  @IsOptional()
  @IsString()
  nickname: string
  
  @IsOptional()
  @IsString()
  firstname: string
  
  @IsOptional()
  @IsString()
  lastname: string

  @IsOptional()
  @IsNumber()
  @Min(0)
  age: number

  @IsOptional()
  @IsString()
  job:string

  @IsOptional()
  @IsString()
  address:string

  @IsOptional()
  @IsString()
  @IsIn(["man","woman"])
  gender:string 

  @IsOptional()
  @IsNumber()
  @Min(0)
  salary:string
}