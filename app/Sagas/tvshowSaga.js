import { call, put, select, fork } from 'redux-saga/effects';

import Identity from '../Libs/Identity';
import tv from '../Redux/tvshowRedux';
import ui from '../Redux/uiRedux';

export function* tvshowAddWithSeasons(api, { tvshow }) {
  const newTvshow = { ...tvshow, id: Identity.newid() };
  yield put(tv.actions.tvshowAdd(newTvshow));
  yield put(ui.actions.messageToast('success', `${newTvshow.name} added`));
  yield put(tv.actions.seasonsRefresh(newTvshow.id, true));
}
