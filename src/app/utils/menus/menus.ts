export const NavItems = [
    {
      name: 'home',
      route: '/'
    },
    {
      name: 'about us',
      subMenus: [
        {
          name: 'about the dataxense',
          route: '/about/dataxense'
        },
        {
          name: 'editorial board members',
          route: '/about/editorial-board-members'
        },
        {
          name: 'reviewers panel',
          route: '/about/reviewers-panel'
        },
        {
          name : 'absructing and indexing',
          route: '/about/abstracting-and-indexing'
        },
        {
          name: 'journal policies',
          route: '/about/journal-policies'
        },
        {
          name: 'publication ethics',
          route: '/about/publication-ethics'
        },
        {
          name: 'dataxense crossmark policy',
          route: '/about/dataxense-crossmark-policy'
        }
      ]
    },
    {
      name: 'view articles',
      subMenus: [
        {
          name: 'articles published in advance',
          route: '/articles/advance'
        },
        {
          name: 'current issues',
          route: '/articles/current'
        },
        {
          name: 'archive issues',
          route: '/articles/archive'
        }
      ]
    },
    {
      name: "author's guidelines",
      subMenus: [
        {
          name: "instructions for authors",
          route: '/authors/instructions-for-authors'
        },
        {
          name: "track manuscript status",
          route: '/authors/track-manuscript-status'
        },
        {
          name: "publication certificate",
          route: '/authors/publication-certificate'
        },
        {
          name: "article processing fee",
          route: '/authors/article-processing-fee'
        }
      ]
    },
    {
      name: 'join us',
      subMenus: [
        {
          name: 'editorial board members',
          route: '/join/editorial-board-members'
        },
        {
          name: 'reviewers panel',
          route: '/join/reviewers-panel'
        }
      ]
    },
    {
      name: 'downloads',
      route: '/downloads'
    },
    {
      name: 'contact us',
      route: '/contact-us'
    },
    {
      name: 'faqs',
      route: '/faqs'
    }
  ];

export const FooterItems = [
  {
    name: 'quick links',
    menus: [
      {
        name: "aim and scope",
        route: "/aims-and-scope"
      },
      {
        name: 'journal policies',
        route: '/about/journal-policies'
      },
      {
        name: "editorial board members",
        route: '/editorial-board-members'
      },
      {
        name: "publication ethics",
        route: "/about/publication-ethics"
      }
    ]
  },
  {
    name: "Journal Information",
    menus: [
      {
        name: "eISSN: 2582-5542",
        url: "facebook.com",
        openInNewTab: true
      },
      {
        name: "ISSN Approved Journal",
        route: "/approved-journal"
      },
      {
        name: "CrossRef DOI: 10.30574/wjbphs",
        url: "https://www.crossref.org",
        openInNewTab: true
      },
      {
        name: "Google Scholar Indexed Journal",
        url: "https://scholar.google.com",
        openInNewTab: true
      },
      {
        name: "Webwiki Portal",
        url: "https://www.webwiki.com",
        openInNewTab: true
      }
    ]
  },
  {
    name: "Links for Authors",
    menus: [
      {
        name: "Author's Guidelines",
        route: "/authors/instructions-for-authors"
      },
      {
        name: "Payment Instructions",
        route: "/authors/article-processing-fee"
      },
      {
        name: "Archives",
        route: "/articles/archive"
      },
      {
        name: "Submit Article",
        route: "/submit-article"
      }
    ]
  }
]