import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherLayoutComponent } from './searcher-layout.component';

describe('SearcherLayoutComponent', () => {
  let component: SearcherLayoutComponent;
  let fixture: ComponentFixture<SearcherLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcherLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
