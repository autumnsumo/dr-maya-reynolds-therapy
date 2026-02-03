import { render, screen } from '@testing-library/react'
import About from '../About'
import { THERAPIST_PROFILE } from '../../../lib/constants'

describe('About Section', () => {
  it('displays Dr. Maya\'s credentials correctly', () => {
    render(<About />)
    expect(screen.getByText(THERAPIST_PROFILE.title)).toBeInTheDocument()
    expect(screen.getByText(`License: ${THERAPIST_PROFILE.license}`)).toBeInTheDocument()
  })

  it('shows licensing location', () => {
    render(<About />)
    expect(screen.getByText(`Licensed in ${THERAPIST_PROFILE.location}`)).toBeInTheDocument()
  })

  it('displays biographical content', () => {
    render(<About />)
    expect(screen.getByText(THERAPIST_PROFILE.bio)).toBeInTheDocument()
  })

  it('includes professional experience information', () => {
    render(<About />)
    expect(screen.getByText('10+ Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Specializing in adult therapy and trauma recovery')).toBeInTheDocument()
  })

  it('displays client focus types', () => {
    render(<About />)
    THERAPIST_PROFILE.clientTypes.forEach(clientType => {
      expect(screen.getByText(clientType)).toBeInTheDocument()
    })
  })

  it('includes professional photo with descriptive alt text', () => {
    render(<About />)
    const image = screen.getByAltText(`${THERAPIST_PROFILE.name} in professional setting`)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', expect.stringContaining('dr-maya-reynolds.jpg'))
  })

  it('shows section heading with therapist name', () => {
    render(<About />)
    const lastName = THERAPIST_PROFILE.name.split(' ')[1]
    expect(screen.getByText(`About ${lastName}`)).toBeInTheDocument()
  })
})