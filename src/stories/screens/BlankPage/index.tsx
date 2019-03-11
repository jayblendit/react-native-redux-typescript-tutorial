import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View } from "native-base";

import ListComponent from '../../../components/ListComponent'
import SliderComponent from '../../../components/SliderComponent'
import GroupButtonComponent from '../../../components/GroupButtonComponent'
import SelectComponent from '../../../components/SelectComponent'

import styles from "./styles";

const categoryList = [
  {
    id: 1,
    name: "JACK ON THE ROCKS",
    image: "https://i.pinimg.com/564x/ae/c3/8b/aec38b249805c873f77bf72a95d985f8.jpg"
  },
  {
    id: 2,
    name: "APPLE JACK",
    image: "https://i.pinimg.com/564x/c1/78/96/c17896f15d46f1a6dfffb6861d4f2cc5.jpg"
  },
  {
    id: 3,
    name: "JACK OLD FASHIONED",
    image: "https://i.pinimg.com/564x/ae/4e/3b/ae4e3b7ecf99500cc932694cd89904b3.jpg"
  },
  {
    id: 4,
    name: "GENTLEMAN'S SOUR",
    image: "https://i.pinimg.com/564x/c6/f7/45/c6f7459ea54be491b9c1ebcdce5e1b2e.jpg"
  },
  {
    id: 5,
    name: "APPLE JACK",
    image: "https://i.pinimg.com/564x/c1/78/96/c17896f15d46f1a6dfffb6861d4f2cc5.jpg"
  },
  {
    id: 6,
    name: "JACK OLD FASHIONED",
    image: "https://i.pinimg.com/564x/ae/4e/3b/ae4e3b7ecf99500cc932694cd89904b3.jpg"
  },
  {
    id: 7,
    name: "GENTLEMAN'S SOUR",
    image: "https://i.pinimg.com/564x/c6/f7/45/c6f7459ea54be491b9c1ebcdce5e1b2e.jpg"
  }
]
export interface Props {
  navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
  render() {
  const param = this.props.navigation.state.params;
  return (
    <Container style={styles.container}>
      {/* <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>

        <Body style={{ flex: 3 }}>
          <Title>{param ? param.name.item : "Blank Page"}</Title>
        </Body>

        <Right />
        </Header>

        <Content padder>
          <Text>{param !== undefined ? param.name.item : "Create Something Awesome . . ."}</Text>
        </Content> */}
        <ListComponent
          list={categoryList}
        />
          <View style={{marginBottom: 50, padding: 10}}>
            <SliderComponent />
          </View>
          <View style={{ marginBottom: 50, padding: 10 }}>
            <GroupButtonComponent />
          </View>
          <View style={{ marginBottom: 250, padding: 10 }}>
            <SelectComponent />
          </View>
      </Container>
    );
  }
}

export default BlankPage;
