import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormVisualizarDadosPage } from './form-visualizar-dados.page';

describe('FormVisualizarDadosPage', () => {
  let component: FormVisualizarDadosPage;
  let fixture: ComponentFixture<FormVisualizarDadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormVisualizarDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
