// import { render, screen } from '@testing-library/react';
import { render, screen } from '../../../test/test-utils';
import { axe } from 'jest-axe';
import Nav from './Nav';

describe('Nav', () => {
  // Links using <Link> from 'next/link' are based on root '/', rather than full domain 'https://...', and should be tested as such
  test('Links point to correct addresses', async () => {
    render(<Nav />);
    const homeLink = screen
      .getByRole('link', {
        name: /Home/i,
      })
      .getAttribute('href');
    // About link points to 'More about me' button until TODO: Open about section on link click
    const aboutLink = screen
      .getByRole('link', {
        name: /About/i,
      })
      .getAttribute('href');
    // Work link points to WorkPreview until TODO: Work Page is finished
    const workLink = screen
      .getByRole('link', {
        name: /Work/i,
      })
      .getAttribute('href');
    // Blog link should point to Blog Page
    const blogLink = screen
      .getByRole('link', {
        name: /Blog/i,
      })
      .getAttribute('href');
    expect(await homeLink).toBe('/');
    expect(await aboutLink).toBe('/#about');
    expect(await workLink).toBe('/#work');
    expect(await blogLink).toBe('/blog');
  });
});

describe('The <Nav /> component', () => {
  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Nav />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
