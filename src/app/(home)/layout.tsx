"use client";
// import Silk from "@/blocks/Backgrounds/Silk/Silk";
import { Navbar } from "@/modules/home/ui/components/navbar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <main className="flex flex-col min-h-screen ">
                {/* <div className="fixed inset-0 -z-10 bg-neutral-900"> */}
                {/* <Silk
                    speed={2}
                    scale={0.5}
                    color="#7B7481"
                    // color="#FFFFFF"
                    noiseIntensity={1.5}
                    rotation={0}
                    /> */}
                {/* </div> */}
                <div className="fixed inset-0 -z-10 overflow-hidden">
                    <div className="splash-painting absolute top-[15%] left-[20%] opacity-40 rotate-12"></div>
                    <div className="splash-painting absolute top-[25%] right-[25%] opacity-35 -rotate-45 scale-90"></div>
                    <div className="splash-painting absolute bottom-[30%] left-[15%] opacity-30 rotate-[60deg] scale-75"></div>
                    <div className="splash-painting absolute bottom-[20%] right-[30%] opacity-35 -rotate-12"></div>
                    <div className="splash-painting absolute top-[45%] left-[45%] opacity-25 rotate-[30deg] scale-80"></div>
                    <div className="splash-painting absolute top-[60%] right-[15%] opacity-30 -rotate-[75deg] scale-85"></div>
                </div>

                <Navbar />
                <div className="flex-1 flex flex-col px-4 pb-4">
                    {children}
                </div>

            </main>
        </>
    )
}

export default Layout; 