import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../Contact'
import { OFFICE_INFO, CONTACT_INFO, THERAPIST_PROFILE } from '../../../lib/constants'

describe('Contact Section', () => {
  beforeEach(() => {
    render(<Contact />)
  })

  describe('Office Address Display', () => {
    it('displays the correct office address', () => {
      expect(screen.getByText(OFFICE_INFO.address.street)).toBeInTheDocument()
      expect(screen.getByText(`${OFFICE_INFO.address.city}, ${OFFICE_INFO.address.state} ${OFFICE_INFO.address.zipCode}`)).toBeInTheDocument()
    })

    it('shows complete address as specified in requirements', () => {
      expect(screen.getByText('123th Street 45 W')).toBeInTheDocument()
      expect(screen.getByText('Santa Monica, CA 90401')).toBeInTheDocument()
    })
  })

  describe('Contact Information', () => {
    it('displays phone number correctly', () => {
      expect(screen.getByText(CONTACT_INFO.phone)).toBeInTheDocument()
    })

    it('displays email address correctly', () => {
      expect(screen.getByText(CONTACT_INFO.email)).toBeInTheDocument()
    })
  })

  describe('Client Demographic Messaging', () => {
    it('includes messaging for high-achieving adults', () => {
      expect(screen.getByText('high-achieving adults')).toBeInTheDocument()
    })

    it('displays target client characteristics', () => {
      expect(screen.getByText(/experiencing anxiety, panic, or overwhelming stress/i)).toBeInTheDocument()
      expect(screen.getByText(/dealing with trauma or burnout from high-pressure environments/i)).toBeInTheDocument()
      expect(screen.getByText(/seeking to balance success with personal well-being/i)).toBeInTheDocument()
      expect(screen.getByText(/ready to invest in their mental health and personal growth/i)).toBeInTheDocument()
    })

    it('shows session types for client information', () => {
      THERAPIST_PROFILE.sessionTypes.forEach(sessionType => {
        expect(screen.getByText(sessionType)).toBeInTheDocument()
      })
    })
  })

  describe('Contact Form', () => {
    it('renders all required form fields', () => {
      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    })

    it('has proper form field placeholders', () => {
      expect(screen.getByPlaceholderText('Enter your full name')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Enter your phone number')).toBeInTheDocument()
      expect(screen.getByPlaceholderText(/tell me a bit about what brings you here/i)).toBeInTheDocument()
    })

    it('includes submit button', () => {
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    })
  })

  describe('Form Validation', () => {
    const user = userEvent.setup()

    it('shows validation errors for empty required fields', async () => {
      const submitButton = screen.getByRole('button', { name: /send message/i })
      
      await user.click(submitButton)
      
      await waitFor(() => {
        expect(screen.getByText('Name is required')).toBeInTheDocument()
        expect(screen.getByText('Email is required')).toBeInTheDocument()
        expect(screen.getByText('Phone number is required')).toBeInTheDocument()
        expect(screen.getByText('Message is required')).toBeInTheDocument()
      })
    })

    it('validates email format', async () => {
      const emailInput = screen.getByLabelText(/email address/i)
      const submitButton = screen.getByRole('button', { name: /send message/i })
      
      await user.type(emailInput, 'invalid-email')
      await user.click(submitButton)
      
      await waitFor(() => {
        expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
      })
    })

    it('validates phone number format', async () => {
      const phoneInput = screen.getByLabelText(/phone number/i)
      const submitButton = screen.getByRole('button', { name: /send message/i })
      
      await user.type(phoneInput, 'invalid-phone!')
      await user.click(submitButton)
      
      await waitFor(() => {
        expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument()
      })
    })

    it('validates message minimum length', async () => {
      const messageInput = screen.getByLabelText(/message/i)
      const submitButton = screen.getByRole('button', { name: /send message/i })
      
      await user.type(messageInput, 'short')
      await user.click(submitButton)
      
      await waitFor(() => {
        expect(screen.getByText('Message must be at least 10 characters long')).toBeInTheDocument()
      })
    })

    it('clears validation errors when user starts typing', async () => {
      const nameInput = screen.getByLabelText(/full name/i)
      const submitButton = screen.getByRole('button', { name: /send message/i })
      
      // Trigger validation error
      await user.click(submitButton)
      await waitFor(() => {
        expect(screen.getByText('Name is required')).toBeInTheDocument()
      })
      
      // Start typing to clear error
      await user.type(nameInput, 'John')
      await waitFor(() => {
        expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
      })
    })
  })

  describe('Form Submission', () => {
    const user = userEvent.setup()

    it('successfully submits valid form data', async () => {
      // Fill out the form with valid data
      await user.type(screen.getByLabelText(/full name/i), 'John Doe')
      await user.type(screen.getByLabelText(/email address/i), 'john.doe@example.com')
      await user.type(screen.getByLabelText(/phone number/i), '(555) 123-4567')
      await user.type(screen.getByLabelText(/message/i), 'I would like to schedule a consultation for anxiety management.')
      
      const submitButton = screen.getByRole('button', { name: /send message/i })
      await user.click(submitButton)
      
      // Check for loading state
      expect(screen.getByText('Sending Message...')).toBeInTheDocument()
      
      // Wait for success message
      await waitFor(() => {
        expect(screen.getByText('Message Sent Successfully!')).toBeInTheDocument()
        expect(screen.getByText(/thank you for reaching out/i)).toBeInTheDocument()
      }, { timeout: 2000 })
    })

    it('allows sending another message after successful submission', async () => {
      // Fill and submit form
      await user.type(screen.getByLabelText(/full name/i), 'Jane Smith')
      await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
      await user.type(screen.getByLabelText(/phone number/i), '555-987-6543')
      await user.type(screen.getByLabelText(/message/i), 'Looking for help with work-related stress.')
      
      await user.click(screen.getByRole('button', { name: /send message/i }))
      
      // Wait for success message and click "Send Another Message"
      await waitFor(() => {
        expect(screen.getByText('Message Sent Successfully!')).toBeInTheDocument()
      }, { timeout: 2000 })
      
      const sendAnotherButton = screen.getByRole('button', { name: /send another message/i })
      await user.click(sendAnotherButton)
      
      // Form should be visible again
      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    })
  })

  describe('Responsive Layout', () => {
    it('renders section header with proper styling', () => {
      expect(screen.getByRole('heading', { name: /ready to begin your journey/i })).toBeInTheDocument()
    })

    it('includes privacy and confidentiality messaging', () => {
      expect(screen.getByText(/your information is kept confidential and secure/i)).toBeInTheDocument()
    })

    it('displays office location section header', () => {
      expect(screen.getByText('Office Location')).toBeInTheDocument()
    })

    it('displays contact information section header', () => {
      expect(screen.getByText('Contact Information')).toBeInTheDocument()
    })
  })
})