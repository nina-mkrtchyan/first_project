import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-simple-http',
  templateUrl: './app-simple-http.component.html',
  styleUrls: ['./app-simple-http.component.css']
})
export class AppSimpleHttpComponent implements OnInit {
  data: object;
  loading: boolean;

  constructor(private http: HttpClient) { }

    makeRequest(): void {
      this.loading = true;
      this.http
          .get('http://sipster.fifth-llc.com/api/v1/login')
          .subscribe(data => {
            this.data = data;
            this.loading = false;
          });
  }

  ngOnInit() {
  }
}
