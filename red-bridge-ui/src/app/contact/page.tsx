import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Footer } from "@/components/shared/Footer";
import { BookingExperience } from "@/components/booking/BookingExperience";
import NavBar from "@/components/shared/NavBar";
import { BookingHero } from "@/components/booking/BookingHero";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Free Consultation | Book Your Migration & Career Assessment",
      description:
        "Book a free consultation with RedBridge. Share your migration or career profile and receive a tailored assessment — no obligation.",
    },
    {
      title: "预约免费咨询 | 移民与职业评估 | 红桥咨询",
      description:
        "选择一个合适的时间段，简单告诉我们你的情况，我们会在沟通前为你准备一个诚实的初步判断。免费、无压力，墨尔本本地团队。",
    },
    "/contact",
  );
}

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-full bg-[var(--bg)] pt-16 md:pt-24">
        <BookingHero />
        <BookingExperience />
      </main>
      <Footer />
    </>
  );
}
