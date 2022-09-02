import React from 'react';
import { sortType, SortType } from '../../const';
import classNames from 'classnames';

type SortOptionsListProps = {
    isOpen: boolean,
    activeSortType: SortType,
    onActiveSortType: (sortType: SortType) => void
  }


const SortOptionsList: React.FC<SortOptionsListProps> = (props) => {
  const { isOpen, activeSortType, onActiveSortType } = props;

  const ulClass = classNames('places__options places__options--custom', {
    'places__options--opened': isOpen,
  });

  return (
    <ul className={ulClass}>

      {sortType.map((type) => {
        const isActive = type === activeSortType;
        const liClass = classNames('places__option', {
          'places__option--active': isActive
        });

        return (
          <li
            key={type}
            className={liClass}
            tabIndex={0}
            onClick={() => onActiveSortType(type)}
          >
            {type}
          </li>
        );
      }
      )}
    </ul>
  );
};

export default SortOptionsList;
