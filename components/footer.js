
class CustomFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();

        this.innerHTML = `
            <style>
                .social-icon {
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    transform: translateY(-3px);
                    color: #d1a054;
                }
            </style>

            <footer class="bg-gray-900 text-white py-12 px-6 border-t border-yellow-500 border-opacity-20">
                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <!-- Brand -->
                    <div>
                        <h3 class="text-xl font-bold mb-4 text-yellow-400">
                            The Stellars Club
                        </h3>
                        <p class="mb-4">
                            Where voices shine as bright as the stars.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="social-icon" aria-label="Facebook">
                                <i data-feather="facebook"></i>
                            </a>
                            <a href="#" class="social-icon" aria-label="Instagram">
                                <i data-feather="instagram"></i>
                            </a>
                            <a href="#" class="social-icon" aria-label="Twitter">
                                <i data-feather="twitter"></i>
                            </a>
                            <a href="#" class="social-icon" aria-label="YouTube">
                                <i data-feather="youtube"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="text-xl font-bold mb-4 text-yellow-400">
                            Quick Links
                        </h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="/" class="hover:text-yellow-400 transition duration-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#events" class="hover:text-yellow-400 transition duration-300">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#perform" class="hover:text-yellow-400 transition duration-300">
                                    Perform With Us
                                </a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-yellow-400 transition duration-300">
                                    Gallery
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div>
                        <h3 class="text-xl font-bold mb-4 text-yellow-400">
                            Contact Us
                        </h3>
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <i data-feather="mail" class="text-yellow-400"></i>
                                <span>contact@thestellarsclub.com</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i data-feather="phone" class="text-yellow-400"></i>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i data-feather="map-pin" class="text-yellow-400"></i>
                                <span>123 Stellar Avenue, Poetry City</span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Bottom -->
                <div class="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
                    <p>&copy; ${year} The Stellars Club. All rights reserved.</p>
                </div>
            </footer>
        `;

        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);

