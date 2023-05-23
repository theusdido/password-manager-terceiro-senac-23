import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroSitePage } from './cadastro-site.page';

describe('CadastroSitePage', () => {
  let component: CadastroSitePage;
  let fixture: ComponentFixture<CadastroSitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
