import React from 'react';
import { Icon } from 'native-base';
import { StackNavigator } from 'react-navigation';

import TvshowList from 'Containers/TvshowList';
import TvshowAdd from 'Containers/TvshowAdd';
import TvshowDetails from 'Containers/TvshowDetails';

const TvshowNavigation = StackNavigator(
  {
    TvshowListPage: {
      screen: TvshowList,
    },
    TvshowAddPage: {
      screen: TvshowAdd,
    },
    TvshowDetailsPage: {
      screen: TvshowDetails,
    },
  },
  {
    initialRouteName: 'TvshowListPage',
    mode: 'card',
    headerMode: 'float',
    navigationOptions: {
      drawerLabel: 'TV Shows',
      drawerIcon: (/* { tintColor }*/) => <Icon name="star" />,
    },
  },
);

export default TvshowNavigation;
