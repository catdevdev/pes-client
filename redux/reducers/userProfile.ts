/* imports */
import { nanoid } from 'nanoid';


export const userProfile = (state, action) => {
  switch (action.type) {
    case CreateWindow:
      /* all window isActive to False */
      return [
        ...state.map((window) => {
          return { ...window, isActive: false };
        }),
        {
          id: nanoid(),
          isActive: true,
          zIndex: state.length + 1,
          ...action.payload,
        },
      ];
    default:
      return state;
  }
};
