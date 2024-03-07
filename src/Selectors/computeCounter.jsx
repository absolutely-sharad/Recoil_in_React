import {selector} from 'recoil';
import { Counter } from '../Atoms/Counter';

const computeCounter = selector({
    key : 'computeCounter',
    get : (({get})=>{
        let value = get(Counter);
        return value*2;
    })
})

export {computeCounter};