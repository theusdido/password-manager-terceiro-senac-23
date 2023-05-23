import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarSitePage } from './listar-site.page';

describe('ListarSitePage', () => {
  let component: ListarSitePage;
  let fixture: ComponentFixture<ListarSitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
