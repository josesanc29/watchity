import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/services/search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  userSearch = '';
  repositories = [];
  selectRepo = null;

  constructor(private searchService: SearchService) { }

  printRepos(): any {
    this.searchService.repos$.subscribe((message: any) => {
      console.log('mensaje desde el servicio con rxjs ', message);
      this.userSearch = message;
      this.searchRepos();
    });
  }

  public searchRepos(): any {
    this.searchService.getResposFromUser(this.userSearch).subscribe((data) => {
      this.repositories = data;
      console.log('repos ', this.repositories);
    });
  }

  ngOnInit(): void {
    this.printRepos();
  }

  selectedRepo(item): void {
    console.log(item);
  }
}
