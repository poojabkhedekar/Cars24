import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTwoComponent } from './dashboard-two.component';

describe('DashboardTwoComponent', () => {
  let component: DashboardTwoComponent;
  let fixture: ComponentFixture<DashboardTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTwoComponent]
    });
    fixture = TestBed.createComponent(DashboardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
