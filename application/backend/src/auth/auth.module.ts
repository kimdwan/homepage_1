import { Global, Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";

@Global()
@Module({
  providers : [AuthService,PrismaService,ConfigService]
})
export class AuthModule {}