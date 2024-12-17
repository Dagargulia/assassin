import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTopComponent } from './shop-top.component';

describe('ShopTopComponent', () => {
  let component: ShopTopComponent;
  let fixture: ComponentFixture<ShopTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
