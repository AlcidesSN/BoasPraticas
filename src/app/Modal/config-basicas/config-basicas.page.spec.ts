import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigBasicasPage } from './config-basicas.page';

describe('ConfigBasicasPage', () => {
  let component: ConfigBasicasPage;
  let fixture: ComponentFixture<ConfigBasicasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigBasicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
