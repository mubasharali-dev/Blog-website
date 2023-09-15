import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { MAYUR, RUPALI } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/how-to-setup-blog',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: MAYUR,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@mayur_nalwala",
    }
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/",
    featureArticle: true,
    preview: {
      author: MAYUR,
      date: "August 08 2023",
      articleTitle: "GTA Vice City new release and Guide",
      tags: "demo, blog setup",
      thumbnail: "/public/imp_assets/tutorials/gta.jpg",
      shortIntro: "You can read about the new release of GTA Vice City.",
      category: "tutorial",
    },
    seo: {
      title: "How to setup this blog template",
      description: "These are the steps to setup your blog",
      keywords: "demo, blog setup",
      ogImage: "/public/imp_assets/tutorials/gta.jpg",
      twitterHandle: "@mayur_nalwala",
      author: MAYUR.name,
    },
  },
  {
    path: "/",
    featureArticle: true,
    preview: {
      author: RUPALI,
      date: "August 08 2022",
      articleTitle: "Ankit blog on how to play games",
      tags: "demo, first article",
      thumbnail: "/public/imp_assets/tutorials/gta.jpg",
      shortIntro:
        "This a step by step guide on how to play games and how to use this blog template.",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
    },
  },
  {
    path: "/",
    featureArticle: true,
    preview: {
      author: RUPALI,
      date: "August 08 2022",
      articleTitle: "Cheat codes of GTA Vice City",
      tags: "demo, deploy blog",
      thumbnail: "/public/imp_assets/tutorials/gta.jpg",
      shortIntro:
        "In this article you will see the cheat codes of GTA Vice City.",
      category: "tutorial",
    },
    seo: {
      ogImage: "/public/imp_assets/tutorials/how-to-deploy.svg",
    },
  },
  {
    path: "/",
    preview: {
      author: RUPALI,
      date: "August 14 2023",
      articleTitle: "GTA new release and Guide",
      tags: "demo, layout, home layout",
      thumbnail: "/public/imp_assets/tutorials/gta.jpg",
      shortIntro: "In this article we will see about gta new release.",
      category: "layouts",
    },
    seo: {
      title: "Home Layout Example",
      description: "In this article we will see Default Home Layout example.",
      keywords:
        "next js, tailwind css, typescript, blog template, default layout, default home layout",
      ogImage: "/public/imp_assets/tutorials/home-layouts.svg",
      author: RUPALI.name,
    },
  },
  {
    path: "/",
    preview: {
      author: MAYUR,
      date: "August 14 2022",
      articleTitle: "GTA Vice City new release and Guide",
      tags: "demo, with sidebar, default layout",
      thumbnail: "/public/imp_assets/tutorials/gta.jpg",
      shortIntro:
        "In this article we will see about how to play GTA Vice City.",
      category: "layouts",
    },
    seo: {
      keywords:
        "demo, with sidebar, blog page layout, blog page design with sidebar, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/blog-with-sidebar-layout.svg",
    },
  },
  {
    path: "/",
    preview: {
      author: RUPALI,
      date: "August 14 2022",
      articleTitle: "GTA Vice City new release and Guide 2 about GTA",
      tags: "demo, centered, centered layout",
      thumbnail: "/public/imp_assets/tutorials/gta.jpg",
      shortIntro:
        "This a demo article about using games in job",
      category: "layouts",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/blog-with-centered-layout.svg",
    },
  },
  {
    path: "/",
    preview: {
      author: RUPALI,
      date: "August 08 2022",
      articleTitle: "How to play GTA Vice City",
      tags: "demo, all components",
      thumbnail: "/public/imp_assets/tutorials/gta.jpg",
      shortIntro: "List of all components used in gta vice city.",
      category: "tutorial",
    },
    seo: {
      keywords: "demo, all components, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/all-components.svg",
    },
  },
  {
    path: "/",
    preview: {
      author: MAYUR,
      date: "August 10 2022",
      articleTitle: "Car codes in GTA Vice City",
      tags: "demo, all components, style guide, styling tutorial",
      thumbnail: "/public/imp_assets/tutorials/gta.jpg",
      shortIntro: "Checkout this article to earn a car in GTA Vice City.",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/style-guide.svg",
    },
  },
  {
    path: "/",
    preview: {
      author: MAYUR,
      date: "August 13 2022",
      articleTitle: "How to win games in life",
      tags: "demo, all components, style guide, styling tutorial, icons, how to use icons in website",
      thumbnail: "/public/imp_assets/tutorials/gta.jpg",
      shortIntro: "How to win and earn in real life",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
      ogImage: "/public/imp_assets/tutorials/how-to-use-icons.svg",
    },
  },
  {
    path: "/",
    preview: {
      author: MAYUR,
      date: "August 6 2022",
      articleTitle: "Beautify the house in gta vice city",
      shortIntro:
        "This is guide to beautify the house in gta vice city",
      tags: "demo, your first article",
      thumbnail: "/public/imp_assets/tutorials/gta.jpg",
      category: "tutorial",
    },

    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
      ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
    },
  },
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
