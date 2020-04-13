import React from "react"
import SEO from "../components/seo"
import Heading from "../components/heading/heading"
import ContactForm from "../components/contact-form/contact-form"

const Contact = () => (
  <>
    <SEO title="Contact" />
    {/* relative link */}
    <div id="form" />
    <Heading heading="Contact Form" />
    <ContactForm />
  </>
)

export default Contact
