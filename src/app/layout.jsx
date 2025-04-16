import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Jacob’s Ladder',
    default:
      'Jacob\'s Ladder',
  },
  description:
    'I’m Jacob, a Licensed Massage Therapist and Ayurvedic practitioner based in Southern California. I’m the Founder of Jacobs Ladder, where we develop and employ methods of massage and bodywork that are rooted in the ancient wisdom of Ayurveda.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-brown-50 dark:bg-brown-900">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
