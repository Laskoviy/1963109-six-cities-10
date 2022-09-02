export type User = {
  id: number,
  isPro: boolean,
  name: string,
  avatarUrl: string,
};

export type Review = {
  id: number,
  user: User,
  rating: number,
  comment: string,
  date: string,
};

export type Reviews = Review[];

export type CommentForm = {
  rating: number | null,
  comment: string,
}
