import { describe, test, expect } from "bun:test";
import { main } from "./main";

describe("function main", () => {
	test("return string message.", () => {
		expect(main()).toBe("Hello Test-Driven Development!");
	});
});
