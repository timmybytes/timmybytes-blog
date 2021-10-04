import { Box, Text, useColorMode } from '@chakra-ui/react'
import { Logo } from '@components/Logo'
import type { NextPage } from 'next'

const About = () => {
  return (
    <>
      <Box p='5rem 10vw' maxW='90vw'>
        <Text borderBottom='5px solid red' width='100%'>
          About
        </Text>
        <Box d='flex' flexDir={{ base: 'column', md: 'row' }} gridGap='1rem'>
          <Text maxW='25ch'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            tenetur sed aspernatur quod accusantium numquam quo debitis cumque
            sunt enim et? Eligendi amet sit excepturi id similique dolor
            ratione! Magni!
          </Text>
          <Text maxW='25ch'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            tenetur sed aspernatur quod accusantium numquam quo debitis cumque
            sunt enim et? Eligendi amet sit excepturi id similique dolor
            ratione! Magni!
          </Text>
          <Text maxW='25ch'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            tenetur sed aspernatur quod accusantium numquam quo debitis cumque
            sunt enim et? Eligendi amet sit excepturi id similique dolor
            ratione! Magni!
          </Text>
        </Box>
      </Box>
    </>
  )
}

const SideNav = () => (
  <Box
    as='nav'
    fontWeight={400}
    width={{ base: '100%', sm: '50%', md: '50%', xl: '25%' }}
    d='block'
    transform='rotate(-90deg)'
    position='fixed'
    top={0}
    zIndex={8888}
    right={{ base: '25px', sm: '45px' }}
    textAlign='center'
    transformOrigin='top right'
  >
    <Box d='flex'>
      <Text textTransform='uppercase' pr={8}>
        Contact
      </Text>
      <Text textTransform='uppercase' pr={8}>
        What
      </Text>
      <Text textTransform='uppercase'>Who</Text>
    </Box>
  </Box>
)

const SimmonsGrid = () => {
  return (
    <Box
      d='flex'
      m='auto'
      p='5rem 0'
      minH='70vh'
      mb={{ base: '4rem', sm: '10rem' }}
    >
      <Box
        maxW='1400px'
        w='66vw'
        d='grid'
        m='auto'
        gridTemplateColumns='auto 1fr 1fr 1fr 0.5fr'
        gridTemplateRows='auto 1fr 1fr auto auto'
        gridGap='1rem'
        transform={{ base: 'none', md: 'rotate(-45deg)' }}
      >
        <Text
          as='h1'
          gridColumn='1 / 4'
          textAlign='right'
          fontSize='calc(1.3rem + 1.8vw)'
          m={0}
          lineHeight='1.2em'
          textTransform='uppercase'
        >
          Timothy Merritt
        </Text>
        <Text
          as='h1'
          color='red'
          sx={{ writingMode: 'vertical-lr' }}
          gridColumn='3 / 4'
          gridRow='2 / 5'
          justifySelf='end'
          my='-10px'
          fontSize='calc(1.3rem + 1.8vw)'
          lineHeight='1.2em'
          textTransform='uppercase'
        >
          is a frontend developer
        </Text>
        <Box
          gridColumn='1 / 3'
          gridRow='4 / span 2'
          fontWeight='700'
          lineHeight='1.2'
          alignSelf='end'
        >
          <Text as='h2' m={0} lineHeight='1.2' textTransform='uppercase'>
            The Conference Talks
          </Text>
          <Box as='ul' sx={{ listStyle: 'none' }} p={0}>
            <Box
              as='li'
              borderTop='5px solid rgba(12,12,10,.8)'
              textAlign='left'
              p='2px 0'
            >
              1.{' '}
              <a
                style={{
                  borderBottom: 'none',
                  textTransform: 'uppercase',
                  color: 'rgba(12,12,10,.8)',
                  fontWeight: 700,
                }}
                href='#'
              >
                Name of Link to Somewhere
              </a>
            </Box>
            <Box
              as='li'
              borderTop='5px solid rgba(12,12,10,.8)'
              textAlign='left'
              p='2px 0'
            >
              1.{' '}
              <a
                style={{
                  borderBottom: 'none',
                  textTransform: 'uppercase',
                  color: 'rgba(12,12,10,.8)',
                  fontWeight: 700,
                }}
                href='#'
              >
                Name of Link to Somewhere
              </a>
            </Box>
            <Box
              as='li'
              borderTop='5px solid rgba(12,12,10,.8)'
              textAlign='left'
              p='2px 0'
            >
              1.{' '}
              <a
                style={{
                  borderBottom: 'none',
                  textTransform: 'uppercase',
                  color: 'rgba(12,12,10,.8)',
                  fontWeight: 700,
                }}
                href='#'
              >
                Name of Link to Somewhere
              </a>
            </Box>
            <Box
              as='li'
              borderTop='5px solid rgba(12,12,10,.8)'
              textAlign='left'
              p='2px 0'
            >
              1.{' '}
              <a
                style={{
                  borderBottom: 'none',
                  textTransform: 'uppercase',
                  color: 'rgba(12,12,10,.8)',
                  fontWeight: 700,
                }}
                href='#'
              >
                Name of Link to Somewhere
              </a>
            </Box>
            <Box
              as='li'
              borderBottom='5px solid rgba(12,12,10,.8)'
              textAlign='left'
              p='2px 0'
            >
              1.{' '}
              <a
                style={{
                  borderBottom: 'none',
                  textTransform: 'uppercase',
                  color: 'rgba(12,12,10,.8)',
                  fontWeight: 700,
                }}
                href='#'
              >
                Name of Link to Somewhere
              </a>
            </Box>
          </Box>
        </Box>
        <Text
          gridColumn='3 / 6'
          gridRow='5'
          fontSize='.9rem'
          borderBottom='25px solid red'
          alignSelf='start'
          justifyContent='end'
          lineHeight='1.3'
          pb='5px'
        >
          Follow on Twitter for more as it happens
        </Text>
        <Box
          borderTop='5px solid rgba(12,12,10,0.8)'
          borderBottom='5px solid rgba(12,12,10,0.8)'
          fontWeight={700}
          gridRow='3'
          gridColumn='4 / 6'
          alignSelf='end'
        >
          <Box as='ul' p={0} sx={{ listStyle: 'none' }}>
            <Box as='li'>
              <a
                href='#'
                style={{ textTransform: 'uppercase', fontWeight: 700 }}
              >
                LayoutLand Videos
              </a>
            </Box>
            <Box as='li'>
              <a
                href='#'
                style={{ textTransform: 'uppercase', fontWeight: 700 }}
              >
                LayoutLand Videos
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const LayoutLand = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Logo />
      <Box as='main' p='0 5vw'>
        <SideNav />
        <SimmonsGrid />
        <About />
      </Box>
    </>
  )
}

