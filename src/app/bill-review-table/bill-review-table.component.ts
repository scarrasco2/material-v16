import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  slideInDownOnEnterAnimation,
  collapseAnimation,
} from 'angular-animations';
import { MatIconModule } from '@angular/material/icon';
import {
  CurrencyPipe,
  NgFor,
  NgIf,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ExpandedRowComponent } from './expanded-row.component';
import { TypeofPipe } from './typeof.pipe';
import { CamelCasePipe } from './camel-case.pipe';
import { BillItem } from './bill.interface';
import { MOCK_DATA } from './mock-date';
@Component({
  selector: 'pgr-bill-review',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ExpandedRowComponent,
    TypeofPipe,
    CurrencyPipe,
    TitleCasePipe,
    CamelCasePipe,
    UpperCasePipe,
  ],
  templateUrl: './bill-review-table.component.html',
  styleUrls: ['./bill-review-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [collapseAnimation()],
})
export class BillReviewTableComponent {
  dataSource = MOCK_DATA;
  columnsToDisplay = [
    'dup',
    'adj',
    'dosRange',
    'BillNumber',
    'category',
    'amountBilled',
    'paid',
    'balance',
    'feeSchedule',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedRows: BillItem[] = [];

  toggleRow(element: BillItem) {
    this.expandedRows = this.expandedRows?.includes(element)
      ? [...this.expandedRows].filter((row) => row !== element)
      : [...this.expandedRows, element];
  }
}
