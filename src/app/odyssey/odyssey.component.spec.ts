import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdysseyComponent } from './odyssey.component';

describe('OdysseyComponent', () => {
  let component: OdysseyComponent;
  let fixture: ComponentFixture<OdysseyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdysseyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdysseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
