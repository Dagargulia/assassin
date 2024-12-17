import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinCreedBrotherhoodComponent } from './assassin-creed-brotherhood.component';

describe('AssassinCreedBrotherhoodComponent', () => {
  let component: AssassinCreedBrotherhoodComponent;
  let fixture: ComponentFixture<AssassinCreedBrotherhoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinCreedBrotherhoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinCreedBrotherhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
