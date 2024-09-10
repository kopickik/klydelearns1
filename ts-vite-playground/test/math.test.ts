import { describe } from "node:test";
import { sum } from "../src/util/math";
import { expect, it } from "vitest";

describe('math functions', () => {
    it('should add two numbers', () => {
        expect(sum(2,4)).toEqual(6);
    });
});
