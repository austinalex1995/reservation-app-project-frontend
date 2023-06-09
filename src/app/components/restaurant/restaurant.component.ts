import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit{

  /**
   * Member Variables
   */

  @Output()
  moveToDetailsEvent = new EventEmitter<Restaurant>();
  @Input()
  restaurant : Restaurant = {
    id : 1,
    username : "test username",
    passwd : "test password",
    name : "Test Restaurant",
    address: "test address",
    phone: "989-111-1111",
    openAt: "11:00AM",
    closeAt: "10:00PM",
    totalSeats: 100,
    reservations: [],
    };
  


  /**
   * Constructor
   */

  constructor(private route: ActivatedRoute) { }



  /**
   * Class Methods
   */

  ngOnInit(): void {}

  isAdminPage() {
    return this.route.snapshot.routeConfig?.path === 'adminDetails';
  }

  transitionToDetails() {
    this.moveToDetailsEvent.emit(this.restaurant);
  }

}
