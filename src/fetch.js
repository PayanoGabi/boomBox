import React from "react";


export default function HandleFetch(){
  
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=48&playlistId=PL6mpdDsiT31g0kMDnaMsX0MRu424Lom5O&key=AIzaSyC2wnUh9-JdRSTisOOQ4j4LKr1MCYU65U4", requestOptions)
            .then((response) =>  response.json())
            .then((json) => (json))
   
}


