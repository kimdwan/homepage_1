import { Injectable } from "@nestjs/common";
import { LoginDto, SignupDto, UpdateDto } from "src/dto";
import * as argon from "argon2"
import { PrismaService } from "src/prisma/prisma.service";
import {v4 as uuid} from "uuid"
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private prisma:PrismaService, private jwt:JwtService) {}

  async login(dto:LoginDto) {
    const user = await this.prisma.user.findUnique({
      where : {
        email : dto.email
      }
    })
    if (!user) {
      throw new Error("이메일 없어요")
    }
    const isPassword = await argon.verify(user.hash,dto.password)
    if (!isPassword) {
      throw new Error("비밀번호가 없어요")
    }

    const payload = {id:user.id,email:user.email, nickname:user.nickname}
    const jwtToken = await this.jwt.signAsync(payload)

    return {access_token :jwtToken}
  }

  async signup(dto:SignupDto) {
    const excitingUser = await this.prisma.user.findFirst({
      where : {
        OR : [
          {email : dto.email},
          {nickname : dto.nickname},
        ],
      }
    })

    if (excitingUser) {
      if (excitingUser.email === dto.email) {
        throw new Error("이메일이 이미 존재합니다.")
      }
      else {
        throw new Error("닉네임이 이미 존재합니다.")
      }
    }

    const hash = await argon.hash(dto.password)
    const user = await this.prisma.user.create({
      data : {
        id : uuid(),
        email : dto.email,
        hash : hash,
        nickname : dto.nickname
      }
    })
    delete user.hash

    return user
  }

  async update(payload:object,dto:object) {
    const userId = payload["id"]
    const user = await this.prisma.user.findUnique({
      where : {
        id : userId 
      }
    })
    if(!user) {
      throw new Error("해당 유저는 존재하지 않습니다.")
    }

    const updateUser = await this.prisma.user.update({
      where : {id : userId},
      data : dto
    })

    const newUser = {id:updateUser.id,email:updateUser.email,nickname:updateUser.nickname}
    const newpayload = await this.jwt.signAsync(newUser)

    return {access_token :newpayload} 
  }

  async delete(payload:object) {
    const user = await this.prisma.user.delete({
      where : {
        id : payload["id"]
      }
    }).catch((error) => {
      if (error.code === 'P2025') {
        throw new Error("해당 유저는 존재하지 않습니다.")
      }
    })
    if (!user) {
      throw new Error("해당 유저는 존재하지 않습니다.")
    }

    return {"message":"삭제완료"}
  }

  async profile (payload:object) {
    const user = await this.prisma.user.findUnique({
      where : {
        id : payload["id"]
      }
    })

    delete user.hash
    delete user.createdAt
    delete user.updatedAt
    return user
  }

}