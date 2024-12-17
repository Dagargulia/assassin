import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinCreedBlackFlagComponent } from './assassin-creed-black-flag.component';

describe('AssassinCreedBlackFlagComponent', () => {
  let component: AssassinCreedBlackFlagComponent;
  let fixture: ComponentFixture<AssassinCreedBlackFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinCreedBlackFlagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinCreedBlackFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
