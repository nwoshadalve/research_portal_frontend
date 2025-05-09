import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private apiConfig: ApiConfigService,
    private http: HttpClient
  ) { }

  getHomeData() {
    return this.http.get(this.apiConfig.getHomeUrl());
  }

  getAboutPortalData() {
    return this.http.get(this.apiConfig.getHomeUrl());
  }

  

}
