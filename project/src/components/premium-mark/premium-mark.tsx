import React from 'react';
import { ComponentClass } from '../../const';

type PremiumMarkProps = {
    isPremium: boolean,
    componentClass: ComponentClass
  }

const PremiumMark: React.FC<PremiumMarkProps> = ({ isPremium, componentClass }) => (
  <div
    className={`${componentClass}__mark`}
    hidden={!isPremium}
  >
    <span>Premium</span>
  </div>
);

export default PremiumMark;
