import { SectionHeader } from './SectionHeader';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    quote: 'Alex is an exceptional developer who consistently delivers high-quality work. Their ability to tackle complex problems and mentor junior developers made a significant impact on our team.',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Inc.',
  },
  {
    quote: 'Working with Alex was a pleasure. They brought innovative solutions to our product and helped us scale our infrastructure to handle millions of users. Highly recommend!',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'StartupXYZ',
  },
  {
    quote: 'Alex has a rare combination of technical expertise and great communication skills. They can explain complex concepts clearly and always deliver projects on time.',
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    company: 'Digital Agency Co.',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Testimonials"
          title="What People Say"
          subtitle="Feedback from colleagues and clients I've worked with"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
