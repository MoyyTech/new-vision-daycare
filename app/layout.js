import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'New Vision Daycare | Brooklyn, NY',
  description: 'A nurturing, Christian-based group family daycare in Brooklyn providing quality care for infants, toddlers, preschoolers, and school-age children.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}