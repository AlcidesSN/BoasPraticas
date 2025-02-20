import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarMagiaPage } from './criar-magia.page';

describe('CriarMagiaPage', () => {
  let component: CriarMagiaPage;
  let fixture: ComponentFixture<CriarMagiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarMagiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
