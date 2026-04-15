import type { Metadata } from "next";
import { BookingPage } from "@/components/booking/BookingPage";

export const metadata: Metadata = {
  title: "Book a Free Consultation | RedBridge Consulting",
  description:
    "Book a free consultation with RedBridge and share your migration or career profile before the call.",
};

export default function Booking() {
  return <BookingPage />;
}
