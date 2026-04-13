import React from "react";
import Link from "next/link";
import { X, Check, ArrowRight } from "lucide-react";

interface ComparisonRow {
  others: string;
  redBridge: string | React.ReactNode;
}

const comparisonData: ComparisonRow[] = [
  {
    others: "职位真假无法确认 — 付款后才能知真假",
    redBridge:
      "每位雇主都持有确认的482担保资格。无需付费，我们在免费咨询期间分享雇主名称、行业和审批状态",
  },
  {
    others: "一开始就收全款",
    redBridge:
      "所有费用明细记录在正式的客户协议中。付款按3-4个里程碑阶段结构化 — 您只在取得阶段成功时按进度付款",
  },
  {
    others: "由无律师资质顾问提供建议，没有任何法律效益",
    redBridge: (
      <>
        所有签证递交由{" "}
        <a
          href="https://www.insightidea.com.au/en/success"
          target="_blank"
          rel="noopener"
          className="text-[#b45309] font-bold underline underline-offset-4"
        >
          Insight Idea
        </a>{" "}
        — 澳洲持牌注册律师事务所和MARA移民代理专属处理
      </>
    ),
  },
  {
    others: "无薪实习或伪造的工时，无法通过技能评估审查",
    redBridge:
      "提供400+小时的真实有薪项目工作并附有签名工时表 — 完全符合CAANZ、ACS和AMI技能评估要求",
  },
  {
    others: "不论实际情况和背景，向每位客户推荐同一种方案",
    redBridge:
      "根据您的实际情况匹配方案 — 如果某种方案不适合您的背景，我们会在免费咨询时告诉您，而不是向您推销我们无法实现的方案",
  },
  {
    others: "付款后缺乏后续支持 — 您只能自己摸索",
    redBridge:
      "全程跟进 — 即使您完成我们的项目但是技能评估未通过，我们仍将继续免费为您提供支持直到成功",
  },
];

export const ComparisonSection = () => {
  return (
    <section id="why-us" className="bg-[#f5f1ea] py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <span className="text-[0.75rem] font-bold tracking-[0.2em] text-[#a28e7e] uppercase block mb-4">
            为什么选择我们
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d241e] mb-6">
            我们的<span className="text-[#7c5a43] font-serif ml-2">优势</span>
          </h2>
          <p className="text-[#928276] text-lg max-w-2xl mx-auto leading-relaxed">
            信任问题一直存在于移民行业。而我们的不同之处，在于一切都经得起考验。
          </p>
        </div>

        {/* 表格容器 */}
        <div className="overflow-hidden rounded-3xl border border-[#e8dfd4] bg-[#fbf9f4] shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#ebdccf]/30 border-b border-[#e8dfd4]">
                  <th className="py-8 px-8 text-[#a28e7e] font-bold text-sm uppercase tracking-wider w-1/2">
                    <div className="flex items-center gap-2">
                      <X size={18} className="opacity-40" />
                      其他中介
                    </div>
                  </th>
                  <th className="py-8 px-8 text-[#7c5a43] font-bold text-sm uppercase tracking-wider w-1/2 border-l border-[#e8dfd4]">
                    <div className="flex items-center gap-2">
                      <Check size={18} />
                      RedBridge Consulting
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="group border-b border-[#e8dfd4] last:border-b-0 hover:bg-[#f5f1ea]/50 transition-colors"
                  >
                    {/* 其他中介内容 */}
                    <td className="py-8 px-8 align-top text-[#928276] text-[0.95rem] leading-relaxed">
                      <div className="flex gap-3">
                        <X
                          size={16}
                          className="mt-1 shrink-0 text-[#a28e7e]/40"
                        />
                        {row.others}
                      </div>
                    </td>
                    {/* RedBridge 内容 */}
                    <td className="py-8 px-8 align-top text-[#7c5a43] text-[0.95rem] leading-relaxed font-medium border-l border-[#e8dfd4] bg-[#ebdccf]/10 group-hover:bg-transparent transition-colors">
                      <div className="flex gap-3">
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-[#b45309]"
                        />
                        <div>{row.redBridge}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 底部引导 */}
        <div className="mt-12 text-center">
          <p className="text-[#928276] mb-6">
            还有疑问？{" "}
            <Link
              href="/booking"
              className="text-[#b45309] font-bold hover:underline underline-offset-4 inline-flex items-center gap-1 transition-all"
            >
              欢迎预约免费咨询 <ArrowRight size={16} />
            </Link>
          </p>
          <div className="text-xs text-[#a28e7e] uppercase tracking-widest font-bold">
            — 无需付费，您的疑问我们来解答 —
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
