import { describe, expect, it } from "vitest";
import { capitalizeString } from "../src/util/string-utils";

describe('capitalizeString', () => {
    it('should capitalize the first letter and lowercase the rest?', () => {
        expect(capitalizeString('hello')).toBe('Hello');
        expect(capitalizeString('WORLD')).toEqual('World');
        expect(capitalizeString('javascript')).toBe('Javascript');
    });

    it('should handle empty strings', () => {
        expect(capitalizeString('')).toBe('');
    });

    it('should handle single-char strings', () => {
        expect(capitalizeString('a')).toBe('A');
        expect(capitalizeString('z')).toBe('Z');
    });

});