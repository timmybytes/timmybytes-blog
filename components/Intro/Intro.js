import {
  SiKoFi,
  SiLinkedin,
  SiDevDotTo,
  SiTwitter,
  SiDribbble,
  SiGithub,
} from 'react-icons/si';
import { IoDocumentTextOutline } from 'react-icons/io5';
import styles from './intro.module.scss';
import { colors } from '../utils';

const IntroCard = () => {
  return (
    <section>
      <div
        style={{
          display: 'grid',
          gap: '10px',
          gridTemplateRows: 'auto auto auto',
        }}>
        <h1
          style={{
            gridRow: 1,
            borderRadius: '4px',
            display: 'block',
            fontSize: '5rem',
            fontWeight: '900',
            letterSpacing: '-2px',
            lineHeight: '1.1',
            margin: '0',
            padding: '1rem 0 0 0',
            textAlign: 'center',
            textTransform: 'lowercase',
            whiteSpace: 'nowrap',
          }}>
          Timothy Merritt {/* <br /> */}
          {/* <span style={{ fontSize: '.7em', fontWeight: '200' }}>is a...</span> */}
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gridRow: 2,
            textAlign: 'center',
          }}>
          <span
            style={{
              fontSize: '2rem',
              width: '25%',
              borderRadius: '4px',
              fontWeight: '800',
              margin: '5px',
              padding: '0 7px',
              transition: '0.3s',
              background: colors.primary,
            }}>
            developer
          </span>
          <span
            style={{
              fontSize: '2rem',
              width: '25%',
              borderRadius: '4px',
              fontWeight: '800',
              margin: '5px',
              padding: '0 7px',
              transition: '0.3s',
              background: colors.secondary,
            }}>
            designer
          </span>
          <span
            style={{
              fontSize: '2rem',
              width: '25%',
              borderRadius: '4px',
              fontWeight: '800',
              margin: '5px',
              padding: '0 7px',
              transition: '0.3s',
              background: colors.tertiary,
            }}>
            writer
          </span>
          <span
            style={{
              fontSize: '2rem',
              width: '25%',
              borderRadius: '4px',
              fontWeight: '800',
              margin: '5px',
              padding: '0 7px',
              transition: '0.3s',
              background: colors.quaternary,
            }}>
            musician
          </span>
        </div>
        <ul className={styles.social} style={{ gridRow: 3 }}>
          <li>
            <a href='https://twitter.com/timmybytes' target='_blank'>
              <SiTwitter style={{ background: colors.primary }} />
            </a>
          </li>
          <li>
            <a href='https://github.com/timmybytes' target='_blank'>
              <SiGithub style={{ background: colors.secondary }} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/timmybytes' target='_blank'>
              <SiLinkedin style={{ background: colors.tertiary }} />
            </a>
          </li>
          <li>
            <a href='https://dev.to/timmybytes' target='_blank'>
              <SiDevDotTo style={{ background: colors.quaternary }} />
            </a>
          </li>
          <li>
            <a href='https://dribbble.com/timmybytes' target='_blank'>
              <SiDribbble style={{ background: colors.primary }} />
            </a>
          </li>
          <li>
            <a href='https://ko-fi.com/O4O82TAZB' target='_blank'>
              <SiKoFi style={{ background: colors.secondary }} />
            </a>
          </li>
          <li>
            <a href='./Resume.pdf' target='_blank'>
              <IoDocumentTextOutline style={{ background: colors.tertiary }} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroCard;
