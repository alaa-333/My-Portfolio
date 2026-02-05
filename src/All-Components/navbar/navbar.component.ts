import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FileDownloadService } from '../../app/services/file-download.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private fileDownloadService = inject(FileDownloadService);

  /**
   * Downloads the resume PDF file
   * Uses modern Angular 19 approach with dedicated service for reliable file download
   */
  downloadResume(): void {
    const resumePath = '/Resume.pdf';
    const fileName = 'Resume.pdf';

    try {
      this.fileDownloadService.downloadPDF(resumePath, fileName);
    } catch (error) {
      console.error('Failed to download resume:', error);
      alert('Resume file not found. Please add resume.pdf to the public folder.');
    }
  }
}


