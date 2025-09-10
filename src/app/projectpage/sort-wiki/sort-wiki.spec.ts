import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortWiki } from './sort-wiki';

describe('SortWiki', () => {
  let component: SortWiki;
  let fixture: ComponentFixture<SortWiki>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortWiki]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortWiki);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
