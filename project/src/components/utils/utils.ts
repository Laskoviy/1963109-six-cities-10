
import { City, month } from '../../const';
import { Location, Offer, Offers } from '../../types/offer';


const MULTIPLIER_RATING = 20;
const FIRST_LETTER = 0;
const START_INDEX = 1;


const getUniqueCities = (offers: Offers): string[] => {
  const cities = offers.map((offer) => offer.city.name);
  const uniqueCities = Array.from(new Set(cities));

  return uniqueCities;
};


export const getCountStars = (rating: number): string => `${Math.round(rating) * MULTIPLIER_RATING}%`;


export const getActiveCityOffers = (city: City, offers: Offers): Offers => offers.filter((offer) => city === offer.city.name);


export const capitalizeFirstLetter = (text: string): string => text.charAt(FIRST_LETTER).toUpperCase() + text.slice(START_INDEX);


export const getFormatDate = (date: string): string => {
  const formDate = new Date(date);
  const year = formDate.getFullYear();
  const numMonth = formDate.getMonth();

  return `${month[numMonth]} ${year}`;
};


export const getActiveCityLocation = (city: City, offers: Offers): Location => {
  const offersActiveCity = getActiveCityOffers(city, offers);
  const [offer] = offersActiveCity;

  return {
    latitude: offer.city.location.latitude,
    longitude: offer.city.location.longitude,
    zoom: offer.city.location.zoom
  };
};


export const getCitiesOffers = (offers: Offers): [string, Offer[]][] => {
  const сities = getUniqueCities(offers);
  const sortedCities = сities.sort();
  const cityOffersMap = new Map();

  sortedCities.forEach((city) => {
    const cityOffers = offers.filter((offer) => city === offer.city.name);
    cityOffersMap.set(city, cityOffers);
  });

  return Array.from(cityOffersMap);
};
