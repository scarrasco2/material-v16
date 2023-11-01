import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyRenderComponent } from './lazy-render.component';

describe('LazyRenderComponent', () => {
  let component: LazyRenderComponent;
  let fixture: ComponentFixture<LazyRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LazyRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
