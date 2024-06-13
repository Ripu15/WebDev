import { atom , selector } from "recoil";
//atoms replaces 'useState'
//3. atom or selector defination
//keys must be different for different atosm/selectors
export const countAtom = atom({
    //'key' is way to identify an atom
    key : "countAtom",
    default: 0
});

export const evenSelector = selector({
    key : "evenSelector",
    get :({get}) =>{
        const count = get(countAtom);
        return count % 2;
    }
});