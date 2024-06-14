import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";
//default value for an atom can not be an async call
//we need async atom family using 'selectorFamily'
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    //'get' is a function that returns
    //a function  hat returns a body
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo;
    },
  })
});


// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: selectorFamily({
//     key: "todoSelectorFamily",
//     //'get' is a function that returns
//     //a function  hat returns a body
//     //***EASIER WAY ***/
//     get: function(id)  {
//       return async function({get}){
//       const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
//       return res.data.todo;
//     }
//     }
//   })
// });