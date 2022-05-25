#!/usr/bin/env node
import askQuestion from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = askQuestion('May I have your name? ');
console.log(`Hello, ${userName}!`);
