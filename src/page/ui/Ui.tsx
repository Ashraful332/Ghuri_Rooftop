import "./Ui.css"

const Ui = () => {
    return (
        <div className=" mb-7 flex-center ">
            <h2 className="text-4xl font-semibold text-center mb-12">Color</h2>
            <div className="flex items-center border border-white/10">
                <div className="bg-[var(--black)] w-28 h-28  "></div>
                <div className="bg-[var(--pc)]  w-28 h-28  "></div>
                <div className="bg-[var(--pc2)] w-28 h-28 "></div>
                <div className="bg-[var(--sc)]  w-28 h-28 "></div>
            </div>

            <h2 className="text-4xl font-semibold text-center mt-12 mb-5">Heading</h2>
            <div className="flex items-start gap-28">
                <div>
                    <h3 className="text-5xl font-bold">About Our Restaurant</h3>
                    <h3 className="text-4xl font-bold">About Our Restaurant</h3>
                    <h3 className="text-3xl font-bold">About Our Restaurant</h3>
                    <h3 className="text-2xl font-bold">About Our Restaurant</h3>
                    <h3 className="text-xl  font-bold">About Our Restaurant</h3>
                </div>
                <div>
                    <h3 className="text-5xl">About Our Restaurant</h3>
                    <h3 className="text-4xl">About Our Restaurant</h3>
                    <h3 className="text-3xl">About Our Restaurant</h3>
                    <h3 className="text-2xl">About Our Restaurant</h3>
                    <h3 className="text-xl ">About Our Restaurant</h3>
                </div>
            </div>

            <h2 className="text-4xl font-semibold text-center mt-12 mb-5">Paragraph text</h2>
            <div className="flex items-start gap-28">
                <div>
                    <p className="text-lg">About Our Restaurant</p>
                    <p className="text-base">About Our Restaurant</p>
                    <p className="text-sm">About Our Restaurant</p>
                    <p className="text-xs">About Our Restaurant</p>
                </div>
                <div>
                    <p className="text-lg font-bold">About Our Restaurant</p>
                    <p className="text-base font-bold">About Our Restaurant</p>
                    <p className="text-sm font-bold">About Our Restaurant</p>
                    <p className="text-xs font-bold">About Our Restaurant</p>
                </div>
            </div>
            <h2 className="text-4xl font-semibold text-center mt-12 mb-5">Button</h2>
            <div className="flex items-start justify-center gap-28">
                <div className="flex flex-col gap-5 items-start ">
                    <button className="btn-primary">
                        Button
                    </button>
                    <button className="btn-sec">
                        Button
                    </button>
                </div>
                <div className="flex flex-col gap-5 items-start ">
                    <button className="btn-border">
                        Button
                    </button>
                    <button className="btn-border-black">
                        Button
                    </button>
                </div>
            </div>
            <div className="flex items-start justify-center gap-28 mt-5">
                <div className="flex flex-col gap-5 items-start ">
                    <button className="hero-btn">
                        Button
                    </button>
                </div>
                <div className="flex flex-col gap-5 items-start ">
                    
                </div>
            </div>
        </div>
    );
};

export default Ui;