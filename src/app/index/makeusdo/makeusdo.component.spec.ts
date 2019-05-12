import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeusdoComponent } from './makeusdo.component';

describe('MakeusdoComponent', () => {
  let component: MakeusdoComponent;
  let fixture: ComponentFixture<MakeusdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeusdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeusdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
