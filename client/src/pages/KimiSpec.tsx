/**
 * KimiSpec — Product Introduction Page
 *
 * Design: Swiss Brutalist Technical Manual
 * Philosophy: "再現" ではなく "表現"。訪問者が掴むべきは3つだけ。
 *   1. これは何か
 *   2. なぜ違うのか
 *   3. どう始めるか
 *
 * Palette: #FFFFFF / #0A0A0A / accent #E53E3E
 * Fonts: Space Grotesk (heading) + IBM Plex Mono (mono)
 */

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "wouter";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/h8VP7CYPn7zcxAKen3L9To-img-1_1771150903000_na1fn_a2ltaXNwZWMtaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L2g4VlA3Q1lQbjd6Y3hBS2VuM0w5VG8taW1nLTFfMTc3MTE1MDkwMzAwMF9uYTFmbl9hMmx0YVhOd1pXTXRhR1Z5YncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qxtIzAwK4RgyGBaU2HCnXgMo0bEnjhBBBHBFuY~tkKZVUaBJ0QU0fKcxLiiDliapn-UHK3MONs63BloEDJzCr9XJO9ztJNBN8xyivS7w0OHH43DOCLxnIdVmxRdZntc4MrIyPfmd7SSFs66yvUBMOMmnnjnK8O-iU6Rt2g~IqIcL59VMwZqFscaXMzENgo2hrVMFi8xEWd6MUA-fT3MNGD9lqaP3ykGXrnJejjJ2eHiWl4cu7Bh-xwCJIdW29jX436zzn7aDA-bGFwRDuAH4rmEeNOAe~d-hLJFyyDIYD3V~6Q8NS3EA~RZ2dRv-o~3JvvZcSYZwXpMwYiLzWz1NBA__";

