/*global chrome*/

import React from "react";
import "./App.css";
import { Button } from "antd";
import { removeReposts } from "./removeReposts";

const REMOVE_EVERY_MS = 100;


function executeFunctionInActiveTab(fn) {
  const payload = {
    code: `(${fn.toString()})();` //argument here is a string but function.toString() returns function's code
  };
  console.log("payload", payload);
  chrome.tabs.executeScript(payload, results => {
    //Here we have just the innerHTML and not DOM structure
    console.log("Popup script:");
    console.log("results", results);
  });
}

function removeRepostsInActiveTab() {
  return executeFunctionInActiveTab(removeReposts);
}

function compileReleaseRadarInActiveTab() {
  chrome.tabs.executeScript({file: '/executeCompileReleaseRadar.js'})
}

function App() {
  let stopInterval;

  const start = () => {
    console.log("Starting removal loop");
    const intervalHandle = setInterval(
      removeRepostsInActiveTab,
      REMOVE_EVERY_MS
    );
    stopInterval = () => clearInterval(intervalHandle);
  };

  const stop = () => {
    console.log("Stopping removal loop");
    stopInterval();
    stopInterval = undefined;
  };

  const releaseRadar = () => {
    compileReleaseRadarInActiveTab();
  };

  return (
    <div className="App">
      <Button onClick={start} htmlType="button">
        Start
      </Button>
      <Button onClick={stop} htmlType="button">
        Stop
      </Button>
      <Button onClick={releaseRadar} htmlType="button">
        RR
      </Button>
    </div>
  );
}

export default App;
