import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinCreedThreeComponent } from './assassin-creed-three.component';

describe('AssassinCreedThreeComponent', () => {
  let component: AssassinCreedThreeComponent;
  let fixture: ComponentFixture<AssassinCreedThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinCreedThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinCreedThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
