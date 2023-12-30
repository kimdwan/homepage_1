"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const express = require("express");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    const port = config.get("PORT");
    app.use(express.static(path.resolve(__dirname, "../..", "frontend/build")));
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map