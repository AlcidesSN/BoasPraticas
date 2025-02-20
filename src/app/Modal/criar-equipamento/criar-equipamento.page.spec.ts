import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarEquipamentoPage } from './criar-equipamento.page';

describe('CriarEquipamentoPage', () => {
  let component: CriarEquipamentoPage;
  let fixture: ComponentFixture<CriarEquipamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEquipamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
