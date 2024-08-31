import { describe, test, expect } from 'bun:test';
import { Doller } from './doller';

/**
 * TODO
 *
 * - [ ] $5 + 10CHF = $10 (レートが2:1の場合)
 * - [x] $5 * 2 = $10
 * - [ ] amountをprivateにする
 * - [x] Dollerの副作用をどうする?
 * - [ ] Moneyの丸め処理をどうする?
 * - [ ] 📍 equals()
 * - [ ] hashCode()
 */
describe('Money', () => {
	test('掛け算', () => {
		const five = new Doller(5);

		let product = five.times(2);
		expect(product.amount).toBe(10);

		product = five.times(3);
		expect(product.amount).toBe(15);
	});

	test('新しく生成されたインスタンスのamountが同じか比較する', () => {
		expect(new Doller(5).equals(new Doller(5))).toBe(true);
	});
});
