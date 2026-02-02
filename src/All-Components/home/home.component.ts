import { Component } from '@angular/core';

interface Technology {
  name: string;
  variant: 'java' | 'spring' | 'oracle' | 'mysql' | 'redis' | 'hibernate' | 'JUnit-5';
}

interface Stat {
  label: string;
  value: string | number;
  pathD: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  technologies: Technology[] = [
    { name: 'Java 17/21', variant: 'java' },
    { name: 'Spring Boot', variant: 'spring' },
    { name: 'Oracle', variant: 'oracle' },
    { name: 'MySQL', variant: 'mysql' },
    { name: 'Redis', variant: 'redis' },
    { name: 'Hibernate', variant: 'hibernate' },
    { name: 'JUnit-5', variant : 'JUnit-5' },
  ];

  stats: Stat[] = [
    {
      pathD: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      label: 'Experience',
      value: '1+ Years'
    },
    {
      pathD: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      label: 'Projects',
      value: '2+'
    },
    {
      pathD: 'M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3',
      label: 'Coffee/Day',
      value: '3 cups'
    },
    {
      pathD: 'M13 10V3L4 14h7v7l9-11h-7z',
      label: 'APIs Built',
      value: '15+'
    }
  ];
}
