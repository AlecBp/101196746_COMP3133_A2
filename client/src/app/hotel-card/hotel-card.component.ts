import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
// @ts-ignore
import {Hotel} from '../type.d.ts';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(id: string): void {
    this.router.navigate([`/hotel/${id}`]);
  }
}
