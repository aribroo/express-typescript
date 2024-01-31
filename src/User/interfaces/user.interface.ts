export interface IUser {
  name: string;
  email: string;
  social_media?: ISocialMedia[];
}

export interface ISocialMedia {
  username: string;
  plaftform: string;
}
