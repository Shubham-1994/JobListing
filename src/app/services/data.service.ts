import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job';





@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getAllJobs() {
    return this.http.get<Array<Job>>("/assets/data/data.json");
  }
}
