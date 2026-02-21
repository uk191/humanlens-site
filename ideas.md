# HumanLens 公式サイト デザインブレインストーミング

## 要件サマリー
- トーン：Architect, Structure, Logic, Black & White
- ビジュアル：グリッド線、枠、タイポ、設計図（Blueprint）感
- 装飾は排除。図解・番号・ラベル（SPEC / CONTEXT / OUTPUT）で魅せる
- 画像は極小。軽量SVG（抽象・設計図モチーフ）
- 余白は広め、文字階層で勝つ

---

<response>
## Idea 1: Swiss Brutalist Technical Manual
<text>
**Design Movement**: スイスタイポグラフィ × ブルータリズム × テクニカルマニュアル

**Core Principles**:
1. 厳格なグリッドシステム — 12カラムグリッドを可視化し、設計図のような構造を露出させる
2. タイポグラフィが主役 — 文字サイズの極端なコントラスト（H1: 80px / body: 16px）で階層を作る
3. 機能が装飾 — ラベル、番号、座標表記がそのままビジュアルになる

**Color Philosophy**:
- 純粋な白（#FFFFFF）と黒（#0A0A0A）の2色のみ
- アクセントは「赤い注釈マーク」（#E53E3E）— 設計図の赤ペン校正のメタファー
- グレーは1段階のみ（#6B6B6B）— 補足テキスト用

**Layout Paradigm**:
- 非対称2カラム — 左に大きなラベル/番号、右にコンテンツ
- セクション間は太い水平線で区切る（設計図の折り目）
- ページ端にマージンノート（座標やセクション番号）を配置

**Signature Elements**:
1. 「SPEC-001」のような仕様書番号がセクションヘッダーに付く
2. 角に十字マーク（+）のトンボ印刷マーク
3. 点線のグリッドが背景に薄く見える

**Interaction Philosophy**:
- ホバーで要素の「座標」がツールチップ表示
- スクロールで左マージンの番号がカウントアップ
- CTAボタンは枠線のみ、ホバーで反転（白→黒）

**Animation**:
- ページロード時にグリッド線が描画される（0.5s）
- セクション進入時にテキストが左からスライドイン
- 控えめで機械的な動き（イージングはlinearに近い）

**Typography System**:
- H1-H3: Space Grotesk（幾何学的サンセリフ）
- Body: IBM Plex Mono（モノスペース — コード/仕様書感）
- ラベル: IBM Plex Sans Condensed（圧縮サンセリフ）
</text>
<probability>0.07</probability>
</response>

<response>
## Idea 2: Architectural Blueprint Studio
<text>
**Design Movement**: 建築図面 × ディーター・ラムス × 研究論文

**Core Principles**:
1. 図面としてのレイアウト — ページ全体が一枚の設計図に見える
2. 注釈が語る — 矢印、引き出し線、ラベルで情報を伝える
3. 余白が呼吸する — 情報密度を下げ、各要素に十分な空間を与える

**Color Philosophy**:
- ベース：オフホワイト（#F5F3EF）— 製図用紙の色
- テキスト：ダークチャコール（#1A1A1A）
- 図面線：ミディアムグレー（#999999）
- アクセント：ブループリントブルー（#2B4C7E）— 青焼きのメタファー、ただし控えめに

**Layout Paradigm**:
- フルワイドキャンバス — ページ全体が一枚の図面
- コンテンツは「図面枠」（title block）内に配置
- 右下に常に「図面情報ブロック」（ページ名、バージョン、日付）

**Signature Elements**:
1. 引き出し線（leader line）で要素を注釈する
2. 図面枠（border with title block）がページを囲む
3. 寸法線スタイルのセパレーター

**Interaction Philosophy**:
- ホバーで「寸法線」が現れ、要素間の関係を示す
- スクロールで図面が展開していく感覚
- フォーム入力欄は手書き風の下線

**Animation**:
- 線が描画されるSVGアニメーション（stroke-dasharray）
- セクションがフェードインではなく「描かれる」
- 非常にゆっくり、精密な動き

**Typography System**:
- H1-H3: DM Sans（クリーンで建築的）
- Body: Source Serif 4（読みやすいセリフ — 論文感）
- ラベル/注釈: JetBrains Mono（モノスペース — 図面の寸法表記）
</text>
<probability>0.05</probability>
</response>

<response>
## Idea 3: Diagnostic Instrument Panel
<text>
**Design Movement**: 計器パネル × 医療機器UI × ミニマルテクノ

**Core Principles**:
1. 計測器としてのUI — データの読み取りやすさが最優先
2. セグメント化 — 情報を明確なブロックに分割し、各ブロックにIDを付与
3. 静謐な精密さ — 派手さゼロ、しかし隅々まで設計されている

**Color Philosophy**:
- 背景：ほぼ白（#FAFAFA）
- テキスト：真黒（#000000）
- 区切り線：薄グレー（#E0E0E0）
- ステータスインジケーター：グリーン（#00C853）— 診断の「正常」を示す唯一の色
- エラー/注意：アンバー（#FFB300）

**Layout Paradigm**:
- カード不使用 — 代わりに細い罫線で区画を分ける
- 左揃え統一 — 全要素が同じ左マージンから始まる
- 垂直リズム — 8pxグリッドを厳守

**Signature Elements**:
1. セクションIDバッジ（「01」「02」のような番号が左上に）
2. 細い水平線と垂直線で作るグリッドフレーム
3. ステータスドット（●）で状態を示す

**Interaction Philosophy**:
- ホバーで要素が微かにハイライト（背景が0.5%暗くなる）
- クリック/タップのフィードバックは最小限だが確実
- フォームはインライン展開（ページ遷移なし）

**Animation**:
- ほぼなし — 計器は動かない
- 唯一の動き：ページ遷移時のフェード（200ms）
- スクロール連動アニメーションは一切なし

**Typography System**:
- H1-H3: Inter Tight（タイトなプロポーション）
- Body: Noto Sans JP + Inter（日英混植の最適解）
- 番号/ラベル: Space Mono（等幅 — 計器の数値表示）
</text>
<probability>0.04</probability>
</response>

---

## 選定：Idea 1 — Swiss Brutalist Technical Manual

**選定理由**：
指示書の「設計図感」「ラベルで魅せる」「タイポグラフィ重視」「B&W」という要件に最も忠実。
スイスタイポグラフィの厳格さとブルータリズムの生々しさが、「診断エンジン」という技術的な本質を最も正確に表現する。
仕様書番号やトンボマークといったシグネチャー要素が、「研究所/設計事務所」の世界観を自然に構築する。
