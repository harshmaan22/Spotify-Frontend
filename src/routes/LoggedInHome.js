import { useState } from "react";
import { Howl, Howler } from 'howler'
import { Icon } from '@iconify/react';
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import LoggedInContainer from "../containers/LoggedInContainer";

const focusCardsData = [
    {
        title: "Ghost",
        description: "Banger to vibe on everytime",
        imgUrl:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ec/9a/1f/ec9a1fb9-dc98-cd4f-d4c9-01eed5e67b19/859778016276_cover.jpg/1200x1200bb.jpg",
    },
    {
        title: "starboy",
        description: "Banger to vibe on everytime",
        imgUrl:
            "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
    },
    {
        title: "For the night",
        description: "Banger to vibe on everytime",
        imgUrl:
            "https://e-cdn-images.dzcdn.net/images/cover/8a4749e6a4bc34db8799e0f51709c7bf/500x500-000000-80-0-0.jpg",
    },
    {
        title: "lemonade",
        description: "Banger to vibe on everytime",
        imgUrl:
            "https://i.pinimg.com/474x/e0/c4/99/e0c4990bfb268ab6319c203484aba1a6.jpg",
    },
    {
        title: "God's Plan",
        description: "Banger to vibe on everytime",
        imgUrl:
            "https://e-cdn-images.dzcdn.net/images/cover/b69d3bcbd130ad4cc9259de543889e30/500x500-000000-80-0-0.jpg",
    },
];

const spotifyPlaylistData = [
    {
        title: "Hip Hop",
        description: "to vibe on everytime",
        imgUrl:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ec/9a/1f/ec9a1fb9-dc98-cd4f-d4c9-01eed5e67b19/859778016276_cover.jpg/1200x1200bb.jpg",
    },
    {
        title: "starboy",
        description: "Banger to vibe on everytime",
        imgUrl:
            "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
    },
    {
        title: "For the night",
        description: "Banger to vibe on everytime",
        imgUrl:
            "https://e-cdn-images.dzcdn.net/images/cover/8a4749e6a4bc34db8799e0f51709c7bf/500x500-000000-80-0-0.jpg",
    },
    {
        title: "lemonade",
        description: "Banger to vibe on everytime",
        imgUrl:
            "https://i.pinimg.com/474x/e0/c4/99/e0c4990bfb268ab6319c203484aba1a6.jpg",
    },
    {
        title: "God's Plan",
        description: "Banger to vibe on everytime",
        imgUrl:
            "https://e-cdn-images.dzcdn.net/images/cover/b69d3bcbd130ad4cc9259de543889e30/500x500-000000-80-0-0.jpg",
    },
];


const Home = () => {
    return (
        <LoggedInContainer curActiveScreen="home">
            <PlaylistView 
                titleText="Focus" 
                cardsData={focusCardsData} 
                />
            <PlaylistView
                titleText="Playlists"
                cardsData={spotifyPlaylistData}
            />
            <PlaylistView 
                titleText="recommended" 
                cardsData={focusCardsData} 
                />
        </LoggedInContainer>
    )
}


// const Home = () => {

//     const [SoundPlayed, setSoundPlayed] = useState(null)
//     const [isPaused, setIsPaused] = useState(true)

//     const playSound = (songSrc) => {
//         if (SoundPlayed) {
//             SoundPlayed.stop()
//         }
//         let sound = new Howl({
//             src: [songSrc],
//             html5: true,
//         })
//         setSoundPlayed(sound)
//         sound.play()
//     }


//     const pauseSound = ()=>{
//         SoundPlayed.pause()
//     }

//     const togglePlayPause = ()=>{
//         if(isPaused){
//             playSound(
//                 "https://res.cloudinary.com/dmkctpdyk/video/upload/v1702316107/ikgi86pr4hymk8l81lcv.mp3"
//             )
//             setIsPaused(false)
//         }
//         else{
//             pauseSound()
//             setIsPaused(true)
//         }
//     }


