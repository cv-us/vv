import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';
import { BeakerIcon, UserIcon, EyeIcon, FireIcon, HeartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

// Sample image placeholders (replace with actual assets)
import ayurvedaHeroImage from '@/images/ayurveda-hero.jpg';
import consultationImage from '@/images/consultation.jpg';
import treatmentImage from '@/images/treatment.jpg';
import ritualImage from '@/images/ritual.jpg';

export const metadata = {
  title: 'Ayurvedic Wellness Services | Veda Vida Southern California',
  description: 'Discover personalized Ayurvedic consultations, treatments, and rituals at Veda Vida. Book your holistic wellness journey today.',
};

const offerings = [
  {
    title: 'Consultations',
    description: 'Personalized sessions to assess your dosha and create a custom wellness plan, including diet and lifestyle guidance.',
    cta: 'Book a Consultation',
    href: '/book-now',
    icon: UserIcon,
    iconColor: 'text-emerald-500',
    image: consultationImage,
    imageAlt: 'Ayurvedic consultation with a practitioner',
  },
  {
    title: 'Treatments',
    description: 'Rejuvenating therapies like Abhyanga (oil massage) and Shirodhara to restore balance and vitality.',
    cta: 'Explore Treatments',
    href: '/services/ayurvedic-wellness#treatments',
    icon: EyeIcon,
    iconColor: 'text-amber-600',
    image: treatmentImage,
    imageAlt: 'Abhyanga oil massage therapy',
  },
  {
    title: 'Rituals',
    description: 'Transformative seasonal cleanses and specialized oil therapies for deep healing and renewal.',
    cta: 'Discover Rituals',
    href: '/services/ayurvedic-rituals',
    icon: FireIcon,
    iconColor: 'text-amber-600',
    image: ritualImage,
    imageAlt: 'Ayurvedic seasonal cleanse ritual',
  },
];

const testimonials = [
  {
    quote: 'My Ayurvedic consultation changed my daily routine for the better!',
    author: 'S.R.',
  },
  {
    quote: 'The Shirodhara treatment was life-changing and so relaxing.',
    author: 'M.K.',
  },
  {
    quote: 'Veda Vida’s rituals brought balance to my hectic life.',
    author: 'J.P.',
  },
];

export default function AyurvedicWellness() {
  return (
    <SimpleLayout
      title="Discover Balance with Ayurvedic Wellness"
      intro="Embrace personalized consultations, rejuvenating treatments, and ancient rituals to harmonize your body, mind, and spirit."
    >
      <div className="space-y-20">
        {/* Hero Image */}
        <div className="relative mt-16 sm:mt-20">
          <Image
            src={ayurvedaHeroImage}
            alt="Ayurvedic wellness consultation with herbal remedies"
            className="w-full h-64 object-cover rounded-2xl"
            priority
          />
          <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl"></div>
          <a
            href="/book-now"
            className="absolute bottom-4 right-4 bg-emerald-500 text-stone-100 px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition"
            aria-label="Schedule an Ayurvedic consultation"
          >
            Schedule a Consultation
          </a>
        </div>

        {/* What is Ayurveda? */}
        <Section title="The Science of Life">
          <div className="space-y-6">
            <p className="text-stone-300">
              Ayurveda, a 5,000-year-old system from India, is the science of life, designed to balance body, mind, and spirit. At Veda Vida, we bring this ancient wisdom to modern life through personalized assessments and natural remedies.
            </p>
            <ul className="space-y-4 text-stone-300">
              <li className="flex items-start">
                <BeakerIcon className="h-6 w-6 text-emerald-500 mr-2" aria-hidden="true" />
                Personalized dosha assessments (Vata, Pitta, Kapha) to tailor your wellness plan.
              </li>
              <li className="flex items-start">
                <HeartIcon className="h-6 w-6 text-rose-300 mr-2" aria-hidden="true" />
                Organic, sustainable herbs and oils for safe, eco-friendly treatments.
              </li>
              <li className="flex items-start">
                <EyeIcon className="h-6 w-6 text-amber-600 mr-2" aria-hidden="true" />
                Integration with massage and astrology for a holistic experience.
              </li>
            </ul>
            <a
              href="/community/blog/dosha-guide"
              className="text-rose-300 underline hover:text-rose-400"
              aria-label="Learn more about your dosha"
            >
              Learn More About Your Dosha
            </a>
          </div>
        </Section>

        {/* Our Ayurvedic Offerings */}
        <Section title="Tailored Ayurvedic Experiences">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering) => (
              <Card key={offering.title} className="bg-stone-800 rounded-xl p-6">
                <div className="relative h-48 mb-4">
                  <Image
                    src={offering.image}
                    alt={offering.imageAlt}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                  <offering.icon
                    className={`absolute top-2 right-2 h-8 w-8 ${offering.iconColor}`}
                    aria-hidden="true"
                  />
                </div>
                <Card.Title href={offering.href}>{offering.title}</Card.Title>
                <Card.Description>{offering.description}</Card.Description>
                <Card.Cta>{offering.cta}</Card.Cta>
              </Card>
            ))}
          </div>
        </Section>

        {/* Why Choose Veda Vida? */}
        <Section title="Your Path to Holistic Harmony">
          <div className="space-y-6">
            <p className="text-stone-300">
              At Veda Vida, our Ayurvedic approach is uniquely tailored to your needs, blending ancient wisdom with modern care.
            </p>
            <dl className="space-y-4 text-stone-300">
              <div className="flex items-start">
                <dt className="font-semibold mr-2 text-stone-100">Personalization:</dt>
                <dd>Custom plans based on your dosha, lifestyle, and astrological insights.</dd>
              </div>
              <div className="flex items-start">
                <dt className="font-semibold mr-2 text-stone-100">Sustainability:</dt>
                <dd>Organic, eco-friendly products reflecting our commitment to the planet.</dd>
              </div>
              <div className="flex items-start">
                <dt className="font-semibold mr-2 text-stone-100">Integration:</dt>
                <dd>Combining Ayurveda with massage and astrology for comprehensive wellness.</dd>
              </div>
            </dl>
            <a
              href="/book-now"
              className="bg-emerald-500 text-stone-100 px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition"
              aria-label="Start your Ayurvedic journey"
            >
              Start Your Journey
            </a>
          </div>
        </Section>

        {/* Client Stories */}
        <Section title="Transformed by Ayurveda">
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 snap-x snap-mandatory overflow-x-auto pb-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-stone-800 rounded-xl p-6 snap-center min-w-[280px]">
                  <HeartIcon className="h-6 w-6 text-rose-300 mb-4" aria-hidden="true" />
                  <Card.Description>{testimonial.quote}</Card.Description>
                  <p className="mt-2 text-sm text-stone-500">— {testimonial.author}</p>
                </Card>
              ))}
            </div>
            <a
              href="/contact"
              className="mt-6 inline-block text-rose-300 underline hover:text-rose-400"
              aria-label="Share your Ayurvedic story"
            >
              Share Your Story
            </a>
          </div>
        </Section>

        {/* Book Your Ayurvedic Experience */}
        <Section title="Begin Your Ayurvedic Journey">
          <div className="space-y-6">
            <p className="text-stone-300">
              Ready to restore balance? Book a consultation, treatment, or ritual today.
            </p>
            <div className="flex space-x-4">
              <a
                href="/book-now"
                className="bg-emerald-500 text-stone-100 px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition"
                aria-label="Book an Ayurvedic service"
              >
                Book Now
              </a>
              <a
                href="/book-now#pricing"
                className="text-rose-300 underline hover:text-rose-400"
                aria-label="View Ayurvedic pricing"
              >
                View Pricing
              </a>
            </div>
          </div>
        </Section>
      </div>
    </SimpleLayout>
  );
}
