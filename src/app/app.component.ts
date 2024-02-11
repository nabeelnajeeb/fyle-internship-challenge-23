/*import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(console.log);
  }
} */

import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username: string = '';
  repositories: any[] = [];
  loading: boolean = false;
  userNotFound: boolean = false;
  pageSize: number = 10;
  currentPage: number = 1;
  title: any;

  constructor(private githubService: GithubService) {}

  searchRepositories() {
    this.currentPage = 1;
    this.loadRepositories();
  }

  loadRepositories() {
    this.loading = true;
    this.userNotFound = false;
    this.repositories = [];

    this.githubService.getRepositories(this.username, this.currentPage, this.pageSize).subscribe(
      (data: any) => {
        this.repositories = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching repositories:', error);

        if (error.status === 404) {
          this.userNotFound = true;
        }

        this.loading = false;
      }
    );
  }
}
