import React, {useEffect, useState} from 'react';
import axios from "axios";


export const BlogContext = React.createContext();


export const BlogProvider = ({ children }) => {

    const [dat, setDat] = useState(null);
    const [topSong, setTopsong] = useState(null);
    const [latestNasheed, setLatestNasheed] = useState(null);
    const [newNasheed, setnewNasheed] = useState(null);
    const [hack, setHack] = useState(null);
    const [check, setcheck] = useState(false);
    const [check2,setcheck2 ] = useState(false);


    const getApidata = async () => {
        try {
            await axios.get('https://api.thenasheed.com/api/genres_with_list').then((response) => {

                setDat(response.data.genres)

            })

                .catch((error) => {
                    console.log(error);
                });

        } catch (error) {
            console.error(error);
        }
        try {
            await axios.get('https://api.thenasheed.com/api/top_songs').then((response) => {

                setTopsong(response.data.top_songs)
            })

                .catch((error) => {
                    alert(error)
                });

        } catch (error) {
           alert(error)
        }
        try {
            await axios.get('https://api.thenasheed.com/api/latest_songs').then((response) => {

                setLatestNasheed(response.data.latest_songs)
            })

                .catch((error) => {
                    alert(error)
                });

        } catch (error) {
            alert(error)
        }
        try {
            await axios.get('https://api.thenasheed.com/api/new_songs').then((response) => {

                setnewNasheed(response.data.new_songs)
            })

                .catch((error) => {
                    alert(error)
                });

        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getApidata();
    }, []);

    return (
        <BlogContext.Provider value={{dat, latestNasheed,newNasheed,hack,check, setcheck,check2, setcheck2, topSong,setHack}}>{children}</BlogContext.Provider>
    );
};

export default BlogContext;
