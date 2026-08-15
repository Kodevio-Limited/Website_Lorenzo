'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { useCreateConsultationRequest } from '@/hooks/use-create-consultation-request';

export function ContactPageSection() {
  const [inquiryType, setInquiryType] = useState('general');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequired: '',
    parish: '',
    message: '',
    privacyPolicyAccepted: false,
  });

  const {
    mutateAsync: submitConsultation,
    isPending,
    isSuccess,
    error,
  } = useCreateConsultationRequest();

  const updateField = <K extends keyof typeof formData>(
    field: K,
    value: (typeof formData)[K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    try {
      await submitConsultation({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        serviceRequired:
          formData.serviceRequired || undefined,
        parish: formData.parish || undefined,
        message: formData.message.trim() || undefined,
        privacyPolicyAccepted:
          formData.privacyPolicyAccepted,
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceRequired: '',
        parish: '',
        message: '',
        privacyPolicyAccepted: false,
      });

      setInquiryType('general');
    } catch {
      // Error is exposed through the mutation's error state.
    }
  };

  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-12 lg:py-20">
        <div className="w-full max-w-[1755px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full lg:w-[968px] bg-stone-900 rounded-sm overflow-hidden"
          >
            <div className="p-5 sm:p-8 lg:p-[53px]">

              <div className="flex flex-col items-start gap-3 sm:gap-5 mb-6 sm:mb-10">
                <div className="text-white text-2xl sm:text-3xl font-medium leading-8 sm:leading-10">
                  Send a Message
                </div>

                <div className="text-zinc-400 text-base sm:text-xl font-normal leading-6 sm:leading-7">
                  Fill out the form below and our regional specialists will get back to you within 24 hours.
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-start gap-6 sm:gap-10"
              >

                {/* Purpose of Inquiry */}
                <div className="w-full flex flex-col items-start gap-3 sm:gap-4">
                  <label className="text-neutral-50 text-base sm:text-xl font-medium leading-6 sm:leading-7">
                    Purpose of Inquiry *
                  </label>

                  <div className="w-full px-4 sm:px-6 py-3 sm:py-3.5 bg-black rounded-sm flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-28">
                    {[
                      {
                        value: 'general',
                        label: 'General Inquiry',
                      },
                      {
                        value: 'consultation',
                        label: 'Schedule Consultation',
                      },
                      {
                        value: 'quote',
                        label: 'Request a Quote',
                      },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() =>
                          setInquiryType(opt.value)
                        }
                        className="flex items-center gap-2"
                      >
                        <div className="size-5 sm:size-6 relative shrink-0">
                          <div
                            className={`size-4 sm:size-5 left-[2px] top-[2px] absolute rounded-full ${
                              inquiryType === opt.value
                                ? 'bg-green-500'
                                : 'bg-white'
                            }`}
                          />
                        </div>

                        <span className="text-white text-sm sm:text-lg font-medium leading-6 sm:leading-7">
                          {opt.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="w-full flex flex-col lg:flex-row items-start gap-6 sm:gap-10 lg:gap-14">

                  {/* Name */}
                  <div className="w-full lg:w-96 flex flex-col items-start gap-3 sm:gap-4">
                    <label className="text-neutral-50 text-base sm:text-xl font-medium leading-6 sm:leading-7">
                      Name
                    </label>

                    <div className="w-full pl-4 sm:pl-7 pr-3 sm:pr-4 py-3 sm:py-5 bg-neutral-600 rounded-sm flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#a3a3a3"
                        strokeWidth="2"
                        className="shrink-0 sm:w-6 sm:h-6"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>

                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(event) =>
                          updateField(
                            'name',
                            event.target.value,
                          )
                        }
                        placeholder="Your full name"
                        className="w-full bg-transparent text-white text-sm sm:text-base font-medium leading-6 placeholder-neutral-400 outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="w-full lg:w-96 flex flex-col items-start gap-3 sm:gap-4">
                    <label className="text-neutral-50 text-base sm:text-xl font-medium leading-6 sm:leading-7">
                      Phone Number (Optional)
                    </label>

                    <div className="w-full h-auto min-h-[48px] sm:h-16 pl-4 sm:pl-7 pr-3 sm:pr-4 py-3 sm:py-6 bg-neutral-600 rounded-sm flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#a3a3a3"
                        strokeWidth="2"
                        className="shrink-0 sm:w-6 sm:h-6"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.39 2 2 0 0 1 3.66 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.42-1.42a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>

                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(event) =>
                          updateField(
                            'phone',
                            event.target.value,
                          )
                        }
                        placeholder="(876) 555-0199"
                        className="w-full bg-transparent text-white text-sm sm:text-base font-medium leading-6 placeholder-neutral-400 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="w-full flex flex-col items-start gap-3 sm:gap-4">
                  <label className="text-neutral-50 text-base sm:text-xl font-medium leading-6 sm:leading-7">
                    Email
                  </label>

                  <div className="w-full h-auto min-h-[48px] sm:h-16 pl-4 sm:pl-7 pr-3 sm:pr-4 py-3 sm:py-6 bg-neutral-600 rounded-sm flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a3a3a3"
                      strokeWidth="2"
                      className="shrink-0 sm:w-6 sm:h-6"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>

                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(event) =>
                        updateField(
                          'email',
                          event.target.value,
                        )
                      }
                      placeholder="you@example.com"
                      className="w-full bg-transparent text-white text-sm sm:text-base font-medium leading-6 placeholder-neutral-400 outline-none"
                    />
                  </div>
                </div>

                {/* Service Required & Property Parish */}
                <div className="w-full flex flex-col lg:flex-row items-start gap-6 sm:gap-10 lg:gap-14">

                  {/* Service */}
                  <div className="w-full lg:w-96 flex flex-col items-start gap-3 sm:gap-4">
                    <label className="text-neutral-50 text-base sm:text-xl font-medium leading-6 sm:leading-7">
                      Service Required *
                    </label>

                    <div className="w-full pl-4 sm:pl-7 pr-3 sm:pr-4 py-3 sm:py-5 bg-neutral-600 rounded-sm flex items-center justify-between gap-2">
                      <select
                        value={formData.serviceRequired}
                        onChange={(event) =>
                          updateField(
                            'serviceRequired',
                            event.target.value,
                          )
                        }
                        required
                        className="w-full bg-transparent text-neutral-400 text-sm sm:text-base font-medium leading-6 outline-none appearance-none"
                      >
                        <option value="" disabled>
                          Select a Service type
                        </option>

                        <option value="Property Verification">
                          Property Verification
                        </option>

                        <option value="Construction Verification">
                          Construction Verification
                        </option>

                        <option value="Business Verification">
                          Business Verification
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>

                      <svg
                        width="12"
                        height="24"
                        viewBox="0 0 12 24"
                        fill="none"
                        className="shrink-0"
                      >
                        <path
                          d="M6 5L12 12H0L6 5Z"
                          fill="#a3a3a3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Parish */}
                  <div className="w-full lg:w-96 flex flex-col items-start gap-3 sm:gap-4">
                    <label className="text-neutral-50 text-base sm:text-xl font-medium leading-6 sm:leading-7">
                      Property Parish *
                    </label>

                    <div className="w-full pl-4 sm:pl-7 pr-3 sm:pr-4 py-3 sm:py-5 bg-neutral-600 rounded-sm flex items-center justify-between gap-2">
                      <select
                        value={formData.parish}
                        onChange={(event) =>
                          updateField(
                            'parish',
                            event.target.value,
                          )
                        }
                        required
                        className="w-full bg-transparent text-neutral-400 text-sm sm:text-base font-medium leading-6 outline-none appearance-none"
                      >
                        <option value="" disabled>
                          Select target parish
                        </option>

                        <option value="Kingston">
                          Kingston
                        </option>
                        <option value="St. Andrew">
                          St. Andrew
                        </option>
                        <option value="St. Thomas">
                          St. Thomas
                        </option>
                        <option value="Portland">
                          Portland
                        </option>
                        <option value="St. Mary">
                          St. Mary
                        </option>
                        <option value="St. Ann">
                          St. Ann
                        </option>
                        <option value="St. Catherine">
                          St. Catherine
                        </option>
                        <option value="Clarendon">
                          Clarendon
                        </option>
                        <option value="Manchester">
                          Manchester
                        </option>
                        <option value="St. Elizabeth">
                          St. Elizabeth
                        </option>
                        <option value="Westmoreland">
                          Westmoreland
                        </option>
                        <option value="St. James">
                          St. James
                        </option>
                        <option value="Trelawny">
                          Trelawny
                        </option>
                        <option value="Hanover">
                          Hanover
                        </option>
                      </select>

                      <svg
                        width="12"
                        height="24"
                        viewBox="0 0 12 24"
                        fill="none"
                        className="shrink-0"
                      >
                        <path
                          d="M6 5L12 12H0L6 5Z"
                          fill="#a3a3a3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Your Message */}
                <div className="w-full flex flex-col items-start gap-4 sm:gap-6">
                  <div className="w-full flex flex-col items-start gap-3 sm:gap-4">
                    <label className="text-neutral-50 text-base sm:text-xl font-medium leading-6 sm:leading-7">
                      Your Message
                    </label>

                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(event) =>
                        updateField(
                          'message',
                          event.target.value,
                        )
                      }
                      placeholder="How can we help you today?"
                      className="w-full pl-4 sm:pl-7 pr-3 sm:pr-4 py-4 sm:py-6 bg-neutral-600 rounded-sm text-white text-sm sm:text-base font-medium leading-6 placeholder-neutral-400 outline-none resize-none"
                    />
                  </div>

                  {/* Privacy Policy */}
                  <div className="w-full flex items-start gap-2">
                    <input
                      type="checkbox"
                      required
                      checked={
                        formData.privacyPolicyAccepted
                      }
                      onChange={(event) =>
                        updateField(
                          'privacyPolicyAccepted',
                          event.target.checked,
                        )
                      }
                      className="size-4 shrink-0 mt-1 accent-green-500"
                    />

                    <span className="text-zinc-500 text-sm sm:text-base font-normal leading-6">
                      I consent to having this website store
                      my submitted information so they can
                      respond to my inquiry. I have read and
                      agree to the{' '}
                      <Link
                        href="/privacy-policy"
                        className="text-amber-200 text-base sm:text-lg font-medium leading-6"
                      >
                        Privacy Policy. *
                      </Link>
                    </span>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="w-full rounded-sm border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error instanceof Error
                      ? error.message
                      : 'Failed to submit your request.'}
                  </div>
                )}

                {/* Success */}
                {isSuccess && (
                  <div className="w-full rounded-sm border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                    Your request has been submitted
                    successfully. We will get back to you
                    within 24 hours.
                  </div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={{
                    scale: isPending ? 1 : 1.02,
                  }}
                  whileTap={{
                    scale: isPending ? 1 : 0.98,
                  }}
                  className="w-full py-4 sm:py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm flex items-center justify-center gap-2 sm:gap-2.5 text-stone-900 text-lg sm:text-2xl font-medium leading-7 sm:leading-8 hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isPending
                    ? 'SUBMITTING...'
                    : 'SEND MESSAGE'}

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-stone-900 sm:w-5 sm:h-5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full lg:w-[758px] flex flex-col gap-5 sm:gap-7"
          >

            {/* Call Us Directly */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full min-h-[128px] h-auto bg-stone-900 rounded-sm overflow-hidden p-5 sm:p-6"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-14 sm:w-16 h-16 sm:h-20 bg-stone-500 rounded-[3px] relative overflow-hidden flex items-center justify-center shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    className="sm:w-7 sm:h-7"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.39 2 2 0 0 1 3.66 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.42-1.42a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <div className="flex flex-col items-start gap-2 sm:gap-4 min-w-0">
                  <div className="text-neutral-400 text-xs sm:text-base font-medium leading-5 sm:leading-6">
                    CALL US DIRECTLY
                  </div>

                  <div className="text-white text-xl sm:text-3xl font-medium leading-7 sm:leading-10 break-words">
                    USA OFFICE: (561) 639-8772
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full min-h-[128px] h-auto bg-stone-900 rounded-sm overflow-hidden p-5 sm:p-6"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-14 sm:w-16 h-16 sm:h-20 bg-stone-500 rounded-[3px] relative overflow-hidden flex items-center justify-center shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    className="sm:w-7 sm:h-7"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>

                <div className="flex flex-col items-start gap-2 sm:gap-4 min-w-0">
                  <div className="text-neutral-400 text-xs sm:text-base font-medium leading-5 sm:leading-6">
                    EMAIL SUPPORT
                  </div>

                  <div className="text-white text-xl sm:text-3xl font-medium leading-7 sm:leading-10 break-all">
                    info@nexuspbs.net
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full h-auto bg-stone-900 rounded-sm overflow-hidden p-5 sm:p-7"
            >
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-[38px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  className="shrink-0 sm:w-7 sm:h-7"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>

                <div className="text-white text-2xl sm:text-3xl font-medium leading-8 sm:leading-10">
                  Business Hours
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 lg:gap-[72px]">
                <div className="w-full sm:w-auto flex flex-col items-start gap-4 sm:gap-7">
                  <div className="text-neutral-400 text-sm sm:text-lg font-normal leading-6 sm:leading-7">
                    Monday - Friday
                  </div>
                  <div className="text-neutral-400 text-sm sm:text-lg font-normal leading-6 sm:leading-7">
                    Saturday
                  </div>
                  <div className="text-neutral-400 text-sm sm:text-lg font-normal leading-6 sm:leading-7">
                    Sunday
                  </div>
                </div>

                <div className="w-full sm:w-auto flex flex-col items-start gap-4 sm:gap-7">
                  <div className="text-neutral-400 text-sm sm:text-lg font-normal leading-6 sm:leading-7">
                    9:00 AM - 5:00 PM
                  </div>
                  <div className="text-neutral-400 text-sm sm:text-lg font-normal leading-6 sm:leading-7">
                    10:00 AM - 2:00 PM
                  </div>
                  <div className="text-red-600 text-sm sm:text-lg font-normal leading-6 sm:leading-7">
                    CLOSED
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Area */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full h-auto bg-stone-900 rounded-sm overflow-hidden p-5 sm:p-7 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-5 sm:gap-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    className="shrink-0 sm:w-7 sm:h-7"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>

                  <div className="text-white text-2xl sm:text-3xl font-medium leading-8 sm:leading-10">
                    Service Area
                  </div>
                </div>

                <div className="text-zinc-400 text-base sm:text-xl font-normal leading-6 sm:leading-7">
                  Serving Kingston, St. Andrew, and the wider Jamaican corporate area. Full island coverage available upon request.
                </div>
              </div>

              <div className="w-full max-w-[674px] mx-auto h-48 sm:h-64 rounded-xs overflow-hidden">
                <img
                  src="/assets/images/map.png"
                  alt="Map of Jamaica"
                  className="w-full h-full object-contain sm:object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}