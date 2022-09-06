import {useEffect, useState} from 'react'

 function AppleYoutube() {
    const[youTubeVideos,setYouTubeVideos]=useState([]);
    useEffect(()=>{
        fetch( "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC1VPOLeKxJjBbA7x0vAfxKjr-i63XY8oo&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
        )
        .then((response)=>response.json())
        .then((data)=>{
const videos=data.items;
setYouTubeVideos(videos)
        });
    },[]);
  return (
    
<section className="youtubeVideosWrapper">
  <div className='allVideosWrapper'>
    <div className='container'>
      <div className='row justify-content-center text-center'>
        <div className='col-12'>
          <div className='title-wrapper'>
            Latest videos <br />
            <br />
            
          </div>
          
        </div>
        {youTubeVideos?.map((singleVideo,i)=>{
          let VidId=singleVideo.id.videoId;
          let vidLink= 'https://www.youtube.com/watch?v=${vidId}';
          let videoWrapper={
            <div key={i} className="col-sm-12 col-md-6 col-lg-4">
            <div className='singleVideoWrapper'>
            <div className='videoThumbnail'>
            <a href={vidLink} target="-blank"
            rel="noreferrer">
            <img
            src={singleVideo.snippet.thumbnails.high.url}
            alt="thumbnails"
            />
            </a>
              
            </div>
            <div className='videoInfoWrapper'>
            <div className='videoTitle'>
            <a href={vidLink} target="_black" 
            rel="noreferrer">{singleVideo.singleVideo.snippet.title}
            </a>
              
            </div>
            <div className='videoDesc'>
            {singleVideo.snippet.description}
              
            </div>
              
            </div>
              
            </div>
              
            </div>
          };
          return videoInfoWrapper;

        })}

      </div>
    
    </div>

  </div>
</section>


  
  )
}

export default AppleYoutube