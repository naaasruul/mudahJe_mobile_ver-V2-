import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectedItemPagePage } from './selected-item-page.page';

describe('SelectedItemPagePage', () => {
  let component: SelectedItemPagePage;
  let fixture: ComponentFixture<SelectedItemPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedItemPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
