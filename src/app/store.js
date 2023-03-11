import { configureStore } from '@reduxjs/toolkit';
import rootred from '../redux/reducers/main';

const store = configureStore(
  {reducer: rootred}
);

export default store;