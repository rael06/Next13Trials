import "@/app/globals.css";
import "./layout.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import MainContextProvider from "@/app/contexts";
import LocaleHelper, { SupportedLocale } from "@/app/helpers/locale";
import { notFound } from "next/navigation";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movie App",
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({ children, params }: Props) {
  const locale = params.locale;
  if (!LocaleHelper.isLocaleSupported(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={rubik.className}>
        <MainContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MainContextProvider>
      </body>
    </html>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return [SupportedLocale.en_US, SupportedLocale.fr_FR];
}
