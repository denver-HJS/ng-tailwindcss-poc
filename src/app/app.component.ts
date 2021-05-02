import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  static readonly desktopBreakpoints = [Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium];

  title = 'ng-tailwindcss-poc';
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  sideNavMode$: BehaviorSubject<'side' | 'over'>;

  constructor(private readonly breakpoints$: BreakpointObserver) {
    this.sideNavMode$ = new BehaviorSubject<'side' | 'over'>('side');
  }

  async ngOnInit() {
    this.breakpoints$.observe(AppComponent.desktopBreakpoints)
      .pipe(
        delay(100)
      )
      .subscribe(async ( desktopBreakpointEvent: BreakpointState) => {
        if (desktopBreakpointEvent.matches) {
          this.sideNavMode$.next('side');
          await this.sidenav.open();
        } else {
          this.sideNavMode$.next('over');
          await this.sidenav.close();
        }
      });
  }
}
