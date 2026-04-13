"use client";
import Link from "next/link";
import {
  CircleStar,
  BookOpen,
  MessageCircle,
  Hash,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");
  const services = t.raw("services") as { name: string; href: string }[];
  const company = t.raw("company") as { name: string; href: string }[];

  return (
    <footer className="bg-[#2d241e] text-stone-400 py-20 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        {/* 顶部主要内容区 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* 品牌介绍 */}
          <div className="lg:col-span-2 pr-0 lg:pr-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                {/* 这里的 logo 路径请根据你的 Next.js 项目调整 */}
                <div className="text-white font-serif font-bold text-xl leading-none">
                  RB
                </div>
              </div>
              <div className="text-white font-serif font-bold text-2xl tracking-tight">
                RedBridge{" "}
                <span className="text-[#b4907a] italic">Consulting</span>
              </div>
            </div>
            <p className="text-[#b4907a] font-bold tracking-widest text-xs uppercase mb-4">
              连接梦想与机遇
            </p>
            <p className="text-sm leading-relaxed max-w-md">
              一家注册的澳洲咨询公司，致力于真实的职业发展和移民路径支持。所有移民服务由
              <a
                href="https://www.insightidea.com.au/en"
                target="_blank"
                rel="noopener"
                className="text-white hover:underline mx-1 inline-flex items-center gap-1"
              >
                Insight Idea <ExternalLink size={12} />
              </a>
              提供 — 持牌移民代理和注册澳洲律师事务所。
            </p>
          </div>

          {/* 服务项目列表 */}
          <div>
            <h5 className="text-white font-bold mb-8 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#b4907a]"></span>
              服务项目
            </h5>
            <ul className="space-y-4 text-sm">
              {[
                { name: "职业起航计划", href: "/zh/career-launch" },
                { name: "189 技术独立移民", href: "/zh/189-pathway" },
                { name: "190 州提名移民", href: "/zh/190-pathway" },
                { name: "491 偏远地区移民", href: "/zh/491-pathway" },
                { name: "482/186 雇主担保移民", href: "/zh/employer-pathway" },
                { name: "紧急签证方案", href: "/zh/emergency" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 公司列表 */}
          <div>
            <h5 className="text-white font-bold mb-8 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#b4907a]"></span>
              {t("companyTitle")}
            </h5>
            <ul className="space-y-4 text-sm">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-white/5 pt-12">
          {/* 社交媒体与法律链接 */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
            {/* 社交平台 */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: <MessageCircle size={18} />, label: "WeChat" },
                { icon: <Hash size={18} />, label: "TikTok" },
                {
                  icon: <BookOpen size={18} />,
                  label: "RedNote",
                  href: "https://www.xiaohongshu.com/user/profile/6363be4d000000001f017d2c",
                },
                {
                  icon: <CircleStar size={18} />,
                  label: "Instagram",
                  href: "https://www.instagram.com/redbridgeconsulting/",
                },
              ].map((social) =>
                social.href ? (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 hover:text-white transition-all group"
                  >
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-[#b4907a]/20 group-hover:text-[#b4907a] transition-all">
                      {social.icon}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {social.label}
                    </span>
                  </a>
                ) : (
                  <button
                    key={social.label}
                    className="flex items-center gap-2 hover:text-white transition-all group"
                  >
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-[#b4907a]/20 group-hover:text-[#b4907a] transition-all">
                      {social.icon}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {social.label}
                    </span>
                  </button>
                ),
              )}
            </div>

            {/* 法律链接 */}
            <div className="flex gap-6 text-xs font-medium">
              <Link href="/privacy" className="hover:text-white">
                {t("legal.privacy")}
              </Link>
              <Link href="/terms" className="hover:text-white">
                {t("legal.terms")}
              </Link>
              <Link href="/terms#copyright" className="hover:text-white">
                {t("legal.copyright")}
              </Link>
              <Link href="/sitemap" className="hover:text-white">
                {t("legal.sitemap")}
              </Link>
            </div>
          </div>

          {/* 版权与附属信息 */}
          <div className="text-center space-y-4">
            <p className="text-[0.7rem] uppercase tracking-widest text-stone-500">
              A{" "}
              <a
                href="https://abr.business.gov.au/ABN/View?abn=97693501147"
                target="_blank"
                rel="noopener"
                className="hover:text-stone-300 underline underline-offset-4"
              >
                Siddeley Group
              </a>{" "}
              company — alongside
              <span className="mx-2 text-stone-600">|</span>
              Insight Idea Law Firm
              <span className="mx-2 text-stone-600">|</span>
              Good Mood Studio
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-[0.7rem] text-stone-500">
                <ShieldCheck size={14} className="text-[#b4907a]" />
                {t("copyrightText")}
              </div>
              <p className="text-[0.7rem] text-stone-600 max-w-2xl mx-auto">
                {t("disclaimer")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
