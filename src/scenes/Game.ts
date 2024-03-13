import Phaser from 'phaser';

import TextureKeys from '../consts/TextureKeys';
import SceneKeys from '../consts/SceneKeys';
import AnimationKeys from '../consts/AnimationKeys';


export default class Game extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Game)
  }

  create() {

    //  store the width and height of the game  screen
    const width = this.scale.width;
    const height = this.scale.height;

    // change this.add.image to this.add.tileSprite
    // notice the changed parameters
    this.add.tileSprite(0, 0, width, height, TextureKeys.Background)
        .setOrigin(0)


    // change this.add.sprite to this.physics.add.sprite
    // and store the sprite in a mouse variable
    const mouse = this.physics.add.sprite(
      width * 0.5,          // middle of screen
      height * 0.5,
      TextureKeys.RocketMouse,       // atlas key given in preload()
      'rocketmouse_fly01.png'
    ).play(AnimationKeys.RocketMouseRun)

    const body = mouse.body as Phaser.Physics.Arcade.Body
    body.setCollideWorldBounds(true)

    this.physics.world.setBounds(
      0, 0, // x, y
      // we are using MAX_SAFE_INTEGER
      // because computer memory is limited
      // PAGE 31
      Number.MAX_SAFE_INTEGER, height - 30 // width, height
    )
  }
}