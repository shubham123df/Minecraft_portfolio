import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { SOCIAL_LINKS, GITHUB_USERNAME, RESUME_URL } from '../../utils/constants';
import { CompassIcon } from '../icons/MinecraftIcons';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? '';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

function isPlaceholder(value) {
  return !value?.trim() || /YOUR_|REPLACE_ME|xxx/i.test(value);
}

function isFormspreeConfigured(endpoint) {
  if (isPlaceholder(endpoint)) return false;
  return /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+/.test(endpoint);
}

function isWeb3FormsConfigured(key) {
  return !isPlaceholder(key);
}

async function submitContactForm(data) {
  if (isWeb3FormsConfigured(WEB3FORMS_ACCESS_KEY)) {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: data.name,
        email: data.email,
        message: data.message,
        subject: `Portfolio contact from ${data.name}`,
        from_name: data.name,
      }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.success) {
      throw new Error(result.message ?? 'Could not send message. Please try again.');
    }
    return;
  }

  if (isFormspreeConfigured(FORMSPREE_ENDPOINT)) {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
        _subject: `Portfolio contact from ${data.name}`,
      }),
    });
    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      throw new Error(result.error ?? 'Could not send message. Please try again.');
    }
    return;
  }

  throw new Error(
    'Contact form is not set up yet. Add your Web3Forms access key to .env.local (see README).'
  );
}

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email address.';
  if (!data.message.trim()) errors.message = 'Message is required.';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export function Contact() {
  const uid = useId();
  const nameId = `${uid}-name`;
  const emailId = `${uid}-email`;
  const messageId = `${uid}-message`;
  const nameErrorId = `${uid}-name-error`;
  const emailErrorId = `${uid}-email-error`;
  const messageErrorId = `${uid}-message-error`;
  const statusId = `${uid}-status`;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(formData);

      setStatus({ type: 'success', message: "Message sent! I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
      setFieldErrors({});
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative" aria-label="Contact">
      <div className="absolute inset-0 bg-pixel-pattern dark:bg-pixel-pattern-dark opacity-30" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <CompassIcon className="w-8 h-8" aria-hidden="true" />
            <h2 className="section-title mb-0">Contact</h2>
            <CompassIcon className="w-8 h-8" aria-hidden="true" />
          </div>
          <p className="text-pixel-text-light/65 dark:text-pixel-text-dark/65 max-w-xl mx-auto">
            Have a project in mind, want to collaborate, or just want to say hi? Send me a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="pixel-card p-6 md:p-8"
              aria-label="Contact form"
              noValidate
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor={nameId} className="block text-sm font-medium mb-2">
                    Name <span aria-hidden="true" className="text-mc-redstone">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="text"
                    id={nameId}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={`pixel-input ${fieldErrors.name ? 'ring-2 ring-mc-redstone/50 border-mc-redstone/50' : ''}`}
                    placeholder="Steve"
                    aria-required="true"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? nameErrorId : undefined}
                  />
                  {fieldErrors.name && (
                    <p id={nameErrorId} role="alert" className="mt-1.5 text-xs text-mc-redstone flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor={emailId} className="block text-sm font-medium mb-2">
                    Email <span aria-hidden="true" className="text-mc-redstone">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="email"
                    id={emailId}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className={`pixel-input ${fieldErrors.email ? 'ring-2 ring-mc-redstone/50 border-mc-redstone/50' : ''}`}
                    placeholder="steve@minecraft.net"
                    aria-required="true"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? emailErrorId : undefined}
                  />
                  {fieldErrors.email && (
                    <p id={emailErrorId} role="alert" className="mt-1.5 text-xs text-mc-redstone flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor={messageId} className="block text-sm font-medium mb-2">
                    Message <span aria-hidden="true" className="text-mc-redstone">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`pixel-input resize-none ${fieldErrors.message ? 'ring-2 ring-mc-redstone/50 border-mc-redstone/50' : ''}`}
                    placeholder="Hello! I'd like to discuss..."
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? messageErrorId : undefined}
                  />
                  {fieldErrors.message && (
                    <p id={messageErrorId} role="alert" className="mt-1.5 text-xs text-mc-redstone flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Submission status */}
                {status.message && (
                  <motion.div
                    id={statusId}
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2 p-3 text-sm border-2 ${
                      status.type === 'success'
                        ? 'bg-mc-emerald/10 text-mc-emerald border-mc-emerald/30'
                        : 'bg-mc-redstone/10 text-mc-redstone border-mc-redstone/30'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    {status.message}
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="pixel-btn w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
            aria-label="Contact links"
          >
            <div className="pixel-card p-6">
              <h3 className="font-pixel text-[9px] text-pixel-accent mb-5">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <motion.a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 hover:bg-pixel-accent/8 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
                    whileHover={{ x: 3 }}
                    aria-label="GitHub profile (opens in new tab)"
                  >
                    <div className="inventory-slot w-10 h-10 shrink-0" aria-hidden="true">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">GitHub</div>
                      <div className="text-xs text-pixel-text-light/50 dark:text-pixel-text-dark/50">
                        @{GITHUB_USERNAME}
                      </div>
                    </div>
                  </motion.a>
                </li>

                <li>
                  <motion.a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 hover:bg-pixel-accent/8 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
                    whileHover={{ x: 3 }}
                    aria-label="LinkedIn profile (opens in new tab)"
                  >
                    <div className="inventory-slot w-10 h-10 shrink-0" aria-hidden="true">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">LinkedIn</div>
                      <div className="text-xs text-pixel-text-light/50 dark:text-pixel-text-dark/50">
                        Connect with me
                      </div>
                    </div>
                  </motion.a>
                </li>

                <li>
                  <motion.a
                    href={RESUME_URL ?? '#'}
                    target={RESUME_URL ? '_blank' : undefined}
                    rel={RESUME_URL ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-2.5 hover:bg-pixel-accent/8 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
                    whileHover={{ x: 3 }}
                    aria-label="View resume (opens in new tab)"
                  >
                    <div className="inventory-slot w-10 h-10 shrink-0" aria-hidden="true">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Resume</div>
                      <div className="text-xs text-pixel-text-light/50 dark:text-pixel-text-dark/50">
                        View / download
                      </div>
                    </div>
                  </motion.a>
                </li>

                <li>
                  <motion.a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="flex items-center gap-3 p-2.5 hover:bg-pixel-accent/8 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
                    whileHover={{ x: 3 }}
                    aria-label={`Send email to ${SOCIAL_LINKS.email}`}
                  >
                    <div className="inventory-slot w-10 h-10 shrink-0" aria-hidden="true">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Email</div>
                      <div className="text-xs text-pixel-text-light/50 dark:text-pixel-text-dark/50 break-all">
                        {SOCIAL_LINKS.email}
                      </div>
                    </div>
                  </motion.a>
                </li>
              </ul>
            </div>

            <div className="pixel-card p-5">
              <p className="text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70 leading-relaxed">
                I'm currently open to full-time backend and full-stack roles. Response time is usually under 24 hours.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
