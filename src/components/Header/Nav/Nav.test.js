import { render, screen } from '../../../../test/test-utils';
import Nav from './Nav';

describe('Nav', () => {
  // Links using <Link> from 'next/link' are based on root '/', rather than full domain 'https://...', and should be tested as such
  test('Links point to correct addresses', () => {
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
    expect(homeLink).toBe('/');
    expect(aboutLink).toBe('/about');
    expect(workLink).toBe('/work');
    expect(blogLink).toBe('/blog');
  });
});
