import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePlantComponent } from './add-update-plant.component';

describe('AddUpdatePlantComponent', () => {
  let component: AddUpdatePlantComponent;
  let fixture: ComponentFixture<AddUpdatePlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdatePlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdatePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
