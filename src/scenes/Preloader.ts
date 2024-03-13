import Phaser from 'phaser'
import TextureKeys from '../consts/TextureKeys'
import SceneKeys from '../consts/SceneKeys'
import AnimationKeys from '../consts/AnimationKeys'


export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Preloader)
  }

  preload() {
    this.load.image(TextureKeys.Background, 'house/bg_repeat_340x640.png')

    this.load.atlas(
      TextureKeys.RocketMouse,
      'characters/rocket-mouse.png',
      'characters/rocket-mouse.json'
    )
  }


  create() {
    this.anims.create({
      key: AnimationKeys.RocketMouseRun,  // name of the animation
      frames: this.anims.generateFrameNames(TextureKeys.RocketMouse, {
        start: 1,
        end: 4,
        prefix: 'rocketmouse_run',
        zeroPad: 2,  // zeroPad is necessary if the animation has more than 9 frames
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: -1 // -1 to loop forever
    })
    
    this.scene.start(SceneKeys.Game)
  }
}