import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';
// import { DISHES } from '../shared/dishes';

// const DISHES: Dish[] = [
//   {
//     name: '85% Dark Chocolate',
//     image: '/assets/images/dark85.jpg',
//     category: 'darks',
//     label: 'Hot',
//     price: '4.99',
//     description: 'Dark chocolate with no added sugar. Here you can taste the flavor of cocoa beans.',
//   },
//   {
//     name: '75% Dark Chocolate',
//     image: '/assets/images/dark45.jpg',
//     category: 'blackwhite',
//     label: '',
//     price: '1.99',
//     description: 'Dark chocolate made with a range of cocoa beans from Peru. It is soft with strong flavor.',
//   },
//   {
//     name: '45% Milk Chocolate',
//     image: '/assets/images/milk.jpg',
//     category: 'blackwhite',
//     label: 'New',
//     price: '1.99',
//     description: 'Milk chocolate made with Madagascar cocoa beans. It is a well-balanced chocolate with milk flavor.',
//   },
//   {
//     name: '55%, 75% and 85% Chocolates with almonds',
//     image: '/assets/images/almonds.jpg',
//     category: 'mixed',
//     label: '',
//     price: '2.99',
//     description: 'Chocolates of different cocoa beans concentration containing almonds. They are crunchy and have a rich taste.',
//   }
// ];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // dishes = DISHES;

  dishes: Dish[];

  // selectedDish: Dish;
  // onSelect(dish: Dish) {
  //   this.selectedDish = dish;
  // }

  constructor(private dishService: DishService, @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    // this.dishes = this.dishService.getDishes();
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

}
