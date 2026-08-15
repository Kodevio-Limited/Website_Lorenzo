'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

import { useCreateConsultationRequest } from '@/hooks/use-create-consultation-request';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    parish: '',
    serviceRequired: '',
    message: '',
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
        parish: formData.parish || undefined,
        serviceRequired:
          formData.serviceRequired || undefined,
        message: formData.message.trim() || undefined,

        // This form currently has no privacy checkbox.
        privacyPolicyAccepted: false,
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        parish: '',
        serviceRequired: '',
        message: '',
      });
    } catch {
      // Error is available through the mutation `error` state.
    }
  };

  return (
    <section
      className="section-full bg-[#000B03]"
      id="contact-form"
    >
      <div className="section-inner py-12 lg:py-16">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-8 min-h-[calc(100vh-8rem)] justify-center">

          {/* Header */}
          <div className="w-full flex flex-col items-center gap-5">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-amber-200 text-2xl font-normal leading-8 text-center"
            >
              Start Verification
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-white text-4xl sm:text-5xl font-normal leading-tight sm:leading-[63px] text-center"
            >
              Request Consultation &amp; Quote
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full max-w-[763px] text-neutral-400 text-xl sm:text-2xl font-normal leading-8 text-center"
            >
              Provide basic detail, and an on-site asset stewardship coordinator will connect shortly.
            </motion.p>
          </div>

          {/* Success State */}
          {isSuccess ? (
            <div className="w-full max-w-[968px] bg-stone-900 rounded-sm flex items-center justify-center min-h-[500px]">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D1A736"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <h3 className="text-white font-semibold text-xl mb-2">
                  Message Sent!
                </h3>

                <p className="text-zinc-400 text-sm">
                  We&apos;ll get back to you within 24 business hours.
                </p>
              </div>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full max-w-[900px] bg-stone-900 rounded-sm overflow-hidden"
            >
              <div className="px-6 md:px-10 pt-10 lg:pt-12 pb-10 lg:pb-12 flex flex-col gap-6 lg:gap-8">

                {/* Name + Phone */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                  {/* Name */}
                  <div className="w-full lg:w-[416px] flex flex-col gap-3">
                    <label
                      className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Your Full Name *
                    </label>

                    <div className="flex items-center gap-2 pl-5 lg:pl-7 pr-3 lg:pr-4 py-3 lg:py-5 bg-neutral-600 rounded-sm">
                      <svg
                        className="size-5 lg:size-6 shrink-0 text-neutral-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="8"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M4 20c0-4 3.58-8 8-8s8 4 8 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
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
                        className="w-full bg-transparent text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6 focus:outline-none focus:text-white placeholder-neutral-400"
                        style={{
                          fontFamily:
                            "'Satoshi', sans-serif",
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="w-full lg:w-[416px] flex flex-col gap-3">
                    <label
                      className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Phone / WhatsApp Number *
                    </label>

                    <div className="flex items-center gap-2 pl-5 lg:pl-7 pr-3 lg:pr-4 py-3 lg:py-5 bg-neutral-600 rounded-sm">
                      <svg
                        className="size-5 lg:size-6 shrink-0 text-neutral-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="5"
                          y="2"
                          width="14"
                          height="20"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="12"
                          y1="18"
                          x2="12.01"
                          y2="18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>

                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(event) =>
                          updateField(
                            'phone',
                            event.target.value,
                          )
                        }
                        placeholder="(876) 555-0199"
                        className="w-full bg-transparent text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6 focus:outline-none focus:text-white placeholder-neutral-400"
                        style={{
                          fontFamily:
                            "'Satoshi', sans-serif",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Email + Parish */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                  {/* Email */}
                  <div className="w-full lg:w-[416px] flex flex-col gap-3">
                    <label
                      className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Email Address *
                    </label>

                    <div className="flex items-center gap-2 pl-5 lg:pl-7 pr-3 lg:pr-4 py-3 lg:py-5 bg-neutral-600 rounded-sm">
                      <svg
                        className="size-5 lg:size-6 shrink-0 text-neutral-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 4l10 8 10-8"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
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
                        className="w-full bg-transparent text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6 focus:outline-none focus:text-white placeholder-neutral-400"
                        style={{
                          fontFamily:
                            "'Satoshi', sans-serif",
                        }}
                      />
                    </div>
                  </div>

                  {/* Parish */}
                  <div className="w-full lg:w-[416px] flex flex-col gap-3">
                    <label
                      className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Target Parish Zone *
                    </label>

                    <div className="flex items-center justify-between pl-5 lg:pl-7 pr-3 lg:pr-4 py-3 lg:py-5 bg-neutral-600 rounded-sm">
                      <select
                        required
                        value={formData.parish}
                        onChange={(event) =>
                          updateField(
                            'parish',
                            event.target.value,
                          )
                        }
                        className="w-full bg-transparent text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6 focus:outline-none appearance-none"
                        style={{
                          fontFamily:
                            "'Satoshi', sans-serif",
                        }}
                      >
                        <option value="" disabled>
                          Select Parish...
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
                        className="w-2.5 h-2 lg:w-3 lg:h-2 rotate-180 text-white shrink-0 pointer-events-none"
                        viewBox="0 0 12 8"
                        fill="none"
                      >
                        <path
                          d="M1 7l5-5 5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Service */}
                <div className="w-full lg:w-[864px] flex flex-col gap-3">
                  <label
                    className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Service Required
                  </label>

                  <div className="flex items-center justify-between pl-5 lg:pl-7 pr-3 lg:pr-4 py-3 lg:py-5 bg-neutral-600 rounded-sm">
                    <select
                      value={formData.serviceRequired}
                      onChange={(event) =>
                        updateField(
                          'serviceRequired',
                          event.target.value,
                        )
                      }
                      className="w-full bg-transparent text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6 focus:outline-none appearance-none"
                      style={{
                        fontFamily:
                          "'Satoshi', sans-serif",
                      }}
                    >
                      <option value="">
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
                      className="w-2.5 h-2 lg:w-3 lg:h-2 rotate-180 text-neutral-400 shrink-0 pointer-events-none"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1 7l5-5 5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="w-full lg:w-[864px] flex flex-col gap-3">
                  <label
                    className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Property Location &amp; Requirements Brief
                  </label>

                  <div className="pl-5 lg:pl-7 pr-3 lg:pr-4 py-4 lg:py-6 bg-neutral-600 rounded-sm">
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(event) =>
                        updateField(
                          'message',
                          event.target.value,
                        )
                      }
                      placeholder="Outline specific structural details, plot coordinates, boundaries, or general timeline expectations..."
                      className="w-full bg-transparent text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6 focus:outline-none focus:text-white placeholder-neutral-400 resize-none"
                      style={{
                        fontFamily:
                          "'Satoshi', sans-serif",
                      }}
                    />
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="w-full lg:w-[864px] rounded-sm border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error instanceof Error
                      ? error.message
                      : 'Failed to submit your request.'}
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
                  className="w-full lg:w-[864px] py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm text-stone-900 text-lg lg:text-2xl font-medium leading-7 lg:leading-8 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                  }}
                >
                  {isPending
                    ? 'SUBMITTING...'
                    : 'SUBMIT FORMAL STEWARDSHIP REQUEST'}
                </motion.button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}