import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScAddSearchComponent } from './sc-add-search.component';

describe('ScAddSearchComponent', () => {
  let component: ScAddSearchComponent;
  let fixture: ComponentFixture<ScAddSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScAddSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScAddSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
