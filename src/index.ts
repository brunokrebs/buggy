#!/usr/bin/env node

const array: string[] = ["crazy", "bug", "huh"];

const message: string = array.reduce((prev, curr) => `${prev} ${curr}`, "");

console.log(message);
