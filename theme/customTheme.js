import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react'

const customTheme = extendTheme({
  layerStyles: {
    underline: {
      textDecorationLine: 'none',
    },
  },
})
export default customTheme
