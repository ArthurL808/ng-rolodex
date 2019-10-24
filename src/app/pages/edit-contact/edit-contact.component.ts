import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../services/backend.service'

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

 formData;

  constructor(
    private route: ActivatedRoute,
    private backend: BackendService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.backend.contactId(id).then(res =>{
      return this.formData = res;
    })
  }

  edit = () => {
    const id = this.route.snapshot.paramMap.get('id');

    this.backend.editContact(id,this.formData);
    this.router.navigate([`contacts/${id}`])
  }
}
