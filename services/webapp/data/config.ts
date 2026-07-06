import placeholder1 from '@/assets/placeholder1.png'
import type { NavItem, SiteConfig } from '@/lib/types'

export const SITE: SiteConfig = {
  website: 'https://joblens.hyperoot.dev',
  author: 'Rajesh',
  repo: 'https://github.com/HYP3R00T/joblens',
  title: 'joblens',
  description:
    'Generate cleaner Brave Search queries now, then graduate into a curated private dashboard for tracked direct-source jobs.',
  image: placeholder1,
  imageAlt: 'Preview of the JobLens public webapp',
  contentType: 'Website',
  twitterHandle: '@HYP3R00T',
  pageSize: 10,
  lang: 'en',
}

export const navItems: NavItem[] = [
  { href: '#query-mode', label: 'Query Mode' },
  { href: '#tracked-sources', label: 'Tracked Sources' },
  { href: '#roadmap', label: 'Roadmap' },
]

export const SOCIAL_LINKS = [
  {
    name: 'github',
    href: 'https://github.com/HYP3R00T',
    active: true,
    linkTitle: 'Visit the GitHub profile',
  },
]
