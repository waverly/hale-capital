import { PortableText } from "next-sanity"
import "@theme/Components/Testimonial.scss"

export const Testimonials = ({ testimonials }: Pick<NonNullable<Sanity.PageQueryResult>, "testimonials">) => (
  <ul>
    {testimonials?.map((testimonial) => (
      <li className="testimonial" key={testimonial._key}>
        <PortableText value={testimonial.statement} />
        <div>—</div>
        <div className="author">
          <strong>{testimonial.name}</strong> <em>{testimonial.company}</em>
        </div>
      </li>
    ))}
  </ul>
)
