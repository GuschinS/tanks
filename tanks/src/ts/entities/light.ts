import EnemyAI from '../AI/enemy-AI';
import ITank from '../interfaces/tank';
import Tank from './base/tank';
import IBattleScene from '../interfaces/battle-scene';
import Shot from './base/shot';

class Light extends Tank implements ITank {
    coolDown = 2;

    protected readyToUpdate = true;

    public HP = 1;

    constructor(scene: IBattleScene, x: number, y: number) {
        super(scene, x, y, true, 'light');

        this.controller = new EnemyAI(1, this as ITank);
    }

    lastChanse() {
        this.scene.events.emit('killed', 400);
    }

    getShot(shot: Shot) {
        super.getShot(shot);
    }
}

export default Light;
