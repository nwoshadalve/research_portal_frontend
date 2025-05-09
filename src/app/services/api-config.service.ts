import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  private readonly baseUrl: string;
  private readonly apiVersion: string;

  constructor() {
    this.baseUrl = environment.apiBaseUrl;
    this.apiVersion = environment.apiVersion;
  }

  getBaseUrl(): string {
    return `${this.baseUrl}/api/${this.apiVersion}`;
  }

  getHealthCheckUrl(): string {
    return `${this.getBaseUrl()}/health-check`;
  }

  getCsrfTokenUrl(): string {
    return `${this.getBaseUrl()}/csrf-token`;
  }

  getHomeUrl(): string {
    return `${this.getBaseUrl()}/home`;
  }

  getAboutPortalUrl(): string {
    return `${this.getBaseUrl()}/about/portal`;
  }

}