const Grid: NextPage = () => {
  return (
    <LayoutLand />
    // <div style={{ height: '100vh' }}>
    //   <div
    //     style={{
    //       fontWeight: 300,
    //       display: 'grid',
    //       gridTemplateColumns: '1rem 1fr 1fr 1fr 1fr 1rem',
    //       gridTemplateRows: '1rem 1fr 1fr 1fr 1fr 1rem',
    //       padding: '2rem',
    //       height: '100%',
    //     }}>
    //     <div
    //       style={{
    //         gridColumn: '1 / 2',
    //         gridRow: '1',
    //         position: 'sticky',
    //         top: 0,
    //         padding: '2rem',
    //       }}>
    //       <Logo />
    //     </div>
    //     <nav
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         gridGap: '1rem',
    //         writingMode: 'vertical-rl',
    //         gridColumn: '6',
    //         gridRow: '2 / 5',
    //         position: 'sticky',
    //         width: '100%',
    //         top: 0,
    //       }}>
    //       <a href='#'>Link</a>
    //       <a href='#'>Link</a>
    //       <a href='#'>Link</a>
    //     </nav>
    //     <div
    //       style={{
    //         gridColumn: '3 / 5',
    //         gridRow: 3,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         justifyContent: 'center',
    //         alignItems: 'flex-start',
    //       }}>
    //       <h1 style={{ fontSize: '4rem' }}>timothy merritt</h1>
    //       <h2
    //         style={{
    //           textTransform: 'uppercase',
    //           background: '#494cf8',
    //           width: '100%',
    //           textAlign: 'right',
    //           fontWeight: 600,
    //           paddingRight: '.5rem',
    //         }}>
    //         frontend developer
    //       </h2>
    //     </div>
    //     <div style={{ gridColumn: '4 / 5', gridRow: 4, padding: '1rem' }}>
    //       <h3>Hi there.</h3>
    //       <p
    //         style={{
    //           maxWidth: '25ch',
    //           padding: '1rem 0',
    //         }}>
    //         I'm Timothy Merritt, a developer from Portland, OR focused on the
    //         frontend and design. I’ve worked alongside talented lead engineers,
    //         project managers, and designers that have inspire me to improve my
    //         skills.
    //       </p>
    //       <p
    //         style={{
    //           maxWidth: '25ch',
    //           padding: '1rem 0',
    //         }}>
    //         I'm currently working on personal projects and freelancing, and I'm
    //         open to new roles!
    //       </p>
    //     </div>
    //     <h3
    //       style={{
    //         gridRow: 5,
    //         gridColumn: '3 / -1',
    //         textAlign: 'center',
    //         fontSize: '3rem',
    //         justifySelf: 'start',
    //         alignSelf: 'center',
    //       }}>
    //       projects
    //     </h3>
    //     <div style={{ gridColumn: '2 / 6', gridRow: 6, padding: '1rem' }}>
    //       <div
    //         style={{
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           gridGap: '1rem',
    //         }}>
    //         <div
    //           style={{
    //             display: 'block',
    //             height: '150px',
    //             width: '300px',
    //             background: '#494cf8',
    //           }}></div>

    //         <p
    //           style={{
    //             maxWidth: '25ch',
    //             padding: '1rem 0',
    //           }}>
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
    //           quisquam debitis praesentium facere nulla! Ratione sit cumque
    //           laboriosam, natus nam, maxime porro, similique rerum tenetur
    //           voluptatibus eum dolores illo eaque.
    //         </p>
    //       </div>
    //       <div
    //         style={{
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           gridGap: '1rem',
    //         }}>
    //         <p
    //           style={{
    //             maxWidth: '25ch',
    //             padding: '1rem 0',
    //           }}>
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
    //           quisquam debitis praesentium facere nulla! Ratione sit cumque
    //           laboriosam, natus nam, maxime porro, similique rerum tenetur
    //           voluptatibus eum dolores illo eaque.
    //         </p>
    //         <div
    //           style={{
    //             display: 'block',
    //             height: '150px',
    //             width: '300px',
    //             background: '#494cf8',
    //           }}></div>
    //       </div>
    //       <div
    //         style={{
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           gridGap: '1rem',
    //         }}>
    //         <div
    //           style={{
    //             display: 'block',
    //             height: '150px',
    //             width: '300px',
    //             background: '#494cf8',
    //           }}></div>

    //         <p
    //           style={{
    //             maxWidth: '25ch',
    //             padding: '1rem 0',
    //           }}>
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
    //           quisquam debitis praesentium facere nulla! Ratione sit cumque
    //           laboriosam, natus nam, maxime porro, similique rerum tenetur
    //           voluptatibus eum dolores illo eaque.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Grid
