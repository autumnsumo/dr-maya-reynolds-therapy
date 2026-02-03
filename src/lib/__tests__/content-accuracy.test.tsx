import { render, screen } from '@testing-library/react'
import { THERAPIST_PROFILE, OFFICE_INFO, CONTACT_INFO } from '../constants'
import Hero from '../../components/sections/Hero'
import About from '../../components/sections/About'
import Services from '../../components/sections/Services'
import Contact from '../../components/sections/Contact'
import OurOffice from '../../components/sections/OurOffice'

/**
 * Content Accuracy Tests
 * 
 * These tests validate that all Dr. Maya's information is correctly displayed,
 * Santa Monica location references are present, and all required specializations
 * and approaches are listed according to Requirements 3.1, 3.2, 3.3, 3.7
 */

describe('Content Accuracy - Dr. Maya Reynolds Information', () => {
  describe('Therapist Profile Information', () => {
    it('displays Dr. Maya\'s complete name correctly across all sections', () => {
      // Test Hero section - name appears in heading
      const { unmount: unmountHero } = render(<Hero />)
      expect(screen.getByText('Dr. Maya Reynolds')).toBeInTheDocument()
      unmountHero()

      // Test About section - name appears as "About Maya" in heading (split across elements)
      const { unmount: unmountAbout } = render(<About />)
      expect(screen.getByText(/About/)).toBeInTheDocument()
      expect(screen.getByText(/Maya/)).toBeInTheDocument()
      unmountAbout()
    })

    it('displays professional title consistently', () => {
      const sections = [
        { component: Hero, name: 'Hero' },
        { component: About, name: 'About' }
      ]

      sections.forEach(({ component: Component, name }) => {
        const { unmount } = render(<Component />)
        expect(screen.getByText(THERAPIST_PROFILE.title)).toBeInTheDocument()
        unmount()
      })
    })

    it('shows license number correctly', () => {
      render(<About />)
      expect(screen.getByText(`License: ${THERAPIST_PROFILE.license}`)).toBeInTheDocument()
    })

    it('displays biographical information', () => {
      // Test Hero section - bio appears in paragraph
      const { unmount: unmountHero } = render(<Hero />)
      expect(screen.getByText(/Dr. Maya Reynolds is a licensed clinical psychologist/)).toBeInTheDocument()
      unmountHero()

      // Test About section - bio appears in different format
      const { unmount: unmountAbout } = render(<About />)
      expect(screen.getByText(/As a licensed clinical psychologist practicing in Santa Monica/)).toBeInTheDocument()
      unmountAbout()
    })

    it('includes professional photo with correct alt text', () => {
      // Test Hero section
      const { unmount: unmountHero } = render(<Hero />)
      const heroImage = screen.getByAltText(/Dr. Maya Reynolds, Licensed Clinical Psychologist in Santa Monica, CA/)
      expect(heroImage).toBeInTheDocument()
      expect(heroImage).toHaveAttribute('src', expect.stringContaining('dr-maya-reynolds.jpg'))
      unmountHero()

      // Test About section
      const { unmount: unmountAbout } = render(<About />)
      const aboutImage = screen.getByAltText(/Dr. Maya Reynolds - Licensed Clinical Psychologist in professional office setting/)
      expect(aboutImage).toBeInTheDocument()
      expect(aboutImage).toHaveAttribute('src', expect.stringContaining('dr-maya-reynolds.jpg'))
      unmountAbout()
    })
  })

  describe('Santa Monica Location References', () => {
    it('displays Santa Monica location in therapist profile', () => {
      const sections = [
        { component: Hero, name: 'Hero' },
        { component: About, name: 'About' }
      ]

      sections.forEach(({ component: Component, name }) => {
        const { unmount } = render(<Component />)
        expect(screen.getByText(`Licensed in ${THERAPIST_PROFILE.location}`)).toBeInTheDocument()
        unmount()
      })
    })

    it('shows complete Santa Monica office address', () => {
      render(<Contact />)
      // Address is formatted with line breaks, so check for parts
      expect(screen.getByText(/123th Street 45 W/)).toBeInTheDocument()
      // Use more specific selector for office location section
      expect(screen.getByText('Office Location')).toBeInTheDocument()
      expect(screen.getAllByText(/Santa Monica/).length).toBeGreaterThan(0)
      expect(screen.getByText(/CA/)).toBeInTheDocument()
      expect(screen.getByText(/90401/)).toBeInTheDocument()
    })

    it('displays specific Santa Monica address as required', () => {
      render(<Contact />)
      expect(screen.getByText(/123th Street 45 W/)).toBeInTheDocument()
      // Verify Santa Monica appears in office location context
      expect(screen.getByText('Office Location')).toBeInTheDocument()
      expect(screen.getAllByText(/Santa Monica/).length).toBeGreaterThan(0)
      expect(screen.getByText(/CA/)).toBeInTheDocument()
      expect(screen.getByText(/90401/)).toBeInTheDocument()
    })

    it('includes Santa Monica references in biographical content', () => {
      // Test Hero section
      const { unmount: unmountHero } = render(<Hero />)
      expect(screen.getByText(/therapy in Santa Monica/)).toBeInTheDocument()
      unmountHero()

      // Test About section
      const { unmount: unmountAbout } = render(<About />)
      expect(screen.getByText(/practicing in Santa Monica/)).toBeInTheDocument()
      unmountAbout()
    })

    it('shows Santa Monica location in office description', () => {
      render(<OurOffice />)
      expect(screen.getByText(OFFICE_INFO.description)).toBeInTheDocument()
      // Office description should contain Santa Monica references
      expect(OFFICE_INFO.description).toContain('Santa Monica')
    })

    it('displays contact information with Santa Monica address', () => {
      render(<Contact />)
      expect(screen.getByText(/123th Street 45 W/)).toBeInTheDocument()
      // Verify Santa Monica appears in the contact context
      expect(screen.getAllByText(/Santa Monica/).length).toBeGreaterThan(0)
      expect(screen.getByText(/CA/)).toBeInTheDocument()
      expect(screen.getByText(/90401/)).toBeInTheDocument()
    })
  })

  describe('Required Specializations and Approaches', () => {
    it('displays all required specializations', () => {
      render(<Services />)
      
      // Validate each required specialization is present
      const requiredSpecializations = ['Anxiety', 'Panic Disorders', 'Trauma', 'Burnout']
      requiredSpecializations.forEach(specialization => {
        expect(screen.getByText(specialization)).toBeInTheDocument()
      })

      // Ensure all specializations from profile are displayed
      THERAPIST_PROFILE.specializations.forEach(specialization => {
        expect(screen.getByText(specialization)).toBeInTheDocument()
      })
    })

    it('shows all required therapeutic approaches', () => {
      render(<Services />)
      
      // Validate each required approach is present
      const requiredApproaches = ['CBT', 'EMDR', 'Mindfulness', 'Body-Oriented Techniques']
      requiredApproaches.forEach(approach => {
        expect(screen.getByText(approach)).toBeInTheDocument()
      })

      // Ensure all approaches from profile are displayed
      THERAPIST_PROFILE.approaches.forEach(approach => {
        expect(screen.getByText(approach)).toBeInTheDocument()
      })
    })

    it('displays all session types', () => {
      // Test Hero section - session types appear as combined text
      const { unmount: unmountHero } = render(<Hero />)
      expect(screen.getByText(/In-person & Telehealth/)).toBeInTheDocument()
      unmountHero()

      // Test Services section - session types appear individually
      const { unmount: unmountServices } = render(<Services />)
      expect(screen.getByText('In-person')).toBeInTheDocument()
      expect(screen.getByText('Telehealth')).toBeInTheDocument()
      unmountServices()

      // Test Contact section - session types appear individually
      const { unmount: unmountContact } = render(<Contact />)
      expect(screen.getByText('In-person')).toBeInTheDocument()
      expect(screen.getByText('Telehealth')).toBeInTheDocument()
      unmountContact()
    })

    it('shows target client demographics', () => {
      // Test Services section
      const { unmount: unmountServices } = render(<Services />)
      expect(screen.getByText('High-achieving adults')).toBeInTheDocument()
      expect(screen.getByText('Overwhelmed professionals')).toBeInTheDocument()
      unmountServices()

      // Test Contact section - appears as "high-achieving adults" (lowercase)
      const { unmount: unmountContact } = render(<Contact />)
      expect(screen.getByText('high-achieving adults')).toBeInTheDocument()
      unmountContact()
    })

    it('includes high-achieving adults messaging in contact section', () => {
      render(<Contact />)
      expect(screen.getByText('high-achieving adults')).toBeInTheDocument()
    })
  })

  describe('Content Consistency Across Sections', () => {
    it('maintains consistent therapist information across all sections', () => {
      // Test that core information is consistent wherever it appears
      
      // Verify consistency in Hero section
      const { unmount: unmountHero } = render(<Hero />)
      expect(screen.getByText('Dr. Maya Reynolds')).toBeInTheDocument()
      expect(screen.getByText('Licensed Clinical Psychologist')).toBeInTheDocument()
      expect(screen.getByText(`Licensed in Santa Monica, CA`)).toBeInTheDocument()
      expect(screen.getByText(/Dr. Maya Reynolds is a licensed clinical psychologist/)).toBeInTheDocument()
      unmountHero()

      // Verify consistency in About section
      const { unmount: unmountAbout } = render(<About />)
      expect(screen.getByText(/About/)).toBeInTheDocument()
      expect(screen.getByText(/Maya/)).toBeInTheDocument()
      expect(screen.getByText('Licensed Clinical Psychologist')).toBeInTheDocument()
      expect(screen.getByText(`Licensed in Santa Monica, CA`)).toBeInTheDocument()
      expect(screen.getByText(/As a licensed clinical psychologist practicing in Santa Monica/)).toBeInTheDocument()
      unmountAbout()
    })

    it('ensures all required content elements are present', () => {
      // Comprehensive check that all required content from requirements is present
      const requiredElements = {
        therapistName: THERAPIST_PROFILE.name,
        professionalTitle: THERAPIST_PROFILE.title,
        licenseNumber: THERAPIST_PROFILE.license,
        location: THERAPIST_PROFILE.location,
        specializations: THERAPIST_PROFILE.specializations,
        approaches: THERAPIST_PROFILE.approaches,
        sessionTypes: THERAPIST_PROFILE.sessionTypes,
        clientTypes: THERAPIST_PROFILE.clientTypes,
        officeAddress: OFFICE_INFO.address,
        contactInfo: CONTACT_INFO
      }

      // Verify all elements are defined and not empty
      expect(requiredElements.therapistName).toBeTruthy()
      expect(requiredElements.professionalTitle).toBeTruthy()
      expect(requiredElements.licenseNumber).toBeTruthy()
      expect(requiredElements.location).toContain('Santa Monica')
      expect(requiredElements.specializations).toHaveLength(4)
      expect(requiredElements.approaches).toHaveLength(4)
      expect(requiredElements.sessionTypes).toHaveLength(2)
      expect(requiredElements.clientTypes).toHaveLength(2)
      expect(requiredElements.officeAddress.street).toBe('123th Street 45 W')
      expect(requiredElements.officeAddress.city).toBe('Santa Monica')
      expect(requiredElements.officeAddress.state).toBe('CA')
      expect(requiredElements.officeAddress.zipCode).toBe('90401')
      expect(requiredElements.contactInfo.phone).toBeTruthy()
      expect(requiredElements.contactInfo.email).toBeTruthy()
    })
  })
})