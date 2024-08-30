import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantDetailComponent } from './composant-detail.component';

describe('ComposantDetailComponent', () => {
  let component: ComposantDetailComponent;
  let fixture: ComponentFixture<ComposantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
