import React, { useEffect, useState } from "react";
function Youtube() {
  const [YouTubevideo, setYouTubevideo] = useState([]);
  useEffect(() => {
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDJczy3W1sn-s7WgBHkxjxkW7q4AZH4dWE&channelId=UCu_cw24sL1JApWm8rcxshog&part=snippet,id&order=date&maxResults=9")

      .then(res=>res.json())
      .then((data) => {
        console.log(data)
        
        setYouTubevideo(data.items);
      });
  }, []);
  console.log(YouTubevideo);

  return (
    <div className="video-section">
      <div className="video-wrapper">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-Wrapper">
              <h1>Apple latest videos</h1> <br />
            </div>
          </div>

          {YouTubevideo?.map((eachVideo) => {
            let vId = eachVideo.id.videoId;
            let vLink = `https://www.youtube.com/watch?v=${vId}`;
            let vWrapper = (
              <div key={vId} className="col-sm-12 col-md-6 col-lg-4">
                <div className="eachvideoWrapper" >
                  <div className="videoInfo">
                    <a href={vLink} target="_blank">
                      <img src={eachVideo.snippet.thumbnails.high.url} />
                    </a>
                    
                  </div>
                  <div className="videoInfo">
                    <div className="videoTitle">
                      <a href={vLink} target="_blank">
                        {eachVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDiscription">
                      {eachVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return vWrapper;
          })}
        </div>
      </div>
    </div>
  );
}
export default Youtube;