import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitBackground } from './circuit-background';

describe('CircuitBackground', () => {
  let component: CircuitBackground;
  let fixture: ComponentFixture<CircuitBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircuitBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
