import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import './Email.css'; 

function Email() {
  const { register, handleSubmit, reset } = useForm()

  async function sending(data) {
    try {
      let res = await axios.post('http://localhost:3000/email-api/send', data)
      console.log("email sent successfully", res.data)
      alert('Email sent successfully!')
      reset(); 
    } catch (err) {
      console.log("error", err)
      alert('Failed to send email')
    }
  }

  return (
    <div className="email-container">
      <h2 className="email-title">Send Email</h2>
      <form onSubmit={handleSubmit(sending)} className="email-form">
        <input
          type="email"
          placeholder="Recipient Email"
          {...register('to')}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          {...register('subject')}
          required
        />
        <textarea
          placeholder="Message"
          {...register('message')}
          rows="6"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Email
