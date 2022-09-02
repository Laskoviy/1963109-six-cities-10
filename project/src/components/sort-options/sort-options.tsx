import React, { useEffect, useState } from 'react';
import { City, SortType } from '../../const';
import SortOptionsList from '../sort-options-list/sort-options-list';

type SortOptionsProps = {
  activeCity: City,
  activeSortType: SortType,
  onActiveSortType: (sortType: SortType) => void
}


const SortOptions: React.FC<SortOptionsProps> = (props) => {
  const { activeCity, activeSortType, onActiveSortType } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [activeCity]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="places__sorting-type"
        tabIndex={0}
      >
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <SortOptionsList
        isOpen={isOpen}
        activeSortType={activeSortType}
        onActiveSortType={onActiveSortType}
      />
    </form>
  );
};

export default React.memo(SortOptions);
