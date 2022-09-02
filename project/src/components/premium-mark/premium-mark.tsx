import React from 'react';
import { ComponentClass } from '../../const';

type Props = {
    isPremium: boolean,
    componentClass: ComponentClass
  }

const PremiumMark: React.FC<Props> = ({ isPremium, componentClass }) => (
  <div
    className={`${componentClass}__mark`}
    hidden={!isPremium}
  >
    <span>Premium</span>
  </div>
);

export default PremiumMark;
