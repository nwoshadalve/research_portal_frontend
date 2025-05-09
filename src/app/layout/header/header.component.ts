import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

interface CredentialItem {
  icon: string;
  text: string;
  link?: string;
  isExternalLink?: boolean;
  openInNewTab?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  journalTitle = 'World Journal of Biology Pharmacy and Health Sciences';
  isHomePage = true;
  currentPageTitle = '';
  currentPageDescription = '';
  
  journalCredentials: CredentialItem[] = [
    { 
      icon: 'description',
      text: 'ISSN Approved Journal',
      link: 'https://issn.org/search',
      isExternalLink: true,
      openInNewTab: true
    },
    {
      icon: 'star',
      text: 'IMPACT FACTOR 8.16',
      link: '/impact-factor',
      isExternalLink: false
    },
    {
      icon: 'verified',
      text: 'eISSN: 2582-5542'
      // No link for this item
    },
    {
      icon: 'school',
      text: 'Google Scholar Indexed',
      link: 'https://scholar.google.com',
      isExternalLink: true,
      openInNewTab: true
    },
    {
      icon: 'link',
      text: 'Free Crossref DOI',
      link: 'https://www.crossref.org',
      isExternalLink: true,
      openInNewTab: true
    }
  ];
  
  journalPublicationInfo: CredentialItem[] = [
    {
      icon: 'schedule',
      text: 'Fast Publication within 2 days'
    },
    {
      icon: 'payments',
      text: 'Low Article Processing Charges',
      link: '/authors/article-processing-fee',
      isExternalLink: false
    },
    {
      icon: 'people',
      text: 'Peer Reviewed and Referred Journal',
      link: '/peer-review-process',
      isExternalLink: false
    }
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updatePageInfo();
    });
    
    // Initialize on component start
    this.updatePageInfo();
  }

  private updatePageInfo() {
    let route = this.activatedRoute.root;
    let routeData: any = {};
    
    // Navigate to the leaf route
    while (route.children.length > 0) {
      const childrenRoutes = route.children;
      let routeFound = false;

      for (const child of childrenRoutes) {
        if (child.outlet === 'primary') {
          route = child;
          
          // Collect route data
          if (child.snapshot.data) {
            routeData = { ...routeData, ...child.snapshot.data };
          }
          
          routeFound = true;
          break;
        }
      }

      if (!routeFound) {
        break;
      }
    }
    
    // Determine if this is the home page
    this.isHomePage = this.router.url === '/' || this.router.url === '';
    
    // Set page title and description from route data
    if (!this.isHomePage && routeData) {
      this.currentPageTitle = routeData['title'] || '';
      this.currentPageDescription = routeData['description'] || '';
      
      // Update document title
      if (this.currentPageTitle) {
        this.titleService.setTitle(`${this.currentPageTitle} | ${this.journalTitle}`);
      } else {
        this.titleService.setTitle(this.journalTitle);
      }
    } else {
      this.currentPageTitle = '';
      this.currentPageDescription = '';
      this.titleService.setTitle(this.journalTitle);
    }
  }
}
