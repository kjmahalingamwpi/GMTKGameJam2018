class GameObject {
  constructor(posX, posY, radius) {
    this.pos = { x: posX, y: posY };
    this.radius = radius;
    this.spriteName;
    this.sprite;
  }

  getPos() {
    return this.pos;
  }

  getRadius() {
    return this.radius;
  }

  create() {
    if (gameManager.hasCollision(this)) {
      return;
    }
    
    this.sprite = game.add.sprite(this.pos.x, this.pos.y, this.spriteName);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.width = this.sprite.height = this.radius * 2;
    gameManager.register(this);
  }

  destroy() {
    gameManager.deregister(this);
    this.sprite.destroy();
  }
}
