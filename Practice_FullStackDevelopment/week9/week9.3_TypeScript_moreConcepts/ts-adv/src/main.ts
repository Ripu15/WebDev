//need to run command:
//npm install express @types/express

//way to import default exports 
import express from "express"
//way to import constant exports
import { add } from "./math"

let addition = add(1, 2);
console.log(addition);