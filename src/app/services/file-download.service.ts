import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

/**
 * Service for handling file downloads
 * Uses Angular 19 best practices with inject() and standalone components
 */
@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {
  private http = inject(HttpClient);

  /**
   * Downloads a file from the given URL
   * @param fileUrl - The URL of the file to download
   * @param fileName - The name to save the file as
   * @returns Observable that completes when download is triggered
   */
  downloadFile(fileUrl: string, fileName: string): Observable<Blob> {
    return this.http.get(fileUrl, {
      responseType: 'blob',
      observe: 'body'
    }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Triggers the browser download for a blob
   * @param blob - The file blob to download
   * @param fileName - The name to save the file as
   */
  triggerDownload(blob: Blob, fileName: string): void {
    // Create a blob URL
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.style.display = 'none';
    
    // Append to body, trigger click, and cleanup
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 100);
  }

  /**
   * Downloads a PDF file specifically
   * @param fileUrl - The URL of the PDF file
   * @param fileName - The name to save the file as
   */
  downloadPDF(fileUrl: string, fileName: string): void {
    this.downloadFile(fileUrl, fileName).subscribe({
      next: (blob) => {
        // Verify it's a PDF
        const pdfBlob = new Blob([blob], { type: 'application/pdf' });
        this.triggerDownload(pdfBlob, fileName);
      },
      error: (error) => {
        console.error('Error downloading PDF:', error);
        throw error;
      }
    });
  }

  /**
   * Handle HTTP errors
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred while downloading the file.';
    
    if (error.status === 404) {
      errorMessage = 'File not found. Please ensure the file exists.';
    } else if (error.status === 0) {
      errorMessage = 'Network error. Please check your connection.';
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error: ${error.error.message}`;
    } else {
      errorMessage = `Server error: ${error.status} - ${error.message}`;
    }
    
    return throwError(() => new Error(errorMessage));
  }
}