//     return (
//         <div className="h-full w-full bg-app-black">
//             <div className="h-9/10 w-full flex">
//                 {/* this div will be the left panel */}
//                 <div className="h-full w-1/5 bg-black">
//                     {/* this div is of logo */}
//                     <div className="logoDiv p-6">
//                         <img src={spotify_logo} alt="spotify logo" width={130} />
//                     </div>
//                     <div className="py-5">
//                         <IconText
//                             iconName={"material-symbols-light:home"}
//                             displayText={"Home"}
//                             active
//                         />
//                         <IconText
//                             iconName={"material-symbols:search"}
//                             displayText={"Search"}
//                         />
//                         <IconText iconName={"icomoon-free:books"} displayText={"Library"} />
//                         <IconText
//                             iconName={"material-symbols:library-music-sharp"}
//                             displayText={"My Music"}
//                         />
//                     </div>
//                     <div className="pt-5">
//                         <IconText
//                             iconName={"material-symbols:add-box"}
//                             displayText={"Create playlist"}
//                         />
//                         <IconText iconName={"mdi:heart"} displayText={"Liked Songs"} />
//                     </div>
//                 </div>
//                 {/* and this second will be right part */}
//                 <div className="h-full w-4/5 bg-app-black overflow-auto">
//                     <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
//                         <div className="w-1/2 flex h-full">
//                             <div className="w-2/3 flex justify-around items-center">
//                                 <TextWithHover displayText={"Premium"} />
//                                 <TextWithHover displayText={"Support"} />
//                                 <TextWithHover displayText={"Download"} />
//                                 <div className="h-1/2 border-r border-white"></div>
//                             </div>
//                             <div className="w-1/3 flex justify-around h-full items-center">
//                                 <TextWithHover displayText={"Upload Song"} />
//                                 <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
//                                     HM
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="content p-8 pt-0 overflow-auto">
//                         <PlaylistView titleText="Focus" cardsData={focusCardsData} />
//                         <PlaylistView
//                             titleText="Playlists"
//                             cardsData={spotifyPlaylistData}
//                         />
//                         <PlaylistView titleText="recommended" cardsData={focusCardsData} />
//                     </div>
//                 </div>
//             </div>
//             {/* // this div is current playing song */}
//             <div className="w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
//                 <div className="w-1/4 flex items-center">
//                     <img
//                         src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ec/9a/1f/ec9a1fb9-dc98-cd4f-d4c9-01eed5e67b19/859778016276_cover.jpg/1200x1200bf-60.jpg"
//                         alt="currentSongThumbnail"
//                         className="h-14 w-14 rounded"
//                     />
//                     <div className="pl-4">
//                         <div className="text-sm hover:underline cursor-pointer">Ghost</div>
//                         <div className="text-xs text-gray-400 hover:underline cursor-pointer">Diljit Dosanjh</div>
//                     </div>
//                 </div>
//                 <div
//                     className="w-1/2 flex justify-center h-full flex-col items-center classname= cursor-pointer" >
//                 <div className="flex w-1/3 justify-between items-center">
//                     {/* controls for the play the playlist here */}
//                     <Icon
//                         icon="ph:shuffle-fill"
//                         fontSize={30}
//                         classname="cursor-pointer text-gray-500 hover:text-white" />
//                     <Icon
//                         icon="mdi:skip-previous-outline" fontSize={30}
//                         classname="cursor-pointer text-gray-500 hover:text-white" />
//                     <Icon
//                         icon={
//                             isPaused ? "ic:baseline-play-circle"
//                         : "ic:baseline-pause-circle"
//                     } 
//                         fontSize={50}
//                         classname="cursor-pointer text-gray-500 hover:text-white"
//                         onClick={togglePlayPause}
//                         />
//                     <Icon
//                         icon="mdi:skip-next-outline" fontSize={30}
//                         classname="cursor-pointer text-gray-500 hover:text-white" />
//                     <Icon
//                         icon="ic:twotone-repeat" fontSize={30}
//                         classname="cursor-pointer text-gray-500 hover:text-white" />
//                 </div>
//                 {/* <div>progress bar</div> */}
//             </div>
//             <div className="w-1/4 flex justify-end"></div>
//         </div>
//     </div >
//   );
// };

const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    // carddata will be an array
                    cardsData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4">
                <img className="w-full rounded-md" src={imgUrl} alt="label" />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;
