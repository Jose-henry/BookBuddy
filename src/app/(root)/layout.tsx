import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import { ClerkProvider } from "@clerk/nextjs";
import Leftsidebar from "@/components/shared/Leftsidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
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
      baseTheme: [dark, neobrutalism],
      variables: { colorPrimary: '#877EFF' },
      signIn: { 
        baseTheme: [shadesOfPurple], 
        variables: { colorPrimary: '#877EFF' }
      }
    }}>
    <html lang="en">
      <body className={inter.className}>
      <header>
      <Topbar />

    </header>
    <main className="flex flex-row">
          <Leftsidebar />
            <section className="main-container bg-maincolor"> 
              <div className="w-full max-w-4xl">
                {children}
              </div>
              <div className="fixed top-80 right-0 z-20 mt-20">
                <RightSidebar />
              </div>
            </section>
          
        </main>

    <footer>
      <Bottombar />
    </footer>
  
      
      
      </body>
    </html>
    </ClerkProvider>
  );
}


/* bg-[url('/assets/lo.svg')] bg-center bg-cover */