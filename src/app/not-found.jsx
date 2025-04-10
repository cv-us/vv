import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ChatBubbleOvalLeftEllipsisIcon, BookOpenIcon, BriefcaseIcon, InformationCircleIcon } from '@heroicons/react/24/solid'

const links = [
  {
    name: 'About',
    href: '/about',
    description: 'Learn more about me and how I got started.',
    icon: InformationCircleIcon,
  },
  { name: 'Services', href: '/services', description: 'Choose from a number of services I offer.', icon: BriefcaseIcon },
  { name: 'Blog', href: '/blog', description: 'Read my latest musings and helpful tips.', icon: BookOpenIcon },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Get in touch, collaborate, or just say hello!',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
]

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">Popular pages</h2>
          <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex gap-x-6 py-6">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                  <link.icon className="h-6 w-6 text-yellow-500 dark:text-yellow-400" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-100">
                    <a href={link.href}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {link.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{link.description}</p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Button href="/" variant="secondary" className="mt-8">
          Go back home
        </Button>
      </div>
    </Container>
  )
}
