import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services | RedBridge Consulting",
  description:
    "Explore RedBridge Consulting's migration and career pathways, including Career Launch, 189, 190, 491, and 482/186 employer-sponsored support.",
};

export default function Services() {
  return <ServicesPage />;
}
