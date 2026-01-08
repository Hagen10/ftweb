import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Politician } from './politician';

describe('Politician', () => {
  let component: Politician;
  let fixture: ComponentFixture<Politician>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Politician]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Politician);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
