import config from '../data/config'
import SpeachBabble from './SpeachBabble'
export default class Talk extends Phaser.GameObjects.Container {
  constructor (scene, events, callback) {
    super(scene)
    this.scene = scene
    this.events = events
    this.callback = callback
    this.index = 0
    scene.add.existing(this)
    scene.scene.pause('Game')
    this.tapArea = this.scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT).setOrigin(0, 0)
    this.tapArea.setInteractive().on('pointerdown', this.next.bind(this))
    this.add(this.tapArea)
    this.next()
  }
  get current () {
    return this.events[this.index]
  }
  get before () {
    if (!this.index) return null
    return this.events[this.index - 1]
  }
  get sameSpeakerAsBefore () {
    return this.current && this.before && this.current.chara === this.before.chara
  }
  next () {
    if (!this.current) return this.end()
    if (this.sameSpeakerAsBefore) {
      this.babble.text.text = this.current.text
    } else {
      this.deleteBabble()
      const isPlayer = (typeof this.current.chara === 'string' && ['ann', 'francisca', 'jaquelyn'])
      const chara = isPlayer ? this.scene.gameScene.player : this.current.chara
      const displayName = isPlayer ? this.current.chara : chara.displayName || 'No name'
      const camera = this.scene.gameScene.camera
      const x = chara.x - camera.scrollX
      const y = chara.y - camera.scrollY - 100
      this.babble = new SpeachBabble(this.scene, x, y, displayName, this.current.text)
      this.babble.setScale(0, 0).setPosition(x, y + 100).setAlpha(0)
      this.scene.add.tween({ targets: this.babble, scaleX: 1, scaleY: 1, y, alpha: 1, duration: 120 })
    }
    this.index++
  }
  end () {
    this.deleteBabble()
    this.scene.scene.resume('Game')
    if (this.current === null) {
      this.destroy()
    } else {
      this.tapArea.destroy()
    }
    if (this.callback) this.callback(this)
  }
  deleteBabble () {
    if (!this.babble) return
    this.scene.add.tween({ targets: this.babble, scaleX: 0, scaleY: 0, alpha: 0, duration: 120, onComplete: this.babble.destroy })
  }
}
