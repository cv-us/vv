import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" target='_blank' {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      <span className="text-xs"></span>
    </Link>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Contact',
  description: 'Various channels of communication for you to reach me through.',
}

export default function Contact() {
  return (
    <SimpleLayout
      title="I'd love to hear from you!"
      intro="Whether you'd like to talk about potential opportunities or collaborate on a project, I'd love to hear from you and talk about what's on your mind. You can reach me through traditional means, through social media, or by filling out a form and having me reach back out to you."
    >
      <div className="flex gap-x-4">
        <dt className="flex-none">
          <span className="sr-only">Address</span>
          {/* <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" /> */}
        </dt>
        {/* <dd>
                    545 Mavis Island
                    <br />
                    Chicago, IL 99191
                  </dd> */}
      </div>
      <div className="flex gap-x-4">
        <dt className="flex-none">
          <span className="sr-only">Telephone</span>
          {/* <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" /> */}
        </dt>
        <dd>
          <a className="hover:text-zinc-800 dark:text-zinc-100" href="tel:+1 (555) 555-5555">
            +1 (840) 248-6724
          </a>
        </dd>
      </div>
      <div className="flex gap-x-4">
        <dt className="flex-none">
          <span className="sr-only">Email</span>
          {/* <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" /> */}
        </dt>
        <dd>
          <a className="hover:text-zinc-800 dark:text-zinc-100" href="mailto:hello@example.com">
            jacob@vedavida.org
          </a>
        </dd>
      </div>
      <div className="mt-6 flex gap-6 pl-3">
        {/* <SocialLink
          href="https://twitter.com"
          aria-label="Follow on Twitter"
          icon={TwitterIcon}
        /> */}
        <SocialLink
          href="https://instagram.com/consciouscreator711"
          aria-label="Follow on Instagram"
          icon={InstagramIcon}
        />
        {/* <SocialLink
          href="https://github.com"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        /> */}
        <SocialLink
          href="https://linkedin.com/in/jacobdavis711"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />
      </div>
      <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-xl lg:ml-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-zinc-800 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-black/25 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-zinc-800 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-black/25 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-zinc-800 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-black/25 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-zinc-800 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-black/25 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-zinc-800 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-black/25 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
    </SimpleLayout>
  )
}
