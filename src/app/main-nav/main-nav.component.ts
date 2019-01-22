import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../common/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  isLogged: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginService.getStatus
      .subscribe(status => this.updateStatus(status));
  }

  ngOnInit() {
    this.loginService.checkLogStatus().subscribe(status => this.updateStatus(status));
  }

  private updateStatus(status: boolean): void {
    this.isLogged = status;
    console.log(status);
  }

  logOut(): void {
    console.log('logout');
    this.router.navigate(['/login']);
    this.loginService.logOut().subscribe(status => this.updateStatus(status));
  }
}
