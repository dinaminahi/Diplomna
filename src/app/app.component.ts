import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'unicornLviv';
  days = [
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    'Субота'
  ];
  today: string;
  isMenuOpen = false;

  constructor() {}

  ngOnInit() {
    this.today = this.days[new Date().getDay()];
  }
  onSidenavClick(): void {
    this.isMenuOpen = false;
  }
}
