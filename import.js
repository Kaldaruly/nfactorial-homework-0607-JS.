import { cloth, getShop_name } from "./test.js";
cloth();
getShop_name("socks");

import { cloth as c, getShop_name as gSn } from "./test.js";
c();
gSn("socks");

import * as cloth from "./test";
cloth.T_short();
cloth.coat("chanel");

import cloth from "./test.js"; // not {User}, just User

console.log(cloth.length);
