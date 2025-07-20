"use client";
import Silk from "@/blocks/Backgrounds/Silk/Silk";
import { Navbar } from "@/modules/home/ui/components/navbar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
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
            <Navbar />
            <div className="flex-1 flex flex-col px-4 pb-4">
                {children}
            </div>
            
        </main>
    )
}

export default Layout; 