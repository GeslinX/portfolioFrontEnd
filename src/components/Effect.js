import React from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min.js";
import './Effect.css';
import images from '../index';

class Effect extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = HALO({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 354.00,
      minWidth: 200.00,
      baseColor: 0xF08573,
      backgroundColor: 0x2D2D2C,
      amplitudeFactor: 1.70,
      size: 2.00
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return (
    <div ref={this.vantaRef} className="animEffect">
      <img src={images['memoji.png']} alt="Profil Xavier"/>
    </div>
      );
  }
}

export default Effect;
