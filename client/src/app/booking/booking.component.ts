import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Booking} from '../type.d.ts';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookings: Booking[];
  loading = true;
  error: any;

  gridColumns = 3;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: gql`
        {
          bookings {
            id
            user {
              id
              fullName
            }
            hotel {
              id
              name
              address
            }
            start
            end
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      console.log('Booking', result);
      this.bookings = result?.data?.bookings;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

  toggleGridColumns(): void {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
