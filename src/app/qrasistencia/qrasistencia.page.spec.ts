import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrasistenciaPage } from './qrasistencia.page';

describe('QrasistenciaPage', () => {
  let component: QrasistenciaPage;
  let fixture: ComponentFixture<QrasistenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrasistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
