import sys from 'system-components'
import { theme } from 'styled-system'

export const Tooltip = sys({
  color: 'white',
  bg: 'dark'
}, props => ({
  display: 'inline-block',
  position: 'relative',
  color: 'inherit',
  backgroundColor: 'transparent',
  '&::before': {
    display: 'none',
    content: `"${props.text}"`,
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translate(-50%, -4px)',
    whiteSpace: 'nowrap',
    fontSize: theme('fontSizes.0')(props),
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    color: theme('colors.' + props.color)(props),
    backgroundColor: theme('colors.' + props.bg)(props),
    borderRadius: theme('radii.1')(props) + 'px'
  },
  '&::after': {
    display: 'none',
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translate(-50%, 8px)',
    content: '" "',
    borderWidth: '6px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderTopColor: theme('colors.' + props.bg)(props)
  },
  '&:hover': {
    '&::before, &::after': {
      display: 'block'
    },
  }
}))

Tooltip.displayName = 'Tooltip'

export default Tooltip
