import { ThemeProvider, Box } from '@mui/material'
import theme from './theme'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
import ReduxProvider from '@/redux/ReduxProvider'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin', 'devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        style={{
          margin: '0',
          backgroundColor: '#FBFCFC',
          boxSizing: 'border-box',
        }}
      >
        <ToastContainer position="bottom-right" />
        <ReduxProvider>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <NavBar />

              <Box
                sx={{
                  marginTop: '5rem',
                  minHeight: 'calc(100vh - 9rem)',
                  width: '100%',
                }}
              >
                {children}
              </Box>
            </Box>
            <Footer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
