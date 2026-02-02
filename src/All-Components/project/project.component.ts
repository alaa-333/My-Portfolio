import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  external?: string;
  serviceName: string; // Precomputed for performance
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  featuredProjects: Project[] = [
    {
      title: 'E-Commerce RESTful API Platform',
      description: 'A production-ready RESTful API delivering comprehensive e-commerce functionality with customer management, product catalog, order processing, and Stripe payment integration. Features 5 core domain entities with optimized JPA relationships, JWT authentication, global exception handling, and Spring Data JPA pagination that improved response time by 60%.',
      technologies: ['Spring Boot', 'Hibernate', 'Oracle', 'JWT', 'Stripe API', 'Spring Security','JUnit5','Mockito'],
      github: 'https://github.com/alaa-333/E-Commerce-REST-API',
      serviceName: 'e-commerce-restful-api-platform.service'
    },
    {
      title: 'Social Networking Backend',
      description: 'A production-ready, enterprise-grade backend system designed to power modern social networking applications at scale. Built with Spring Boot 3.5 and clean architecture principles, featuring 15+ JPA entities with normalized relational model, stateless JWT authentication securing 100% of endpoints, and MapStruct integration that improved API response times by 30%.',
      technologies: ['Spring Boot', 'Oracle', 'Redis', 'Spring Security', 'JPA', 'MapStruct'],
      github: 'https://github.com/alaa-333/Social-Graph-Engine',
      serviceName: 'social-networking-backend.service'
    }
  ];

  // Helper to determine alignment class (avoids complex template expressions)
  getAlignmentClass(index: number): string {
    return index % 2 === 0
      ? 'md:ms-auto md:w-[60%]'
      : 'md:me-auto md:w-[60%]';
  }

  // Sanitize URLs (trim whitespace from data)
  sanitizeUrl(url?: string): string | undefined {
    return url?.trim();
  }
}
