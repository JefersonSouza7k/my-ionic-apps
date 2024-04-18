import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCadastroPage } from './form-cadastro.page';

describe('FormCadastroPage', () => {
  let component: FormCadastroPage;
  let fixture: ComponentFixture<FormCadastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
