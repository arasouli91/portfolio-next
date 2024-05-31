import {
  ChakraProvider,
  localStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra({ children }) {
  // const colorModeManager =
  //   typeof cookies === 'string'
  //     ? cookieStorageManagerSSR(cookies)
  //     : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      {children}
    </ChakraProvider>
  )
}
