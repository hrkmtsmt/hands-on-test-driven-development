export class Doller {
	public amount: number;

	constructor(amount: number) {
		this.amount = amount;
	}

	public times(multiplier: number) {
		this.amount *= multiplier;
	}
}
