"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Users,
  ClipboardCheck,
  HeartHandshake,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[88vh] min-h-[680px] w-full overflow-hidden bg-white">
      
      {/* 背景图（显示最右边） */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />

        {/* 轻微虚化 */}
<div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-white/90 via-white/40 to-transparent" /> 
        {/* 左侧白色渐变（保证文字清晰） */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.93)_35%,rgba(255,255,255,0.75)_55%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0)_100%)]" />

        {/* 柔光层 */}
        <div className="absolute inset-y-0 left-[45%] w-[20%] bg-white/30 blur-3xl" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[600px]">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ead6bf] bg-[#fbf4ec] px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#cc7d3f]">
            <Shield className="h-4 w-4" />
            REGISTERED AUSTRALIAN CONSULTANCY
          </div>

          {/* Title */}
          <h1
            className="text-[38px] leading-[1.05] text-[#22150f] md:text-[50px] xl:text-[56px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Build Your Career in{" "}
            <span className="text-[#b3131b]">Australia.</span>
            <br />
            We Make It Real.
          </h1>

          {/* Description */}
          <p className="mt-5 text-[16px] leading-[1.7] text-[#6e6760] md:text-[17px]">
            Get placed with verified employers. Gain the right experience.
            Move from study to 482 visa and PR with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="flex h-[52px] items-center gap-2 rounded-lg bg-[#efb64f] px-6 text-[15px] font-semibold text-[#2a1f19]"
            >
              Get Free Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="flex h-[52px] items-center rounded-lg border border-[#d9868f] px-6 text-[15px] font-semibold text-[#b63c46] sm:ml-4"
            >
              View Programs
            </Link>
          </div>

          {/* Stats（严格一行） */}
          <div className="mt-8 border-t border-[#ece5de] pt-5">
            <div className="flex items-center whitespace-nowrap">

              {/* 1 */}
              <div className="flex items-center gap-2 pr-5">
                <Users className="h-5 w-5 text-[#b3131b]" />
                <div>
                  <div className="text-[18px] font-semibold">200+</div>
                  <div className="text-[12px] text-[#7a736d]">
                    Successful Placements
                  </div>
                </div>
              </div>

              {/* divider */}
              <div className="h-7 w-px bg-[#e2d9d0]" />

              {/* 2 */}
              <div className="flex items-center gap-2 px-5">
                <ClipboardCheck className="h-5 w-5 text-[#b3131b]" />
                <div>
                  <div className="text-[18px] font-semibold">300+</div>
                  <div className="text-[12px] text-[#7a736d]">
                    Assessments Approved
                  </div>
                </div>
              </div>

              {/* divider */}
              <div className="h-7 w-px bg-[#e2d9d0]" />

              {/* 3 */}
              <div className="flex items-center gap-2 pl-5">
                <HeartHandshake className="h-5 w-5 text-[#b3131b]" />
                <div>
                  <div className="text-[12px]">Team Active</div>
                  <div className="text-[13px] font-semibold text-[#b3131b]">
                    Since 2018
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}