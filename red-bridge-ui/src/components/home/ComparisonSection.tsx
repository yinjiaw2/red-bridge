import React from "react";
import Link from "next/link";
import {
  X,
  Check,
  ArrowRight,
  Search,
  CreditCard,
  ShieldOff,
  ClipboardX,
  LayoutList,
  UserMinus,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { comparisonData } from "@/lib/comparisonCategory";

export const ComparisonSection = () => {
  return (
    <section id="why-us" className="bg-white py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[0.75rem] font-bold tracking-[0.2em] text-[#a28e7e] uppercase block mb-4">
            Why RedBridge?
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d241e] mb-6">
            How We&apos;re{" "}
            <em className="text-[#7c5a43] not-italic">Different</em>
          </h2>
          <p className="text-[#928276] text-lg max-w-2xl mx-auto leading-relaxed">
            The migration industry has a trust problem. We built RedBridge to be
            the verifiable opposite.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-3xl border bg-[#FFFBFA] shadow-sm">
          <Table>
            <TableHeader className="[&_tr]:border-b-0">
              <TableRow className="hover:bg-transparent border-b border-[#e8dfd4] align-top">
                <TableHead className="py-6 px-6 text-[#6b7280] font-bold text-xs uppercase tracking-widest w-[22%] whitespace-normal h-auto border-b border-[#e8dfd4]">
                  You Deserve Better
                </TableHead>
                <TableHead className="py-6 px-6 text-[#a28e7e] font-bold text-xs uppercase tracking-widest w-[33%] border-l bg-[#F2E1D6] whitespace-normal h-auto ">
                  <div className="flex items-center gap-2">
                    <X size={14} className="opacity-50" aria-hidden="true" />
                    Other Agencies
                  </div>
                </TableHead>
                <TableHead className="py-6 px-6 text-white font-bold text-xs uppercase tracking-widest w-[45%] border-l border-[#e8dfd4] whitespace-normal h-auto bg-[#A20000]">
                  <div className="flex items-center gap-2">
                    <Check size={14} aria-hidden="true" />
                    RedBridge Consulting
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow
                  key={index}
                  className="border-b border-[#e8dfd4] last:border-b-0 hover:bg-brandbackground/40 transition-colors align-top"
                >
                  {/* You Deserve Better */}
                  <TableCell className="py-6 px-6 text-[#374151] text-sm whitespace-normal bg-[#FFFBFA]">
                    <div className="flex gap-3 items-start">
                      <span className="mt-0.5 shrink-0 text-[#6b7280]">
                        {row.deserve.icon}
                      </span>
                      <div>
                        <p className="font-semibold text-[#1f2937] leading-snug mb-1">
                          {row.deserve.title}
                        </p>
                        <p className="text-xs text-[#6b7280] leading-relaxed">
                          {row.deserve.description}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* Other Agencies */}
                  <TableCell className="py-6 px-6 text-[#928276] text-sm whitespace-normal border-l bg-[#FFF4ED]">
                    <div className="flex gap-3 items-start">
                      <X
                        size={14}
                        className="mt-0.5 shrink-0 text-[#a28e7e]/50"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-medium text-[#7c6a60] leading-snug mb-1">
                          {row.others.title}
                        </p>
                        <p className="text-xs text-[#a28e7e] leading-relaxed">
                          {row.others.description}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* RedBridge */}
                  <TableCell className="py-6 px-6 text-sm whitespace-normal border-l border-[#e8dfd4] bg-[#fdf6f0]">
                    <div className="flex gap-3 items-start">
                      <span className="mt-0.5 shrink-0 p-1 rounded-full bg-[#b45309]/10">
                        <Check
                          size={12}
                          className="text-[#b45309]"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <p className="font-bold text-[#2d241e] leading-snug mb-1">
                          {row.redBridge.title}
                        </p>
                        <p className="text-xs text-[#7c5a43] leading-relaxed">
                          {row.redBridge.description}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#928276] mb-6">
            Still have questions?{" "}
            <Link
              href="/booking"
              className="text-[#b45309] font-bold hover:underline underline-offset-4 inline-flex items-center gap-1 transition-all"
            >
              Book a free consultation{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>
          <div className="text-xs text-[#a28e7e] uppercase tracking-widest font-bold">
            — No cost, no commitment —
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
