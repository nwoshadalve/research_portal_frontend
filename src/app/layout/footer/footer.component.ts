import { Component } from '@angular/core';
import { FooterItems } from '../../utils/menus/menus';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterSection } from '../../utils/interfaces/menus.interface';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerItems: FooterSection[] = FooterItems;
  currentYear: number = new Date().getFullYear();
  getCurrentYear() {
    return this.currentYear;
  }
}
