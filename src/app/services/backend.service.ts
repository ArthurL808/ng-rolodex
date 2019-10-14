import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  constructor(private http: HttpClient) {}
  contact() {
    return this.http
      .get('/api/contact')
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
