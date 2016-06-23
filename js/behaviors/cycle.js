/* CYCLE: For sprites that have a spritesheet artist, this behavior
          advances the sprite artist through the sprite's images for
          the specified duration. Then the behavior waits for the
          specified interval to expire and starts the entire process again.

          The behavior shows each cell for the specified duration.
          When the behavior has cycled through all of the cells, it
          pauses for the specified interval before starting the whole
          process again.
*/

CycleBehavior = function(duration, interval){
  this.duration = duration || 1000;
  this.lastAdvance = 0;
  this.interval = interval;
};

CycleBehavior.prototype = {
  execute: function(sprite, now, fps, context, lastAnimationFrameTime){
    if(this.lastAdvance === 0){
      this.lastAdance = now;
    }

    if(now - this.lastAdvance > this.duration){
      sprite.artist.advance();
      this.lastAdvance = now;
    }

    else if (this.interval && sprite.artist.cellIndex === 0){
      if(now - this.lastAdvance > this.interval){
        sprite.artist.advance();
        this.lastAdvance = now;
      }
    }
  }
};
