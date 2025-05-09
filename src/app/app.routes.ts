import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
      path: 'about/dataxense',
      loadComponent: () => import('./pages/about/portal/portal.component').then(m => m.PortalComponent),
    },
    {
      path: 'about/editorial-board-members',
      loadComponent: () => import('./pages/about/editorial-board-member/editorial-board-member.component').then(m => m.EditorialBoardMemberComponent),
    },
    {
      path: 'about/reviewers-panel',
      loadComponent: () => import('./pages/about/reviewer-panel/reviewer-panel.component').then(m => m.ReviewerPanelComponent),
    },
    {
      path: 'about/abstracting-and-indexing',
      loadComponent: () => import('./pages/about/abstructing-and-indexing/abstructing-and-indexing.component').then(m => m.AbstructingAndIndexingComponent),
    },
    {
      path: 'about/journal-policies',
      loadComponent: () => import('./pages/about/journal-policies/journal-policies.component').then(m => m.JournalPoliciesComponent),
    },
    {
      path: 'about/publication-ethics',
      loadComponent: () => import('./pages/about/publication-ethics/publication-ethics.component').then(m => m.PublicationEthicsComponent),
    },
    {
      path: 'about/dataxense-crossmark-policy',
      loadComponent: () => import('./pages/about/portal-crossmark-policy/portal-crossmark-policy.component').then(m => m.PortalCrossmarkPolicyComponent),
    },
    {
      path: 'articles/advance',
      loadComponent: () => import('./pages/articles/published-in-advance/published-in-advance.component').then(m => m.PublishedInAdvanceComponent),
    },
    {
      path: 'articles/current',
      loadComponent: () => import('./pages/articles/current-issue/current-issue.component').then(m => m.CurrentIssueComponent),
    },
    {
      path: 'articles/archive',
      loadComponent: () => import('./pages/articles/archive-issue/archive-issue.component').then(m => m.ArchiveIssueComponent),
    },
    {
      path: 'authors/instructions-for-authors',
      loadComponent: () => import('./pages/guidelines/instructions-for-authors/instructions-for-authors.component').then(m => m.InstructionsForAuthorsComponent),
    },
    {
      path: 'authors/track-manuscript-status',
      loadComponent: () => import('./pages/guidelines/track-manuscript-status/track-manuscript-status.component').then(m => m.TrackManuscriptStatusComponent),
    },
    {
      path: 'authors/publication-certificate',
      loadComponent: () => import('./pages/guidelines/publication-certificate/publication-certificate.component').then(m => m.PublicationCertificateComponent),
    },
    {
      path: 'authors/article-processing-fee',
      loadComponent: () => import('./pages/guidelines/article-processing-fee/article-processing-fee.component').then(m => m.ArticleProcessingFeeComponent),
    },
    {
      path: 'join/editorial-board-members',
      loadComponent: () => import('./pages/join-us/editorial-board-member/editorial-board-member.component').then(m => m.EditorialBoardMemberComponent),
    },
    {
      path: 'join/reviewers-panel',
      loadComponent: () => import('./pages/join-us/reviewer-panel/reviewer-panel.component').then(m => m.ReviewerPanelComponent),
    },
    {
      path: 'downloads',
      loadComponent: () => import('./pages/downloads/downloads.component').then(m => m.DownloadsComponent),
    },
    {
      path: 'contact-us',
      loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent),
    },
    {
      path: 'faqs',
      loadComponent: () => import('./pages/faqs/faqs.component').then(m => m.FaqsComponent),
    },
    {
        path: 'aims-and-scope',
        loadComponent: () => import('./pages/aim-and-scope/aim-and-scope.component').then(m => m.AimAndScopeComponent),
    },
    {
        path: 'editorial-board-members',
        loadComponent: () => import('./pages/editorial-board-members/editorial-board-members.component').then(m => m.EditorialBoardMembersComponent),
    },
    {
        path: 'approved-journal',
        loadComponent: () => import('./pages/approved-journal/approved-journal.component').then(m => m.ApprovedJournalComponent),
    },
    {
        path: 'submit-article',
        loadComponent: () => import('./pages/submit-article/submit-article.component').then(m => m.SubmitArticleComponent),
    },
    {
      path: '**',
      redirectTo: '/',
    }
  ];
