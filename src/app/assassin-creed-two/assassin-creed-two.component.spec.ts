import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinCreedTwoComponent } from './assassin-creed-two.component';

describe('AssassinCreedTwoComponent', () => {
  let component: AssassinCreedTwoComponent;
  let fixture: ComponentFixture<AssassinCreedTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinCreedTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinCreedTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
