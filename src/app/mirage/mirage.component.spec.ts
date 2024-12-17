import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirageComponent } from './mirage.component';

describe('MirageComponent', () => {
  let component: MirageComponent;
  let fixture: ComponentFixture<MirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MirageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
