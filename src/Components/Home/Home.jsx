import { useState } from "react";

const Home = () => {
    const [imageNumber, setImageNumber] = useState(1);
    const imageURL = require(`../../Images/desktop-image-hero-${imageNumber}.jpg`);

    const handleClicks = (action) => {
        switch (action) {
            case "NEXT": if (imageNumber < 3) setImageNumber(previous => ++previous); break;
            case "PREVIOUS": if (imageNumber > 1) setImageNumber(previous => --previous); break;
            default: break;
        }
    }

    return (
        <section className="col-span-2 row-span-1 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${imageURL})`}}>
            <div className="absolute bottom-0 -right-1/4 flex w-1/4">
                <button onClick={() => handleClicks("PREVIOUS")} className="w-1/2 h-20 bg-customBlack cursor-pointer grid place-items-center duration-500 hover:bg-customDarkGrey"><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="hsl(0, 0%, 100%)" fill="none" fillRule="evenodd"/></svg></button>
                <button onClick={() => handleClicks("NEXT")} className="w-1/2 h-20 bg-customBlack cursor-pointer grid place-items-center duration-500 hover:bg-customDarkGrey"><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="hsl(0, 0%, 100%)" fill="none" fillRule="evenodd"/></svg></button>
            </div>
        </section>
    )
}

export default Home;

