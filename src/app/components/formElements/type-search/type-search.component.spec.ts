import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSearchComponent } from './type-search.component';

describe('TypeSearchComponent', () => {
  let component: TypeSearchComponent;
  let fixture: ComponentFixture<TypeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
