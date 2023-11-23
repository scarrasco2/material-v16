import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JsonPipe, NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_LUXON_DATE_FORMATS,
  MatLuxonDateModule,
} from '@angular/material-luxon-adapter';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';

// const MY_FORMAT: MatDateFormats = {
//   ...MAT_LUXON_DATE_FORMATS,
//   parse: { dateInput: 'f' },
// };
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatLuxonDateModule,
    MatInputModule,
  ],
  templateUrl: './select.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMAT }],
})
export class SelectComponent {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  control = new FormControl();
  public selectDate(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.control.setValue(appendCurrentTime(event.value));
    }
  }
}

function appendCurrentTime(date: Date) {
  date = new Date(date);
  date.setHours(new Date().getHours());
  date.setMinutes(new Date().getMinutes());
  date.setSeconds(new Date().getSeconds());
  date.setMilliseconds(new Date().getMilliseconds());
  return date;
}
