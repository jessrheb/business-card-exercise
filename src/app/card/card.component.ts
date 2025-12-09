import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  protected readonly emailIcon = {
    src: '../assets/Mail.svg',
    alt: 'Email icon',
  };
  protected readonly linkedInIcon = {
    src: '../assets/LinkedIn.svg',
    alt: 'LinkedIn icon',
  };

  protected readonly emailLabel = 'Email';
  protected readonly linkedInLabel = 'LinkedIn';

  protected emailMe() {
    const email = 'jrkgs@cesar.org.br';
    const subject = 'Contato';
    const body = 'Gostaria de tirar uma dúvida';
    globalThis.open(`mailto:${email}?subject=${subject}&body=${body}`);
  }

  protected followMe() {
    globalThis.open(`https://linkedin.com/in/jessrheb`);
  }

  ngOnInit() {
    if (globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      document.querySelector('article').classList.add('dark-theme');
    }
  }
}
