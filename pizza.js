///create a class
class Pizza {
    constructor(...toppings){
        this.toppings=toppings.concat('cheese');
        this.singleToppingPrice = 10;
    }
    price() {
        if(this.toppings.length == 1){
            return this.singleToppingPrice;
        }else{
            return this.singleToppingPrice + (.99 * this.toppings.length)
        }
    }
}
 let basePizza = new Pizza ('cheese');
 let oneToppingPizza = new Pizza ('cheese', 'pep');
 let twoToppingPizza = new Pizza ('cheese', 'pep', 'mush');

 console.log(basePizza);
 console.log(oneToppingPizza);
 console.log(twoToppingPizza);
 
