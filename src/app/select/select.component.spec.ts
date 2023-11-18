import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectHarness } from '@angular/material/select/testing';

fdescribe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load select harness', async () => {
    const select = await loader.getHarness(
      MatSelectHarness.with({ selector: '[data-id="select-1"]' })
    );
    expect(select).toBeTruthy();
  });

  it('should select pizza option', async () => {
    const select = await loader.getHarness(
      MatSelectHarness.with({ selector: '[data-id="select-1"]' })
    );

    await select.clickOptions({ text: 'Tacos' });
    expect(await select.getValueText()).toBe('Tacos');
  });
});
