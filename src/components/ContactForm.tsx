import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react'

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [toast, setToast] = useState<null | { type: 'success' | 'error'; message: string }>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // Use Web3Forms for form submission (free, privacy-friendly, no backend needed)
      // Get your access key from https://web3forms.com
      const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_KEY || 'efb2b493-290e-4baf-99ae-336133845142'

      const formData = {
        access_key: accessKey,
        name: data.name,
        email: data.email,
        company: data.company || '',
        message: data.message,
        subject: 'New Growth Audit Request from TaqHaus Website',
        from_name: 'TaqHaus Website',
        // Send notification to this email (requires Web3Forms access key from this email)
        // Get your access key at https://web3forms.com using taqhausinc@gmail.com
        replyto: data.email
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit form')
      }

      setIsSuccess(true)
      setToast({ type: 'success', message: "Thanks! We'll get back within 24 hours." })
      // Reset form immediately on success
      reset()
      // Hide success state after a short delay
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (err) {
      setToast({ type: 'error', message: err instanceof Error ? err.message : 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
      // Auto-hide toast
      setTimeout(() => setToast(null), 4000)
    }
  }

  if (isSuccess) {
    return (
      <Card className="bg-white/10 backdrop-blur-lg border-white/20">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
          <p className="text-white/80">
            We've received your message and will get back to you within 24 hours.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 relative">
      {toast && (
        <div
          role="status"
          className={`pointer-events-none absolute -top-4 right-4 translate-y-[-100%] rounded-lg px-4 py-2 text-sm shadow-lg ${toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
        >
          {toast.message}
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl text-white">Get Your Free Growth Audit</CardTitle>
        <CardDescription className="text-white/80">
          We'll analyze your SEO, email, and content strategy and show you exactly what to prioritize.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              {...register('name')}
              placeholder="Your Name"
              className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-400"
              aria-label="Your name"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-200" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Input
              {...register('email')}
              type="email"
              placeholder="Your Email"
              className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-400"
              aria-label="Your email address"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-200" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              {...register('company')}
              placeholder="Company (Optional)"
              className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-400"
              aria-label="Your company name"
            />
          </div>

          <div>
            <Textarea
              {...register('message')}
              placeholder="Tell us about your business and growth goals..."
              className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-400 min-h-[150px]"
              aria-label="Your message"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-200" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-white text-purple-600 hover:bg-gray-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Book My Free Growth Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
