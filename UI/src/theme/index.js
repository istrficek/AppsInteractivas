import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material
import { CssBaseline, adaptV4Theme } from '@mui/material';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
//
import shape from './shape';
import palette from './palette';
import typography from './typography';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node
};

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows
    }),
    []
  );

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       // light: will be calculated from palette.primary.main,
  //       main: '#6200EE',
  //       // dark: will be calculated from palette.primary.main,
  //       // contrastText: will be calculated to contrast with palette.primary.main
  //     },
  //     secondary: {
  //       main: '#03dac6',
  //       // dark: will be calculated from palette.secondary.main,
  //     },
  //     // Used by `getContrastText()` to maximize the contrast between
  //     // the background and the text.
  //     contrastThreshold: 3,
  //     // Used by the functions below to shift a color's luminance by approximately
  //     // two indexes within its tonal palette.
  //     // E.g., shift from Red 500 to Red 300 or Red 700.
  //     tonalOffset: 0.2,
  //   },
  // });

  const theme = createTheme(adaptV4Theme(themeOptions));
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
