import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import NavBar from "@/components/shared/NavBar";
import { Footer } from "@/components/shared/Footer";
import { SubmitSuccessCard } from "@/components/booking-form/SubmitSuccessCard";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Booking Submitted | RedBridge",
      description: "Your consultation request has been received.",
    },
    {
      title: "预约已提交 | 红桥咨询",
      description: "我们已收到您的预约申请。",
    },
    "/contact/success",
  );
}

type Props = {
  searchParams: Promise<{ name?: string; email?: string; pathway?: string }>;
};

export default async function ContactSuccessPage({ searchParams }: Props) {
  const { name = "", email = "", pathway = "" } = await searchParams;

  return (
    <>
      <NavBar />
      <main className="min-h-full bg-(--bg) pt-16 md:pt-24">
        <section className="w-full py-12">
          <div className="mx-auto flex w-full max-w-3xl flex-col rounded-lg border border-border bg-card px-6 py-8 shadow-sm">
            <SubmitSuccessCard name={name} email={email} pathway={pathway} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
