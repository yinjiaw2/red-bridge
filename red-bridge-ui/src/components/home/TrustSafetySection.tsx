"use client";
import Link from "next/link";

// 定义验证项的数据结构
interface VerifyItem {
  label: string;
  linkText: string;
  href: string;
  icon: string;
}

const verifyItems: VerifyItem[] = [
  {
    label: "持牌移民律师合作伙伴",
    linkText: "Insight Idea — 注册律师事务所 ↗",
    href: "https://www.insightidea.com.au/en/success",
    icon: "fa-certificate",
  },
  {
    label: "澳洲注册公司",
    linkText: "在ABR上验证我们的ABN ↗",
    href: "https://abr.business.gov.au/ABN/View?abn=88678186091",
    icon: "fa-building",
  },
  {
    label: "联系我们",
    linkText: "[给我们写email ↗]",
    href: "mailto:hello@redbridge.com.au",
    icon: "fa-envelope",
  },
];

export const TrustSafetySection = () => {
  return (
    <section className="bg-[#2d241e] py-16 px-[5%] overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* 左侧文字区域 */}
        <div className="flex-1 text-left">
          <h3 className="text-white text-3xl font-bold mb-4 leading-tight font-serif">
            我们知道您在担心什么。
            <br />
            <span className="text-[#b4907a] italic font-normal mt-2 block">
              这些情况，您或许早已听过：
            </span>
          </h3>
          <p className="text-[#a28e7e] text-lg leading-relaxed max-w-[600px]">
            虚假职位信息、付款后才出现的隐藏附加费用、转账后不再兑现的承诺。
            RedBridge
            的存在，正是为了与这些做法划清界限。言而有信是我们的宗旨，欢迎您亲自验证。
          </p>
        </div>

        {/* 右侧验证卡片区域 */}
        <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[320px]">
          {verifyItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-[#3a3028] border border-[#4a3f36] rounded-xl transition-all hover:bg-[#43382f]"
            >
              {/* 图标 */}
              <div className="mt-1 text-[#b4907a]">
                <i className={`fas ${item.icon} text-lg`}></i>
              </div>

              {/* 文案与链接 */}
              <div className="flex flex-col">
                <span className="text-[#a28e7e] text-sm font-medium mb-1">
                  {item.label}
                </span>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="text-[#d9c5b2] text-sm hover:text-white transition-colors underline decoration-[#4a3f36] underline-offset-4"
                >
                  {item.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;
