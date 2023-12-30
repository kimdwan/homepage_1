import { LoginDto, SignupDto, UpdateDto } from 'src/dto';
import { UserService } from './user.service';
import { Request } from 'express';
export declare class UserController {
    private user;
    constructor(user: UserService);
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
    update(req: Request, dto: UpdateDto): Promise<{
        access_token: string;
    }>;
    delete(req: Request): Promise<{
        message: string;
    }>;
    profile(req: Request): Promise<{
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
