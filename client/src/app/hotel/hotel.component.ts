import { Component, OnInit } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
// @ts-ignore
import { Hotel } from "../type.d.ts";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.scss"],
})
export class HotelComponent implements OnInit {
  hotels: Hotel[];
  loading = true;
  error: any;

  gridColumns = 3;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            hotels {
              id
              name
              price
              city
              address
              createdAt
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log("HOTELS", result);
        this.hotels = result?.data?.hotels;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

  toggleGridColumns(): void {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}
