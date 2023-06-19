import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../img/logo.jpg";

function TopNavComponent() {

  const [top, setTop] = useState(false)

  useEffect(()=>{
    handleSroll();
  }, [top])

  const handleSroll = ()=>{
    window.addEventListener("scroll", ()=>{
    scrollY > 20 ? setTop(true) : setTop(false);
    })

  }
  return (
    <nav  className={` flex items-center bg-white text-black w-full z-10 sticky top-0 ${top ? "shadow-lg" : ""}`}>
      <div className="flex flex-1 p-2 justify-between items-center">
        <div className="flex flex-1">
        <Link className="hover:text-[#cccccc]" to={'/'}><img src={Logo} /></Link>
        </div>
        <div className="flex space-x-3 pr-5">
        <Link target="_blank" className="hover:text-[#cccccc]" to={'https://github.com/RDBagwell?tab=repositories'}>GitHub</Link>
        <Link target="_blank" className="hover:text-[#cccccc]" to={'https://www.linkedin.com/in/robert-bagwell-7b7509167/'}>LinkedIn</Link>
        </div>
      </div>
    </nav>
  )
}

export default TopNavComponent