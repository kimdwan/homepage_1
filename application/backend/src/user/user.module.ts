import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from 'src/strategy';

@Module({
  providers: [UserService,AuthService,PrismaService,ConfigService,JwtStrategy],
  controllers: [UserController]
})
export class UserModule {}
