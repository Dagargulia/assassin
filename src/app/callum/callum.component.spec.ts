import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallumComponent } from './callum.component';

describe('CallumComponent', () => {
  let component: CallumComponent;
  let fixture: ComponentFixture<CallumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
