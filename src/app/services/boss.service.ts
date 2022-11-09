import { Injectable } from '@angular/core';
import { Boss } from '../models/boss_model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BossService {

  constructor(
    private http: HttpClient
  ) { }

  getBossList() {
    return this.http.get<any>(`https://eldenring.fanapis.com/api/bosses?limit=100`)
  }
}
