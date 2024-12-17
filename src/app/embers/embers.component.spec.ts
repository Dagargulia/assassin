import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbersComponent } from './embers.component';

describe('EmbersComponent', () => {
  let component: EmbersComponent;
  let fixture: ComponentFixture<EmbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
