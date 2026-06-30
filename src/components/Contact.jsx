import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitting(true);
    // Simulate sending email
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500); // 1.5s delay
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-left">
            <h2 className="section-title contact-title">Let's Build<br />Something Together</h2>
            <p className="contact-text">
              Available for innovative projects, freelance, and contract work. Get in touch, let's build something exceptional.
            </p>
            
            <div className="contact-info-list">
              <div className="email-box">
                <span className="email-label">EMAIL ME</span>
                <a href="mailto:akilanaki02@gmail.com" className="email-link">
                  akilanaki02@gmail.com
                </a>
              </div>
              
              <div className="phone-box">
                <span className="phone-label">CALL ME</span>
                <a href="tel:+9092661289" className="phone-link">
                  +9092661289
                </a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-form-wrapper glass-panel">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">FULL NAME</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">MESSAGE</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows="4"
                      className="form-input form-textarea"
                    />
                  </div>

                  <button type="submit" disabled={submitting} className="form-submit-btn">
                    {submitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
