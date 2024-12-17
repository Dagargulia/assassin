import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreThanGamesComponent } from './more-than-games.component';

describe('MoreThanGamesComponent', () => {
  let component: MoreThanGamesComponent;
  let fixture: ComponentFixture<MoreThanGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreThanGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreThanGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
