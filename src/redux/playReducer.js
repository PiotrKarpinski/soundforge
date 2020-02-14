
const reducerName = 'playing'
const createActionName = name => `root/${reducerName}/${name}`;

export const PLAY = createActionName('PLAY');


export const createAction_play = payload => ({ payload , type: PLAY});
   

export default function reducer (state=[], action={}) {
    switch (action.type) {
        case PLAY:
          return action.payload
        default:
          return state;
    }
}