// PDF P10: LCA分析フロー — 選択肢を与えない → 多層レイヤー解析 → オーダーメイドの分析結果 + 親子クロス分析レポートモック
const LCA_FLOW = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044121217/SIyiaVyIoHwOhkpY.png";
// PDF P11: IES — DOs & DON'Tsレポート + 目標達成ロードマップのiPadモック
const IES_REPORT = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044121217/YWTsSLbDiciCoKFS.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function KimiSpec() {
  return (
    <div className="min-h-screen">

      {/* ========== HERO ========== */}
      <section className="relative min-h-[90vh] flex items-end pb-16 md:pb-24 overflow-hidden">
        {/* Background image — right-aligned, faded */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-[70%] h-full opacity-[0.08]">
            <img
              src={HERO_IMG}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E] block mb-6">
              PRODUCT
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Kimi-Spec
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-black/60 leading-relaxed max-w-2xl mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            「困った子」なんていない。<br />
            困っている子の声を、翻訳する。
          </motion.p>

          <motion.div
            className="flex items-center gap-2 text-black/30 font-mono text-xs"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            <ArrowDown size={14} />
            SCROLL
          </motion.div>
        </div>
      </section>

      {/* ========== THE SHIFT — Before / After ========== */}
      <section className="py-24 md:py-32 border-t border-black/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="mb-16 md:mb-24"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/30 block mb-4">
              THE SHIFT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
              「すぐ投げ出す子」の裏側に、<br />
              何が見えるか。
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* BEFORE */}
            <motion.div
              className="p-8 md:p-12 border border-black/10 bg-black/[0.02]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/30 block mb-8">
                BEFORE — 大人のまなざし
              </span>
              <div className="space-y-5">
                <p className="font-mono text-sm text-black/40 leading-relaxed">
                  「集中力がない」
                </p>
                <p className="font-mono text-sm text-black/40 leading-relaxed">
                  「すぐ投げ出す」
                </p>
                <p className="font-mono text-sm text-black/40 leading-relaxed">
                  「指示に従わない」
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-black/5">
                <p className="text-sm text-black/40 italic">
                  教室の反応：「困った子ですね」
                </p>
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div
              className="p-8 md:p-12 border border-black/10 bg-white relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={1}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#E53E3E]" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#E53E3E] block mb-8">
                AFTER — KIMI-SPECのレンズ
              </span>
              <div className="space-y-5">
                <p className="text-sm text-black/80 leading-relaxed">
                  「失敗への恐怖心が極めて高い。<span className="font-bold">理想が高い証拠</span>」
                </p>
                <p className="text-sm text-black/80 leading-relaxed">
                  「耳より目からの情報に強い。<span className="font-bold">視覚教材に切り替えよ</span>」
                </p>
                <p className="text-sm text-black/80 leading-relaxed">
                  「納得しないと動けないタイプ。<span className="font-bold">自己決定の余地をつくれ</span>」
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-black/10">
                <p className="text-sm text-black/60">
                  → 行動の裏にある認知特性を翻訳し、具体的な対応策を提示
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="mt-12 text-base sm:text-lg text-black/50 leading-relaxed max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={2}
          >
            怠慢ではなく防衛本能。反抗ではなくこだわりの表出。Kimi-Specは「問題行動」のラベルを剥がし、その子固有の認知特性と最適な学習環境を、テンプレートなしの完全生成で描き出します。
          </motion.p>
        </div>
      </section>

      {/* ========== WHAT YOU GET ========== */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — Report images from PDF */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={0}
            >
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src={LCA_FLOW}
                    alt="Kimi-Spec LCA分析フロー — 選択肢を与えない→多層レイヤー解析→オーダーメイド分析結果"
                    className="w-full rounded-sm shadow-2xl shadow-white/5"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-[#E53E3E] text-white font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
                    LCA ANALYSIS
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={IES_REPORT}
                    alt="Kimi-Spec IES — DOs & DON'Tsレポート + 目標達成ロードマップ"
                    className="w-full rounded-sm shadow-2xl shadow-white/5"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-white/10 text-white font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 backdrop-blur-sm">
                    IES STRATEGY
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={1}
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 block mb-4">
                DELIVERABLE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">
                届くのは「診断結果」ではなく、<br />
                「その子だけの地図」。
              </h2>

              <div className="space-y-8">
                <div className="border-l-2 border-white/20 pl-6">
                  <h3 className="text-sm font-mono tracking-wide uppercase text-white/50 mb-2">本人用レポート</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    「協調性がない」を「ロジック・ビルダー」に。ネガティブな評価をポジティブな特性として再定義し、自己認識を書き換えます。
                  </p>
                </div>

                <div className="border-l-2 border-white/20 pl-6">
                  <h3 className="text-sm font-mono tracking-wide uppercase text-white/50 mb-2">保護者用レポート</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    不可解な行動の「理由」を解明し、家庭ですぐ使える具体的な接し方——DOs & DON'Tsを提示します。
                  </p>
                </div>

                <div className="border-l-2 border-[#E53E3E]/40 pl-6">
                  <h3 className="text-sm font-mono tracking-wide uppercase text-[#E53E3E] mb-2">CROSS ANALYSIS</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    親子それぞれの認知特性を突き合わせ、「思い込み」と「特性」のミスマッチを可視化。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-24 md:py-32 border-t border-black/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="mb-16"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/30 block mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              仕組みは、3ステップ。
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                num: "01",
                label: "INPUT",
                title: "親子で記述式の設問に回答",
                desc: "選択式ではなく、心理学の投影法を応用した自由記述。「何を書いたか」だけでなく「どう書いたか」「何を書かなかったか」まで読み解きます。",
              },
              {
                num: "02",
                label: "ENGINE",
                title: "4つのAIエンジンが連動",
                desc: "学習特性分析、個別教育戦略、最適化教材、伴走支援——4つのエンジンがループし、「今のその子」に最適な環境を導き出します。",
              },
              {
                num: "03",
                label: "OUTPUT",
                title: "完全生成のレポートを納品",
                desc: "35人いれば35通り。テンプレート不使用。記述から本質を読み解き、すべての文章をゼロから生成します。",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                className="p-8 md:p-10 border border-black/10 relative group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
              >
                <span className="font-mono text-6xl font-bold text-black/[0.04] absolute top-4 right-6">
                  {step.num}
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#E53E3E] block mb-6">
                  {step.label}
                </span>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-black/50 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BEYOND DIAGNOSIS — IES ========== */}
      <section className="py-24 md:py-32 border-t border-black/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="mb-16 md:mb-20"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/30 block mb-4">
              BEYOND DIAGNOSIS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
              分析で終わらない。<br />
              戦略まで、生成する。
            </h2>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-black/50 leading-relaxed max-w-3xl mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
          >
            Kimi-Specの出力は「レポート」で終わりません。分析結果は自動的に<span className="text-black/80 font-bold">IES（Individual Education Strategy）</span>へ接続され、その子専用の教育戦略が生成されます。「何を教えるか」のリストではなく、「どうすればその子の脳に定着するか」を定義する——コーチのための作戦書です。
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl">
            {/* Left — 戦略の中身 */}
            <motion.div
              className="p-8 md:p-10 border border-black/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#E53E3E] block mb-6">
                IES が生成するもの
              </span>
              <div className="space-y-4">
                {[
                  { label: "役割の定義", desc: "コーチが演じるべきスタンスを指定" },
                  { label: "行動原理解析", desc: "正負のモチベーションの構造を解明" },
                  { label: "成長ロードマップ", desc: "短・中・長期の行動・思考の変化目標" },
                  { label: "DOs & DON'Ts", desc: "やるべきこと、絶対にやってはいけないこと" },
                  { label: "教材戦略", desc: "脳の特性に合わせた入力経路と興味の接続点" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#E53E3E] mt-0.5 text-xs flex-shrink-0">—</span>
                    <div>
                      <span className="text-sm font-bold">{item.label}</span>
                      <span className="text-sm text-black/40 ml-2">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — 実例 */}
            <motion.div
              className="p-8 md:p-10 border border-black/10 bg-black/[0.02] relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={1}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#E53E3E]" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/30 block mb-6">
                使用例 — IESが変えた教室
              </span>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-black/80 leading-relaxed">
                    「聴覚的短期記憶」が弱い生徒。IESの指示：<span className="font-bold">弱点克服を禁止し、強み一点突破に切り替えよ</span>。
                  </p>
                  <p className="text-xs text-black/40 font-mono mt-2">
                    → 保護者の声：「成功体験が、息子を変えました。」
                  </p>
                </div>
                <div className="border-t border-black/5 pt-6">
                  <p className="text-sm text-black/80 leading-relaxed">
                    「文字情報」への拒絶反応、高い「美的感性」。IESの指示：<span className="font-bold">HipHopとバスケを数学・英語の解説に採用せよ</span>。
                  </p>
                  <p className="text-xs text-black/40 font-mono mt-2">
                    → 生徒の声：「初めて『学ぶことの楽しさ』がわかりました。」
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="mt-8 text-xs text-black/30 font-mono max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={2}
          >
            ※ IESは完成された戦略を一方的に渡すものではありません。コーチの「気づき」をAIが吸収し、次回に向けて地図を書き換える——「人」と「システム」が相互補完する循環構造です。
          </motion.p>
        </div>
      </section>

      {/* ========== VISION + CTA ========== */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 block mb-6">
              VISION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              「評価」の定規を捨て、<br />
              「発見」のレンズを。
            </h2>
            <p className="text-white/40 text-base sm:text-lg max-w-xl mx-auto mb-4">
              規格外の個性は、エラーではありません。<br />
              磨けば光る、独自の「スペック」です。
            </p>
            <p className="text-white/25 text-sm font-mono max-w-md mx-auto mb-12">
              教育機関・塾へのシステム提供、共同開発、<br />
              カリキュラム設計支援を行っています。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold text-sm tracking-wide hover:bg-white/90 transition-colors no-underline"
              >
                導入を相談する <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
