import { HttpInterceptorFn } from '@angular/common/http';
import { CookieService } from '../services/cookie.service';
import { inject } from '@angular/core';

export const csrfInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const csrfToken = cookieService.getCookie("XSRF-TOKEN") || "";

  if(csrfToken) {
    const modifiedReq = req.clone({ headers: req.headers.set('X-XSRF-TOKEN', csrfToken) });
    return next(modifiedReq);
  } 
  return next(req);
};
