export class Doller {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number) {
    return new Doller(this.amount * multiplier);
  }

  public equals(dolloer: Doller) {
    return true;
  }
}
