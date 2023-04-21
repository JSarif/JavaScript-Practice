//A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special.

const menu = {
    _meal: '',
    _price: 0,
  
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck; 
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Todays special is ${this._meal} for £${this._price}!`
      } else {
        return 'Meal or price not set correctly!'
      }
    }
  };
  
  menu.meal = 'pasta';
  menu.price = 6;
  
  console.log(menu.todaysSpecial);