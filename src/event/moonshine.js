export const dionysus = (scene, dionysus, area, gate) => {
  const state = scene.storage.state.event.m2_3
  const chara = dionysus
  dionysus.setSpeed(180)
  const origin = { x: dionysus.x, y: dionysus.y }
  gate.setActive(state.started)
  area.setEvent(async () => {
    await scene.talk([
      { chara, text: 'おい、本気で行く気かよ？' },
      { chara, text: 'それなら俺にも案があるんだ。' },
      { chara, text: '協力しようじゃないか。' },
      { chara: 'ann', text: '案？' },
      { chara, text: 'ああ。' },
      { chara, text: '俺がオルトロスを「倒しやすく」してやる。' },
      { chara: 'ann', text: 'どうやって？' },
      { chara, text: 'まあそれは任せとけ。' },
      { chara, text: 'だが必ず倒せよ。俺も身を削るんだ。' },
      { chara, text: 'よし、じゃあちょっと待ってろ。' }
    ])
    await dionysus.setTargetPosition((8).toPixelCenter, (0).toPixelCenter)
    dionysus.setVisible(false)
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'jaquelyn', text: '勝手に行っちゃったわ。' },
      { chara: 'ann', text: '酒樽担いで行ったけど、どうするつもりだろう？' }
    ])
    await scene.ui.transition('slow')
    await scene.ui.sleep(500)
    dionysus.setR('down').setVisible(true)
    await scene.ui.sleep(500)
    await dionysus.setTargetPosition(origin.x, origin.y)
    await scene.talk([
      { chara, text: 'やってきたぞ。' },
      { chara, text: 'いい感じだ。' },
      { chara: 'ann', text: '何をしてきたの？' },
      { chara, text: 'ヤツに酒を飲ませた。' },
      { chara, text: '1バレルきっちり飲んでヘロヘロしてやがるぜ。' },
      { chara, text: '今日の分の酒は失ったが、アイツがくたばるなら長い目で見て得ってもんだ。' },
      { chara, text: 'さあ、行ってこい。' }
    ])
    state.started = true
    area.setActive(false)
    gate.setActive(true)
    scene.ui.missionUpdate('m2_3')
  }).setActive(state.talked && !state.started)
  dionysus.setTapEvent(async () => {
    if (state.completed) {
      await scene.talk([
        { chara, text: 'よう' }
      ])
    } else if (state.solved) {
      await scene.talk([
        { chara, text: 'せんきゅー' }
      ])
      state.completed = true
      scene.ui.missionUpdate('m2_3', true)
    } else if (state.started) {
      await scene.talk([
        { chara, text: 'オルトロスは泥酔してヘロヘロだぜ。' },
        { chara, text: 'さあ、今のうちに倒してこい。' }
      ])
    } else if (state.talked) {
      await scene.talk([
        { chara, text: '双頭の番犬オルトロス。お前たちには到底敵わない相手だ。' },
        { chara, text: 'さあ、分かったら引き返せ。' }
      ])
    } else {
      await scene.talk([
        { chara, text: 'うわ！誰だお前たち？' },
        { chara, text: '何でここにいる？' },
        { chara: 'ann', text: 'そういうあなたこそ誰？' },
        { chara: 'ann', text: '密造酒を運び込む怪しいやつがいるって聞いたけど、あなたたちね？' },
        { chara, text: 'ち、違う。' },
        { chara: 'ann', text: 'じゃあその樽には何が入っているの？' },
        { chara, text: '…。' },
        { chara, text: 'ああそうだよ。これは酒だ。' },
        { chara: 'ann', text: 'やっぱり。' },
        { chara, text: '俺を城の人間に付き出そうってのか？' },
        { chara, text: '望みはなんだ？' },
        { chara: 'ann', text: 'そういうわけじゃないんだけど…、' },
        { chara: 'ann', text: '詳しい話を教えてもらえない？' },
        { chara: 'ann', text: 'この地下通路のことでも、城のことでも。' },
        { chara, text: 'なんだ、城の関係者かと思って焦ったぜ。' },
        { chara, text: '知っていると思うが、この地下通路は王城に繋がっている。' },
        { chara, text: 'この地下通路を最奥まで進むと扉があって、その先は城の貯蔵庫だ。' },
        { chara: 'ann', text: 'お酒はお城に届けるの？' },
        { chara, text: 'ああ。密造酒は城の奴らと取引している。' },
        { chara, text: '毎日1バレルを地下通路の最奥まで運んで、' },
        { chara, text: '20バレル貯まった日の夜に、城内の人間が最後の扉を開放し、酒を搬入する。' },
        { chara: 'francisca', text: '城内に繋がる最後の扉は城の内側からしか開かないということ？' },
        { chara, text: 'そうだ。' },
        { chara, text: 'なんだ、城に侵入しようってのか？' },
        { chara, text: '扉の心配なんかしなくても、まずこの次の部屋を抜けられないと思うぜ。' },
        { chara: 'ann', text: 'どうして？' },
        { chara, text: 'この先はオルトロスが道を塞いでいる。' },
        { chara, text: '食い殺されて終わりだな。' },
        { chara: 'ann', text: 'オルトロス？' },
        { chara, text: 'ああ。双頭の番犬オルトロス。お前たちには到底敵わない相手だ。' },
        { chara, text: '俺はいつも奴が眠るのを待ってからこっそり通り抜けるんだ。' },
        { chara, text: 'さあ、分かったら引き返せ。' }
      ])
      state.talked = true
      area.setActive(true)
    }
  })
}