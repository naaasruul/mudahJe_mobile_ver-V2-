import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseActivityPage } from './choose-activity.page';

describe('ChooseActivityPage', () => {
  let component: ChooseActivityPage;
  let fixture: ComponentFixture<ChooseActivityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
