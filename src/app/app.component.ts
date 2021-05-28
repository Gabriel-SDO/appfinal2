import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/inicio', icon: 'home' },
    { title: 'Contatos', url: '/contatos', icon: 'mail' },
    { title: 'Notícias ', url: '/noticias', icon: 'newspaper' },
    { title: 'Sobre', url: '/sobre', icon: 'help-circle' },
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
    { title: 'Entrar', url: '/entrar', icon: 'arrow-forward' },
    { title: 'Sair', url: '/sair', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
