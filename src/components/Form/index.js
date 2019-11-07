import React from 'react'

export const Form = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}