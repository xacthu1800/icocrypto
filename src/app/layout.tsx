import type { Metadata } from "next";
import defaultConfig from "@/configs/default.json"
import AzaleaLayout from "@/themes/azalea/layout";
import GentianLayout from "@/themes/gentian/layout";


export const metadata: Metadata = {
  title: defaultConfig.title,
  description: defaultConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GentianLayout>{children}</GentianLayout>
  );
}
