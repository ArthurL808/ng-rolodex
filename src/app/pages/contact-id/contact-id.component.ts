import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-contact-id',
  templateUrl: './contact-id.component.html',
  styleUrls: ['./contact-id.component.scss']
})
export class ContactIdComponent implements OnInit {
 contact;

 constructor(
   private backend: BackendService,
   private route: ActivatedRoute,
   private router: Router) { }

   ngOnInit() {
     const id = this.route.snapshot.paramMap.get('id');

     this.backend.contactId(id).then(res =>{
       return this.contact = res;
     });
  }
  edit = () =>{
    const id = this.route.snapshot.paramMap.get('id');
    return this.router.navigate([`contacts/${id}/edit`])
  }

  delete = () => {
    const id = this.route.snapshot.paramMap.get('id');
    this.backend.delete(id);

    return this.router.navigate(['/contacts'])
  }
}
