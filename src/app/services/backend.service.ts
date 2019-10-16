import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {}
  contacts() {
    return this.http
      .get('/api/contacts')
      .toPromise()
      .then(response => {
        return response;
      });
  }

  contactId(id) {
    return this.http.get('/api/contacts/' + id).toPromise().then(response => {
      return response;
    });
  }

  search(data) {
    return this.http
      .get('/api/contacts/search/' + data)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  create(data) {
    return this.http.post('/api/contacts', data).toPromise()
  }


}
