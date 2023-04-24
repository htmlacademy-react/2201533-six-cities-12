import {createAPI} from '../../servises/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {RootState} from '../index';
import {Action} from 'redux';
import {APIRoute, NameSpace} from '../../settings';
import {checkAuth, fetchFavorites, fetchOffer, fetchOffers, loginAction, logoutAction,
  postFavorite, postComment} from './api-actions';
import {makeFakeRawOffers} from '../../utils/offers-mocks';
import {Max} from '../../utils/mocks-const';
import {makeFakeComments, makeFakeDataFromFetchOffer} from '../../utils/offer-mocks';
import {loaders} from '../adapter';
import {AuthType} from '../../types/user-types';
import {redirectToRoute} from '../actions';
import {AUTH_TOKEN_KEY_NAME} from '../../servises/token';
import {makeFakeRawPlace} from '../../utils/fake-raw-place';
import {PostFavorite} from '../../types/place-data-types';
import {getRandomComment, getRandomRating} from '../../utils/mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      RootState,
      Action<string>,
      ThunkDispatch<RootState, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuth());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuth.pending.type,
      checkAuth.fulfilled.type
    ]);
  });

  it('should dispatch Load_Offers when GET /hotels', async () => {
    const mockOffers = makeFakeRawOffers();
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchOffers());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffers.pending.type,
      fetchOffers.fulfilled.type
    ]);
  });

  it('should dispatch Load_Favorites when GET /favorite', async () => {
    const mockFavorites = makeFakeRawOffers(Max.favorites);
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, mockFavorites);

    const store = mockStore();

    await store.dispatch(fetchFavorites());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavorites.pending.type,
      fetchFavorites.fulfilled.type
    ]);
  });

  it('should dispatch Load_Offer when GET /hotels/id', async () => {
    const {entrance, id} = makeFakeDataFromFetchOffer();
    loaders.forEach((loader, index) =>
      mockAPI
        .onGet(loader.url(id))
        .reply(200, entrance[index])
    );
    const store = mockStore();

    await store.dispatch(fetchOffer(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffer.pending.type,
      fetchOffer.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthType = {email: 'test@test.ru', password: '123456'};
    const token = 'token';
    Storage.prototype.setItem = jest.fn();
    const store = mockStore();
    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: token});

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, token);
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      redirectToRoute.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME);
  });

  it('should dispatch Change isFavorite property when POST /favorite/{id}:status', async () => {
    const id = 2;
    const fakePostData: PostFavorite = {hotelId: id, status: true};
    const store = mockStore();
    mockAPI
      .onPost(`${APIRoute.Favorite}/${id}/1`)
      .reply(200, makeFakeRawPlace(0));

    await store.dispatch(postFavorite(fakePostData));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      postFavorite.pending.type,
      postFavorite.fulfilled.type
    ]);
  });

  it('should dispatch Add Comment when POST /comments/{id}', async () => {
    const id = 2;
    const store = mockStore({[NameSpace.Offer]: {comment: getRandomComment(), rating: getRandomRating()}});
    mockAPI
      .onPost(`${APIRoute.Comments}/${id}`)
      .reply(200, makeFakeComments());

    await store.dispatch(postComment(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      postComment.pending.type,
      postComment.fulfilled.type
    ]);
  });

});
