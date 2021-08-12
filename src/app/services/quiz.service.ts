import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/generalknowledge.json', name: 'General Knowledge' },
      { id: 'data/social-science.json', name: 'Social Science' },
      { id: 'data/english.json', name: 'English' },
      { id: 'data/math.json', name: 'Math' }
    ];
  }

}
