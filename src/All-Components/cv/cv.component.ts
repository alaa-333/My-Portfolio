import { Component, signal } from '@angular/core';

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  port: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  activeTab = signal('eraasoft');

  experiences: Experience[] = [
    {
      id: 'eraasoft',
      company: 'EraaSoft',
      role: 'Java Back-End Developer Trainee',
      location: 'Cairo, Egypt',
      period: 'July 2023 - Oct 2024',
      port: '8080',
      description: [
        'Developed scalable server-side applications using Spring Boot, Hibernate, and RESTful APIs',
        'Implemented JWT-based authentication and authorization for secure access control',
        'Collaborated within an Agile team environment using Git for version control and code reviews',
        'Built production-ready APIs with comprehensive error handling and validation',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Hibernate/JPA',
        'Oracle',
        'MySQL',
        'Git',
        'Maven',
      ],
    },
    {
      id: 'mcit',
      company: 'MCIT DEPI',
      role: 'Front-End Developer Intern',
      location: 'Mansoura, Egypt',
      period: 'July 2022 - Jan 2023',
      port: '4200',
      description: [
        'Built responsive user interfaces using Angular 18, TypeScript, and RxJS for a portfolio management system',
        'Implemented reusable components and services, reducing UI development time by 25% for similar features',
        'Collaborated with backend developers to integrate RESTful APIs and ensure seamless data flow',
      ],
      technologies: [
        'Angular 18',
        'TypeScript',
        'RxJS',
        'HTML5',
        'CSS3',
        'Bootstrap',
      ],
    },
  ];

  get activeExperience(): Experience | undefined {
    return this.experiences.find(exp => exp.id === this.activeTab());
  }

  setActiveTab(id: string): void {
    this.activeTab.set(id);
  }
}
