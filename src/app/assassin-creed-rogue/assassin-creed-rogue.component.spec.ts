import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinCreedRogueComponent } from './assassin-creed-rogue.component';

describe('AssassinCreedRogueComponent', () => {
  let component: AssassinCreedRogueComponent;
  let fixture: ComponentFixture<AssassinCreedRogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinCreedRogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinCreedRogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
