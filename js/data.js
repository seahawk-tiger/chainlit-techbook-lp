// CHAINLIT TECHBOOK LP — Site Data
// All text content is defined here. Edit this file to update copy.

window.SITE_DATA = {

  // ===== Meta =====
  meta: {
    title: 'CHAINLIT TECHBOOK — Python+ChainlitでAIアプリ開発',
    description: 'Chainlitをテーマに有志9人が集まった技術書同人誌「CHAINLIT TECHBOOK」の特設ページです。',
    ogImage: 'assets/images/ogp.png'
  },

  // ===== Navbar =====
  navbar: {
    logo: 'CHAINLIT TECHBOOK',
    links: [],
    ctaPrimary: {
      label: '技術書典で購入',
      url: 'https://techbookfest.org/product/sBdZcJVCRNLEy9V5cimPK4'
    },
    ctaSecondary: {
      label: 'BOOTHで購入',
      url: '#',
      disabled: true,
      hidden: true
    }
  },

  // ===== Hero =====
  hero: {
    title: 'CHAINLIT<br>TECHBOOK',
    subtitle: 'Python+ChainlitでAIアプリ開発',
    copy: '基本から実践、そして遊びへ。<br>Chainlitの「できること」がわかる一冊。',
    ctaPrimary: {
      label: '技術書典で購入',
      url: 'https://techbookfest.org/product/sBdZcJVCRNLEy9V5cimPK4'
    },
    ctaSecondary: {
      label: 'BOOTHで購入',
      url: '#',
      disabled: true,
      hidden: true
    },
    coverImage: 'assets/images/cover-front.png',
    coverAlt: 'CHAINLIT TECHBOOK 書影'
  },

  // ===== Event =====
  event: {
    lead: '技術書典20に出展します！',
    details: [
      {
        icon: 'calendar',
        primary: '2026年4月11日(土)',
        sub: '10:00〜'
      },
      {
        icon: 'map-pin',
        primary: '池袋サンシャインシティ',
        sub: '展示ホールD'
      },
      {
        icon: 'flag',
        primary: 'い20',
        sub: null,
        highlight: true
      }
    ],
    buttonText: '技術書典ページを見る',
    buttonUrl: 'https://techbookfest.org/product/sBdZcJVCRNLEy9V5cimPK4'
  },

  // ===== About =====
  about: {
    sectionEn: 'ABOUT',
    sectionTitle: 'この本について',
    body: 'Chainlitは、Pythonだけでチャット型AIアプリを構築できるオープンソースのフレームワークです。<br>本書は、そのChainlitをテーマに有志9人が集まった合同誌です。',
    features: [
      {
        title: '9人の多様な視点と作例',
        icon: 'users',
        description: '環境構築からはじめ、LLMの思考プロセスの可視化やチャット履歴の永続化など、実践的なトピックを幅広く取り上げています。AI英会話ツール・絵しりとり・物理パズルゲームといった、個性豊かな作例にも出会えます。'
      },
      {
        title: 'サンプルコード公開',
        icon: 'code',
        description: '各章のサンプルコードはGitHubで公開しています。手を動かしながら読み進めることで、Chainlitの便利さをより深く体感できます。',
        linkText: 'サポートページ →',
        linkUrl: 'https://github.com/statditto/chainlit-techbook-support'
      }
    ]
  },

  // ===== Target =====
  target: {
    sectionEn: 'TARGET',
    sectionTitle: 'こんな方におすすめ',
    items: [
      'PythonでLLMアプリを開発したいエンジニア',
      'チャットUIを手軽に実装したいバックエンドエンジニアやデータサイエンティスト',
      'Chainlitに興味はあるが、まだ触れたことがない方'
    ]
  },

  // ===== Contents (Chapters) =====
  contents: {
    sectionEn: 'CONTENTS',
    sectionTitle: 'もくじ',
    categories: [
      { id: 'intro', label: '導入編' },
      { id: 'features', label: '機能編' },
      { id: 'advanced', label: '応用編' }
    ],
    chapters: [
      // 導入編
      {
        category: 'intro',
        num: 1,
        title: 'Chainlitはじめの一歩',
        author: 'ditto',
        icon: 'power',
        description: '高速パッケージマネージャ「uv」でPython環境を構築し、Chainlitのインストールからデモアプリの起動まで、はじめの一歩をステップバイステップで解説します。',
        image: 'assets/images/chapters/ch1.png'
      },
      {
        category: 'intro',
        num: 2,
        title: 'Chainlitをどう読むか',
        author: 'icebee',
        icon: 'compass',
        description: 'Chainlitは単なるチャットUIではなく、対話型AIアプリを構築するフレームワーク。GradioやStreamlitとの比較を通じて、その設計思想と全体像を整理します。',
        image: 'assets/images/chapters/ch2.png'
      },
      // 機能編
      {
        category: 'features',
        num: 3,
        title: 'Chainlitの基本機能を概観する',
        author: 'kimajins',
        icon: 'layout',
        description: '認証、チャットスターター、アシスタント選択といったUI要素からPostgreSQLによる履歴保存まで、Chainlitの基本機能をルールベースのサポートチャットで実践的に解説します。',
        image: 'assets/images/chapters/ch3.png'
      },
      {
        category: 'features',
        num: 4,
        title: 'ChainlitでLLMを観察しよう!',
        author: 'Yuki Uchiyama',
        icon: 'eye',
        description: 'LLMアプリの中で「何が起きているか」を可視化するcl.Stepの使い方を中心に、入出力の観察・デバッグ手法やAPIコスト管理のアプローチを紹介します。',
        image: 'assets/images/chapters/ch4.png'
      },
      {
        category: 'features',
        num: 5,
        title: 'AIが今何をしているか？で不安にならないようにしよう!',
        author: 'Takuto Kotsubo',
        icon: 'activity',
        description: 'LLMの応答を待つ間、ユーザーを不安にさせない工夫を4つ紹介。Markdownでの可視化、TaskListによる進捗表示、Plotlyでのグラフ、並行処理によるメッセージ分割を取り上げます。',
        image: 'assets/images/chapters/ch5.png'
      },
      {
        category: 'features',
        num: 6,
        title: 'Official data layerを使う!',
        author: 'ckato',
        icon: 'database',
        description: 'Chainlit公式のデータレイヤーを使い、PostgreSQLとS3互換ストレージでチャット履歴を永続化。Docker ComposeとPrisma ORMによる環境構築を交えて手順を追っていきます。',
        image: 'assets/images/chapters/ch6.png'
      },
      // 応用編
      {
        category: 'advanced',
        num: 7,
        title: 'Chainlitで作るAI英会話ツール',
        author: 'Tomoya Yanagi',
        icon: 'mic',
        description: 'OpenAI Whisper APIで音声をテキストに変換し、GPT-4o-mini-ttsで音声合成。Chainlit上で「聞いて・話して・返事をもらう」インタラクティブな英会話ツールを約230行で実装します。',
        image: 'assets/images/chapters/ch7.png'
      },
      {
        category: 'advanced',
        num: 8,
        title: 'CustomElementを使って絵しりとりを作る!',
        author: 'ditto',
        icon: 'image',
        description: 'Chainlitの画面にHTML5 Canvasのお絵かきボードを埋め込み、Gemini APIと連携して「絵しりとり」ゲームを実現。CustomElementでチャットUIの枠を超えた表現を学べます。',
        image: 'assets/images/chapters/ch8.png'
      },
      {
        category: 'advanced',
        num: 9,
        title: 'LLMでインタラクティブな物理パズルゲームを作る',
        author: 'Naoki Hojo',
        icon: 'gamepad',
        description: 'LLMにステージを自動生成させる物理パズルゲームを実装。send_window_messageによるリアルタイム通信と2カラムレイアウトで、チャット＋ゲーム画面の連携を実現します。',
        image: 'assets/images/chapters/ch9.png'
      },
      {
        category: 'advanced',
        num: 10,
        title: 'ChainlitのUIを癖に染める',
        author: 'seahawk',
        icon: 'zap',
        description: 'カスタムCSSとJavaScriptを駆使して、ChainlitのUIをSF風テーマに魔改造。回転アニメーションや色彩エフェクトなど、標準UIの枠を超えたカスタマイズ手法を紹介します。',
        image: 'assets/images/chapters/ch10.png'
      }
    ]
  },

  // ===== Purchase =====
  purchase: {
    sectionEn: 'PURCHASE',
    sectionTitle: '入手方法',
    specs: [],
    stores: [
      {
        name: '技術書典オンラインマーケット',
        description: '技術書典のオンラインマーケットで購入できます。',
        period: '2026年4月11日(土)〜4月26日(日)',
        buttonText: '技術書典で購入',
        buttonUrl: 'https://techbookfest.org/product/sBdZcJVCRNLEy9V5cimPK4',
        disabled: false
      },
      {
        name: 'BOOTH',
        description: 'BOOTHでも購入できます。',
        period: '（準備中）',
        buttonText: 'BOOTHで購入',
        buttonUrl: '#',
        disabled: true,
        hidden: true
      }
    ],
    support: {
      text: 'サンプルコード・正誤表は GitHub で公開しています。',
      linkText: 'サポートページを見る →',
      linkUrl: 'https://github.com/statditto/chainlit-techbook-support'
    }
  },

  // ===== Footer =====
  footer: {
    copyright: '© 2026 CHAINLIT TECHBOOK 著者一同',
    supportText: 'サポートページ (GitHub)',
    supportUrl: 'https://github.com/statditto/chainlit-techbook-support'
  }

};
