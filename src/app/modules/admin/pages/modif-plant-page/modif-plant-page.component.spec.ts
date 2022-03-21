import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPlantPageComponent } from './modif-plant-page.component';

describe('ModifPlantPageComponent', () => {
  let component: ModifPlantPageComponent;
  let fixture: ComponentFixture<ModifPlantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifPlantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPlantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
