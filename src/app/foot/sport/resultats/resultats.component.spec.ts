import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsComponent } from './resultats.component';

describe('ResultatsComponent', () => {
  let component: ResultatsComponent;
  let fixture: ComponentFixture<ResultatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
