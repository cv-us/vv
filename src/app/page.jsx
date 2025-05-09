import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoProductConnection from '@/images/logos/productconnection.svg'
import logoJuicelation from '@/images/logos/juicelation.svg'
import logoMassageEnvy from '@/images/logos/massageenvy.svg'
import logoVedaVida from '@/images/logos/vv_z901.png'
import logoStarbucks from '@/images/logos/USN.svg'
import image1 from '@/images/photos/jacob.jpg'
import image2 from '@/images/photos/neck-massage.jpg'
import image3 from '@/images/photos/jacob-scrubs.jpg'
// import image4 from '@/images/photos/image-4.jpg'
// import image5 from '@/images/photos/image-5.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

import {
  StarIcon,
  HandRaisedIcon,
  FireIcon,
  BookOpenIcon,
  BeakerIcon,
  MoonIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Massage Therapy.',
    description: 'Experience personalized massage therapies, from soothing Swedish to transformative Thai, designed to restore balance and relieve stress. Our expert practitioners tailor each session to your unique needs, promoting physical and emotional well-being.',
		href: '#',
    icon: HandRaisedIcon,
  },
  {
    name: 'Ayurvedic Wellness.',
    description: 'Embrace holistic health with Ayurvedic consultations and treatments that align your body and mind. From dietary guidance to rejuvenating therapies, our approach honors ancient wisdom for modern lifestyles.',
		href: '#',
    icon: BeakerIcon,
  },
  {
    name: 'Astrology Readings.',
    description: 'Unlock insights into your life’s path with personalized astrology readings. Our intuitive approach combines celestial wisdom with practical guidance to empower your personal growth and harmony.',
		href: '#',
    icon: StarIcon,
  },
  {
    name: 'Wellness Workshops.',
    description: 'Join immersive workshops blending massage techniques, Ayurvedic principles, and astrological insights to deepen your wellness journey. Learn practical tools for balance and growth in a supportive community setting.',
		href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Ayurvedic Rituals.',
    description: 'Experience transformative Ayurvedic rituals, from rejuvenating oil therapies to seasonal cleanses, tailored to restore harmony and vitality. Elevate your daily wellness with ancient practices.',
		href: '#',
    icon: FireIcon,
  },
  {
    name: 'Mindfulness Meditation.',
    description: 'Cultivate inner peace with guided mindfulness meditation sessions, infused with astrological guidance to align your mind and spirit. Perfect for stress relief and personal clarity.',
		href: '#',
    icon: MoonIcon,
  },
]


function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}


function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" target='_blank'{...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-yellow-400 dark:focus:ring-yellow-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}



export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <div className="">

			{/* below container had original margin mt-9 */}
			<div className="relative h-screen isolate overflow-hidden pt-14">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?q=80&w=2830&sat=-40&blend=a1887f&exp=15&blend-mode=multiply&auto=format&fit=crop&con=15&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 -z-10 h-screen w-auto object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-brown-100 ring-1 ring-white/10 hover:ring-white/20">
                Get a discount on your first session.{' '}
                <a href="#" className="font-semibold text-white">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance font-amatic text-5xl font-semibold tracking-tight text-white sm:text-7xl">
               Holistic Wellness for the Modern World
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-brown-100 text-shadow-lg/30 text-shadow-brown-800 sm:text-xl/8">
                Boutique mobile wellness services and unique health and wellness products that inspire healthy and happy living, rooted in ancient wisdom and modern science. Experience the Veda Vida difference today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
        </div>
      </div>

			<div className="bg-brown-800 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-base/7 font-semibold text-lime-500">Meet your holistic needs</h2>
						<p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
							Get more aqcuainted with yourself.
						</p>
						<p className="mt-6 text-lg/8 text-gray-300">
						Mind body and soul, you are a complex living being and you deserve to fully understand yourself and your existence in the cosmos.
						</p>
					</div>
					<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-9">
								<dt className="inline font-semibold text-white">
									<feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-lime-500" />
									{feature.name}
								</dt>{' '}
								<dd className="inline">{feature.description}</dd>
								<p className="mt-6">
									<a href={feature.href} className="text-sm/6 font-semibold text-lime-500">
									Learn more <span aria-hidden="true">→</span>
									</a>
								</p>
							</div>
						))}
					</dl>
				</div>
			</div>



				{/*
				<Container className="mt-24 md:mt-28">
					<div className="mx-auto grid max-w-xl grid-cols-1 lg:max-w-none">
						<div className="flex flex-col gap-16">
							{articles.map((article) => (
								<Article key={article.slug} article={article} />
							))}
						</div>
					</div>
				</Container>
				*/}
    </div>
  )
}
