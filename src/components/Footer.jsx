import AnchorComponent from "./AnchorComponent.jsx";

export default function Footer() {
    return (
        <footer className="py-4 md:py-6 lg:py-8">
            <div className="container mx-auto">
                <p className="text-center text-xs md:text-sm lg:text-base text-[#6A6A6A]">
                    Copyright © 2024 | All rights reserved by {" "}
                    <AnchorComponent
                        customClass="hover:text-[#f8c252] hover:underline"
                        to="https://github.com/montasim"
                    >
                        Ｍ♢ＮＴΛＳＩＭ
                    </AnchorComponent>
                </p>
            </div>
        </footer>
    );
}
