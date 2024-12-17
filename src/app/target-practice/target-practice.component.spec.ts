import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPracticeComponent } from './target-practice.component';

describe('TargetPracticeComponent', () => {
  let component: TargetPracticeComponent;
  let fixture: ComponentFixture<TargetPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
