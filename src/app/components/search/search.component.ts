import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('searchInput' , {static: false}) searchInput: ElementRef<any>;
  @Input() repos;
  subscriptions: Subscription[] = [];
  userSearch = '';

  constructor(
    private searchService: SearchService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  ngAfterViewInit(){
    this.searchInput.nativeElement.focus();
  }

  sendRepos(): any{
    this.searchService.sendMsg(this.userSearch);
    this.router.navigate(['/project']);
  }

  ngOnDestroy(): void {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
    }
  }

}
