
import "../globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { AuthProvider } from "@/contexts/AuthContext";
import LspMainContainer from "@/containers/LspMainContainer";
export const metadata = {
  title: "LIneA Science Platform",
  description: "Generated by create next app",
};


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function LspRootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <LspMainContainer>
                {children}
              </LspMainContainer>
            </ThemeProvider>
          </AuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
