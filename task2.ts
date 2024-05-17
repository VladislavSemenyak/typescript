// Виды пасты - spagetti/penne/macaroni

class Pizza {
  hasPepperoni;

  hasSauce;

  hasCheese;

  bakeTime = 30;

  constructor(hasPepperoni, hasSauce, hasCheese) {
      this.hasPepperoni = hasPepperoni;
      this.hasSauce = hasSauce;
      this.hasCheese = hasCheese;
  }

  bake() {
      setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
  }
}

class Pasta {
  pastaType;

  hasSauce;

  hasCheese;

  cookTime = 30;

  constructor(pastaType, hasSauce, hasCheese) {
      this.pastaType = pastaType;
      this.hasCheese = hasCheese;
      this.hasSauce = hasSauce;
  }

  cook() {
      setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
  }
}
type Dish = Pizza | Pasta;

class Kitchen {
    makeDish(dish: Dish) {
      if (dish instanceof Pizza) {
        dish.bake();
        return dish;
      } else if (dish instanceof Pasta) {
        dish.cook();
        return dish;
      } else {
      throw new Error('Unknown dish');
    }
  }
}

const kitchen = new Kitchen();
const pizza = new Pizza(true, true, false);
const pasta = new Pasta('spagetti', true, true);

kitchen.makeDish(pasta);
kitchen.makeDish(pasta);