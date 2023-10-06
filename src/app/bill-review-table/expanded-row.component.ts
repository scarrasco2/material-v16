import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CurrencyPipe } from '@angular/common';
import { BillLine } from './bill.interface';

@Component({
  selector: 'pgr-expanded-row',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, CurrencyPipe],
  templateUrl: './expanded-row.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandedRowComponent implements OnInit {
  @Input({
    required: true,
    transform: (value: any) => new MatTableDataSource<BillLine>(value),
  })
  dataSource!: MatTableDataSource<BillLine>;
  displayedColumns: string[] = [
    'select',
    'line',
    'dos',
    'cptCode',
    'endNotes',
    'amountBilled',
    'paid',
    'balance',
  ];
  selection = new SelectionModel<BillLine>(true, []);

  ngOnInit(): void {
    this.toggleAllRows();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: BillLine): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.cptCode + 1
    }`;
  }

  getTotal(column: keyof BillLine) {
    return this.dataSource.data
      .map((t) => t[column] as number)
      .reduce((acc, value) => acc + value, 0);
  }
}
