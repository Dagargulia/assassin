import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinCreedOriginsComponent } from './assassin-creed-origins.component';

describe('AssassinCreedOriginsComponent', () => {
  let component: AssassinCreedOriginsComponent;
  let fixture: ComponentFixture<AssassinCreedOriginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinCreedOriginsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinCreedOriginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
