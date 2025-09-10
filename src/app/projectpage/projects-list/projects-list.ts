import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Project {
  slug: string;
  title: string;
  blurb: string;
  imageUrl: string;
  imageAlt: string;
  objectFit: string;
  tags?: string[];
}

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.html',
  styleUrls: ['./projects-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsList {
  /**
   * List of my projects and a few attributes
   */
  projects: Project[] = [
    {
      slug: 'sort-wiki',
      title: 'Sort-Wiki',
      blurb: 'A wikipedia of various sorting algorithms.',
      imageUrl: 'assets/projects/sort-wiki/main.png',
      imageAlt: 'Sort Wiki Logo',
      objectFit: "cover",
      tags: ['Full-stack', 'Java', 'React']
    },
    {
      slug: 'personal-website',
      title: 'Personal Website',
      blurb: 'This very website you are looking at.',
      imageUrl: 'assets/projects/personal-website/logo.svg',
      imageAlt: 'Website Logo',
      objectFit: "contain",
      tags: ['Frontend', 'Angular', 'Design']
    },
    {
      slug: 'shapemon',
      title: 'Shapemon',
      blurb: 'Video game of epic proportions.',
      imageUrl: 'assets/projects/shapemon/ShapemonTitle.gif',
      imageAlt: 'Terminal text representing ASCII art',
      objectFit: "contain",
      tags: ['Java', 'Game Design', 'Graphic Design']
    }
  ];


  trackBySlug = (_: number, p: Project) => p.slug;
}