import { render, screen } from '../../test/test-utils';
import PostFooter from './PostFooter';

describe('Share text', () => {
  test('correctly URL-encodes spaces', () => {
    render(<PostFooter postTitle='A blog title' />);
    const twitterLink = screen.getByRole('link', { name: /share to twitter/i })
      .href;
    expect(twitterLink).toContain('%20');
  });
});
