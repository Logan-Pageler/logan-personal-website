import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shapemon } from './shapemon';

describe('Shapemon', () => {
  let component: Shapemon;
  let fixture: ComponentFixture<Shapemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shapemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shapemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
