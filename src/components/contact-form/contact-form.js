import React from "react"
import styles from "./contact-form.module.css"

const ContactForm = () => {
  return (
    <div className={styles.form}>
      <form
        method="POST"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        action="/"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p>
          Get in touch via email{" "}
          <a href="mailto:clarebee@protonmail.com">clarebee@protonmail.com</a>{" "}
          or use the form below!
        </p>

        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" required />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" required />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" required />
        </label>
        <div className={styles.btnContainer}>
          <button type="submit" className={styles.submitBtn}>
            Send
          </button>
          <input type="reset" value="Clear" className={styles.clearBtn} />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
