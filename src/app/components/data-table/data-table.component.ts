import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/services/search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  repositories = [];
  selectRepo = null;

  constructor(private searchService: SearchService) { }

  printRepos(): any {
    this.searchService.repos$.subscribe(repos => console.log(repos));
  }

  ngOnInit(): void {
  if (this.repositories.length){
    this.printRepos();
  }
  }

  selectedRepo(item): void {
    console.log(item);
  }
}
