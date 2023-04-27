"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(args) {
    return args.length;
}
getLength("aaaaa");
getLength(["abc", "cba", "nba", 123]);
var info = {
    length: 100
};
getLength(info);
