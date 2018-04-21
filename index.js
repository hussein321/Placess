
import React from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from "./src/Store/ConfigureStore";


const store = configureStore();

const RNReducer = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);
AppRegistry.registerComponent('hellowReactNative', () => RNReducer);
