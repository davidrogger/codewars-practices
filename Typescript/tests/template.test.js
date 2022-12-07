"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const template_1 = __importDefault(require("../practices/template"));
describe("File to create typescript test from the practices", () => {
    it("Testes", () => {
        const phrase = (0, template_1.default)("testing");
        (0, chai_1.expect)(phrase).to.be.eq("testing");
    });
});
