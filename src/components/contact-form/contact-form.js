import React, { useState } from "react"
import styles from "./contact-form.module.css"

const ContactForm = () => {
  const [showForm, setShowForm] = useState(true)
  const handleSubmit = e => {
    e.preventDefault()
    setShowForm(false)
  }
  return (
    <div className={styles.form}>
      {showForm && (
        <form
          method="post"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <p>
            Get in touch via email{" "}
            <a href="mailto:clarebee@protonmail.com">clarebee@protonmail.com</a>{" "}
            or use the form below!
          </p>
          <input type="hidden" name="form-name" value="contact" />

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
          <div className={styles.btnContainer}>
            <button
              type="submit"
              onClick={handleSubmit}
              className={styles.submitBtn}
            >
              Send
            </button>
            <input type="reset" value="Clear" className={styles.clearBtn} />
          </div>
        </form>
      )}
      {!showForm && <p>Thanks for getting in touch!</p>}
    </div>
  )
}

export default ContactForm
