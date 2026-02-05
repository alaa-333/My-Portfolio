import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  proficiency?: number; // Optional - if no percentage, no progress bar shown
  variant?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  iconPathD: string;
  skills: Skill[];
  accentColor: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frameworks',
      icon: 'framework',
      iconPathD: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      accentColor: 'spring',
      skills: [
        { name: 'Spring Boot', proficiency: 90, variant: 'spring' },
        { name: 'Spring Security', proficiency: 80, variant: 'spring' },
        { name: 'Hibernate/JPA', proficiency: 80, variant: 'hibernate' },
        { name: 'Angular 18', proficiency: 60, variant: 'angular' }
      ]
    },
    {
      title: 'Core Languages',
      icon: 'code',
      iconPathD: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      accentColor: 'java',
      skills: [
        { name: 'Java', proficiency: 90, variant: 'java' },
        { name: 'JavaScript', proficiency: 60, variant: 'javascript' },
        { name: 'SQL', proficiency: 85, variant: 'sql' }
      ]
    },
    {
      title: 'Databases',
      icon: 'database',
      iconPathD: 'M4 7v10c0 2 3.6 4 8 4s8-2 8-4V7M4 7c0 2 3.6 4 8 4s8-2 8-4M4 7c0-2 3.6-4 8-4s8 2 8 4m0 5c0 2-3.6 4-8 4s-8-2-8-4',
      accentColor: 'oracle',
      skills: [
        { name: 'Oracle', proficiency: 85, variant: 'oracle' },
        { name: 'MySQL', proficiency: 80, variant: 'mysql' }
      ]
    },
    {
      title: 'Tools',
      icon: 'tools',
      iconPathD: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      accentColor: 'tools',
      skills: [
        { name: 'Git', proficiency: 90, variant: 'git' },
        { name: 'Maven', proficiency: 85, variant: 'maven' },
        { name: 'Postman', proficiency: 88, variant: 'postman' },
        { name: 'IntelliJ IDEA', variant: 'intellij' }
      ]
    },
    {
      title: 'Testing',
      icon: 'test',
      iconPathD: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      accentColor: 'testing',
      skills: [
        { name: 'JUnit 5', variant: 'junit' },
        { name: 'Mockito', variant: 'mockito' }
      ]
    },
    {
      title: 'AI Tools',
      icon: 'ai',
      iconPathD: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      accentColor: 'ai',
      skills: [
        { name: 'Claude AI', variant: 'claude' },
        { name: 'Gemini', variant: 'gemini' }
      ]
    }
  ];

  getProgressBarColor(variant: string | undefined): string {
    const colors: { [key: string]: string } = {
      'spring': 'linear-gradient(90deg, #6db33f 0%, #8bc34a 100%)',
      'hibernate': 'linear-gradient(90deg, #59666c 0%, #8b9ca5 100%)',
      'angular': 'linear-gradient(90deg, #dd0031 0%, #c3002f 100%)',
      'java': 'linear-gradient(90deg, #f89820 0%, #5382a1 100%)',
      'javascript': 'linear-gradient(90deg, #f7df1e 0%, #f0db4f 100%)',
      'sql': 'linear-gradient(90deg, #00d4ff 0%, #336791 100%)',
      'oracle': 'linear-gradient(90deg, #f80000 0%, #ff6b6b 100%)',
      'mysql': 'linear-gradient(90deg, #4479a1 0%, #00758f 100%)',
      'git': 'linear-gradient(90deg, #f05032 0%, #de4c36 100%)',
      'maven': 'linear-gradient(90deg, #c71a36 0%, #af2645 100%)',
      'postman': 'linear-gradient(90deg, #ff6c37 0%, #ff8c59 100%)',
      'default': 'linear-gradient(90deg, #00ff88 0%, #00d4ff 100%)'
    };
    return colors[variant || 'default'] || colors['default'];
  }
}
