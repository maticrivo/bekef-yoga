import "@mantine/core/styles.css";

import { Inter } from "next/font/google";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  createTheme,
  MantineProvider,
  Title,
} from "@mantine/core";

export const metadata = {
  title: "Bekef Yoga",
  description: "Descubre la paz interior con nuestras clases de yoga",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          defaultColorScheme="light"
          theme={createTheme({
            fontFamily: inter.style.fontFamily,
            headings: {
              fontFamily: inter.style.fontFamily,
              fontWeight: "lighter",
            },
          })}
        >
          <AppShell padding="md">
            <AppShellHeader ta="center">
              <Title order={1}>Bekef Yoga</Title>
            </AppShellHeader>

            {/* <nav>
              <Link href="/" passHref>
                <Button color="gray" variant="subtle">
                  Inicio
                </Button>
              </Link>
              <Link href="/classes" passHref>
                <Button color="gray" variant="subtle">
                  Clases
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button color="gray" variant="subtle">
                  Contacto
                </Button>
              </Link>
            </nav> */}
            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
