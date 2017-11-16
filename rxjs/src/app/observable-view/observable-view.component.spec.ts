import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableViewComponent } from './observable-view.component';

describe('ObservableViewComponent', () => {
  let component: ObservableViewComponent;
  let fixture: ComponentFixture<ObservableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
