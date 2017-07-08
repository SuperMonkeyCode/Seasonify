/* @flow */
import { ListItem, Text } from 'native-base';
import { compose, pure, withHandlers } from 'recompose';
import React from 'react';

type Props = {
  /* parent */
  navigate: Function,
  friend: Friend,
  /* connect */
  /* HOC */
  handlePress: Function,
};

const enhance = compose(
  pure,
  withHandlers({
    handlePress: ({ navigate, friend }: Props) => () => {
      navigate('FriendDetailsPage', { friendId: friend.id });
    },
  }),
);

function FriendItem({ friend, handlePress }: Props) {
  return (
    <ListItem onPress={handlePress}>
      <Text>
        {friend.name}
      </Text>
    </ListItem>
  );
}

export default enhance(FriendItem);
