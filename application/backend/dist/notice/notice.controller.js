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
exports.NoticeController = void 0;
const common_1 = require("@nestjs/common");
const notice_service_1 = require("./notice.service");
let NoticeController = class NoticeController {
    constructor(service) {
        this.service = service;
    }
    upload() {
        return this.service.upload();
    }
    view() {
        return this.service.view();
    }
};
exports.NoticeController = NoticeController;
__decorate([
    (0, common_1.Post)('upload'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)("view"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "view", null);
exports.NoticeController = NoticeController = __decorate([
    (0, common_1.Controller)("notice"),
    __metadata("design:paramtypes", [notice_service_1.NoticeService])
], NoticeController);
//# sourceMappingURL=notice.controller.js.map