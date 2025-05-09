import { Component, OnInit, ViewChildren, QueryList, AfterViewChecked, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { SafeHtml } from '@angular/platform-browser';
import { InternalLinkDirective } from '../../../directives/internal-link.directive';
import { QuillTransformerService } from '../../../services/quill-transformer.service';

interface AboutPortalSection {
  _id: string;
  title: string;
  description: string;
  processedContent?: SafeHtml;
}

@Component({
  selector: 'app-portal',
  imports: [
    CommonModule,
    RouterModule,
    InternalLinkDirective
  ],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent implements OnInit, AfterViewChecked {
  sections: AboutPortalSection[] = [];
  isLoading = true;
  contentProcessed = false;

  @ViewChildren('contentSection') contentSections!: QueryList<ElementRef>;

  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private htmlProcessor: QuillTransformerService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.apiService.getAboutPortalData().subscribe(
      (res: any) => {
        if (res.status !== 200) {
          this.toaster.error('Error fetching home data');
          this.isLoading = false;
          return;
        }

        // Process the HTML content for each section
        this.sections = res.data.map((section: AboutPortalSection) => {
          return {
            ...section,
            processedContent: this.htmlProcessor.convert(JSON.parse(section.description))
          };
        });

        this.isLoading = false;
      },
      (error) => {
        this.toaster.error('Failed to load home content');
        this.isLoading = false;
        console.error('API error:', error);
      }
    );
  }

  ngAfterViewChecked() {
    // This ensures the directive is properly applied when the view is stable
    if (this.sections.length > 0 && !this.contentProcessed && !this.isLoading) {
      this.contentProcessed = true;
      console.log('Content processed and ready for navigation');
    }
  }
}
