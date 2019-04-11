// Generated by BUCKLESCRIPT VERSION 5.0.2, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Pill(Props) {
  var name = Props.name;
  var onClick = Props.onClick;
  var getNamesForVisibilityFilter = function (vf) {
    switch (vf) {
      case 0 : 
          return "Museums";
      case 1 : 
          return "Cafes";
      case 2 : 
          return "All places";
      
    }
  };
  return React.createElement("button", {
              onClick: (function ($$event) {
                  $$event.preventDefault();
                  return Curry._1(onClick, name);
                })
            }, getNamesForVisibilityFilter(name));
}

var make = Pill;

exports.make = make;
/* react Not a pure module */
