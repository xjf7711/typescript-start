/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-25 17:32:46
 */
import { greeting } from './greeter'
let str: string = 'Hello TypeScript .... '
document.querySelectorAll('.app')[0].innerHTML = str
greeting()