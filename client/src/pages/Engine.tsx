/*
 * Engine.tsx — Engine OEM / API / 共同開発
 * Design: Swiss Brutalist Technical Manual
 * Sections: Capabilities → Use Cases → Offer (3択) → Proof → CTA
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const ENGINE_FLOW_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/HEhl7M8j3XYX9E5aLQVRW9-img-2_1771132828000_na1fn_ZW5naW5lLWZsb3ctZGlhZ3JhbQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L0hFaGw3TThqM1hZWDlFNWFMUVZSVzktaW1nLTJfMTc3MTEzMjgyODAwMF9uYTFmbl9aVzVuYVc1bExXWnNiM2N0WkdsaFozSmhiUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lJd~hFPqKLNgnf2ATtC7pLdJv2ejkzjIvJv8pipPZqr-2N3QZ9XdNES9Faa1pyEUww5365XBospNC40nlw77p42XbyHhfqn-Ffp3xYWVRP7yjSFH4n36fCjdRQ~AG-aras6e2XtLnEHIfQfyW0dxZtlR2Ve4jMDt1TX5y6X1JfKH--OIFgxgsJBOw4FkoXJNq4JdvPc5oCNMFF6ttaEhklvppFtN1IVQS7PW~tibHTH0r5ZhEfL~KWHKcEIAVE0n5hENyzQGwHQz-XUdpCjFVx8~Xy5mm87CsAN3Xv0sxPbiY0Sj9-oe9icAluoLxqFo23I2SxhtcexnCkDTJywGKQ__";

const ICON_ENGINE = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/X007ofXKt1HtTGUvf3oR8J_1771095471534_na1fn_aWNvbi1lbmdpbmU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L1gwMDdvZlhLdDFIdFRHVXZmM29SOEpfMTc3MTA5NTQ3MTUzNF9uYTFmbl9hV052YmkxbGJtZHBibVUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aWeoQ~K7z91ojnWWcrgzVwuNIuBU31MPBq07ldJhSHUFV9bc8kth1aqZDG9H0OJGYKLo4ClbtxNjjAOe8ca4G~Sc0~wKwZDpIenIGKJyEkLfB1NS~sbv4gAb6ZxOOlq5S2e5oabq2WQytZ42GtPAQY6urpAZGLEdZmWschXs8Xi9SirItn6oUEZ~eiTlc9kNaWDo3Q~kxPCSGQdyQ7IJQRpZIQs7mqittAgSE67i0hbaoMcCd-dNgzgyr16BBJgkMfS8CD3k2y5C1X80yspy55zIFNrTq1X7nE5IaztnDP3PmRjqlGMM1iVBG2PwDAikKTOAWjCq0Ek02qHCVm7UOw__";

export default function Engine() {
  return (
    <div>
      {/* Header */}
      <section className="py-20 border-b border-black/10">
        <div className="container">
          <div className="flex items-start gap-6">
            <img src={ICON_ENGINE} alt="Engine" className="w-16 h-16 opacity-80 hidden sm:block" />
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-black/30 uppercase block mb-4">SPEC-ENG-001 / DIAGNOSIS AS A SERVICE</span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Engine</h1>
              <p className="text-lg text-black/60 max-w-2xl leading-relaxed">
                婚活、就活、営業、マッチング——あらゆる対人サービスに「精密診断」を組み込む。<br />
                API / OEM / 共同開発で、診断エンジンを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engine Flow Diagram */}
      <section className="py-12 border-b border-black/10">
        <div className="container">
          <div className="border border-black/10 overflow-hidden">
            <img src={ENGINE_FLOW_IMG} alt="診断エンジンのフロー図" className="w-full h-auto" />
          </div>
          <p className="mt-3 text-xs text-black/30 font-mono text-center">
            テキスト入力 → 文脈変数の適用 → 特性解析 → 処方箋出力
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 grid-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
            <div>
              <span className="spec-label">SPEC-ENG-002</span>
              <h2 className="text-2xl font-bold mt-2">できること</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-3xl">
              <div className="border border-black/10 p-8">
                <span className="font-mono text-xs text-[#E53E3E] tracking-[0.15em] uppercase">CAPABILITY 01</span>
                <h3 className="text-lg font-bold mt-3 mb-3">テキスト分析</h3>
                <p className="text-sm text-black/60 leading-relaxed">
                  自由記述テキストから認知スタイル・価値観・行動傾向を抽出します。定型アンケートでは捉えられない個人差を検出します。
                </p>
              </div>
              <div className="border border-black/10 border-l-0 p-8 sm:border-l">
                <span className="font-mono text-xs text-[#E53E3E] tracking-[0.15em] uppercase">CAPABILITY 02</span>
                <h3 className="text-lg font-bold mt-3 mb-3">文脈チューニング</h3>
                <p className="text-sm text-black/60 leading-relaxed">
                  業界・役割・目的に応じて分析の前提条件を調整します。同じテキストでも、文脈が変われば処方箋は変わります。
                </p>
              </div>
              <div className="border border-black/10 border-l-0 p-8 sm:border-l">
                <span className="font-mono text-xs text-[#E53E3E] tracking-[0.15em] uppercase">CAPABILITY 03</span>
                <h3 className="text-lg font-bold mt-3 mb-3">行動指示の出力</h3>
                <p className="text-sm text-black/60 leading-relaxed">
                  スコアや分類ではなく、「具体的にどう関わるべきか」を出力します。現場で即座に使える指示書形式です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
            <div>
              <span className="spec-label">SPEC-ENG-003</span>
              <h2 className="text-2xl font-bold mt-2">活用例</h2>
            </div>
            <div className="max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {[
                  { label: "SALES", title: "営業", desc: "顧客の意思決定スタイルを分析し、最適な提案アプローチを設計します。" },
                  { label: "MATCHMAKING", title: "婚活・マッチング", desc: "相性の「なぜ」を言語化し、マッチング精度と満足度を向上させます。" },
                  { label: "RECRUITING", title: "採用", desc: "候補者の特性と組織カルチャーの適合度を、面接前に可視化します。" },
                  { label: "EDUCATION", title: "教育", desc: "学習者の認知特性に応じた指導法を自動提案し、教育効果を高めます。" },
                ].map((item) => (
                  <div key={item.label} className="border border-black/10 p-6">
                    <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-black/30">{item.label}</span>
                    <h3 className="text-sm font-bold mt-2 mb-2">{item.title}</h3>
                    <p className="text-xs text-black/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer: 3 Options */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="container">
          <span className="font-mono text-xs tracking-[0.2em] text-white/30 uppercase block mb-2">SPEC-ENG-004</span>
          <h2 className="text-2xl font-bold mb-12">提供形態</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="border border-white/10 p-8">
              <span className="font-mono text-xs text-[#E53E3E] tracking-[0.15em] uppercase">OPTION 01</span>
              <h3 className="text-xl font-bold mt-3 mb-3">API</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                RESTful APIで診断エンジンを呼び出せます。既存システムへの最小工数での統合が可能です。
              </p>
              <ul className="space-y-1 text-xs text-white/40 font-mono">
                <li>— JSON入出力</li>
                <li>— 認証トークン方式</li>
                <li>— SLA 99.9%</li>
              </ul>
            </div>
            <div className="border border-white/10 border-l-0 p-8 md:border-l">
              <span className="font-mono text-xs text-[#E53E3E] tracking-[0.15em] uppercase">OPTION 02</span>
              <h3 className="text-xl font-bold mt-3 mb-3">OEM</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                自社ブランドで診断機能を提供できます。ホワイトラベルでの組み込みに対応しています。
              </p>
              <ul className="space-y-1 text-xs text-white/40 font-mono">
                <li>— UI/UXカスタマイズ</li>
                <li>— ブランディング自由</li>
                <li>— 専用インスタンス</li>
              </ul>
            </div>
            <div className="border border-white/10 border-l-0 p-8 md:border-l">
              <span className="font-mono text-xs text-[#E53E3E] tracking-[0.15em] uppercase">OPTION 03</span>
              <h3 className="text-xl font-bold mt-3 mb-3">共同開発</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                新しい領域への適用を共同で設計・開発します。診断モデルの共同構築も可能です。
              </p>
              <ul className="space-y-1 text-xs text-white/40 font-mono">
                <li>— 領域特化モデル構築</li>
                <li>— データ共有フレームワーク</li>
                <li>— IP共有/ライセンス設計</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 grid-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
            <div>
              <span className="spec-label">SPEC-ENG-005</span>
              <h2 className="text-2xl font-bold mt-2">APIサンプル</h2>
            </div>
            <div className="max-w-3xl">
              <div className="border border-black/10 bg-white p-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E] block mb-4">API RESPONSE SAMPLE</span>
                <pre className="font-mono text-xs text-black/60 leading-relaxed overflow-x-auto">
{`POST /v2/diagnose
Content-Type: application/json

{
  "text": "自由記述テキスト...",
  "context": {
    "domain": "sales",
    "role": "account_executive",
    "objective": "closing_optimization"
  }
}

→ Response 200 OK

{
  "diagnosis_id": "diag-2026-0215-001",
  "subject_profile": {
    "decision_style": "data_driven",
    "risk_tolerance": "moderate",
    "persuasion_receptivity": "logic_first"
  },
  "prescription": {
    "approach": "present_roi_data_before_features",
    "timing": "mid_week_morning",
    "avoid": ["emotional_appeals", "urgency_tactics"],
    "follow_up": "send_comparison_sheet_within_24h"
  },
  "confidence": 0.87
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="container text-center">
          <span className="font-mono text-xs tracking-[0.2em] text-white/30 uppercase block mb-6">SPEC-ENG-CTA</span>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            診断エンジンの導入を検討していますか？
          </h2>
          <p className="text-white/50 font-mono text-sm mb-10 max-w-md mx-auto">
            API / OEM / 共同開発、最適な形態をご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium tracking-wider uppercase no-underline hover:bg-white/90 transition-colors"
          >
            協業・開発の相談をする
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
