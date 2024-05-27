import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MahuBelajarPage } from './mahu-belajar.page';

describe('MahuBelajarPage', () => {
  let component: MahuBelajarPage;
  let fixture: ComponentFixture<MahuBelajarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MahuBelajarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
