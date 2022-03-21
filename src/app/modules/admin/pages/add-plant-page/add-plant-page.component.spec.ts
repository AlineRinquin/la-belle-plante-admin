import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantPageComponent } from './add-plant-page.component';

describe('AddPlantPageComponent', () => {
  let component: AddPlantPageComponent;
  let fixture: ComponentFixture<AddPlantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
