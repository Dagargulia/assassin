import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonicComponent } from './symphonic.component';

describe('SymphonicComponent', () => {
  let component: SymphonicComponent;
  let fixture: ComponentFixture<SymphonicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymphonicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymphonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
