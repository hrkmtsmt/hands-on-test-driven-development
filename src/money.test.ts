/**
 * TODO
 *
 * - [ ] $5 + 10CHF = $10 (レートが2:1の場合)
 * - [ ] 📍 $5 * 2 = $10
 */

import { describe, test, expect } from "bun:test";

describe("Money", () => {
  test("$5 * 2 = 10になる", () => {
    const five = new Doller();
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
