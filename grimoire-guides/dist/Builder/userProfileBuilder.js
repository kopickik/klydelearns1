"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserProfileBuilder {
    constructor() {
        this.profile = {};
    }
    async setName(name) {
        try {
            await new Promise(resolve => setTimeout(resolve, 100));
            this.profile.name = name;
            return this;
        }
        catch (error) {
            throw new Error("Error setting name");
        }
    }
    async setEmail(email) {
        try {
            await new Promise(resolve => setTimeout(resolve, 100));
            this.profile.email = email;
            return this;
        }
        catch (error) {
            throw new Error("Error setting email");
        }
    }
    async setAge(age) {
        try {
            await new Promise(resolve => setTimeout(resolve, 100));
            this.profile.age = age;
            return this;
        }
        catch (error) {
            throw new Error("Error setting age");
        }
    }
    async setAddress(address) {
        try {
            await new Promise(resolve => setTimeout(resolve, 100));
            this.profile.address = address;
            return this;
        }
        catch (error) {
            throw new Error("Error setting address");
        }
    }
    async build() {
        return this.profile;
    }
}
exports.default = UserProfileBuilder;
