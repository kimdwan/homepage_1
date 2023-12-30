import { LoginDto, SignupDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    signup(dto: SignupDto): Promise<{
        id: string;
        email: string;
        hash: string;
        nickname: string;
        firstname: string;
        lastname: string;
        age: number;
        address: string;
        gender: import(".prisma/client").$Enums.Gender;
        job: string;
        salary: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(payload: object, dto: object): Promise<{
        access_token: string;
    }>;
    delete(payload: object): Promise<{
        message: string;
    }>;
    profile(payload: object): Promise<{
        id: string;
        email: string;
        hash: string;
        nickname: string;
        firstname: string;
        lastname: string;
        age: number;
        address: string;
        gender: import(".prisma/client").$Enums.Gender;
        job: string;
        salary: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
