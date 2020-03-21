export const cassandra = (scene, gate, cassandra, door, doorEvent, candle) => {
  const state = scene.storage.state.event.m2_1
  door.setVisible(!state.opened)
  gate.setActive(state.opened)
  if (scene.storage.state.event.m2_4.started) return
  candle.setTapEvent(async () => {
    const i = await scene.select(['調べる', '何もしない'])
    if (i === 1) return
    state.key = true
    candle.setVisible(false)
    scene.ui.announce('『地下通路の鍵』を手に入れた')
  }).setVisible(state.started && !state.key)
  doorEvent.setTapEvent(async () => {
    if (state.key) {
      scene.ui.announce('鉄格子の鍵を開けた')
      state.opened = true
      door.setVisible(false)
      doorEvent.setVisible(false)
      gate.setActive(true)
    } else {
      await scene.talk([{ chara: 'ann', text: '鍵がかかってる。' }])
    }
  }).setVisible(!state.opened)
  if (scene.storage.state.event.m2_4.started) return
  cassandra.setDisplayName('カサンドラ').setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([
        { chara, text: 'ワイン、ありがとうね。' }
      ])
    } else if (state.wine.length >= 3) {
      await scene.talk([
        { chara, text: 'ワインは見つかった？' },
        { chara: 'ann', text: 'はい、ほんとにありました。' },
        { chara, text: 'よくやったわ！' },
        { chara, text: 'ありがとう、最高よ。' },
        { chara, text: 'こんなところに閉じ込められているから、あげられるお礼なんて無いんだけれど…。' },
        { chara: 'ann', text: 'いいんです。鍵を貸してもらっただけで十分です。' },
        { chara: 'ann', text: 'でもどうしてここにお酒があるんですか？' },
        { chara, text: 'それは、密造酒の密売人が、酒の搬入にこの地下通路を使っているからよ。' },
        { chara, text: '城内の連中が密造酒を買ってるっていうんだから、禁酒令なんてクソだわ。' },
        { chara: 'ann', text: 'そうなんですか。' },
        { chara, text: 'ちょうどさっき、あなたと入れ違いでその密売人が入っていったところ。' },
        { chara, text: '会ったらよろしく言っておいて。' }
      ])
      state.completed = true
      scene.ui.missionUpdate('m2_1', true)
    } else if (state.started) {
      if (state.key) {
        await scene.talk([
          { chara, text: 'ワインはまだ見つからないの？' }
        ])
      } else {
        await scene.talk([
          { chara, text: '鍵は見つかった？' },
          { chara, text: '扉の横にある燭台の底をよく調べてみて。' }
        ])
      }
    } else if (state.talked) {
      await scene.talk([
        { chara, text: 'まだ私に何か用？' },
        { chara, text: 'ねえあなた、暇なら私にワインを持ってきてくれない？' },
        { chara, text: 'この国に禁酒令があるのは分かってるけど、手に入る場所を知っているの。' },
        { chara, text: '取ってきてくれるのなら場所を教えるわ。' }
      ])
      const i = await scene.select(['いいよ', '結構です'])
      if (i === 1) {
        await scene.talk([{ chara, text: 'そう…。' }])
        return
      }
      await scene.talk([
        { chara, text: 'ワインはこの地下通路の奥にある。' },
        { chara: 'ann', text: 'え、この先に？' },
        { chara, text: 'そう。' },
        { chara: 'ann', text: 'でも鍵が…。' },
        { chara, text: '扉の横にある燭台の底をよく調べてみて。' },
        { chara, text: '鍵が隠されているはず。' },
        { chara: 'ann', text: 'なんでそんなところに鍵が？' },
        { chara, text: '私の兄がたまに出入りしているからよ。' },
        { chara, text: '私の兄は、私をここから出すためにアラグニエのねぐらを探しているの。' },
        { chara: 'ann', text: 'そうなんだ。' },
        { chara: 'ann', text: 'だったら後でお兄さんが困らない？' },
        { chara, text: 'いいの。アラグニエは見つかるはずはない。' },
        { chara, text: '兄もやっとそれに気づいたみたいで、…ここしばらくは訪れていないわ。' },
        { chara, text: 'でもワインは絶対に見つかるはずだから、必ず持ってきて。' }
      ])
      state.started = true
      candle.setVisible(true)
      scene.ui.missionUpdate('m2_1')
    } else if (!state.talked) {
      await scene.talk([
        { chara, text: '…。' },
        { chara, text: '何を見ているの？' },
        { chara: 'ann', text: 'これは牢屋ですか？' },
        { chara, text: '…。' },
        { chara, text: 'そうよ。' },
        { chara: 'ann', text: 'お姉さんは悪いことをしたんですか？' },
        { chara, text: 'そう。' },
        { chara, text: '二度と出ることはできない。' },
        { chara: 'ann', text: 'えっ、そんな…。' },
        { chara, text: 'これはアラグニエの糸でできた鍵のない牢獄。' },
        { chara, text: 'ヤツが張った糸は、ヤツを倒さない限り切ることはできない。' },
        { chara: 'ann', text: 'アラグニエ？' },
        { chara, text: 'アラグニエは巨大な蜘蛛のモンスター。' },
        { chara, text: 'この牢屋を作ったあと、どこかへ行ってしまったわ。' },
        { chara, text: 'もう誰にも、見つけることも、倒すこともできない。' },
        { chara, text: 'さあ、見物されるのは慣れっこだからいいけど、飽きたらどっかに行ってちょうだい。' }
      ])
      state.talked = true
    }
  })
}

export const wine = (scene, barrel, number) => {
  const state = scene.storage.state.event.m2_1
  if (state.wine.includes(number)) {
    barrel.destroy()
    return
  }
  barrel.setTapEvent(async () => {
    state.wine.push(number)
    scene.ui.announce('『ワイン』を手に入れた')
    barrel.destroy()
  })
}
