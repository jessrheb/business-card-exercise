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
  mailto = `mailto:${this.email}?subject=${this.subject}&body=${this.body}`;
  prefersDarkTheme = window.matchMedia?.('(prefers-color-scheme: dark)')
    .matches;

  emailMe() {
    window.open(this.mailto);
  }

  ngOnInit() {
    this.prefersDarkTheme
      ? document.querySelector('article').classList.add('dark-theme')
      : null;
  }
}
