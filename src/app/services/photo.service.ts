import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  images: string[] = [];

  constructor(private http: HttpClient) { }

  handleImageChange(event: any): void {
    const files: File[] = Array.from(event.target.files);
    
    files.forEach((file: File) => {
      this.readFile(file);
    });
  }

  readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String: string = reader.result as string;
      this.images.push(base64String);
    };
    reader.readAsDataURL(file);
  }

  uploadImagesToServer(): void {
    // Use HttpClient to upload images to your Laravel backend
    // Example:
    // this.http.post('http://your-api-url/upload', { images: this.images }).subscribe(
    //   response => console.log('Images uploaded:', response),
    //   error => console.error('Error uploading images:', error)
    // );
  }
}

