import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { TreeComponent } from '../tree/tree.component';
import { AddressComponent } from '../address/address.component';
import { BillReviewTableComponent } from '../bill-review-table/bill-review-table.component';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IsDarkThemeDirective } from '../is-dark-theme.directive';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styles: [
    `
      .sidenav-container {
        height: 100%;
      }

      .sidenav {
        width: 200px;
      }

      .sidenav .mat-toolbar {
        background: inherit;
      }

      .mat-toolbar.mat-primary {
        position: sticky;
        top: 0;
        z-index: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    DashboardComponent,
    TableComponent,
    TreeComponent,
    AddressComponent,
    BillReviewTableComponent,
    ExpansionPanelComponent,
    HttpClientModule,
    IsDarkThemeDirective,
    SelectComponent,
  ],
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
