import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScFunctionalityComponent } from './sc-functionality.component';

describe('ScFunctionalityComponent', () => {
  let component: ScFunctionalityComponent;
  let fixture: ComponentFixture<ScFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScFunctionalityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
