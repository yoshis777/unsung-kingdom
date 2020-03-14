import { lute } from '../event/lute'
export default {
  create (scene) {
    const poets = scene.map.getObjectById(2)
    poets.image.anims.play('poets_lute', true)
    lute(scene, poets)
  }
}