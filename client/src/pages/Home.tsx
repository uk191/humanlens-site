/*
 * Home.tsx — HumanLens Official Top Page
 * Design: Swiss Brutalist Technical Manual
 * Hero Lead text is LOCKED — do not modify.
 * Sections: Hero → How it works → Proof → Showcase → Offer → CTA
 */
import { Link } from "wouter";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/X007ofXKt1HtTGUvf3oR8J-img-1_1771095461000_na1fn_aGVyby1ibHVlcHJpbnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L1gwMDdvZlhLdDFIdFRHVXZmM29SOEotaW1nLTFfMTc3MTA5NTQ2MTAwMF9uYTFmbl9hR1Z5YnkxaWJIVmxjSEpwYm5RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UUt-IGIhkcEFlMfrFVhU9etFb53dXcFwO4bcOeS1Ti-Wmz8SUbQDGT7P7lKZfNlXxXOJRlkdJbuAtDIrexR-jxXILEAqFKlDzpLqG8v-XKqAn4qlYVey8GInWLrRyBkZmt5AincnHd60atJ0yRoYCTyNS9Nvp2VfACQPeVjj226crI8MvdBEvh2Klzxf8MPZSXFN~pNdCXoPl0Z-jh1k0MZuLEetuoXAenDL4OdZUOFAEcMCR21Vuda~ShkWTMxjpv8OGwOOSOpo9L3QR4yk3uXp3j2jkOx59D37ND~I7h2vT5Qz65S2cCrM9WLWXClzbhu81ldV-N2FYlPRSm-tKQ__";

const PROOF_MOCK_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/HEhl7M8j3XYX9E5aLQVRW9-img-1_1771132824000_na1fn_cHJvb2YtbW9jay11aQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L0hFaGw3TThqM1hZWDlFNWFMUVZSVzktaW1nLTFfMTc3MTEzMjgyNDAwMF9uYTFmbl9jSEp2YjJZdGJXOWpheTExYVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OO5B~pSoGGzq3xpvgw~UGNR-13DqJlMZgGPw54qua2jJd8C2y4ZGxLwla-whZkxoPsyxMXOn9fjlykpkH5Tlnl8JHNzcxyXM2jQR1um-nm0weucfonm0PAtQrELETNUqpahRhv5yfjykUwLlkZWSeqOhcNZf-KbAJxiiK-B6WpfjQEt8yW9vn9mpY~K3lTLO4e0tziKFx~HNZKY6HJbu~6ETGCgbafl~oyPuNBiWXtRk2n9C-cJkBOIKQxhjOhdZYcEo0vcaNyQ9SEezu80Fqb~x6Uw82K1fp3of0ny86ifq~fwDMIj2T~liFRoq9cqw6jxSJOO1FdUZFxmnR1V32Q__";

const SECTION_DIVIDER = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/HEhl7M8j3XYX9E5aLQVRW9-img-4_1771132826000_na1fn_c2VjdGlvbi1kaXZpZGVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L0hFaGw3TThqM1hZWDlFNWFMUVZSVzktaW1nLTRfMTc3MTEzMjgyNjAwMF9uYTFmbl9jMlZqZEdsdmJpMWthWFpwWkdWeS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WprOMorF1qJVIC3uG-QNiqPr6UKOqOKuWlvJc9p6SOv2rEi536JCzecNO5Ntpi2fa7oEUOl888hV6oyoOeGuGb8~sFmYMeh1ceQlekp~RK3ew3ReEfyTvk1pjNv341PE~nLfxcG6sULQXn-TD0qrLh-lk2XJPJu0p1RP6yMQSioWUupBS2p59Y06bTilHLQfUPijVd56YQPsNBioz9lD9eeFAUJlDdYjdEQtdAaZ2r3-M6S43V30cNN80PaiKo2IDpKfUN3QAF43VLJYlVBTFOWmC~-MHLu~L~g0EKR2EqspTyX3r8twDCtN4qoAsXPGg36eHfKVbCvkjkO8WRW4fw__";

const ICON_TEAMLENS = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/X007ofXKt1HtTGUvf3oR8J_1771095471533_na1fn_aWNvbi10ZWFtbGVucw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L1gwMDdvZlhLdDFIdFRHVXZmM29SOEpfMTc3MTA5NTQ3MTUzM19uYTFmbl9hV052YmkxMFpXRnRiR1Z1Y3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TfZWNTvtCmhAnKIQE4XGH31N4CneLEkFu9Eu6AUSjUapAJefwgX6FtdlCQCIqVTseTgyK2zeUcQHckORAFJTUhArX6TxPoYQRy~VpJwIumyF2eNtIgUOgHH5oGSl6dIxxdLwawt~76n9frny18Cgtg~5b04o71OtMKFyacfZX2m7PFi89BfJ9wMxGTGMScE55pDPZF6hFsERj-Y5ok~sggZXa~47QU4GVrbZtxErjIXOR~Rda~YEA~LCiVee7yzVypFXdkvv95JI4KvyvboZKb3AifsxvlRW2nL55GzlONWhsiE65KjJJLEOVlTe21o2mwJceJG0Y4rH5FIbqgfEyQ__";

