/*
 * Releases.tsx — 更新履歴
 * Design: Swiss Brutalist Technical Manual
 * Template-based: タイトル/日付/本文/カテゴリで増やせる
 */

const RELEASES = [
  {
    id: "rel-003",
    date: "2026-02-15",
    category: "PRODUCT",
    title: "TeamLens PoC 受付開始",
    body: "組織領域の実装モデル「TeamLens」のPoC（概念実証）受付を開始しました。5名分の診断と運用指示書出力を ¥10,000 で提供します。業種・規模を問わず、お気軽にお問い合わせください。",
  },
  {
    id: "rel-002",
    date: "2026-02-15",
    category: "ENGINE",
    title: "Engine OEM / API パートナー募集開始",
    body: "診断エンジンのAPI提供・OEM・共同開発のパートナーを募集します。婚活、採用、営業、マッチングなど、対人サービスへの診断技術の組み込みに関心のある企業様はお問い合わせください。",
  },
  {
    id: "rel-001",
    date: "2026-02-15",
    category: "GENERAL",
    title: "HumanLens 公式サイト公開",
    body: "HumanLensの公式サイトを公開しました。診断技術（The Diagnostic Engine）を中核に、組織・教育・対人支援の各領域への応用を紹介しています。",
  },
];

export default function Releases() {
  return (
    <div>
      {/* Header */}
      <section className="py-20 border-b border-black/10">
        <div className="container">
          <span className="font-mono text-xs tracking-[0.2em] text-black/30 uppercase block mb-4">SPEC-REL-001 / CHANGELOG</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Releases</h1>
          <p className="text-lg text-black/60 max-w-2xl leading-relaxed">
            更新履歴とお知らせ。
          </p>
        </div>
      </section>

      {/* Release List */}
      <section className="py-20 grid-bg">
        <div className="container">
          <div className="max-w-3xl">
            {RELEASES.map((release, index) => (
              <article
                key={release.id}
                className={`py-10 ${index > 0 ? "border-t border-black/10" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="font-mono text-xs text-black/30">{release.date}</span>
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#E53E3E]">{release.category}</span>
                  <span className="font-mono text-xs text-black/20">{release.id}</span>
                </div>
                <h2 className="text-xl font-bold mb-3">{release.title}</h2>
                <p className="text-sm text-black/60 leading-relaxed">{release.body}</p>
              </article>
            ))}
          </div>

          {/* Template note */}
          <div className="mt-16 pt-8 border-t border-black/10 max-w-3xl">
            <span className="spec-label block mb-2">NOTE</span>
            <p className="text-xs text-black/30 font-mono leading-relaxed">
              新しいリリースを追加するには、RELEASES配列に新しいオブジェクトを追加してください。<br />
              形式: {"{ id, date, category, title, body }"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
