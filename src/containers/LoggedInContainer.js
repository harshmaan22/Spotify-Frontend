import { Children, useContext, useState, useRef, useLayoutEffect } from "react";
import { Howl, Howler } from 'howler'
import { Icon } from '@iconify/react';
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";


const LoggedInContainer = ({ children, curActiveScreen }) => {


    const { currentSong, setCurrentSong, SoundPlayed, setSoundPlayed, isPaused, setIsPaused } = useContext(songContext)

    const firstUpdate = useRef(true)


    useLayoutEffect(() => {

        if (firstUpdate.current) {
            firstUpdate.current = false
            return
        }

        if (!currentSong) {
            return
        }

        changeSong(currentSong.track)

    }, [currentSong && currentSong.track])

    const playSound = () => {
        if (!SoundPlayed) {
            return
        }
        SoundPlayed.play()
    }


    const changeSong = (songSrc) => {
        if (SoundPlayed) {
            SoundPlayed.stop()
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        })
        setSoundPlayed(sound)
        sound.play()
        setIsPaused(false)
    }


    const pauseSound = () => {
        SoundPlayed.pause()
    }

    const togglePlayPause = () => {
        if (isPaused) {
            playSound(
                currentSong.track
            )
            setIsPaused(false)
        }
        else {
            pauseSound()
            setIsPaused(true)
        }
    }


    return (
        <div className="h-full w-full bg-app-black">
            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
                {/* this div will be the left panel */}
                <div className="h-full w-1/5 bg-black">
                    {/* this div is of logo */}
                    <div className="logoDiv p-6">
                        <img src={spotify_logo} alt="spotify logo" width={130} />
                    </div>
                    <div className="py-5">
                        <IconText
                            iconName={"material-symbols-light:home"}
                            displayText={"Home"}
                            targetLink={"/home"}
                            active={curActiveScreen ==="home"}
                        />
                        <IconText
                            iconName={"material-symbols:search"}
                            displayText={"Search"}
                            active={curActiveScreen ==="search"}
                            targetLink={"/search"}
                        />
                        <IconText 
                        iconName={"icomoon-free:books"} 
                        displayText={"Library"}
                        active={curActiveScreen ==="library"}
                        />
                        <IconText
                            iconName={"material-symbols:library-music-sharp"}
                            displayText={"My Music"}
                            targetLink="/myMusic"
                            active={curActiveScreen ==="myMusic"}
                        />
                    </div>
                    <div className="pt-5">
                        <IconText
                            iconName={"material-symbols:add-box"}
                            displayText={"Create playlist"}
                        />
                        <IconText iconName={"mdi:heart"} displayText={"Liked Songs"} />
                    </div>
                </div>
                {/* and this second will be right part */}
                <div className="h-full w-4/5 bg-app-black overflow-auto">
                    <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                        <div className="w-1/2 flex h-full">
                            <div className="w-2/3 flex justify-around items-center">
                                <TextWithHover displayText={"Premium"} />
                                <TextWithHover displayText={"Support"} />
                                <TextWithHover displayText={"Download"} />
                                <div className="h-1/2 border-r border-white"></div>
                            </div>
                            <div className="w-1/3 flex justify-around h-full items-center">
                                <TextWithHover displayText={"Upload Song"} />
                                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                    HM
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content p-8 pt-0 overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
            {/* // this div is current playing song */}
            {
                currentSong &&

                <div className="w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
                    <div className="w-1/4 flex items-center">
                        <img
                            src={currentSong.thumbnail}
                            alt="currentSongThumbnail"
                            className="h-14 w-14 rounded"
                        />
                        <div className="pl-4">
                            <div className="text-sm hover:underline cursor-pointer">
                                {currentSong.name}
                            </div>
                            <div className="text-xs text-gray-400 hover:underline cursor-pointer">
                                {currentSong.artist.firstName + " " + currentSong.artist.lastName}
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-1/2 flex justify-center h-full flex-col items-center classname= cursor-pointer" >
                        <div className="flex w-1/3 justify-between items-center">
                            {/* controls for the play the playlist here */}
                            <Icon
                                icon="ph:shuffle-fill"
                                fontSize={30}
                                classname="cursor-pointer text-gray-500 hover:text-white" />
                            <Icon
                                icon="mdi:skip-previous-outline" fontSize={30}
                                classname="cursor-pointer text-gray-500 hover:text-white" />
                            <Icon
                                icon={
                                    isPaused ? "ic:baseline-play-circle"
                                        : "ic:baseline-pause-circle"
                                }
                                fontSize={50}
                                classname="cursor-pointer text-gray-500 hover:text-white"
                                onClick={togglePlayPause}
                            />
                            <Icon
                                icon="mdi:skip-next-outline" fontSize={30}
                                classname="cursor-pointer text-gray-500 hover:text-white" />
                            <Icon
                                icon="ic:twotone-repeat" fontSize={30}
                                classname="cursor-pointer text-gray-500 hover:text-white" />
                        </div>
                        {/* <div>progress bar</div> */}
                    </div>
                    <div className="w-1/4 flex justify-end"></div>
                </div>
            }
        </div>
    )
}


export default LoggedInContainer;
