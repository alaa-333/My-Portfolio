import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email = '333@alaamogmail.com';
  sanitizedEmailUrl = `mailto:${this.email.trim()}`;
}
