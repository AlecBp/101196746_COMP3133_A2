import {Component, OnInit} from '@angular/core';
import {Hotel} from '../type';
import {Apollo, gql} from 'apollo-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hotel-serach',
  templateUrl: './hotel-serach.component.html',
  styleUrls: ['./hotel-serach.component.scss']
})
export class HotelSerachComponent implements OnInit {
  searchBox: FormGroup;

  hotels: Hotel[];
  loading = true;
  error: any;

  gridColumns = 3;

  constructor(
    private apollo: Apollo,
    private fb: FormBuilder
  ) {
    this.hotels = [];
    this.searchBox = this.fb.group({
      filter: ['', [
        Validators.required,
      ]],
    });
  }

  getByName(): void {
    this.apollo
    .watchQuery({
      query: gql`
        query($name: String!) {
          hotelByName(name: $name) {
            id
            name
            address
            createdAt
          }
        }
      `,
      variables: {
        name: this.searchBox.value.filter
      }
    })
    .valueChanges.subscribe((result: any) => {
      this.hotels = result?.data?.hotelByName;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

  getByCity(): void {
    this.apollo
    .watchQuery({
      query: gql`
        query($city: String!) {
          hotelByCity(city: $city) {
            id
            name
            address
            createdAt
          }
        }
      `,
      variables: {
        city: this.searchBox.value.filter
      }
    })
    .valueChanges.subscribe((result: any) => {
      this.hotels = result?.data?.hotelByCity;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

  ngOnInit(): void {
  }

  toggleGridColumns(): void {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
