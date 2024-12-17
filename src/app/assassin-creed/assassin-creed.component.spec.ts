import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinCreedComponent } from './assassin-creed.component';

describe('AssassinCreedComponent', () => {
  let component: AssassinCreedComponent;
  let fixture: ComponentFixture<AssassinCreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinCreedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinCreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
