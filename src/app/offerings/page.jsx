import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ServiceSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Services',
  description:
    'I’ve developed a repertoir of fantastic techniques and treatments.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve developed a repertoir of fantastic techniques and treatments."
      intro="Some of my favorites are listed below alongside a variety of others that are tried and true. I'm also very open-minded so reach out for any special requests. Services range from spiritual to physical and everything in between. I may use oils, music, and other tools to enhance your experience."
    >
      <div className="space-y-20">
        <ServiceSection title="Massages" href="/services/massage/">
          <Appearance
            href="/services/massage/swedish-massage"
            title="Swedish"
            description="A common therapy involving percussion, kneading, vibration, tapping, and rolling to energize the body and improve health."
            event="$130 for 60 Minutes"
            cta="Book now"
          />
          <Appearance
            href="/services/"
            title="Deep Tissue"
            description="Technique targeting inner muscle layers and connective tissues, relieving pain, stifness, and stress through slow, sustained pressure."
            event="$130 for 60 Minutes"
            cta="Book now"
          />
        </ServiceSection>
        <ServiceSection title="Ayurveda">
          <Appearance
            href="/services/"
            title="Initial Consultation"
            description="For those who haven't had an Ayurvedic consultation before. We'll discuss your health history, current diet and lifestyle, and any concerns you may have."
            event="$160 for 140 Minutes"
            cta="Schedule now"
          />
          <Appearance
            href="#"
            title="Personalized Diet Plan"
            description="We will work together to develop a plan for diet and lifestyle choices, based on your uninque Dosha, that will promote physical, mental, and spiritual well-being."
            event="$315 for 140 Minutes"
            cta="Schedule now"
          />
          <Appearance
            href="#"
            title="Herbal Remedies or Detox"
            description="Various herbal remedies and detoxes are available to help you achieve your health goals. We will discuss your issues and execute a treatment plan."
            event="Varies Based on Products"
            cta="Schedule now"
          />
          <Appearance
            href="#"
            title="Ayurvedic Treatments"
            description="There are many ancient Ayurvedic treatments. Abhyanga, Kati Vasti, Elakizhi,  Njavara Kizhi,  Panchakarma, Vamana, Virechana, Basti, Nasya, Shirodhara, and more."
            event="Starting at $180"
            cta="Schedule now"
          />
        </ServiceSection>
        <ServiceSection title="Astrology">
          <Appearance
            href="#"
            title="Birth Chart Consultation"
            description="Learn about your birth chart and how it affects your life. We will discuss your temperament, personality, and potential future events based on your charts."
            event="$88 for 70 Minutes"
            cta="Select a time"
          />
          <Appearance
            href="#"
            title="Chart Reading"
            description="We'll discuss your chart and how it will affect your near and long-term future, as well as potential upcoming astrological events and how they impact you and others."
            event="$101 for 80 Minutes"
            cta="Select a time"
          />
          <Appearance
            href="#"
            title="Health and Stress Analysis"
            description="Anaylsis of your health and stress levels based on your birth chart. We will discuss your issues, determine possible solutions, and execute a treatment plan."
            event="Based on Prakiti"
            cta="Select a time"
          />
        </ServiceSection>
      </div>
    </SimpleLayout>
  )
}
