import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../overview/overview';
import { Apiservice } from '../apiservice';
import { DatePipe } from '@angular/common';

interface Vote {
  id: number;
  titleShort: string;
  resume: string;
  conclusion: string;
  vote: string;
  timestamp: string;
}


@Component({
  selector: 'app-politician',
  imports: [DatePipe],
  templateUrl: './politician.html',
  styleUrl: './politician.css',
})
export class Politician implements OnInit {
  id: number = 0;
  route = inject(ActivatedRoute);
  apiservice = inject(Apiservice);
  politician: Person | undefined;
  votes: Vote[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.apiservice.getPoliticianInfo(this.id).subscribe((response) => {
      this.politician = response;
    });

    this.apiservice.getPoliticianVotes(this.id).subscribe((response) => {
      this.votes = response;
    });
  }
}
