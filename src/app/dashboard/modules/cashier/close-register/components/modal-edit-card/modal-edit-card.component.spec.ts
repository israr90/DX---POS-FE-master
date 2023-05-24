import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditCardComponent } from './modal-edit-card.component';

describe('ModalEditCardComponent', () => {
  let component: ModalEditCardComponent;
  let fixture: ComponentFixture<ModalEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
