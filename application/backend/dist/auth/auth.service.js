"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const prisma_service_1 = require("../prisma/prisma.service");
const uuid_1 = require("uuid");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        });
        if (!user) {
            throw new Error("이메일 없어요");
        }
        const isPassword = await argon.verify(user.hash, dto.password);
        if (!isPassword) {
            throw new Error("비밀번호가 없어요");
        }
        const payload = { id: user.id, email: user.email, nickname: user.nickname };
        const jwtToken = await this.jwt.signAsync(payload);
        return { access_token: jwtToken };
    }
    async signup(dto) {
        const excitingUser = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { email: dto.email },
                    { nickname: dto.nickname },
                ],
            }
        });
        if (excitingUser) {
            if (excitingUser.email === dto.email) {
                throw new Error("이메일이 이미 존재합니다.");
            }
            else {
                throw new Error("닉네임이 이미 존재합니다.");
            }
        }
        const hash = await argon.hash(dto.password);
        const user = await this.prisma.user.create({
            data: {
                id: (0, uuid_1.v4)(),
                email: dto.email,
                hash: hash,
                nickname: dto.nickname
            }
        });
        delete user.hash;
        return user;
    }
    async update(payload, dto) {
        const userId = payload["id"];
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        if (!user) {
            throw new Error("해당 유저는 존재하지 않습니다.");
        }
        const updateUser = await this.prisma.user.update({
            where: { id: userId },
            data: dto
        });
        const newUser = { id: updateUser.id, email: updateUser.email, nickname: updateUser.nickname };
        const newpayload = await this.jwt.signAsync(newUser);
        return { access_token: newpayload };
    }
    async delete(payload) {
        const user = await this.prisma.user.delete({
            where: {
                id: payload["id"]
            }
        }).catch((error) => {
            if (error.code === 'P2025') {
                throw new Error("해당 유저는 존재하지 않습니다.");
            }
        });
        if (!user) {
            throw new Error("해당 유저는 존재하지 않습니다.");
        }
        return { "message": "삭제완료" };
    }
    async profile(payload) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: payload["id"]
            }
        });
        delete user.hash;
        delete user.createdAt;
        delete user.updatedAt;
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map