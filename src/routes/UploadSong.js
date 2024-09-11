// import { Icon } from "@iconify/react"
// import { log } from "console"
import { useState } from "react"
import spotify_logo from "../assets/images/spotify_logo_white.svg"
import CloudinaryUpload from "../components/shared/CloudinaryUpload"
import IconText from "../components/shared/IconText"
import TextInput from "../components/shared/TextInput"
import TextWithHover from "../components/shared/TextWithHover"
import {makeAuthenticatedPOSTRequest} from'../utils/serverHelper'
import { useNavigate } from "react-router-dom"


const UploadSong = () => {
    const [name, setName] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    // eslint-disable-next-line
    const [playlistUrl, setPlaylistUrl] = useState("")
    const [uploadedSongFileName, setUploadedSongFileName] = useState()
    const navigate = useNavigate()

    const submitSong = async ()=>{
        const data= {name, thumbnail,track:playlistUrl}
        const response = await makeAuthenticatedPOSTRequest(
            "/song/create",
            data
        )
        if(response.err){
            alert("could not create song")
            return
        }
        alert("Success")
        navigate("/home")
    }

    return (
        <div className="h-full w-full flex">
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
                        active
                    />
                    <IconText
                        iconName={"material-symbols:search"}
                        displayText={"Search"}
                    />
                    <IconText
                        iconName={"icomoon-free:books"}
                        displayText={"Library"}
                    />
                    <IconText
                        iconName={"material-symbols:library-music-sharp"}
                        displayText={"My Music"}
                    />
                </div>
                <div className="pt-5">
                    <IconText
                        iconName={"material-symbols:add-box"}
                        displayText={"Create playlist"}
                    />
                    <IconText
                        iconName={"mdi:heart"}
                        displayText={"Liked Songs"}
                    />
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
                    <div className="text-2xl font-semibold mb-5 text-white mt-8">
                        upload your music
                    </div>
                    <div className="w-2/3 flex space-x-3">
                        <div className="w-1/2">
                            <TextInput
                                label="Name"
                                labelClassName={"text-white"}
                                placeholder="Name"
                                value={name}
                                setValue={setName}
                            />
                        </div>
                        <div className="w-1/2">
                            <TextInput
                                label="Thumbnail"
                                labelClassName={"text-white"}
                                placeholder="Thumbnail"
                                value={thumbnail}
                                setValue={setThumbnail}
                            />
                        </div>

                    </div>
                    <div className="py-5">
                        {uploadedSongFileName ? (
                            <div className="bg-white rounded-full p-3 w-1/3">
                                {uploadedSongFileName.substring(0, 20)}...
                            </div>
                        ) : (
                            <CloudinaryUpload
                                setUrl={setPlaylistUrl}
                                setName={setUploadedSongFileName} 
                                />
                        )}
                    </div>
                    <div className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold" onClick={submitSong}>
                            Submit Song
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadSong