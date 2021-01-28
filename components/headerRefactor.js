import React from 'react';

const headerRefactor = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [menuHidden, setMenuHidden] = useState(true);
  const [navShow, setNavShow] = useState({ display: 'none' });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
  });

  useEffect(() => {
    window.addEventListener('onresize', () => {
      setScreenWidth(window.innerWidth);
    });
  });

  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  function useCurrentWidth() {
    let [width, setWidth] = useState(getWidth());

    useEffect(() => {
      let timeoutId = null;
      const resizeListener = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      };
      window.addEventListener('resize', resizeListener);

      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }, []);
    return width;
  }

  return (
    <header className='header'>
      <div
        className='header__desktop-container'
        style={
          useCurrentWidth() > 800 ? { display: 'flex' } : { display: 'none' }
        }>
        <div
          className='header__desktop'
          style={
            scrollPosition < 20
              ? {}
              : {
                  boxShadow: '4px 4px 10px rgba(0,0,0,0.4)',
                  padding: '0.25rem 0',
                  top: '0',
                }
          }>
          <div className='header__desktop-logo'>
            <Link href='/'>
              <a>
                <img
                  style={
                    scrollPosition < 20
                      ? {}
                      : { width: '20%', minWidth: '130px' }
                  }
                />
                <h1 className='header__title' ariaRole='title'>
                  timmybytes: a byte-sized blog
                </h1>
              </a>
            </Link>
          </div>
          <nav className='header__desktop-nav'>
            <ul>
              <li>
                <Link href='/about'>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href='/work'>
                  <a>Work</a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='header__mobile'>
        <div className='header__mobile-overlay'></div>
        <div className='header__mobile-logo'>
          <Link href='/'>
            <a>
              <img />
              <h1></h1>
            </a>
          </Link>
        </div>
        <nav className='header__mobile-nav'>
          <div></div>
        </nav>
      </div>
    </header>
  );
};

export default headerRefactor;
