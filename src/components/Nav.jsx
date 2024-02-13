
import ButtonMenu from "./ButtonMenu";


const Nav = () => {
    function clickMenu() {
        //  grab everything we nedd
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        // add event listeners button
        btn.addEventListener(
            "click",
            (() => {
                menu.classList.toggle("hidden");
            })()
        );
    }

    return (
        <div className="py-6 px-4 container flex justify-between items-center mx-auto md:px14 lg:px-8 w-full">
            <div className="text-lg font-bold">Gerardo Montini</div>
            <div className="hidden md:flex space-x-12 items-center">
                <a href="!#" className="text-selected-text">
                    Inicio
                </a>
                <a href="#work">Mi trabajo</a>
                <a href="#tech">Tecnologías</a>
                <a href="#hire">
                    <button className="px-6 py-2 bg-theme font-bold">
                        Contactame
                    </button>
                </a>
            </div>
            {/* Mobile button */}
            <div className="z-50 md:hidden">
                <ButtonMenu />
            </div>
        </div>
    );
};

export default Nav;
