import React from 'react';
import App from '../App'
import renderer from "react-test-renderer"
import { Provider } from 'react-redux';
import store from "../store/store"
// import { useSelector } from 'react-redux/es/hooks/useSelector';

    test('matches snapshot', () => {
    const tree = renderer
    .create(<Provider store={store}><App /></Provider>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})