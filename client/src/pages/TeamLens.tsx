/**
 * TeamLens — Product Introduction Page
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

const HERO_VISUAL = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/oFBDwnzM9tXpehALS5GgTp-img-1_1771138119000_na1fn_dGVhbWxlbnMtaGVyby12aXN1YWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L29GQkR3bnpNOXRYcGVoQUxTNUdnVHAtaW1nLTFfMTc3MTEzODExOTAwMF9uYTFmbl9kR1ZoYld4bGJuTXRhR1Z5YnkxMmFYTjFZV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iCBPYd0JprHswUbbC1KxypRNC--ltFfH44kiMGg6560-nIhAN2nYGr5~2T5~fskTUOKd8z~z1H689huliP9a-pG5TImG-rXvE1lWbGd0bFt5HjYuplzzHwQPwZZGs7y5HDjh0Qrp1lOz9RoW-fHaky-moFJhoSx96hNlvZho-D9A3I2AcFW7ydov17N-4FNzJu28tHU4uWy0WXmzGSut6hxAVwOFEILkfZ89MNhDNhGBbxva~VKZKv4mX3DOU~Gy0npqysuEgY81jAmQZ0gN6~tTjHzeVkrMiwstc-WDAu3BkPlhnjgJf36RdizyawqXTUfZeE1By7WHIJSli7hm2g__";

// PDF P19: Dual Report System — The Guide（マネージャー用）& Self Awareness（本人用）
const DUAL_REPORT = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044121217/wZRdJMQPbTisSXEE.png";
// PDF P20: The Mastery Report — 完全攻略マニュアル（3冊構成）
const MASTERY_REPORT = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663044121217/OfgbbiZEgCEcWVKL.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function TeamLens() {
  return (
    <div className="min-h-screen">

      {/* ========== HERO ========== */}
      <section className="relative min-h-[90vh] flex items-end pb-16 md:pb-24 overflow-hidden">
        {/* Background image — right-aligned, faded */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-[70%] h-full opacity-[0.08]">
            <img
              src={HERO_VISUAL}
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
            TeamLens
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-black/60 leading-relaxed max-w-2xl mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            適性検査の「パラメータ」を、<br />
            現場が明日使える「行動指示」に翻訳する。
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
              「協調性が高い」では、<br />
              何も動かせない。
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
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
                BEFORE — 既存の適性検査
              </span>
              <div className="space-y-5">
                <p className="font-mono text-sm text-black/40 leading-relaxed">
                  「協調性が高い」
                </p>
                <p className="font-mono text-sm text-black/40 leading-relaxed">
                  「慎重性：B」
                </p>
                <p className="font-mono text-sm text-black/40 leading-relaxed">
                  「外向性スコア：72」
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-black/5">
                <p className="text-sm text-black/40 italic">
                  現場マネージャーの反応：「で、どうすればいいの？」
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
                AFTER — TEAMLENSの出力
              </span>
              <div className="space-y-5">
                <p className="text-sm text-black/80 leading-relaxed">
                  「彼は数字より<span className="font-bold">手順</span>を重視する。まず工程を見せて合意せよ」
                </p>
                <p className="text-sm text-black/80 leading-relaxed">
                  「このタイプに<span className="font-bold">『なぜ』と問うのは厳禁</span>。萎縮する。『次はどうする？』に変えよ」
                </p>
                <p className="text-sm text-black/80 leading-relaxed">
                  「信頼を得るキラーフレーズ：<span className="font-bold">『君にしか頼めない』</span>」
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-black/10">
                <p className="text-sm text-black/60">
                  → 明日そのまま使える「行動指示」
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
            データの解釈を現場任せにしない。1on1のトークスクリプト、タスクの渡し方、回避すべきNGワードまで——コンサルタント品質の行動指示を、ソフトウェアの低コストで全マネージャーに届けます。
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
                    src={DUAL_REPORT}
                    alt="TeamLens Dual Report System — The Guide & Self Awareness"
                    className="w-full rounded-sm shadow-2xl shadow-white/5"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-[#E53E3E] text-white font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
                    DUAL REPORT
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={MASTERY_REPORT}
                    alt="TeamLens Mastery Report — 完全攻略マニュアル"
                    className="w-full rounded-sm shadow-2xl shadow-white/5"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-white/10 text-white font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 backdrop-blur-sm">
                    MASTERY REPORT
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
                届くのは「分析レポート」ではなく、<br />
                「運用指示書」。
              </h2>

              <div className="space-y-8">
                <div className="border-l-2 border-white/20 pl-6">
                  <h3 className="text-sm font-mono tracking-wide uppercase text-white/50 mb-2">マネージャー用</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    場面ごとの声掛け台本、離職リスクの予兆警告、やってはいけないNG行動リスト。30パターン以上の具体的な行動指針をレポート形式で納品します。
                  </p>
                </div>

                <div className="border-l-2 border-white/20 pl-6">
                  <h3 className="text-sm font-mono tracking-wide uppercase text-white/50 mb-2">本人用</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    自分のモチベーションの源泉、ストレスを感じる状況の言語化、自己認識と他者認識のギャップ。自己理解のためのフィードバック・レポート。
                  </p>
                </div>

                <div className="border-l-2 border-[#E53E3E]/40 pl-6">
                  <h3 className="text-sm font-mono tracking-wide uppercase text-[#E53E3E] mb-2">BONUS: TEAM INSIGHT</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    チーム全体のバランスと文脈とのズレを可視化する「組織分析」。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS — Minimal ========== */}
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
                title: "記述式の設問に回答",
                desc: "選択式ではなく、心理学の投影法を応用した記述式。回答者の思考プロセスそのものから深層心理を抽出します。所要時間は約15分。",
              },
              {
                num: "02",
                label: "ENGINE",
                title: "推論AIが文脈を演算",
                desc: "個人の特性に「部署・上司・企業文化」という環境変数を掛け合わせ、その文脈における最適解を動的に生成します。",
              },
              {
                num: "03",
                label: "OUTPUT",
                title: "行動指示書を納品",
                desc: "解釈不要。マネージャーが明日そのまま使えるレベルの具体的な運用指示書を、PDF形式でお届けします。",
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

      {/* ========== PRICING ========== */}
      <section className="py-24 md:py-32 border-t border-black/10 grid-bg">
        <div className="container">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/30 block mb-4">
                PRICING
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
                料金
              </h2>
            </motion.div>

            <motion.div
              className="border border-black/10 bg-white p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={1}
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-bold tracking-tight">¥10,000</span>
                <span className="text-black/40 font-mono text-sm">（税別）/ 1名</span>
              </div>
              <p className="text-sm text-black/40 mb-8">
                初期費用なし。月額固定費なし。分析する人数分の費用だけ。
              </p>

              <div className="border-t border-black/10 pt-6">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/30 mb-4">
                  ALL INCLUDED
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "投影法サーベイの実施",
                    "マネージャー向け運用指示書",
                    "本人向けフィードバック・レポート",
                    "チーム全体の組織分析（Team Insight）",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-[#E53E3E] mt-0.5 text-xs">—</span>
                      <span className="text-sm text-black/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.p
              className="mt-6 text-xs text-black/30 font-mono"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={2}
            >
              ※ コンサルプロセスをAIに置き換えることで、1人あたり1万円を実現。
              採用ミスマッチ1名の回避で、導入コストの約15倍のリターン。
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
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
              GET STARTED
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              まずは5名から。
            </h2>
            <p className="text-white/40 text-base sm:text-lg max-w-lg mx-auto mb-12">
              最小5名からPoCを実施できます。<br />
              まずはチームの一部で、出力の質を確かめてください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold text-sm tracking-wide hover:bg-white/90 transition-colors no-underline"
              >
                PoCを申し込む <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
