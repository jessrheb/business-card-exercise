import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  email = 'jrkgs@cesar.org.br';
  subject = 'Contato';
  body = 'Gostaria de tirar uma dúvida';
  url = `mailto:${this.email}?subject=${this.subject}&body=${this.body}`;

  emailMe() {
    window.open(this.url);
  }

  ngOnInit() {}
}
