import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(private httpService: HttpClient, private apiConfigService: ApiConfigService) { }

  /**
   * Get a cookie value by name
   * @param name The name of the cookie to retrieve
   * @returns The cookie value or null if not found
   */
  getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }

  /**
   * Delete a cookie by name
   * @param name The name of the cookie to delete
   * @param path The path of the cookie (defaults to '/')
   * @param domain The domain of the cookie (optional)
   */
  deleteCookie(name: string, path: string = '/', domain?: string): void {
    let cookieString = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;

    if (domain) {
      cookieString += `; domain=${domain}`;
    }

    document.cookie = cookieString;
  }

  /**
   * Check if a cookie has expired
   * @param name The name of the cookie to check
   * @returns true if the cookie has expired or doesn't exist, false otherwise
   */
  isCookieExpired(name: string): boolean {
    const cookie = this.getCookie(name);
    if (!cookie) {
      return true;
    }

    const cookieParts = document.cookie.split(';');
    for (const part of cookieParts) {
      const [cookieName, cookieValue] = part.trim().split('=');
      if (cookieName === name) {
        const expiresMatch = cookieValue.match(/expires=([^;]+)/);
        if (expiresMatch) {
          const expiresDate = new Date(expiresMatch[1]);
          return expiresDate < new Date();
        }
      }
    }
    return false;
  }

  getCsrfToken() {
    return this.httpService.get(this.apiConfigService.getCsrfTokenUrl(), { withCredentials: true });
  }
}
