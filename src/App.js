import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Work from "./components/Work";
import HireMe from "./components/HireMe";
import Technologies from "./components/Technologies";
import Certificados from "./components/Certificados";
import Experiencia from "./components/Experiencia";
import Metrics from "./components/Metrics";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            const main = document.getElementById("main");
            main.style.opacity = 1;
            main.style.filter = "blur(0px)";
        }, 1000);
    }, []);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                BIRDS({
                    el: headerRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    backgroundColor: 0x000000,
                    color1: 0x3b82f6,
                    color2: 0x8b5cf6,
                    birdSize: 1.2,
                    wingSpan: 25.0,
                    separation: 50.0,
                    alignment: 50.0,
                    cohesion: 50.0,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <ThemeProvider>
            <div className="h-full w-full text-white font-poppins pb-12 transition-all duration-300"
                 style={{
                   backgroundColor: 'var(--bg-body)',
                   color: 'var(--text-color)'
                 }}>
                <div
                    ref={headerRef}
                    className="w-full h-screen absolute top-0 left-0 z-0"
                />
                <ThemeToggle />
                <main id="main" className="w-full relative">
                    <Nav />
                    <Header />
                    <Work />
                    <Technologies />
                    <Experiencia />
                    <Metrics />
                    <Certificados />
                    <HireMe />
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;
