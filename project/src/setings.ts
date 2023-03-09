export const CitiesName = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

export const AppRoute = {
  Root: '/',
  Favorites: '/favorites',
  Login: '/login',
  Room: '/offer/:id',
  DefaultCity: CitiesName.Paris
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const AUTH = AuthorizationStatus.Auth;
