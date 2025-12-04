import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  protected emailMe() {
    const email = 'jrkgs@cesar.org.br';
    const subject = 'Contato';
    const body = 'Gostaria de tirar uma dúvida';
    globalThis.open(`mailto:${email}?subject=${subject}&body=${body}`);
  }

  ngOnInit() {
    const prefersDarkTheme = globalThis.matchMedia?.(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (prefersDarkTheme) {
      document.querySelector('article').classList.add('dark-theme');
    }
  }
}
