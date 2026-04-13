import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  MessageCircle,
  ExternalLink,
  Phone,
  Calendar,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "RedBridge Consulting的职位安置是否真实且经过验证？",
    answer:
      "是的。所有合作雇主均具备当前有效的482担保资格。公司名称、行业及担保状态等信息，将会在免费咨询时直接提供。无需付费，也无需先做决定。如果没有适合您的方案，我们会在咨询时直接说明，不会收取任何费用。",
  },
  {
    question: "482和186雇主担保签证有什么区别？",
    answer: (
      <>
        <strong>482（临时技能短缺）</strong>
        签证可让您在澳洲为担保雇主工作，最长可达4年。
        <strong>186（雇主提名）</strong>
        签证可直接获得永久居留。不少客户先通过482入境，在同一雇主下工作2–3年后转186过渡签证。完整方案会在免费咨询时为您说明。
      </>
    ),
  },
  {
    question: "在澳大利亚，482雇主担保签证获批需要多长时间？",
    answer: (
      <>
        482签证获批时间通常为<strong>3–12</strong>
        个月。具体时间取决于职业类型、雇主是否已具备担保资格，以及移民局当前审理进度。我们会根据您的情况，在免费咨询时提供更具体的时间预估。
      </>
    ),
  },
  {
    question: "维多利亚州190州提名获批需要多长时间？",
    answer:
      "维州190州担保审批周期通常为2–12个月。时间主要取决于职业、当前分数以及当期邀请情况。我们会根据您的职业匹配更有机会的州，并在咨询时给出实际时间预估。",
  },
  {
    question: "国际学生可以在没有永久居留权或工作的情况下申请吗？",
    answer: (
      <>
        当然可以。我们的方案面向不同阶段的留学生与技术人才。 我们的
        <Link
          href="/zh/career-launch"
          className="text-[#b45309] underline mx-1"
        >
          职业起航计划
        </Link>
        可以帮助留学生积累符合移民要求的本地工作经验。而雇主担保方案则可以直接对接提供岗位与提名支持的雇主。无需PR，也不需要工作即可开始规划。
      </>
    ),
  },
  {
    question: "在澳大利亚，技术移民需要多少费用？",
    answer: (
      <>
        在RedBridge, 您的首次咨询是<strong>完全免费</strong>的。我们的项目费用从
        AUD 50,000 起，具体根据服务类型而定。而政府签证申请费用另计，通常在 AUD
        3,000–8,000
        之间，取决于签证类别。所有费用均写入正式客户协议，包括服务费、政府费用及
        Insight Idea 律所的法律费用，费用结构清晰透明。
      </>
    ),
  },
  {
    question: "移民咨询费用是否可以分期付款？",
    answer:
      "当然可以。我们提供3-4阶段里程碑式的付款结构，您仅需在成功节点付款，无需一次性付清。所有付款安排均写入正式客户协议。您可以使用银行转账，PayID 和 BPAY 方式支付。",
  },
  {
    question: "什么是职业技能评估成功保障？",
    answer:
      "如果您已完成我们的项目，但您的职业技术评估失败了，我们将会一直免费跟进支持您，至到您通过。我们的项目设计严格对标 CAANZ、ACS 和 AMI 的评估要求，工作时长、格式及证明材料均符合标准。",
  },
  {
    question: "哪种签证途径适合我的职业和情况？",
    answer: (
      <div className="space-y-3">
        <p>
          <strong>如果您是应届毕业生，缺乏本地经验:</strong>{" "}
          <Link href="/zh/career-launch" className="text-[#7c5a43] underline">
            职业起航计划
          </Link>
        </p>
        <p>
          <strong>如果您已有雇主意向或工作机会:</strong>{" "}
          <Link
            href="/zh/employer-pathway"
            className="text-[#7c5a43] underline"
          >
            482/186 雇主担保移民
          </Link>
        </p>
        <p>
          <strong>如果您想了解独立技术移民:</strong>{" "}
          <Link href="/zh/189-pathway" className="text-[#7c5a43] underline">
            189 Pathway
          </Link>
        </p>
        <p>
          <strong>如果您想了解州担保加分路径:</strong>{" "}
          <Link href="/zh/190-pathway" className="text-[#7c5a43] underline">
            190 Pathway
          </Link>
        </p>
        <p>
          <strong>如果您想了解偏远地区移民:</strong>{" "}
          <Link href="/zh/491-pathway" className="text-[#7c5a43] underline">
            491 Pathway
          </Link>
        </p>
        <Link
          href="/booking"
          className="inline-flex items-center gap-2 mt-2 font-bold text-[#b45309]"
        >
          欢迎预约免费咨询 <Calendar size={14} />
        </Link>
      </div>
    ),
  },
  {
    question: "谁会负责处理签证递交和移民法律事务？",
    answer: (
      <>
        所有移民建议、签证递交及法律事务，均由持牌合作方律所{" "}
        <a
          href="https://www.insightidea.com.au/en/success"
          target="_blank"
          rel="noopener"
          className="text-[#7c5a43] underline inline-flex items-center gap-1"
        >
          Insight Idea <ExternalLink size={12} />
        </a>{" "}
        — 注册律师事务所 + MARA 持牌移民代理。RedBridge 负责职业与雇主匹配。
      </>
    ),
  },
  {
    question: "RedBridge Consulting专注于哪些行业和职业？",
    answer:
      "我们专精于三大领域：会计与金融（CAANZ 评估），ICT 与科技（ACS 评估），和市场与商业（AMI 评估）。",
  },
  {
    question: "RedBridge Consulting公司在哪里？你们提供在线咨询吗？",
    answer: (
      <div className="space-y-2">
        <p>
          公司地址：
          <strong>
            Level 9, Tower 3, 18–38 Siddeley Street, Docklands VIC 3008
          </strong>
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="tel:0399617301"
            className="flex items-center gap-2 text-[#7c5a43] font-bold"
          >
            <Phone size={16} /> 03 9961 7301
          </a>
          <Link
            href="/booking"
            className="flex items-center gap-2 text-[#b45309] font-bold"
          >
            <MessageCircle size={16} /> 在线预约咨询
          </Link>
        </div>
      </div>
    ),
  },
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#fbf9f4] py-24 px-[5%]">
      <div className="max-w-[900px] mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="text-[0.75rem] font-bold tracking-[0.2em] text-[#a28e7e] uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-[#a28e7e]/40"></span>
            常见问题
            <span className="w-8 h-[1px] bg-[#a28e7e]/40"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d241e] mb-6">
            常见<span className="text-[#7c5a43] italic ml-2">问题</span>解答
          </h2>
          <p className="text-[#928276] text-lg">
            如果您有更多的问题，欢迎免费咨询
          </p>
        </div>

        {/* 手风琴列表 */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-[#7c5a43] bg-white shadow-xl shadow-[#7c5a43]/5"
                    : "border-[#e8dfd4] bg-[#f5f1ea]/30"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`text-lg font-bold transition-colors ${isOpen ? "text-[#7c5a43]" : "text-[#2d241e]"}`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#a28e7e] transition-transform duration-300 ${isOpen ? "rotate-180 text-[#7c5a43]" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-[#928276] leading-relaxed border-t border-[#e8dfd4]/50">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
