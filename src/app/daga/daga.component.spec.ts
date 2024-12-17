import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DagaComponent } from './daga.component';

describe('DagaComponent', () => {
  let component: DagaComponent;
  let fixture: ComponentFixture<DagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DagaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
