import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
 
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);   
var srcString;
root.render(<App />);

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=48&playlistId=PL6mpdDsiT31g0kMDnaMsX0MRu424Lom5O&key=AIzaSyC2wnUh9-JdRSTisOOQ4j4LKr1MCYU65U4", requestOptions)
  .then(response => response.text())
  .then(result => {
    var data = JSON.parse(result).items;

    data.forEach(element => {
      const vidId = element.snippet.resourceId.videoId
      srcString = "https://www.youtube.com/embed/" + vidId;
    });

    var nextBtn = document.getElementById('nextBtn')
    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        var currentUrl = document.getElementsByClassName('trl-player')[0].src.split('/embed/')[1]
        data.forEach(element => {
          
          let urlArr = element.contentDetails.videoId

          if (currentUrl == urlArr) {
            for (let [index, item] of data.entries()) {
              if (currentUrl == item.contentDetails.videoId) {
                var nextIndex = index - 1;
                console.log(index + "current index." + nextIndex + "next")
                console.log(data[nextIndex])
                var nextUrl = document.getElementsByClassName('trl-player')[0].src = "https://www.youtube.com/embed/" + data[nextIndex].contentDetails.videoId

              }
              // your code goes here    
            }

          }

        })


        srcString = "https://www.youtube.com/embed/";

      })
    }

  })
  .catch(error => console.log('error', error));

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


const observer = new MutationObserver(list => {
  var iframePlayer = document.querySelector(".trl-player")
  if (iframePlayer) {
    console.log('hiiiiiiiiiii')
    console.log(iframePlayer.src)
    setTimeout(function () {
      iframePlayer.src = srcString
    }, 9000)

    stopObserving()

  }

});
observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true
});

function stopObserving() {
  observer.disconnect();
}