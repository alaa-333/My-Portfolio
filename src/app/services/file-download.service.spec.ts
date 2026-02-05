import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FileDownloadService } from './file-download.service';

describe('FileDownloadService', () => {
  let service: FileDownloadService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FileDownloadService]
    });
    service = TestBed.inject(FileDownloadService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should download a file successfully', (done) => {
    const mockBlob = new Blob(['test content'], { type: 'application/pdf' });
    const testUrl = '/test.pdf';
    const testFileName = 'test.pdf';

    service.downloadFile(testUrl, testFileName).subscribe({
      next: (blob) => {
        expect(blob).toBeTruthy();
        expect(blob.type).toBe('application/pdf');
        done();
      }
    });

    const req = httpMock.expectOne(testUrl);
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toBe('blob');
    req.flush(mockBlob);
  });

  it('should handle 404 error', (done) => {
    const testUrl = '/nonexistent.pdf';
    const testFileName = 'test.pdf';

    service.downloadFile(testUrl, testFileName).subscribe({
      error: (error) => {
        expect(error.message).toContain('File not found');
        done();
      }
    });

    const req = httpMock.expectOne(testUrl);
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });
  });

  it('should trigger browser download', () => {
    const mockBlob = new Blob(['test'], { type: 'application/pdf' });
    const fileName = 'test.pdf';
    
    spyOn(document.body, 'appendChild');
    spyOn(document.body, 'removeChild');
    
    service.triggerDownload(mockBlob, fileName);
    
    expect(document.body.appendChild).toHaveBeenCalled();
  });
});
