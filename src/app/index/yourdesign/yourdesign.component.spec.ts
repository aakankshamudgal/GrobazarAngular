import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourdesignComponent } from './yourdesign.component';

describe('YourdesignComponent', () => {
  let component: YourdesignComponent;
  let fixture: ComponentFixture<YourdesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourdesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
