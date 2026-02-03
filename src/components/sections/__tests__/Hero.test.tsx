import { render, screen } from '@testing-library/react'
import Hero from '../Hero'
import { THERAPIST_PROFILE } from '../../../lib/constants'

describe('Hero Section', () => {
  it('renders Dr. Maya\'s name correctly', () => {
    render(<Hero />)
    expect(screen.getByText(THERAPIST_PROFILE.name)).toBeInTheDocument()
  })

  it('displays professional title', () => {
    render(<Hero />)
    expect(screen.getByText(THERAPIST_PROFILE.title)).toBeInTheDocument()
  })

  it('shows biographical information', () => {
    render(<Hero />)
    expect(screen.getByText(THERAPIST_PROFILE.bio)).toBeInTheDocument()
  })

  it('displays location information', () => {
    render(<Hero />)
    expect(screen.getByText(`Licensed in ${THERAPIST_PROFILE.location}`)).toBeInTheDocument()
  })

  it('shows session types', () => {
    render(<Hero />)
    const sessionTypesText = THERAPIST_PROFILE.sessionTypes.join(' & ')
    expect(screen.getByText(`${sessionTypesText} Sessions`)).toBeInTheDocument()
  })

  it('includes call-to-action buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /schedule consultation/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument()
  })

  it('includes professional photo with proper alt text', () => {
    render(<Hero />)
    const image = screen.getByAltText(`Professional photo of ${THERAPIST_PROFILE.name}, ${THERAPIST_PROFILE.title}`)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', expect.stringContaining('dr-maya-reynolds.jpg'))
  })
})