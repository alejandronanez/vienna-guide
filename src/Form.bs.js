// Generated by BUCKLESCRIPT VERSION 5.0.2, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Form(Props) {
  var onChange = Props.onChange;
  var searchTerm = Props.searchTerm;
  return React.createElement("input", {
              placeholder: "Search for places",
              type: "text",
              value: searchTerm,
              onChange: (function ($$event) {
                  return Curry._1(onChange, $$event.target.value);
                })
            });
}

var make = Form;

exports.make = make;
/* react Not a pure module */