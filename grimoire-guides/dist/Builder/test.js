"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userProfileBuilder_1 = __importDefault(require("./userProfileBuilder"));
(async () => {
    try {
        const userProfileBuilder = new userProfileBuilder_1.default();
        const now = Date.now();
        const userProfile = await userProfileBuilder
            .setName("John Doe")
            .then(builder => builder.setEmail("john.doe@sharklasers.com"))
            .then(builder => builder.setAddress("123 Main St"))
            .then(builder => builder.setAge(30))
            .then(builder => builder.build());
        console.log(userProfile);
        console.log(`Took ${Date.now() - now}ms to build user profile`);
    }
    catch (error) {
        console.error(`Error building user profile: ${JSON.stringify(error, null, 2)}`);
    }
})();
