import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=48&playlistId=PL6AREfkbkLFYBnO1eoqMnk0fzhsO42S6S&key=AIzaSyC2wnUh9-JdRSTisOOQ4j4LKr1MCYU65U4", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


