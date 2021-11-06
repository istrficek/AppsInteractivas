// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { ContextProvider } from './context/providerCompose';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ContextProvider>
        <ScrollToTop />
        <Router />
      </ContextProvider>
    </ThemeConfig>
  );
}
