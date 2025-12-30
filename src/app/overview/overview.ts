import { Component, inject, OnInit } from '@angular/core';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview implements OnInit {
  apiservice = inject(Apiservice);
  data: any;
  ngOnInit() {
    this.apiservice.getData().subscribe((response) => {
      this.data = response;
    });
  }
}
