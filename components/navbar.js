class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .modern-navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                }
                
                .navbar-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 10px 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .navbar-brand {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    text-decoration: none;
                    color: #1e3a8a;
                    font-weight: 700;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }
                
                .navbar-brand:hover {
                    transform: translateY(-2px);
                }
                
                .brand-icon {
                    width: 24px;
                    height: 24px;
                    stroke-width: 2.5;
                    flex-shrink: 0;
                }
                
                .brand-text {
                    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    letter-spacing: -0.5px;
                }
                
                .brand-text-full {
                    display: inline;
                }
                
                .brand-text-short {
                    display: none;
                }
                
                .navbar-actions {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                
                .navbar-link {
                    text-decoration: none;
                    color: #1f2937;
                    font-weight: 600;
                    font-size: 0.9rem;
                    padding: 8px 16px;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .navbar-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #1e3a8a, #eab308);
                    border-radius: 2px;
                    transition: width 0.3s;
                }
                
                .navbar-link:hover {
                    background: rgba(30, 58, 138, 0.05);
                    color: #1e3a8a;
                }
                
                .navbar-link:hover::after {
                    width: 60%;
                }
                
                .contact-btn {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
                    color: white;
                    padding: 8px 18px;
                    border-radius: 10px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.9rem;
                    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.25);
                    transition: all 0.3s ease;
                }
                
                .contact-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(30, 58, 138, 0.35);
                }
                
                .contact-icon {
                    width: 16px;
                    height: 16px;
                }
                
                .icon-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                }
                
                .icon-btn svg {
                    width: 18px;
                    height: 18px;
                }
                
                .icon-btn.call {
                    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
                    color: white;
                }
                
                .icon-btn.call:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
                }
                
                .icon-btn.whatsapp {
                    background: linear-gradient(135deg, #25d366, #128c7e);
                    color: white;
                }
                
                .icon-btn.whatsapp:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
                }
                
                .icon-btn.location {
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                    color: white;
                }
                
                .icon-btn.location:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
                }
                
                .action-buttons {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                
                .phone-numbers {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-right: 10px;
                }
                
                .phone-number {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    text-decoration: none;
                    color: #1e3a8a;
                    font-weight: 600;
                    font-size: 0.85rem;
                    padding: 6px 10px;
                    border-radius: 8px;
                    background: rgba(30, 58, 138, 0.05);
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }
                
                .phone-number:hover {
                    background: rgba(30, 58, 138, 0.1);
                    transform: translateY(-2px);
                }
                
                .phone-number svg {
                    width: 14px;
                    height: 14px;
                    flex-shrink: 0;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: transparent;
                    border: none;
                    color: #1e3a8a;
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }
                
                .mobile-menu-btn:hover {
                    background: rgba(30, 58, 138, 0.05);
                }
                
                .mobile-menu-icon {
                    width: 22px;
                    height: 22px;
                }
                
                .mobile-menu {
                    display: none;
                    background: white;
                    border-radius: 16px;
                    margin-top: 16px;
                    padding: 16px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }
                
                .mobile-menu.active {
                    display: block;
                }
                
                .mobile-menu .navbar-link {
                    display: block;
                    margin: 4px 0;
                    padding: 12px 16px;
                }
                
                @media (max-width: 640px) {
                    .navbar-container {
                        padding: 8px 12px;
                    }
                    
                    .navbar-brand {
                        font-size: 0.95rem;
                        gap: 6px;
                    }
                    
                    .brand-icon {
                        width: 20px;
                        height: 20px;
                    }
                    
                    .brand-text-full {
                        display: none;
                    }
                    
                    .brand-text-short {
                        display: inline;
                    }
                    
                    .icon-btn {
                        width: 32px;
                        height: 32px;
                        border-radius: 8px;
                    }
                    
                    .icon-btn svg {
                        width: 16px;
                        height: 16px;
                    }
                    
                    .action-buttons {
                        gap: 4px;
                    }
                    
                    .phone-numbers {
                        display: none;
                    }
                }
                
                @media (max-width: 1024px) {
                    .navbar-actions > .navbar-link {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .phone-numbers {
                        margin-right: 5px;
                    }
                    
                    .phone-number {
                        font-size: 0.75rem;
                        padding: 5px 8px;
                    }
                }
                
                @media (min-width: 641px) and (max-width: 768px) {
                    .phone-number {
                        font-size: 0.8rem;
                        padding: 6px 9px;
                    }
                }
            </style>
            
            <nav class="modern-navbar">
                <div class="navbar-container">
                    <a href="/" class="navbar-brand">
                        <svg class="brand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        <span class="brand-text">
                            <span class="brand-text-full">Dakshit Luxury PG</span>
                            <span class="brand-text-short">Dakshit Luxury PG</span>
                        </span>
                    </a>
                    <div class="navbar-actions">
                        <a href="#about" class="navbar-link">About</a>
                        <a href="#rooms" class="navbar-link">Rooms</a>
                        <a href="#amenities" class="navbar-link">Amenities</a>
                        <a href="#reviews" class="navbar-link">Reviews</a>
                        <div class="phone-numbers">
                            <a href="tel:7702051836" class="phone-number">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                7702051836
                            </a>
                            <a href="tel:9962322113" class="phone-number">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                99623 22113
                            </a>
                        </div>
                        <div class="action-buttons">
                            <a href="tel:7702051836" class="icon-btn call" title="Call Now">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </a>
                            <a href="https://wa.me/917702051836" target="_blank" class="icon-btn whatsapp" title="WhatsApp">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            </a>
                            <a href="https://www.google.com/maps/place/DAKSHIT+LUXURY+PG+ACCOMMODATION+FOR+GENTS/@12.8955369,80.2319572,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525b0a7fd2bc01:0x4f426766ec27c23a!8m2!3d12.8955369!4d80.2319572!16s%2Fg%2F11v4j3g6dl?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="icon-btn location" title="View Location">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </a>
                        </div>
                        <button id="mobile-menu-button" class="mobile-menu-btn">
                            <svg class="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div id="mobile-menu" class="mobile-menu">
                    <a href="#about" class="navbar-link">About</a>
                    <a href="#rooms" class="navbar-link">Rooms</a>
                    <a href="#amenities" class="navbar-link">Amenities</a>
                    <a href="#reviews" class="navbar-link">Reviews</a>
                    <a href="#enquiry" class="navbar-link">Contact Us</a>
                </div>
            </nav>
        `;

        
        const mobileMenuButton = this.querySelector('#mobile-menu-button');
        const mobileMenu = this.querySelector('#mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
            
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            });
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);