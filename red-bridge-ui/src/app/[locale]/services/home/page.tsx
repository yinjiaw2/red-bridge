import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { ServicesPage } from "@/components/services/ServicesPage";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata(
    locale,
    {
      title: "Migration & Career Services | 189, 190, 491, 482, Career Launch",
      description:
        "Explore RedBridge Consulting's full suite of Australian migration and career pathways: Career Launch, 189, 190, 491 visa, and 482/186 employer-sponsored support.",
    },
    {
      title: "移民与职业服务总览 | 红桥咨询",
      description:
        "澳洲移民及职业路径全覆盖 —— 职业起航计划、189、190、491签证及482/186雇主担保，一站式专业支持。无论你现在需要工作经验、积分移民还是雇主担保，我们都能帮你梳理最直接的路径。",
    },
    "/services",
  );
}

export default function ServicesHomePage() {
  return <ServicesPage />;
}
