import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinCreedSyndicateComponent } from './assassin-creed-syndicate.component';

describe('AssassinCreedSyndicateComponent', () => {
  let component: AssassinCreedSyndicateComponent;
  let fixture: ComponentFixture<AssassinCreedSyndicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinCreedSyndicateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinCreedSyndicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
