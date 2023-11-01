import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallService } from '../call.service';

@Component({
  selector: 'app-lazy-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-render.component.html',
  styleUrls: ['./lazy-render.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyRenderComponent {
  api$ = inject(CallService).getFact();
}
