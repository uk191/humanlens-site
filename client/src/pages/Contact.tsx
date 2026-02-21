/*
 * Contact.tsx — お問い合わせフォーム
 * Design: Swiss Brutalist Technical Manual
 * Form: 相談種別 / 会社名 / 氏名 / メール / 概要
 * Static frontend: form submission shows confirmation UI (no backend)
 */
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const CONTACT_NETWORK_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/HEhl7M8j3XYX9E5aLQVRW9-img-5_1771132822000_na1fn_Y29udGFjdC1uZXR3b3Jr.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L0hFaGw3TThqM1hZWDlFNWFMUVZSVzktaW1nLTVfMTc3MTEzMjgyMjAwMF9uYTFmbl9ZMjl1ZEdGamRDMXVaWFIzYjNKci5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Bw-D2OI8IQckFjspd2eAtaDLmSJsDNIjdfXJ2WojLjvuxKeVvTVFsylAERUvT~WMSgLaK3Y355gPLLs0qTxTqA-zNxuZPeOpF5BPm7lIM2SyZqEm7LMwhsILPftp1SO-pRAJaHLyrTY3wYpHyNl~X5o~Rv4aWLLHtSzeC5oZIidXGsMVHAWsS1T02NGFHyMs3xXOKl~YNpETdbIZU42qy6gLoq-YwV7Utn1DE2PYb8Ok5dnJ7MVrnRjX~IDi3BI7hp8up7F7vn7827MbJq6qLuvab-Kz~MLpBjQsTDjf1mvVlnmF35h36EEl5~0aL3YUUHOCFEFMASfX~~sHYsYCdQ__";

const INQUIRY_TYPES = [
  "TeamLens PoC",
  "Engine OEM (API)",
  "共同開発",
  "教育",
  "その他",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    type: "",
    company: "",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div>
        <section className="py-32">
          <div className="container max-w-2xl text-center">
            <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-8">
              <Check size={28} />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] text-black/30 uppercase block mb-4">SPEC-CONTACT-CONFIRMED</span>
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              お問い合わせを受け付けました
            </h1>
            <p className="text-sm text-black/60 leading-relaxed mb-8">
              内容を確認のうえ、3営業日以内にご連絡いたします。<br />
              お急ぎの場合は、メールにてその旨をお知らせください。
            </p>
            <div className="border border-black/10 p-6 text-left font-mono text-xs text-black/50 space-y-1">
              <p><span className="text-black/30">TYPE:</span> {form.type}</p>
              <p><span className="text-black/30">COMPANY:</span> {form.company}</p>
              <p><span className="text-black/30">NAME:</span> {form.name}</p>
              <p><span className="text-black/30">EMAIL:</span> {form.email}</p>
            </div>
            <p className="mt-8 text-xs text-black/30 font-mono">
              ※ 現在はフォーム送信のデモ表示です。実際の送信機能はバックエンド接続後に有効化されます。
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Header with visual */}
      <section className="py-20 border-b border-black/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-center">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-black/30 uppercase block mb-4">SPEC-CONTACT-001</span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Contact</h1>
              <p className="text-lg text-black/60 max-w-2xl leading-relaxed">
                PoC設計から協業開発まで、まずはお気軽にご相談ください。
              </p>
            </div>
            <div className="hidden lg:block">
              <img src={CONTACT_NETWORK_IMG} alt="" className="w-full h-auto opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 grid-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
            <div>
              <span className="spec-label">FORM</span>
              <p className="text-xs text-black/30 font-mono mt-2 leading-relaxed">
                すべての項目にご記入ください。
              </p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
              {/* Inquiry Type */}
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] uppercase text-black/50 block mb-3">
                  相談種別 <span className="text-[#E53E3E]">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {INQUIRY_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleChange("type", type)}
                      className={`px-4 py-2 text-xs font-mono border transition-colors
                        ${form.type === type
                          ? "border-black bg-black text-white"
                          : "border-black/20 text-black/60 hover:border-black/40"
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] uppercase text-black/50 block mb-2">
                  会社名 <span className="text-[#E53E3E]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="w-full border-b-2 border-black/20 bg-transparent py-2 text-sm font-mono focus:border-black focus:outline-none transition-colors"
                  placeholder="株式会社〇〇"
                />
              </div>

              {/* Name */}
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] uppercase text-black/50 block mb-2">
                  氏名 <span className="text-[#E53E3E]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full border-b-2 border-black/20 bg-transparent py-2 text-sm font-mono focus:border-black focus:outline-none transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] uppercase text-black/50 block mb-2">
                  メールアドレス <span className="text-[#E53E3E]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full border-b-2 border-black/20 bg-transparent py-2 text-sm font-mono focus:border-black focus:outline-none transition-colors"
                  placeholder="taro@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-mono text-[11px] tracking-[0.15em] uppercase text-black/50 block mb-2">
                  概要（自由記述） <span className="text-[#E53E3E]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full border-2 border-black/20 bg-transparent p-3 text-sm font-mono focus:border-black focus:outline-none transition-colors resize-none"
                  placeholder="ご相談内容をお書きください..."
                />
              </div>

              {/* Privacy note */}
              <div className="border-t border-black/10 pt-6">
                <p className="text-xs text-black/40 font-mono leading-relaxed mb-6">
                  ※ ご記入いただいた情報は、お問い合わせへの回答および関連するご案内のみに使用します。<br />
                  ※ 第三者への提供は行いません。NDA（守秘義務契約）の締結にも対応しています。
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-sm font-medium tracking-wider uppercase hover:bg-black/80 transition-colors"
                >
                  送信する
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
