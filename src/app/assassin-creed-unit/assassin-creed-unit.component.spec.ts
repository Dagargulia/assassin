import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinCreedUnitComponent } from './assassin-creed-unit.component';

describe('AssassinCreedUnitComponent', () => {
  let component: AssassinCreedUnitComponent;
  let fixture: ComponentFixture<AssassinCreedUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinCreedUnitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinCreedUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
