import Phaser from 'phaser'

import Game from './scenes/Game'
import Preloader from './scenes/Preloader'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 640,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},

	// add Preloader as the first element in the Array
	scene: [Preloader, Game],
}

export default new Phaser.Game(config)
