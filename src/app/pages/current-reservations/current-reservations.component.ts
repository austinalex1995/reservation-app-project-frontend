import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationsAppServiceService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-current-reservations',
  templateUrl: './current-reservations.component.html',
  styleUrls: ['./current-reservations.component.css']
})
export class CurrentReservationsComponent {

  /**
   * Member Variables
   */
  
  currentReservations : Reservation[] = [ ];



  /**
   * Constructor
   */

  constructor(private reservationService : ReservationsAppServiceService) {
    
    reservationService.getRestaurantReseravtiont().subscribe(reservations => {

      if (reservations != null) {

        this.currentReservations = reservations as Reservation[];

      }

    });

  }



  /**
   * Class Methods
   */

}
