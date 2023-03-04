const Shop = () => {
    return (
        <section className="col-span-2 p-20 flex flex-col justify-center gap-6 relative">
            <h1 className="text-customBlack font-bold text-5xl">Discover innovative ways to decorate</h1>
            <p className="text-customGrey">
                We provided unmatched quality, comfort, and style for property
                owners across the country. Our experts combine forms and
                function in bringing your vision to life. Create a room in your
                own style with our collection and make your property a
                reflection of you and what you love.
            </p>
            <button className="group text-customBlack hover:text-customGrey font-semibold uppercase flex items-center tracking-[1rem] duration-500">shop now <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" className="fill-customBlack group-hover:fill-customGrey duration-500" fillRule="nonzero"/></svg></button>
            <div className="absolute bottom-0 left-0 flex w-1/3">
                <button className="w-1/2 h-20 bg-customBlack cursor-pointer grid place-items-center duration-500 hover:bg-customDarkGrey"><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="hsl(0, 0%, 100%)" fill="none" fillRule="evenodd"/></svg></button>
                <button className="w-1/2 h-20 bg-customBlack cursor-pointer grid place-items-center duration-500 hover:bg-customDarkGrey"><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="hsl(0, 0%, 100%)" fill="none" fillRule="evenodd"/></svg></button>
            </div>
        </section>
    )
}

export default Shop;