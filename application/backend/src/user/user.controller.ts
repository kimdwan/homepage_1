import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe,Req, Patch, Get, Delete } from '@nestjs/common';
import {  LoginDto, SignupDto, UpdateDto } from 'src/dto';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private user:UserService) {}

  @UsePipes(new ValidationPipe)
  @Post('login')
  login (@Body() dto:LoginDto) {
    return this.user.login(dto)
  }

  @UsePipes(new ValidationPipe)
  @Post("signup")
  signup(@Body() dto:SignupDto) {
    return this.user.signup(dto)
  }

  @UseGuards(AuthGuard("jwt"))
  @UsePipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true}))
  @Patch("update")
  update(@Req() req:Request, @Body() dto:UpdateDto) {
    const user = req.user
    return this.user.update(user,dto)
  }

  @UseGuards(AuthGuard("jwt"))
  @Delete("delete")
  delete(@Req() req:Request) {
    const user = req.user
    return this.user.delete(user)
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("profile")
  profile(@Req() req:Request) {
    const user = req.user
    return this.user.profile(user)
  }
}
