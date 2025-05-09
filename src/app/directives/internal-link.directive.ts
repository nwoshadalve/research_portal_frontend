import { Directive, ElementRef, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appInternalLink]',
  standalone: true
})
export class InternalLinkDirective implements OnInit, OnDestroy {
  private listeners: (() => void)[] = [];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    // Wait for the next tick to ensure the DOM is fully rendered
    setTimeout(() => {
      this.processLinks();
    });
  }

  ngOnDestroy() {
    // Clean up all event listeners to prevent memory leaks
    this.listeners.forEach(unlisten => unlisten());
  }

  private processLinks() {
    const element = this.el.nativeElement;
    
    // Process links with data-internal-link attribute
    const markedInternalLinks = element.querySelectorAll('a[data-internal-link="true"]');
    this.processMarkedInternalLinks(markedInternalLinks);
    
    // Process all links that start with / (enhanced functionality)
    const potentialInternalLinks = element.querySelectorAll('a:not([data-internal-link="true"])');
    this.processUnmarkedLinks(potentialInternalLinks);
  }

  private processMarkedInternalLinks(links: NodeListOf<HTMLAnchorElement>) {
    links.forEach((link: HTMLAnchorElement) => {
      // Get the route from the data attribute
      const route = link.getAttribute('data-route');
      
      if (route) {
        this.attachRouterEvents(link, route);
        
        // Add visual indication that this is an internal link
        link.classList.add('internal-link');
        
        // Add aria attributes for accessibility
        link.setAttribute('role', 'button');
        link.setAttribute('aria-label', `Navigate to ${link.textContent?.trim() || 'page'}`);
      }
    });
  }
  
  private processUnmarkedLinks(links: NodeListOf<HTMLAnchorElement>) {
    links.forEach((link: HTMLAnchorElement) => {
      const href = link.getAttribute('href');
      
      // Check if the link starts with / but is not an absolute URL
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        // This is likely an internal route
        this.attachRouterEvents(link, href);
        
        // Mark it as an internal link for styling
        link.classList.add('internal-link');
        
        // Add data attributes for consistency
        link.setAttribute('data-internal-link', 'true');
        link.setAttribute('data-route', href);
        
        // Add ARIA attributes
        link.setAttribute('role', 'button');
      }
    });
  }
  
  private attachRouterEvents(link: HTMLAnchorElement, route: string) {
    // Add click event listener that uses Angular router
    const unlisten = this.renderer.listen(link, 'click', (event: Event) => {
      event.preventDefault();
      this.router.navigateByUrl(route);
    });
    
    this.listeners.push(unlisten);
    
    // Add keyboard accessibility for the link
    const keydownUnlisten = this.renderer.listen(link, 'keydown', (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.router.navigateByUrl(route);
      }
    });
    
    this.listeners.push(keydownUnlisten);
  }
}
