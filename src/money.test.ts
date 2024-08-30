import { describe, test, expect } from "bun:test";
import { Doller } from "./doller";

/**
 * TODO
 *
 * - [ ] $5 + 10CHF = $10 (レートが2:1の場合)
 * - [ ] 📍 $5 * 2 = $10
 * - [ ] amountをprivateにする
 * - [ ] Dollerの副作用をどうする?
 * - [ ] Moneyの丸め処理をどうする?
 */
describe("Money", () => {
  test("$5 * 2 = 10になる", () => {
    const five = new Doller();
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
