import { render, screen } from '@testing-library/react'
import Services from '../Services'
import { THERAPIST_PROFILE } from '../../../lib/constants'

describe('Services Section', () => {
  it('displays all required specializations', () => {
    render(<Services />)
    THERAPIST_PROFILE.specializations.forEach(specialization => {
      expect(screen.getByText(specialization)).toBeInTheDocument()
    })
  })

  it('shows all therapeutic approaches', () => {
    render(<Services />)
    THERAPIST_PROFILE.approaches.forEach(approach => {
      expect(screen.getByText(approach)).toBeInTheDocument()
    })
  })

  it('includes all session types', () => {
    render(<Services />)
    THERAPIST_PROFILE.sessionTypes.forEach(sessionType => {
      expect(screen.getByText(sessionType)).toBeInTheDocument()
    })
  })

  it('displays service category headings', () => {
    render(<Services />)
    expect(screen.getByText('Specializations')).toBeInTheDocument()
    expect(screen.getByText('Therapeutic Approaches')).toBeInTheDocument()
    expect(screen.getByText('Session Options')).toBeInTheDocument()
  })

  it('shows main section heading', () => {
    render(<Services />)
    expect(screen.getByText('Services & Approaches')).toBeInTheDocument()
  })

  it('displays client focus section', () => {
    render(<Services />)
    expect(screen.getByText('Who I Work With')).toBeInTheDocument()
    THERAPIST_PROFILE.clientTypes.forEach(clientType => {
      expect(screen.getByText(clientType)).toBeInTheDocument()
    })
  })

  it('includes descriptive text for service categories', () => {
    render(<Services />)
    expect(screen.getByText(/Areas of focused expertise/)).toBeInTheDocument()
    expect(screen.getByText(/Evidence-based treatment methods/)).toBeInTheDocument()
    expect(screen.getByText(/Flexible therapy options/)).toBeInTheDocument()
  })

  it('shows comprehensive service description', () => {
    render(<Services />)
    expect(screen.getByText(/comprehensive mental health services/)).toBeInTheDocument()
    expect(screen.getByText(/high-achieving adults/)).toBeInTheDocument()
  })
})