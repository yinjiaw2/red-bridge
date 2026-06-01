"use client"; // 如果你使用的是 Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Outcome {
  name: string;
  result: string;
  detail: string;
  duration?: string;
}

const outcomes: Outcome[] = [
  {
    name: "Arjun S.",
    result: "482 visa lodged",
    detail: "ICT Business Analyst",
    duration: "4 months",
  },
  {
    name: "Wei L.",
    result: "190 nominated",
    detail: "Accountant · NSW",
    duration: "6 months",
  },
  {
    name: "Priya M.",
    result: "CAANZ assessment passed",
    detail: "First attempt · Career Launch Program",
  },
  {
    name: "Ming H.",
    result: "186 permanent residency",
    detail: "Software Engineer",
    duration: "2 years with sponsor",
  },
  {
    name: "Linh T.",
    result: "ACS assessment passed",
    detail: "Portfolio of 3 live projects",
    duration: "3 months",
  },
  {
    name: "Rajesh K.",
    result: "491 regional approved",
    detail: "Marketing Specialist · SA nomination",
  },
  {
    name: "Sasha R.",
    result: "Career Launch placed",
    detail: "Digital Marketer · AMI eligible",
  },
];

export const SuccessTicker = () => {
  // 同样需要两组数据来实现无缝循环
  const tickerData = [...outcomes, ...outcomes];

  return (
    <div className="w-full bg-[#fbf9f4] border-y border-[#e8dfd4] overflow-hidden py-4 select-none flex">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{
          x: ["0%", "-50%"], // 从起始点滚动到一半的位置（因为数据是两倍）
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // 滚动速度，数值越大越慢
            ease: "linear",
          },
        }}
        // 鼠标悬停时暂停动画，非常简单
        whileHover={{ animationPlayState: "paused" }}
      >
        {tickerData.map((item, index) => (
          <div key={index} className="flex items-center mx-5 shrink-0 sm:mx-8">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#7c5a43] text-sm md:text-base">
                {item.name}
              </span>
              <span className="text-[#a28e7e]">·</span>
              <span className="font-bold text-[#b45309] text-sm md:text-base">
                {item.result}
              </span>
              <span className="text-[#928276] text-xs md:text-sm">
                · {item.detail} {item.duration && `· ${item.duration}`}
              </span>
            </div>

            <div className="ml-12 text-[#ebdccf]">
              <Sparkles size={16} fill="currentColor" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SuccessTicker;
