import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleaderComponent } from './viewleader.component';

describe('ViewleaderComponent', () => {
  let component: ViewleaderComponent;
  let fixture: ComponentFixture<ViewleaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewleaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
