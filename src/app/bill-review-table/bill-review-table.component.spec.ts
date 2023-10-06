import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillReviewTableComponent } from './bill-review-table.component';

describe('BillReviewTableComponent', () => {
  let component: BillReviewTableComponent;
  let fixture: ComponentFixture<BillReviewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BillReviewTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillReviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
