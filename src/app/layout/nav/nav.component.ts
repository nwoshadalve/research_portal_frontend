import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavItems } from '../../utils/menus/menus';
import { NavItem } from '../../utils/interfaces/menus.interface';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-nav',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  public navItems: any[] = NavItems;

  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  constructor(private router: Router, private eRef: ElementRef) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDropdown(name: string) {
    this.activeDropdown = this.activeDropdown === name ? null : name;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.activeDropdown = null;
  }

  isSubMenuActive(item: NavItem): boolean {
    if (!item.subMenus) return false;
    return item.subMenus.some((sub: { name: string; route: string }) => this.router.url === sub.route);
  }

  handleMobileNavigation(): void {
    this.closeMobileMenu();
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    const clickedInside = this.eRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.activeDropdown = null;
    }
  }
}
