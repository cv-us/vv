import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
        target='_blank'
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Jacob Davis. I live in Southern California, where I help people love their bodies.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-yellow-400 dark:text-zinc-100 sm:text-5xl">
            I’m Jacob Davis. Located in Burbank California, I have a passion for helping others.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved helping people for as long as I can remember, and had my first encounter with Eastern philosophies when I was 13 years old, after being introduced to Yogananda's teachings at SRF temple. 
            </p>
            <p>
              I was hooked, and spent the next few years studying his teachings and philosophies alongside my highschool curriculum and participated in school athletics teams such as Football, Basketball, Track, Swim, Water Polo, and Hip-Hop Dance.
            </p>
            <p>
              After leaving high school I joined the U.S. Navy where I served as a Operations Specialist for 4 years, helping our boat and crew navigate the seas. During my tenure I was stationed in Norfolk, Virginia and set out to sea on several occasions in maritime defense operations. It wasn’t always easy but it gave me a great sense of pride to serve my country, and duty to my fellow sailors.
            </p>
            <p>
              Upon leaving the Navy I moved to Naples Florida where I attended Bonita Springs School of Massage and graduated as a Certified Massage Therapist. I then moved to Southern California where I attended the Southern California University of Health Sciences and graduated as an Ayurvedic Wellness Educator and am currently working towards being certified as an Ayurvedic Practitioner.
            </p>
            <p>
              Today, I’m the founder of Veda Vida, where we work to develop and employ methods of massage and bodywork that are rooted in the ancient wisdom of Ayurveda.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink> */}
            <SocialLink href="https://instagram.com/consciouscreator711" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/jacobdavis711" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jacob@vedavida.org"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jacob@vedavida.org
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
