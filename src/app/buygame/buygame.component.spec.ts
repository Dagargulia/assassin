import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuygameComponent } from './buygame.component';

describe('BuygameComponent', () => {
  let component: BuygameComponent;
  let fixture: ComponentFixture<BuygameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuygameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuygameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
