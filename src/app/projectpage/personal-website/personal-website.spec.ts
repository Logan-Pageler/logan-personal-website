import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWebsite } from './personal-website';

describe('PersonalWebsite', () => {
  let component: PersonalWebsite;
  let fixture: ComponentFixture<PersonalWebsite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalWebsite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalWebsite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
