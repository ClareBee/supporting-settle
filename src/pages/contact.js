import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Contact = () => (
  <>
    <SEO title="Contact" />

    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />

      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default Contact
