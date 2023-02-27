class LoadScene extends Phaser.Scene {
    keys: unknown;

    constructor() {
        super({
            key: 'LoadScene',
        });
    }

    preload() {
        this.add.text(300, 500, 'loading...', { font: '20px Pixel' });
    }

    create() {
        setTimeout(() => {
            this.scene.start('StartScene');
        }, 3000);
    }

    update() {}
}
export default LoadScene;