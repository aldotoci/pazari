import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSearchResultComponent } from './mini-search-result.component';

describe('MiniSearchResultComponent', () => {
  let component: MiniSearchResultComponent;
  let fixture: ComponentFixture<MiniSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
