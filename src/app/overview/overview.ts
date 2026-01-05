import { Component, inject, OnInit } from '@angular/core';
import { Apiservice } from '../apiservice';

interface Person {
  id: string|number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview implements OnInit {
  apiservice = inject(Apiservice);
  politicians: Person[] = [];
  ngOnInit() {
    this.apiservice.getData().subscribe((response) => {
      this.politicians = response;
    });
  }
}
