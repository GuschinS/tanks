class GameOverScene extends Phaser.Scene {
    keys: unknown;

    constructor() {
        super({
            key: 'GameOverScene',
        });
    }

    preload() {
        this.add.text(300, 300, 'GAME', { font: '90px Pixel', color: '#FF5000' });
        this.add.text(300, 450, 'OVER', { font: '90px Pixel', color: '#FF5000' });
    }

    create() {
        this.input.keyboard.on('keydown', (event: { key: string }) => {
            if (event.key === 'p') {
                // ------- Инструмент разработчика. Переключатель сцен на англ. 'p'
                this.scene.start('StartScene');
            }
        });
    }

    update() {
        console.log('GameOverScene');
    }
}
export default GameOverScene;
