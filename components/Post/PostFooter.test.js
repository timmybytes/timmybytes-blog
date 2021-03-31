import { render, screen } from '../../test/test-utils';
import PostFooter from './PostFooter';

describe('Share text', () => {
  test('correctly URL-encodes spaces', () => {
    const postTitle = 'A blog title';
    render(<PostFooter postTitle={postTitle} />);
    const twitterLink = screen.getByRole('link', { name: /share to twitter/i })
      .href;
    expect(twitterLink).toContain(postTitle.replace(/ /g, '%20'));
  });
});
