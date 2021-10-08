import { Box, useColorMode } from '@chakra-ui/react'
import { colors } from '@theme/colors'

export const Logo = (): React.ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      d='flex'
      w='100%'
      justifyContent='space-between'
      alignItems='center'
      position='fixed'
      p={{ base: 2, sm: 4 }}>
      <svg
        onClick={toggleColorMode}
        width='28'
        height='28'
        viewBox='0 0 800 612'
        fill={colorMode === 'dark' ? colors.brand.white : colors.brand.black}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M528.727 589.522H615.434L617.772 184.292C617.959 151.975 591.911 125.777 559.594 125.777H472.886L470.548 531.007C470.362 563.324 496.409 589.522 528.727 589.522Z'
          fill={colorMode === 'dark' ? colors.brand.white : colors.brand.black}
          stroke={
            colorMode === 'dark' ? colors.brand.white : colors.brand.black
          }
        />
        <path
          d='M355.586 589.522H442.293L444.641 182.6C444.828 150.283 418.78 124.085 386.463 124.085H299.756L297.408 531.007C297.221 563.324 323.269 589.522 355.586 589.522Z'
          fill={colorMode === 'dark' ? colors.brand.white : colors.brand.black}
          stroke={
            colorMode === 'dark' ? colors.brand.white : colors.brand.black
          }
        />
        <path
          d='M701.867 589.522H788.575L790.908 185.078C791.095 152.761 765.047 126.563 732.73 126.563H646.023L643.689 531.007C643.502 563.324 669.55 589.522 701.867 589.522Z'
          fill={colorMode === 'dark' ? colors.brand.white : colors.brand.black}
          stroke={
            colorMode === 'dark' ? colors.brand.white : colors.brand.black
          }
        />
        <path
          d='M213.826 22.5L127.119 22.5L124.185 531.007C123.999 563.324 150.046 589.522 182.363 589.522H269.071L272.005 81.0152C272.191 48.6982 246.144 22.5 213.826 22.5Z'
          fill={colorMode === 'dark' ? colors.brand.white : colors.brand.black}
          stroke={
            colorMode === 'dark' ? colors.brand.white : colors.brand.black
          }
        />
        <path
          d='M268.896 266.675V145.021C268.896 132.004 258.343 121.391 245.327 121.316L67.0152 120.287C34.6982 120.101 8.50008 146.148 8.50008 178.466V265.173L268.896 266.675Z'
          fill={colorMode === 'dark' ? colors.brand.white : colors.brand.black}
          stroke={
            colorMode === 'dark' ? colors.brand.white : colors.brand.black
          }
        />
      </svg>
    </Box>
  )
}
