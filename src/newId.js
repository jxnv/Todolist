import React from 'react'

let id = 0;

export default function newId(prefix ='newId') {
    id++;
  return `${prefix}${id}`;
}
