import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoalumnosPage } from './infoalumnos.page';

describe('InfoalumnosPage', () => {
  let component: InfoalumnosPage;
  let fixture: ComponentFixture<InfoalumnosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoalumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
