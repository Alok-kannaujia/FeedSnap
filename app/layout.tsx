import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://www.opinify.in"),
  title: {
    default:
      "FeedSnap: Real-Time Feedback Platform | Enhance Customer Engagement",
    template: "%s - FeedSnap",
  },
  description:
    "Enhance customer engagement with FeedSnap's real-time feedback platform. Collect, manage, and analyze user insights to drive data-driven improvements.",
  twitter: {
    card: "summary_large_image",
    title:
      "FeedSnap: Real-Time Feedback Platform | Enhance Customer Engagement",
    description:
      "Enhance customer engagement with FeedSnap's real-time feedback platform. Collect, manage, and analyze user insights to drive data-driven improvements.",
    images: ["https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png"],
  },
  openGraph: {
    title:
      "FeedSnap: Real-Time Feedback Platform | Enhance Customer Engagement",
    description:
      "Enhance customer engagement with FeedSnap's real-time feedback platform. Collect, manage, and analyze user insights to drive data-driven improvements.",
    url: "https://feed-snap.vercel.app/",
    siteName: "FeedSnap",
    // images: [
    //   {
    //     url: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "schema-org": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "FeedSnap",
      url: "https://feed-snap.vercel.app/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://feed-snap.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  },
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "widget-web-component": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        projectid: string;
        theme: string;
      };
    }
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className}`}>
        <NextTopLoader
          color="#fff"
          showSpinner={false}
          initialPosition={0.08}
          height={2}
        />
        {/* <Announcement /> */}
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="z-[10] overflow-x-hidden">{children}</div>
            <Footer />
            <Toaster richColors closeButton duration={4000} />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </SessionProvider>
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            zIndex: 100000000000,
          }}
        >
          <widget-web-component
            theme="solarFlare"
            website-name="FeedSnap"
            projectid="cm2zzb1090002rswnnbgikhil"
          ></widget-web-component>
        </div>
        <script
          async
          src="https://embedded-code.vercel.app/dist/widget.umd.js"
        ></script>
      </body>
    </html>
  );
}
