import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function MyForm() {
  return (
    <form>
    <label>Chrome Extension - Total Request Live:
      <div id="player">
        <iframe id="inlineFrameExample" title="Inline Frame Example" width="300" height="200" src="https://www.youtube.com//embed/PL6AREfkbkLFYBnO1eoqMnk0fzhsO42S6S">
        </iframe>
      </div>

      <p>Enter Artist Name</p>
      <input label="name-artist" placeholder="Enter Artist Name" type="text"></input>
      <button type="submit">Old Interviews</button>
      <button type="submit">Funkadelic</button>
      <button type="submit">Comdedy</button>
      <button type="submit">Focus</button>
    </label>
  </form>
   
  )
}

root.render(<StrictMode><MyForm /></StrictMode>);

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://youtube.googleapis.com/youtube/v3/search?q=PL6AREfkbkLFYBnO1eoqMnk0fzhsO42S6S&key=AIzaSyC2wnUh9-JdRSTisOOQ4j4LKr1MCYU65U4&maxResults=45", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


