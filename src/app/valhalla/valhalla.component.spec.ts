import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValhallaComponent } from './valhalla.component';

describe('ValhallaComponent', () => {
  let component: ValhallaComponent;
  let fixture: ComponentFixture<ValhallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValhallaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValhallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
