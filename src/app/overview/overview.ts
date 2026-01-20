import { Component, inject, OnInit, signal } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Router } from '@angular/router';

export interface Person {
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
  router = inject(Router);
  politicians = signal<Person[]>([]);
  
  ngOnInit() {
    this.apiservice.getData().subscribe((response) => {
      this.politicians.set(response);
    });
  }

  selectPolitician(id: string | number) { 
    console.log('Politician selected: ', id);
    this.router.navigate(['/politician', id]);
  }
}
