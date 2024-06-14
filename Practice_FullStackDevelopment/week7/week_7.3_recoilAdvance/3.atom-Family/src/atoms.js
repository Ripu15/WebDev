import { atomFamily } from "recoil";
import { TODOS } from "./todos";
//All todos need to have their own atoms
//atomFamily let create dynamic atoms
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  //default is a func that finds todo acc. to id
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});