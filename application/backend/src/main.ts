import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as express from "express"
import * as path from "path"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)
  const port = config.get("PORT") 

  app.use(express.static(path.resolve(__dirname,"../..","frontend/build")))

  await app.listen(port);
}
bootstrap();
