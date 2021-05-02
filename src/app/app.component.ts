import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-tailwindcss-poc';
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  isOpened: boolean = false;
  sideNavMode: 'side' | 'over' = 'side';

  constructor(private readonly breakpoints$: BreakpointObserver) {
  }

  ngOnInit() {
    this.breakpoints$.observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium])
      .subscribe(async (event: BreakpointState) => {
        if (event.matches) {
          this.sideNavMode = 'side';
          await this.sidenav.open();
        } else {
          this.sideNavMode = 'over';
          await this.sidenav.close();
        }
      });
  }
}
