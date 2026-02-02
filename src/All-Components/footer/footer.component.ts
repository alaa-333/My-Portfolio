import { Component } from '@angular/core';

interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  href: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Sanitized URLs (trimmed whitespace)
  socialLinks: SocialLink[] = [
    {
      platform: 'github',
      href: 'https://github.com/alaa-333'.trim(),
      label: 'GitHub'
    },
    {
      platform: 'linkedin',
      href: 'https://www.linkedin.com/in/alaamohamed-javadev'.trim(),
      label: 'LinkedIn'
    },
    {
      platform: 'email',
      href: 'mailto:333alaamo@gmail.com',
      label: 'Email'
    }
  ];

  email = '333alaamo@gmail.com';
}
