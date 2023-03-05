const Home = () => {
    return (
        <section className="col-span-2 row-span-1 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${require("../../Images/desktop-image-hero-1.jpg")})`}}>
            <div className="absolute bottom-0 -right-1/4 flex w-1/4">
                <button className="w-1/2 h-20 bg-customBlack cursor-pointer grid place-items-center duration-500 hover:bg-customDarkGrey"><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="hsl(0, 0%, 100%)" fill="none" fillRule="evenodd"/></svg></button>
                <button className="w-1/2 h-20 bg-customBlack cursor-pointer grid place-items-center duration-500 hover:bg-customDarkGrey"><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="hsl(0, 0%, 100%)" fill="none" fillRule="evenodd"/></svg></button>
            </div>
        </section>
    )
}

export default Home;

