import { themesMode } from '../constants';

export default (state = themesMode.LIGHT, action) => {
  switch (action.type) {
    case themesMode.LIGHT:
      return themesMode.LIGHT;
  
    case themesMode.DARK:
      return themesMode.DARK;

    default:
      return state;
  }
};
