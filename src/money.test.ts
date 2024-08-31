import { describe, test, expect } from 'bun:test';
import { Doller } from './doller';

/**
 * TODO
 *
 * - [ ] $5 + 10CHF = $10 (レートが2:1の場合)
 * - [x] $5 * 2 = $10
 * - [ ] amountをprivateにする
 * - [ ] 📍 Dollerの副作用をどうする?
 * - [ ] Moneyの丸め処理をどうする?
 */
describe('Money', () => {
	test('$5 * 2 = 10になる', () => {
		const product = new Doller(5);
		product.times(2);
		expect(product.amount).toBe(10);
		product.times(3);
		expect(product.amount).toBe(15);
	});
});
