import ImageComponent from "./ImageComponent.jsx";
import Frame from '../assets/frame.png';

export default function HeroSection() {
    return (
        <section className="pb-12 md:pb-20 lg:pb-28 pt-10 md:pt-16 lg:pt-20">
            <div className="container px-4 lg:px-20">
                <div className="grid items-center gap-6 md:grid-cols-2">
                    <div className="flex justify-center order-2 md:order-none">
                        <ImageComponent
                            customClass="max-w-full"
                            src={Frame}
                            width="326"
                            height="290"
                            alt="frame"
                        />
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-[#F5BF42] mb-2 lg:mb-4">
                            Tasker
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl my-2 opacity-60">
                            Effortlessly Organize, Prioritize, and Conquer Tasks
                            with Tasker - Your Personal Productivity Ally for
                            Seamless Goal Achievement and Stress-Free Task
                            Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
