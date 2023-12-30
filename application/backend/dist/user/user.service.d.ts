import { AuthService } from 'src/auth/auth.service';
import { LoginDto, SignupDto, UpdateDto } from 'src/dto';
export declare class UserService {
    private auth;
    constructor(auth: AuthService);
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
    update(payload: object, dto: UpdateDto): Promise<{
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
