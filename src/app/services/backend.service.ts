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

  profile(){
    return this.http.get('/api/profile').toPromise().then(res => {
      return res;
    })
  }

  login(data){
    return this.http.post('/api/login', data).toPromise().then(res =>{
      return res;
    }).catch(err =>{
      console.log(err.message)
    })
  }

  register(data){
    return this.http.post('/api/register',data).toPromise().then(res =>{
      return res
    })
  }

  logout(){
    return this.http.get('/api/logout').toPromise().then(res =>{
      console.log(res)
    }).catch(err=>{
      console.log(err.message)
    })
    }

    editContact(id,data){
      return this.http.put('/api/contacts/' + id, data).toPromise().then(res =>{
        return res
      }).catch(err =>{
        console.log(err.message)
      })
    }

    editProfile(data){
      return this.http.put('/api/users',data).toPromise().then(res =>{
        return res;
      }).catch(err =>{
        console.log(err.message)
      })
    }

    delete(id){
      return this.http.delete('/api/contacts/' + id).toPromise().then(res =>{
        return res;
      }).catch(err =>{
        console.log(err.message)
      })
    }
}
