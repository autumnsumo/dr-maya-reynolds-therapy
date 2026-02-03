import { render, screen } from '@testing-library/react'
import OurOffice from '../OurOffice'
import { OFFICE_INFO } from '../../../lib/constants'

describe('OurOffice Section', () => {
  it('renders office description content', () => {
    render(<OurOffice />)
    expect(screen.getByText(OFFICE_INFO.description)).toBeInTheDocument()
  })

  it('displays main section heading', () => {
    render(<OurOffice />)
    expect(screen.getByText('Our Office')).toBeInTheDocument()
  })

  it('shows safe and comfortable space heading', () => {
    render(<OurOffice />)
    expect(screen.getByText('A Safe & Comfortable Space')).toBeInTheDocument()
  })

  it('displays all office features', () => {
    render(<OurOffice />)
    OFFICE_INFO.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })
  })

  it('includes safety messaging', () => {
    render(<OurOffice />)
    expect(screen.getByText('Safety First')).toBeInTheDocument()
    expect(screen.getByText(/secure, confidential environment/)).toBeInTheDocument()
    expect(screen.getByText(/completely protected/)).toBeInTheDocument()
  })

  it('includes comfort messaging', () => {
    render(<OurOffice />)
    expect(screen.getByText('Ultimate Comfort')).toBeInTheDocument()
    expect(screen.getByText(/comfortable seating/)).toBeInTheDocument()
    expect(screen.getByText(/relaxed and at ease/)).toBeInTheDocument()
  })

  it('includes privacy messaging', () => {
    render(<OurOffice />)
    expect(screen.getByText('Complete Privacy')).toBeInTheDocument()
    expect(screen.getByText(/privacy is paramount/)).toBeInTheDocument()
    expect(screen.getByText(/complete confidentiality/)).toBeInTheDocument()
  })

  it('displays office images with proper alt text', () => {
    render(<OurOffice />)
    
    // Main office image
    const mainImage = screen.getByAltText('Comfortable therapy office waiting area with calming decor')
    expect(mainImage).toBeInTheDocument()
    expect(mainImage).toHaveAttribute('src', expect.stringContaining('office-1.jpg'))
    
    // Gallery images
    const consultationRoomImage = screen.getByAltText('Office space 2 - Private consultation room')
    expect(consultationRoomImage).toBeInTheDocument()
    expect(consultationRoomImage).toHaveAttribute('src', expect.stringContaining('office-2.jpg'))
    
    const seatingAreaImage = screen.getByAltText('Office space 3 - Comfortable seating area')
    expect(seatingAreaImage).toBeInTheDocument()
    expect(seatingAreaImage).toHaveAttribute('src', expect.stringContaining('office-3.jpg'))
  })

  it('includes therapeutic journey messaging', () => {
    render(<OurOffice />)
    expect(screen.getByText(/therapeutic journey begins/)).toBeInTheDocument()
    expect(screen.getByText(/promote healing, comfort, and privacy/)).toBeInTheDocument()
  })

  it('shows office environment gallery heading', () => {
    render(<OurOffice />)
    expect(screen.getByText('Office Environment')).toBeInTheDocument()
  })

  it('displays what makes office special section', () => {
    render(<OurOffice />)
    expect(screen.getByText('What Makes Our Office Special')).toBeInTheDocument()
  })

  it('includes call-to-action button', () => {
    render(<OurOffice />)
    expect(screen.getByText('Schedule Your Visit')).toBeInTheDocument()
  })

  it('emphasizes sanctuary concept', () => {
    render(<OurOffice />)
    expect(screen.getByText(/creating a sanctuary/)).toBeInTheDocument()
    expect(screen.getByText(/safe to explore, process, and grow/)).toBeInTheDocument()
  })

  it('mentions thoughtful design consideration', () => {
    render(<OurOffice />)
    expect(screen.getByText(/thoughtfully considered/)).toBeInTheDocument()
    expect(screen.getByText(/support your well-being/)).toBeInTheDocument()
  })
})