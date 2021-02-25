import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
    ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  ngAfterViewInit(){
    this.searchInput.nativeElement.focus();
  }

  public searchRepos(): any {
    this.searchService.getResposFromUser(this.userSearch).subscribe((data) => {
      this.repos = data;
      console.log('repos ', this.repos);
    });
  }

  sendRepos(): any{
    if (!this.repos.length){
      return false;
    }
    this.searchService.serviceSendRepos(this.repos);
  }

  ngOnDestroy(): void {
    // this.sendRepos();
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
    }
  }

}
