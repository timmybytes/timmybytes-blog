import { render } from '@test/test-utils'
import { SideNav } from './SideNav'

const HOMEPAGE_LINKS = [
  { url: '#about', name: 'About' },
  { url: '#projects', name: 'Projects' },
  { url: '#contact', name: 'contact' },
]

describe('SideNav', () => {
  it('should render', () => {
    render(<SideNav links={HOMEPAGE_LINKS} />)
  })
})
