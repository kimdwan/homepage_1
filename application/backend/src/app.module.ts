import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { NoticeModule } from './notice/notice.module';

@Module({
  imports: [
    ConfigModule.forRoot({}), 
    JwtModule.registerAsync({
      global:true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // 환경 변수에서 JWT_SECRET을 읽음
        signOptions: { expiresIn: '60m' },
      }),
    }),
    UserModule,
    AuthModule,
    PrismaModule,
    NoticeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
