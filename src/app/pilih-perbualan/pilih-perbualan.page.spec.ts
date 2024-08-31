import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilihPerbualanPage } from './pilih-perbualan.page';

describe('PilihPerbualanPage', () => {
  let component: PilihPerbualanPage;
  let fixture: ComponentFixture<PilihPerbualanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PilihPerbualanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