const ICON_ENGINE = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/X007ofXKt1HtTGUvf3oR8J_1771095471534_na1fn_aWNvbi1lbmdpbmU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L1gwMDdvZlhLdDFIdFRHVXZmM29SOEpfMTc3MTA5NTQ3MTUzNF9uYTFmbl9hV052YmkxbGJtZHBibVUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aWeoQ~K7z91ojnWWcrgzVwuNIuBU31MPBq07ldJhSHUFV9bc8kth1aqZDG9H0OJGYKLo4ClbtxNjjAOe8ca4G~Sc0~wKwZDpIenIGKJyEkLfB1NS~sbv4gAb6ZxOOlq5S2e5oabq2WQytZ42GtPAQY6urpAZGLEdZmWschXs8Xi9SirItn6oUEZ~eiTlc9kNaWDo3Q~kxPCSGQdyQ7IJQRpZIQs7mqittAgSE67i0hbaoMcCd-dNgzgyr16BBJgkMfS8CD3k2y5C1X80yspy55zIFNrTq1X7nE5IaztnDP3PmRjqlGMM1iVBG2PwDAikKTOAWjCq0Ek02qHCVm7UOw__";

const ICON_KIMISPEC = "https://private-us-east-1.manuscdn.com/sessionFile/s7KkR5DxfpFXAnUqKq1Mjs/sandbox/X007ofXKt1HtTGUvf3oR8J_1771095471534_na1fn_aWNvbi1raW1pc3BlYw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdLa1I1RHhmcEZYQW5VcUtxMU1qcy9zYW5kYm94L1gwMDdvZlhLdDFIdFRHVXZmM29SOEpfMTc3MTA5NTQ3MTUzNF9uYTFmbl9hV052YmkxcmFXMXBjM0JsWXcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CKC9CjtIS7faDIBtvhjkGQr2Uc~Fa~tjyJCpL3qA0Mz2XCGLg0MwRA98WL3ru1-gZogWL85V81EPxHV9QCZc3CeBALo8Bb5PRWheRpXZC404tVtB0tR0IL8TXpaKdREI~6IeCdFHN3eUf9MWGvRojtlggLHECntEwglvOF-mpGmFXLWqhvSiaj4Qt8s9uz8ETQzq~0UiPJ2ZNSENJ1l7~fNR0PPZIVlA15g4Jic23bQ8i7saiQkIFzfrirCDF-JFT3pritCoN2r4FbKkqyB3ieNW9WcBNhyEDeNzE2xUjzG0HM~KU~UhSR8kXP2u0lU3UTUjRxMM66DuEp8pENWvAQ__";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <span className="absolute top-6 left-6 text-white/15 font-mono text-xs">+</span>
        <span className="absolute top-6 right-6 text-white/15 font-mono text-xs">+</span>
        <span className="absolute bottom-6 left-6 text-white/15 font-mono text-xs">+</span>
        <span className="absolute bottom-6 right-6 text-white/15 font-mono text-xs">+</span>

        <div className="container relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-3xl"
          >
            <motion.span variants={fadeUp} className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase block mb-6">
              SPEC-HOME-001 / THE DIAGNOSTIC ENGINE
            </motion.span>

            {/* === HERO LEAD — LOCKED: DO NOT MODIFY === */}
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              サービスの品質は、<br />
              人間理解の解像度で決まる。
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-8 max-w-xl">
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">
                優れた医師が問診で原因を特定するように、<br className="hidden sm:block" />
                私たちはテキストと文脈から、人の内面を分析する。
              </p>
              <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed font-light">
                内面がわかれば、関わり方は設計できる。
              </p>
              <p className="mt-4 text-sm text-white/50 font-mono">
                婚活・教育・組織——あらゆる対人支援を、再現性のある技術に。
              </p>
            </motion.div>
            {/* === END LOCKED === */}

            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium tracking-wider uppercase no-underline hover:bg-white/90 transition-colors"
              >
                協業・開発の相談をする
                <ArrowRight size={16} />
              </Link>
              <a
                href="#proof"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-medium tracking-wider uppercase no-underline hover:bg-white/10 transition-colors"
              >
                出力サンプルを見る
                <ArrowDown size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-24 grid-bg">
        <div className="container">
          <span className="spec-label block mb-2">SPEC-HOME-002</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">仕組み</h2>
          <p className="text-black/50 font-mono text-sm mb-16 max-w-lg">
            テキストから「関わり方の指示書」を生成する、3つのステップ。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="border border-black/10 p-8 relative">
              <span className="font-mono text-xs text-black/30 absolute top-4 right-4">01</span>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E] font-medium">Intake</span>
              <h3 className="text-xl font-bold mt-3 mb-3">問診設計</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                自由記述から、定型アンケートでは見えない"差が出る情報"を引き出す。個人の文脈を捉える問診を設計します。
              </p>
            </div>

            <div className="border border-black/10 border-l-0 p-8 relative md:border-l">
              <span className="font-mono text-xs text-black/30 absolute top-4 right-4">02</span>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E] font-medium">Context</span>
              <h3 className="text-xl font-bold mt-3 mb-3">文脈変数</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                業界・役割・勝ちパターンを前提条件に組み込みます。同じテキストでも、文脈が変われば解釈は変わります。
              </p>
            </div>

            <div className="border border-black/10 border-l-0 p-8 relative md:border-l">
              <span className="font-mono text-xs text-black/30 absolute top-4 right-4">03</span>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E] font-medium">Spec Output</span>
              <h3 className="text-xl font-bold mt-3 mb-3">指示書出力</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                スコアではなく「関わり方の指示書」を出力。誰が読んでも同じ行動が取れる、再現性のある処方箋です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION DIVIDER ========== */}
      <div className="w-full h-16 bg-black flex items-center justify-center overflow-hidden">
        <img src={SECTION_DIVIDER} alt="" className="w-full h-full object-cover opacity-60" />
      </div>

      {/* ========== PROOF ========== */}
      <section id="proof" className="py-24 bg-[#0A0A0A] text-white">
        <div className="container">
          <span className="font-mono text-xs tracking-[0.2em] text-white/30 uppercase block mb-2">SPEC-HOME-003</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">出力例</h2>
          <p className="text-white/40 font-mono text-sm mb-16 max-w-lg">
            科学は言葉ではなく、証拠で示す。実際の出力サンプルとスキーマをご覧ください。
          </p>

          {/* Proof Mock Image */}
          <div className="mb-12 border border-white/10 overflow-hidden">
            <img src={PROOF_MOCK_IMG} alt="診断レポートのモックアップ" className="w-full h-auto opacity-90" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Spec Output Sample */}
            <div className="border border-white/10 p-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E] mb-4 block">OUTPUT SAMPLE</span>
              <div className="font-mono text-sm leading-relaxed text-white/70 space-y-3">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-white/40 text-xs">SUBJECT:</span>
                  <span className="ml-2 text-white/80">Sample-A（営業マネージャー / IT業界 / 3年目）</span>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <span className="text-white/40 text-xs">COGNITIVE_STYLE:</span>
                  <span className="ml-2 text-white/80">構造化思考 / 高速判断型</span>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <span className="text-white/40 text-xs">COMMUNICATION:</span>
                  <span className="ml-2 text-white/80">結論先行 / 根拠要求型</span>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <span className="text-white/40 text-xs">MANAGEMENT_RX:</span>
                  <span className="ml-2 text-white/80">「週次1on1では結論から入り、背景は求められた時のみ。<br/>目標設定は数値KPIを本人に設計させる。」</span>
                </div>
                <div>
                  <span className="text-white/40 text-xs">RISK_FLAG:</span>
                  <span className="ml-2 text-white/80">裁量制限時のモチベーション低下リスク — 中</span>
                </div>
              </div>
            </div>

            {/* Schema Example */}
            <div className="border border-white/10 p-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E] mb-4 block">SCHEMA EXAMPLE</span>
              <pre className="font-mono text-xs leading-relaxed text-white/60 overflow-x-auto">
{`{
  "spec_version": "2.1",
  "subject_id": "sample-a-2026",
  "context": {
    "industry": "IT",
    "role": "sales_manager",
    "tenure_years": 3
  },
  "diagnosis": {
    "cognitive_style": "structured_fast",
    "communication": "conclusion_first",
    "motivation_driver": "autonomy",
    "stress_pattern": "control_loss"
  },
  "prescription": {
    "meeting_style": "conclusion_first",
    "goal_setting": "self_designed_kpi",
    "feedback_freq": "weekly",
    "risk_mitigation": [
      "ensure_decision_authority",
      "avoid_micromanagement"
    ]
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SHOWCASE ========== */}
      <section className="py-24 grid-bg">
        <div className="container">
          <span className="spec-label block mb-2">SPEC-HOME-004</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">応用領域</h2>
          <p className="text-black/50 font-mono text-sm mb-16 max-w-lg">
            診断技術は、あらゆる対人支援の現場に応用できます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/teamlens" className="group block border border-black/10 p-8 hover:border-black/30 transition-colors no-underline text-inherit">
              <img src={ICON_TEAMLENS} alt="TeamLens" className="w-16 h-16 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E]">PRODUCT</span>
              <h3 className="text-xl font-bold mt-2 mb-3">TeamLens</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                現場翻訳型・人材分析パッケージ。チームの「内面」を解析し、マネージャーが明日から使える「運用指示書」を発行します。
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-xs font-mono text-black/40 group-hover:text-black transition-colors">
                詳しく見る <ArrowRight size={12} />
              </span>
            </Link>

            <Link href="/kimi-spec" className="group block border border-black/10 p-8 hover:border-black/30 transition-colors no-underline text-inherit">
              <img src={ICON_KIMISPEC} alt="Kimi-Spec" className="w-16 h-16 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E]">ORIGIN</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Kimi-Spec</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                「困った子」なんていない。行動の裏にある認知特性を翻訳し、その子だけの学びの地図を描く——HumanLens診断技術の原点。
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-xs font-mono text-black/40 group-hover:text-black transition-colors">
                詳しく見る <ArrowRight size={12} />
              </span>
            </Link>

            <Link href="/engine" className="group block border border-black/10 p-8 hover:border-black/30 transition-colors no-underline text-inherit">
              <img src={ICON_ENGINE} alt="Engine" className="w-16 h-16 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E]">ENGINE</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Engine OEM</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                婚活・採用・営業・マッチングへの横展開。API / OEM / 共同開発で診断エンジンを組み込めます。
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-xs font-mono text-black/40 group-hover:text-black transition-colors">
                詳しく見る <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== OFFER ========== */}
      <section className="py-24">
        <div className="container">
          <span className="spec-label block mb-2">SPEC-HOME-005</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">提供メニュー</h2>
          <p className="text-black/50 font-mono text-sm mb-16 max-w-lg">
            HRも教育も、すべて診断技術の応用例です。
          </p>

          <div className="space-y-0">
            <div className="border border-black/10 p-8 flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <span className="font-mono text-4xl font-bold text-black/10">01</span>
              </div>
              <div className="flex-1">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E]">PRODUCT</span>
                <h3 className="text-xl font-bold mt-1 mb-2">TeamLens — 現場翻訳型・人材分析パッケージ</h3>
                <p className="text-sm text-black/60 leading-relaxed mb-4">
                  「協調性が高い」を「彼には数字より手順を見せろ」に翻訳。コンサルタント品質の行動指示を、ソフトウェアの低コストで全マネージャーに届けます。
                </p>
                <Link href="/teamlens" className="inline-flex items-center gap-2 text-sm font-mono text-black hover:text-[#E53E3E] transition-colors no-underline">
                  TeamLensのPoCを設計する <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="border border-black/10 border-t-0 p-8 flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <span className="font-mono text-4xl font-bold text-black/10">02</span>
              </div>
              <div className="flex-1">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E]">ENGINE OEM</span>
                <h3 className="text-xl font-bold mt-1 mb-2">Diagnosis as a Service — 診断エンジンの提供・協業</h3>
                <p className="text-sm text-black/60 leading-relaxed mb-4">
                  婚活、就活、営業、マッチングなどに「精密診断」をAPI / OEM / 共同開発で組み込めます。
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-mono text-black hover:text-[#E53E3E] transition-colors no-underline">
                  協業・導入を相談する <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="border border-black/10 border-t-0 p-8 flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <span className="font-mono text-4xl font-bold text-black/10">03</span>
              </div>
              <div className="flex-1">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E53E3E]">ORIGIN</span>
                <h3 className="text-xl font-bold mt-1 mb-2">Kimi-Spec — 学習特性分析・戦略生成</h3>
                <p className="text-sm text-black/60 leading-relaxed mb-4">
                  「困った子」の行動を認知特性に翻訳し、その子だけの学びの地図を描く。教育機関・塾へのシステム提供と共同開発を行っています。
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-mono text-black hover:text-[#E53E3E] transition-colors no-underline">
                  教育領域で相談する <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="container text-center">
          <span className="font-mono text-xs tracking-[0.2em] text-white/30 uppercase block mb-6">SPEC-HOME-CTA</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            診断技術の導入を検討していますか？
          </h2>
          <p className="text-white/50 font-mono text-sm mb-10 max-w-md mx-auto">
            PoC設計から協業開発まで、まずはお気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium tracking-wider uppercase no-underline hover:bg-white/90 transition-colors"
          >
            お問い合わせ
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
