import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-full">
        <h1 className="text-4xl font-bold tracking-tight text-lime-400 dark:text-lime-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base text-brown-600 dark:text-brown-100">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
