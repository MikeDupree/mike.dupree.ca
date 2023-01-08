
export const breakpoints = [360, 576, 768, 992, 1200]

export const mediaQueries = {
  'xs':`@media (max-width: ${breakpoints[0]}px)`,
  'sm':`@media (max-width: ${breakpoints[1]}px)`,
  'md':`@media (max-width: ${breakpoints[2]}px)`,
  'lg':`@media (max-width: ${breakpoints[3]}px)`
}

const theme = {
  breakpoints,
};

export default theme;
