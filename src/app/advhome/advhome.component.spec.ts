import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvhomeComponent } from './advhome.component';

describe('AdvhomeComponent', () => {
  let component: AdvhomeComponent;
  let fixture: ComponentFixture<AdvhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
