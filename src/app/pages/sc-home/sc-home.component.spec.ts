import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScHomeComponent } from './sc-home.component';

describe('ScHomeComponent', () => {
  let component: ScHomeComponent;
  let fixture: ComponentFixture<ScHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
