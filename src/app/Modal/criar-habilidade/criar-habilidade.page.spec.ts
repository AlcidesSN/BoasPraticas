import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarHabilidadePage } from './criar-habilidade.page';

describe('CriarHabilidadePage', () => {
  let component: CriarHabilidadePage;
  let fixture: ComponentFixture<CriarHabilidadePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarHabilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
