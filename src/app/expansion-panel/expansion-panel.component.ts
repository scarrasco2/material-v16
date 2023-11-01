import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { LazyRenderComponent } from '../lazy-render/lazy-render.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-expansion',
  standalone: true,
  imports: [MatExpansionModule, LazyRenderComponent, NgFor],
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  list = Array(500);
}
