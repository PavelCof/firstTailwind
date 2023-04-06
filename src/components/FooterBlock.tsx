import { StartButton } from "../StartButton/StartButton";
import logo from './../imgs/lavygin.jpg';
import logovk from './../imgs/VK_Compact_Logo.svg';
import logozen from './../imgs/zen-logo.png';

export function FooterBlock() {
    return(
        <>
                <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0 rounded-lg bg-sitered">
        <h2 className=" text-5xl font-bold leading-tight  md:text-4xl md:max-w-xl md:text-left text-white">Выбери свое блюдо </h2>
        { StartButton("block")}
            </div>
            <footer className="container bg-gray-dark mx-auto rounded-lg">
                <div className="flex flex-col-reverse justify-between px-5 py-10 space-y-8 md:flow-row  md:space-y-0">
                <div className="flex  items-center justify-between space-y-12 md:flex-row md:space-y-0 md:items-start">
                    {/* logo */}

                    <div>
                        <img src={logo} className="max-h-20 rounded-lg" alt="" />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="#" >
                        <img src={logovk} className=' max-h-[25px]' alt="" />
                        </a>
                        <a href="#" >
                        <img src={logozen} className=' max-h-[25px] bg-white p-[3px] rounded-lg' alt="" />
                        </a>
                    </div>

                </div>
                </div>
            </footer>
        </>

    )
}