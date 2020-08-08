import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Project } from '../../models/project.model'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  githubRepos = "https://api.github.com/users/RusuGabriel/repos";

  constructor(private http: HttpClient) { }


  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.githubRepos);
  }
}
