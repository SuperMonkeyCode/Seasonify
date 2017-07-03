/* @flow */
import { Container, Content, Form, Label, Input, Item } from 'native-base';
import { Keyboard } from 'react-native';
import React from 'react';

import HeaderModular from 'Components/HeaderModular';
import Identity from 'Libs/Identity';

type Props = {
  /* parent */
  navigation: Object,
  /* connect */
  friendAdd: Function,
};

type State = {
  friendName: string,
  friendColor: string,
};

export default class FriendAdd extends React.PureComponent<void, Props, State> {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <HeaderModular
        title="New friend"
        cancelButton={{ icon: 'close', action: navigation.goBack }}
        actionButtons={[
          {
            text: 'ADD',
            action: navigation.state.params && navigation.state.params.handleSave,
          },
        ]}
      />
    ),
  });

  state = {
    friendName: '',
    friendColor: '',
  };

  componentWillMount() {
    this.props.navigation.setParams({
      handleSave: this.handleSave,
    });
  }

  onChangeName = (name: string) => {
    this.setState({ friendName: name });
  };

  onChangeColor = (color: string) => {
    this.setState({ friendColor: color });
  };

  handleSave = () => {
    if (this.state.friendName.trim() !== '') {
      this.props.friendAdd(
        Identity.newid(),
        this.state.friendName.trim(),
        this.state.friendColor,
      );
      this.props.navigation.goBack();
      Keyboard.dismiss();
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Friend&rsquo;s name</Label>
              <Input onChangeText={this.onChangeName} autoFocus autoCapitalize="words" />
            </Item>
            <Item floatingLabel>
              <Label>Color</Label>
              <Input onChangeText={this.onChangeColor} autoCapitalize="words" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
