
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .nav-link {
                    position: relative;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background-color: #d1a054;
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                #mobile-menu {
                    transition: all 0.3s ease;
                }
            </style>

            <nav class="bg-black bg-opacity-90 text-white py-4 px-6 sticky top-0 z-50 border-b border-yellow-500 border-opacity-20">
                <div class="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="/" class="flex items-center space-x-2">
                        <i data-feather="star" class="text-yellow-400"></i>
                        <span class="text-xl font-bold">The Stellars Club</span>
                    </a>

                    <div class="hidden md:flex items-center space-x-8">
                        <a href="/" class="nav-link">Home</a>
                        <a href="#events" class="nav-link">Events</a>
                        <a href="#perform" class="nav-link">Perform</a>
                        <a href="#" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition duration-300">
                            Join Us
                        </a>
                    </div>

                    <button id="mobile-menu-button" class="md:hidden text-yellow-400 focus:outline-none">
                        <i data-feather="menu"></i>
                    </button>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden md:hidden mt-4 space-y-4 pb-4">
                    <a href="/" class="block nav-link">Home</a>
                    <a href="#events" class="block nav-link">Events</a>
                    <a href="#perform" class="block nav-link">Perform</a>
                    <a href="#" class="block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition duration-300 w-max">
                        Join Us
                    </a>
                </div>
            </nav>
        `;

        const menuButton = this.querySelector('#mobile-menu-button');
        const mobileMenu = this.querySelector('#mobile-menu');
        const icon = menuButton.querySelector('i');

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');

            icon.setAttribute(
                'data-feather',
                mobileMenu.classList.contains('hidden') ? 'menu' : 'x'
            );

            feather.replace();
        });

        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);

