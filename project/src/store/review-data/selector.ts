import { NameSpace } from '../../const';
import { Reviews } from '../../types/reviews';
import { State } from '../../types/state';

export const getReviews = (state: State): Reviews => state[NameSpace.Review].reviews;

export const getReviewSendStatus = (state: State): boolean => state[NameSpace.Review].isReviewSending;

export const getReviewSendSuccessStatus = (state: State): boolean => state[NameSpace.Review].isReviewSendSuccess;

export const getErrorMessage = (state: State): string | null => state[NameSpace.Review].errorMessage;
