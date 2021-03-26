/* eslint-disable  */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  padding: 200px 0;
`

export default function Nektar() {
  const Sketch = (p5) => {
    let img;
    let img2;
    let bilden;
    let song2;
    let welcome;
    let capture;

    p5.preload = () => {
      img = p5.loadImage('/ican4.jpeg');
      img2 = p5.loadImage('/2.png');
      bilden = p5.loadFont('/Bilden-Regular.otf');
      song2 = p5.loadSound('/bg.mp3');
      welcome = p5.loadSound('/welcome.mp3');
    };

    let x = 500;
    let y = 100;
    let z = 500;

    p5.setup = () => {
      const canvas = p5.createCanvas(1000, 1000);
      canvas.parent('canvas-container');
      p5.frameRate(255);
      p5.background(255);
      img.resize(1000, 1000);
      p5.image(img, 0, 0);
      p5.ellipseMode(p5.CENTER);
      song2.loop();
      welcome.loop();

      capture = p5.createCapture(p5.VIDEO);

      p5.stroke(255, 0, 0);
      p5.line(900, 900, 100, 100);
    };

    p5.draw = () => {
      p5.fill(p5.mouseY, 0, 0);
      p5.rectMode(p5.CENTER);
      p5.noStroke();
      p5.rect(p5.width / 2, p5.height / 2, 900, 50);
      p5.image(capture, 100, 750, 200, 200);
      p5.image(capture, 650, 130, 200, 200);

      p5.stroke(130, 130, 200);
      p5.strokeWeight(1);
      p5.textFont(bilden);
      p5.textAlign(p5.CENTER);
      p5.textSize(130);
      p5.fill(255);

      p5.text('NEKTAR.PNG', p5.width / 2, 70);

      p5.textAlign(p5.CENTER);
      p5.textSize(110);
      p5.fill(255);

      p5.text('KENALWAYSCAN', 500, 1000);
      p5.noStroke();
      p5.fill(255, p5.mouseX, 0);
      p5.rect(p5.mouseX, p5.mouseY, 15, 15);

      p5.noStroke();
      p5.fill(255, p5.mouseX, 0);
      const x1 = p5.map(p5.mouseX, p5.mouseY, 20, 20);
      p5.rect(p5.mouseX, p5.mouseY, 15, 15);

      var volume = p5.map(p5.mouseY, 0, p5.width, 0, 1);
      volume = p5.constrain(volume, 0.8, 0.1);
      song2.amp(volume);

      var speed = p5.map(p5.mouseY, 0.1, p5.height, 0, 2);
      song2.rate(speed);

      p5.background(img2);

      if (x > 498) {
        x -= 2;
      } else if (x < 498) {
        x += 2;
      }
      x += p5.floor(p5.movedX / 20);
      p5.fill(0, 0, 255);
      p5.ellipse(x, 100, 50, 50);

      if (y > 498) {
        y -= 2;
      } else if (y < 498) {
        y += 2;
      }
      y += p5.floor(p5.movedX / 4);
      p5.fill(0, 0, 255);
      p5.ellipse(y, 500, 50, 50);

      if (z > 498) {
        z -= 2;
      } else if (z < 498) {
        z += 2;
      }
      z += p5.floor(p5.movedX / 20);
      // background(237, 34, 93);
      p5.fill(0, 0, 255);
      p5.ellipse(z, 900, 50, 50);
    };
  };

  useEffect(() => {
    const p5 = require('p5');
    window.p5 = p5;
    require('p5/lib/addons/p5.sound');
    new p5(Sketch);
  }, []);

  return <Wrapper id="canvas-container"></Wrapper>;
}
