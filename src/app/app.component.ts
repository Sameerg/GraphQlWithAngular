import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const launches = gql`{
  launchesPast(limit: 20) {
    mission_name
    launch_date_local
    launch_success
    launch_site {
      site_name
    }
  }
}`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loading = true;
  data: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.query({
      query: launches
    }).subscribe(({data, loading}) => {
      this.data = data;
      this.loading = loading;
    });
  }
}