import { ADD_TODO } from "./actions";

// state
// ['coding', 'lunch']

const initialState = [];

export function todoApp(previousState = initialState, action) {
  // 초기 값을 설정해주는 부분
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState;
}
