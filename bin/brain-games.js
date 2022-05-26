#!/usr/bin/env node
import { getAnswer } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = getAnswer('May I have your name? ');
console.log(`Hello, ${userName}!`);
