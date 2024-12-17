import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinegardComponent } from './linegard.component';

describe('LinegardComponent', () => {
  let component: LinegardComponent;
  let fixture: ComponentFixture<LinegardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinegardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinegardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
