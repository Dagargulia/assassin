import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinCreedRevelationsComponent } from './assassin-creed-revelations.component';

describe('AssassinCreedRevelationsComponent', () => {
  let component: AssassinCreedRevelationsComponent;
  let fixture: ComponentFixture<AssassinCreedRevelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinCreedRevelationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinCreedRevelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
