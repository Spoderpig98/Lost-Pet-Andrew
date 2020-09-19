import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  firstName: string;
  lastName: string;
  email:string;
  message: string;
  constructor() { }

  ngOnInit(): void {
  }
  submitForm() {
    alert('Form Submitted. Thank you and we will reach out to you as soon as possible!');
  }
}

