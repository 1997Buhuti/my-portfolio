import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-16 pb-28 lg:pb-0">{children}</main>
      <SiteFooter />
    </>
  );
}
