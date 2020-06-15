export default {
  chapter: [
    { name: '序章', title: '王殺しのジャック', sub: 'Jack the Kingkiller' },
    { name: '1章', title: 'ワルコフォレンスの森', sub: 'Warcoforsubce' },
    { name: '2章', title: 'トロイア公爵邸の地下通路', sub: 'Troy\'s secret passage' },
    { name: '3章', title: '聖アンテルスの墓地', sub: 'St Anterus\' catacomb' },
    { name: '4章', title: 'グリファルデ神殿', sub: 'Temple Grefalde' },
    { name: '終章', title: '平和王エドガー', sub: 'Edgar the Peaceful' }
  ],
  ui: {
    sub: {
      quests: 'マップ＆クエスト',
      characters: 'キャラクター',
      save: 'セーブ',
      load: 'ロード',
      settings: '設定'
    }
  },
  roomBook: [
    ['べリオン王国史によると、王は暗殺者によって殺された…。', '現場の王城の裏庭に急ごう！'],
    ['「王は急な病に伏して亡くなった」か。', '王もそれほど若くないんだよね。'],
    ['「退役した王国騎士に裏切られ、殺される」', 'この前の王殺しのジャックと関係があるのかな…？'],
    ['「王は王妃の亡霊に呪い殺されたと語られている」', 'ほんとかなあ…？'],
    ['「王はドラゴンとの戦いに破れて死ぬ」', 'ドラゴンか…。', 'きっと凄く強いんだよね。'],
    ['「王は安らかに天命を全うした」', 'うん、', '嬉しくて何度も読み直したくなるね']
  ],
  roomEv: [
    [
      [ // 0.0.x
        'じゃ、みんな、あらためてよろしく！',
        'よろしくね、アン。',
        'アンが仕切るの？不安なんですけど。',
        '私達がこの時代に来た目的、ちゃんと理解してる？',
        '当たり前じゃん！'
      ],
      [ // 0.1.x
        '王の暗殺を阻止すること',
        '観光'
      ],
      [ // 0.2.x
        '私達の目的はエドガー王が暗殺されるのを阻止すること。',
        'ちゃんと覚えていて偉いわ、アン。'
      ],
      [ // 0.3.x
        'はぁ…。',
        'そうじゃないでしょ、アン。',
        '私達の目的はエドガー王が暗殺されるのを阻止することよ。',
        'じょ、冗談だよ！',
        '忘れるわけないじゃん！'
      ],
      [ // 0.4.x
        '全べリオン人がずっと悔やんできたことだもの。',
        'そうね。',
        'べリオン王国史によると、王が暗殺されたのは明日の夕暮れ、王城の裏庭。',
        '暗殺者の正体、目的は不明。',
        '「王殺しのジャック」の名で語り継がれている謎の男だね。',
        'そう。',
        '私たちは通りがかりの旅人としてその暗殺を阻止する。',
        '問題ないわ。',
        '準備ができたらすぐに出発しましょう。',
        '準備ならバッチリ！早く行こう！',
        'アン、その短銃は置いていこうね。',
        'みんなの分の武器は調達してあるから。',
        'すごい、この時代の剣だね！これで戦うの？',
        'フェアに、正々堂々と、そういうルールよ。銃は禁止。',
        'そ、そうだった。',
        'あと、時間水晶はちゃんと持ってる？',
        'あるよ！これね！',
        '気をつけてよね。なくしたら二度と未来に戻れくなるんだから。',
        'ジャクリーンも、なんでアンなんかに持たせるのよ。',
        'アンが持ちたいって言うから。',
        'はあ…。',
        'もしなくしたら、アンの先祖の家を見つけ出して燃やすわ。',
        'ひどい！',
        'アンなら大丈夫よ。',
        'さあ、行きましょう。'
      ],
      [ // 0.5.x
      ]
    ]
  ],
  townGreeting: {
    amber: 'いい天気ね',
    elliott: 'よう',
    max: '元気か？',
    annabelle: 'こんにちは'
  },
  townGreeting4: {
    amber: '大変なことになったわ…',
    matilda: '怖いな…'
  },
  townBoard: [
    '市街についての案内が貼り出されている。',
    '森の凶暴なモンスター「レックスベア」の討伐報酬について貼り出されている。',
    '禁酒令の罰則に関して貼り出されている。',
    'レンフィールド家の邸宅が火事になった件について貼り出されている。',
    'ドランゴンの覚醒と討伐隊が結成されたことについて貼り出されている。',
    'エドガー王がドラゴンを倒したことについて貼り出されている。'
  ]
}
