class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .footer-container {
                    max-width: 1400px;
                    margin: 0 auto;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }
                
                @media (min-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                
                @media (min-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1.2fr 0.8fr 1fr;
                        gap: 2.5rem;
                    }
                }
                
                .quick-links-section {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                @media (min-width: 768px) {
                    .quick-links-section {
                        align-items: flex-start;
                    }
                }
                
                .footer-link {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 0;
                }
            </style>
            
            <footer class="bg-blue-900 relative overflow-hidden">
                <!-- Decorative Background Elements -->
                <div class="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
                <div class="absolute bottom-0 left-0 w-72 h-72 bg-yellow-900 rounded-full filter blur-3xl opacity-10"></div>
                
                <div class="py-12 md:py-16 relative z-10">
                <div class="footer-container px-4 sm:px-6 lg:px-8">
                    <div class="footer-grid">
                        <!-- Company Info -->
                        <div>
                            <div class="flex items-center mb-4">
                                <div class="bg-gradient-to-br from-yellow-500 to-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-900">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                </div>
                                <h3 class="text-lg md:text-xl font-bold text-white">Dakshit Luxury PG</h3>
                            </div>
                            <p class="mb-6 text-gray-300 text-sm leading-relaxed">Premium accommodation for gents with attached bathrooms, AC & Non-AC rooms, and 3 times delicious food in Chennai.</p>
                            <div class="flex space-x-3">
                                <a href="https://wa.me/917702051836" target="_blank" class="social-icon bg-green-600 p-3 rounded-xl hover:bg-green-500 text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50" title="WhatsApp">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                </a>
                                <a href="https://rentok.com/property/dakshit6" target="_blank" class="social-icon bg-white p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/50" title="RentOK">
                                    <img src="Images/RentOk.png" alt="RentOK" class="w-6 h-6 object-contain">
                                </a>
                                <a href="https://www.justdial.com/Chennai/Dakshit-Luxury-Pg-Accommodation-Sholinganallur/044PXX44-XX44-240620040921-R4K5_BZDET" target="_blank" class="social-icon bg-white p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50" title="JustDial">
                                    <img src="Images/JustDial.png" alt="JustDial" class="w-6 h-6 object-contain">
                                </a>
                            </div>
                        </div>
                        
                        <!-- Quick Links -->
                        <div class="quick-links-section">
                            <h4 class="font-bold mb-6 text-lg text-white flex items-center">
                                <div class="w-1 h-6 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-full mr-3"></div>
                                Quick Links
                            </h4>
                            <ul class="space-y-4 w-full">
                                <li>
                                    <a href="#about" class="flex items-center text-gray-300 group hover:text-yellow-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 flex-shrink-0 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <span class="text-sm">About Us</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#rooms" class="flex items-center text-gray-300 group hover:text-yellow-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 flex-shrink-0 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <span class="text-sm">Rooms</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#amenities" class="flex items-center text-gray-300 group hover:text-yellow-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 flex-shrink-0 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <span class="text-sm">Amenities</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#reviews" class="flex items-center text-gray-300 group hover:text-yellow-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 flex-shrink-0 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <span class="text-sm">Reviews</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <!-- Contact Info -->
                        <div>
                            <h4 class="font-bold mb-6 text-lg text-white flex items-center">
                                <div class="w-1 h-6 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-full mr-3"></div>
                                Contact Info
                            </h4>
                            <ul class="space-y-4">
                                <li class="flex items-start text-gray-300 group hover:text-yellow-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 mt-1 flex-shrink-0 text-yellow-400">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span class="text-sm">No 437/1, Village High Road, Sholinganallur, Chennai - 600119</span>
                                </li>
                                <li class="flex items-start text-gray-300 group hover:text-yellow-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 mt-1 flex-shrink-0 text-yellow-400">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <div class="text-sm font-medium flex flex-wrap gap-x-4 gap-y-2">
                                        <a href="tel:7702051836" class="hover:text-yellow-300">7702051836</a>
                                        <span class="hidden sm:inline text-gray-500">|</span>
                                        <a href="tel:9962322113" class="hover:text-yellow-300">99623 22113</a>
                                    </div>
                                </li>
                                <li class="flex items-start text-gray-300 group hover:text-yellow-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 mt-1 flex-shrink-0 text-yellow-400">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <a href="mailto:Dakshitluxurypgforgents@gmail.com" class="text-sm break-words">Dakshitluxurypgforgents@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Footer Bottom -->
                    <div class="border-t border-blue-800 mt-10 md:mt-12 pt-6 md:pt-8 text-center">
                        <div class="flex items-center justify-center text-gray-400 text-sm">
                            <p>&copy; ${new Date().getFullYear()} Dakshit Luxury PG. All rights reserved.</p>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);