import fetch from "node-fetch";

interface UserProfile {
  name?: string;
  age?: number;
  address?: string;
  email?: string;
}

class UserProfileBuilder {
  private profile: UserProfile = {};

  async setName(name: string): Promise<this> {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      this.profile.name = name;
      return this;
    } catch (error) {
      throw new Error("Error setting name");
    }
  }

  async setEmail(email: string): Promise<this> {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      this.profile.email = email;
      return this;
    } catch (error) {
      throw new Error("Error setting email");
    }
  }

  async setAge(age: number): Promise<this> {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      this.profile.age = age;
      return this;
    } catch (error) {
      throw new Error("Error setting age");
    }
  }

  async setAddress(address: string): Promise<this> {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      this.profile.address = address;
      return this;
    } catch (error) {
      throw new Error("Error setting address");
    }
  }
  async build(): Promise<UserProfile> {
    return this.profile;
  }
}

export default UserProfileBuilder;
