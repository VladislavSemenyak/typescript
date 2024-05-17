class Shop {
  private items: BaseProduct[] = [];

  addGood(item: BaseProduct): void {
    this.items.push(item);
  }

  get goods(): BaseProduct[] {
    return this.items;
  }
}

class BaseProduct {
  constructor(public name: string, public price: number, public discount: number) {}
}

class Banan extends BaseProduct {
  constructor(public price: number, public discount: number, public size: string) {
    super('banan', price, discount);
  }
}

class IceCream extends BaseProduct {
  withGlace: boolean;

  constructor(price: number, discount: number, withGlace: boolean) {
    super('Ice Cream', price, discount);
    this.withGlace = withGlace;
  }
}

const shop = new Shop();

const iceCream = new IceCream(10, 0, true);
const banan = new Banan(5, 0.1, 'small');

shop.addGood(iceCream);
shop.addGood(banan);

console.log(shop.goods);
