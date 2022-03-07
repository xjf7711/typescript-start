import {fromEvent} from "rxjs";
import JSZip from "jszip";
import {saveAs} from 'file-saver';

import {greeting} from './greeter'
import './style/index.css';

const div = document.createElement('div')
div.innerHTML = 'hello postcss'
div.className = 'hello_postcss'
document.body.append(div)

const str: string = 'Hello TypeScript start';
document.querySelectorAll('.app')[0].innerHTML = str
greeting()

const app = document.querySelector('.app')!;
fromEvent(app, 'click').subscribe((e) => {
  console.log('fromEvent app click . ');
  const jsZip = new JSZip;
  console.log('jsZip is ', jsZip);
  saveAs('abc', 'file.txt',);
})
