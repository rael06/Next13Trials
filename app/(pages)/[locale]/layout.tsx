import "@/app/globals.css";
import "./layout.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Header from "@/app/components/server/Header";
import Footer from "@/app/components/server/Footer";
import LocaleHelper from "@/app/helpers/locale";
import { notFound } from "next/navigation";
import MainContexts from "@/app/components/client/contexts";
import { getDictionary } from "./dictionaries";

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

export default async function RootLayout({ children, params }: Props) {
  const locale = params.locale;
  if (!LocaleHelper.isLocaleSupported(locale)) {
    notFound();
  }
  const supportedLocale = LocaleHelper.retrieveSupportedLocale(locale);
  const dictionary = await getDictionary(supportedLocale);

  return (
    <html lang={locale}>
      <body className={rubik.className}>
        <MainContexts dictionary={dictionary}>
          <Header />
          <main>{children}</main>
          <Footer />
        </MainContexts>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return LocaleHelper.supportedLocales;
}
