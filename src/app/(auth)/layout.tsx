import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute:'',

    default: "BookBuddy",
    template: "%s | BookBuddy",
},
  description: "A book club App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
    appearance={{
      baseTheme: [dark],
      variables: { colorPrimary: '#9cb9d2' },
    }}>
    <html lang="en">
      <body className={`${inter.className} `}style={{ backgroundImage: `url('/assets/low-poly-grid-haikeii.svg')` }}>
      <div className="w-full flex justify-center items-center min-h-screen">{children}</div>
      </body>
    </html>
    </ClerkProvider>
  );
}
