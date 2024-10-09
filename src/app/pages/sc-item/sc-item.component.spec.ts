import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScItemComponent } from './sc-item.component';

describe('ScItemComponent', () => {
  let component: ScItemComponent;
  let fixture: ComponentFixture<ScItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
