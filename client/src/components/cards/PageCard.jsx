import { Link } from "react-router-dom";
import { buildAnchor, isURL } from "../../utilities";

// eslint-disable-next-line react/prop-types
function PageCard({title, pageLink, imageUrl, description, count}) {
  const even = count %2 === 0;
  const anchor = buildAnchor(title);
  const url = isURL(imageUrl);
  
  return (
      <div id={anchor} className="mb-40 shadow-lg rounded-md hover:shadow-slate-500 last:mb-10">
        <Link to={pageLink} target="_blank">
        <div className="mb-3">
          <div className="text-xl font-bold">
            {title}
          </div>
          <div className={`w-full flex ${even ? "flex-row" : "flex-row-reverse"} justify-between items-center
          md:flex-col`}>
            <div className={`p-3 text-sm ${even ? "text-left" : "text-right"}
            md:text-center
            `}>
              {description}            
            </div>
            <div className="p-3">
              <img className="rounded-md border border-black"  src={url ? imageUrl :  `./images/${imageUrl}`} alt={title} />  
            </div>
          </div>
        </div>
        </Link>
      </div>
  )
}

export default PageCard