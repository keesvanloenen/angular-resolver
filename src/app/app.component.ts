import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = true;
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => this.isLoading = false)
  }

  /* 
    Other events:
    NavigationStart  – Triggered when a navigation starts
    NavigationEnd    – Triggered when navigation ends successfully
    NavigationError  – Triggered when navigation ends with an error
    NavigationCancel – Triggered when a navigation is cancelled 
                       (often because a router guard returned false)
    GuardsCheckStart – Triggered before guards are run as part of the routing
    GuardsCheckEnd   – Triggered at the end of guards running as part of the routing
  */
}
