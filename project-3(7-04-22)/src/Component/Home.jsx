import React from "react";
import { Offline, Online } from "react-detect-offline";

function Home() {
  return (
    <main>
     <Online>
     <h1>  Welcome To The Home  </h1>
       <img src ="https://i.pinimg.com/736x/5a/d4/2b/5ad42b0b378888ceb02fa607a04f2580.jpg" height='35%' width='50%'/>
     </Online>
    <Offline> 
    <h1>  Oops Check your internet connection  , U wented Offline  Turn On Your Data</h1>
      <img src ="oops.jpg" height='35%' width='50%'/>
    </Offline>
    </main>
  );
}

export default Home;
