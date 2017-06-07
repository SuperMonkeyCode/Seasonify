import { takeLatest } from 'redux-saga/effects';
import Allocine, { ApiFixtures } from '../Services/Allocine';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import { types as uiTypes } from '../Redux/uiRedux';
import { types as tvshowTypes } from '../Redux/tvshowRedux';

/* ------------- Sagas ------------- */

import { searchTvshows, addTvshowWithSeasons, updateSeasons } from './tvshowsSagas';

/* ------------- API/Fixtures ------------- */

const api = DebugConfig.useFixtures ? ApiFixtures : new Allocine();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield [
    takeLatest(uiTypes.SUGGESTIONS_REQUEST, searchTvshows, api),
    takeLatest(tvshowTypes.ADD_WITH_SEASONS, addTvshowWithSeasons, api),
    takeLatest(tvshowTypes.SEASONS_REFRESH, updateSeasons, api),
  ];
}
