import * as Expo from 'expo';
import * as React from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import Roboto from '../../node_modules/native-base/Fonts/Roboto.ttf'
import RobotoMedium from '../../node_modules/native-base/Fonts/Roboto_medium.ttf'
import Ionicons from '../../node_modules/@expo/vector-icons/fonts/Ionicons.ttf'

import configureStore from './configureStore';
import App from '../App';
import getTheme from '../theme/components';
import variables from '../theme/variables/platform';
export interface State {
  store: object;
  isLoading: boolean;
  isReady: boolean;
}
export default class Setup extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false,
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto,
      Roboto_medium: RobotoMedium,
      Ionicons,
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <App />
        </Provider>
      </StyleProvider>
    );
  }
}
