/* eslint-disable react/no-unescaped-entities */
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { useSelector } from 'react-redux';
import { showFirstPage} from '../features/pageLinks/pageLinkSlice'

import PageLinks from "../components/PageLinks"
import me from '../img/me.jpg';
import { buildAnchor } from "../utilities/buildAnchor";
import { useEffect, useState } from "react";

function Home() {
    const firstPage = useSelector(showFirstPage);
    const [anchor, setAnchor ] = useState('');
    useEffect(()=>{
        if(firstPage){
            setAnchor(buildAnchor(firstPage.title));
        }
        
    },[firstPage])
    return (
        <div>
            <div className="
            flex justify-start space-x-10 flex-row w-full mb-10
            md:flex-col md:justify-center md:items-center md:space-y-10 md:pb-4 md:space-x-0
            "
            >
                <div>
                    <img className="w-40 mt-10 border-4 border-r-red-800 border-l-blue-800 border-t-yellow-800 border-b-green-800 rounded-full" src={me} />
                </div>
                <div className="w-4/5 mb-5">
                    <div className="relative">
                        <div className="text-5xl my-10">
                            <div >Hello I'm <span className="text-amber-500 font-bold"> Robert Bagwell</span>.</div>
                            <div>I'm a web developer.</div>
                        </div>
                        <div >
                            <div>
                                I'm passionate about programming. I've been a web developer for over 11 years now. I have tons of hands-on
                                experience efficiently coding websites and applications using the latest technologies, such as NodeJS
                                and ES6. I have expert knowledge of PHP, HTML, CSS, and JavaScript. I'm constantly engaged in learning
                                and expanding my programming expertise by learning other programming languages. I've done everything
                                from building site form scratch to working in a large team on just certain parts of a site. I've worked
                                on big e-commerce sites to small independently owned sites and ran the gamut of being a Full Stack
                                Developer to just focus on UX/UI.
                            </div>
                            <div>
                                So that's my professional background, a little about my personal life. When I'm not programming I enjoy
                                a good movie, I'm a huge movie buff. I also enjoy gaming to relax. Other things about me I like to
                                design and was a graphic designer before I started in web development.
                            </div>
                            <div className="animate-bounce">
                                <a href={`#${anchor}`}>
                                    <ChevronDoubleDownIcon className="h-10 w-10 relative left-1/2 mt-8 mb-56 text-amber-500" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="mt-28">
                <PageLinks />
            </div>
        </div>    
    )
}

export default Home