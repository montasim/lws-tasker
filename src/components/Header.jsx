import AnchorComponent from "./AnchorComponent.jsx";
import ImageComponent from "./ImageComponent.jsx";
import Logo from '../assets/logo.png';

export default function Header() {
    return (
        <nav className="py-3 md:py-3 lg:py-2 fixed top-0 w-full bg-[#191D26] z-50">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
                <AnchorComponent
                    customClass="flex items-center gap-x-2 md:gap-x-4 text-white"
                    to="/"
                >
                    <ImageComponent
                        customClass="h-8 md:h-10 lg:h-12"
                        src={Logo}
                        width=""
                        height=""
                        alt="Logo"
                    />

                    <span className="text-sm md:text-base lg:text-lg font-semibold">MONTASIM -AL- MAMUN</span>
                </AnchorComponent>
            </div>
        </nav>
    );
}
