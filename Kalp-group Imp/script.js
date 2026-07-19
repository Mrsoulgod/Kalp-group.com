/* ==========================================================================
   KALP CONSUMER PRODUCTS - SITE FUNCTIONALITY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Global XSS Sanitizer Helper
    window.escapeHTML = (str) => {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    // Helper to dynamically expand/collapse the narrow container for the Admin Panel
    const adjustLayoutForAdmin = (isAdminActive) => {
        const portalContainer = document.querySelector('.container-narrow');
        const portalCard = document.querySelector('.portal-card');
        const portalSection = document.querySelector('.portal-section');
        const portalMain = document.querySelector('.portal-main');
        const adminDashboard = document.getElementById('adminDashboard');
        
        if (portalContainer && portalCard) {
            if (isAdminActive) {
                portalContainer.style.maxWidth = '100%';
                portalContainer.style.width = '100%';
                portalContainer.style.margin = '0';
                portalContainer.style.padding = '0';
                
                portalCard.style.maxWidth = '100%';
                portalCard.style.padding = '0';
                portalCard.style.border = 'none';
                portalCard.style.borderRadius = '0';
                portalCard.style.boxShadow = 'none';
                
                if (portalSection) {
                    portalSection.style.padding = '0';
                    portalSection.style.width = '100%';
                }
                if (portalMain) {
                    portalMain.style.padding = '0';
                    portalMain.style.paddingTop = 'var(--header-height)';
                    portalMain.style.width = '100%';
                    portalMain.style.display = 'block';
                }
                if (adminDashboard) {
                    adminDashboard.style.marginTop = '0';
                    adminDashboard.style.borderRadius = '0';
                    adminDashboard.style.border = 'none';
                    adminDashboard.style.boxShadow = 'none';
                }
            } else {
                portalContainer.style.maxWidth = '';
                portalContainer.style.width = '';
                portalContainer.style.margin = '';
                portalContainer.style.padding = '';
                
                portalCard.style.maxWidth = '';
                portalCard.style.padding = '';
                portalCard.style.border = '';
                portalCard.style.borderRadius = '';
                portalCard.style.boxShadow = '';
                
                if (portalSection) {
                    portalSection.style.padding = '';
                    portalSection.style.width = '';
                }
                if (portalMain) {
                    portalMain.style.padding = '';
                    portalMain.style.width = '';
                    portalMain.style.display = '';
                }
                if (adminDashboard) {
                    adminDashboard.style.marginTop = '';
                    adminDashboard.style.borderRadius = '';
                    adminDashboard.style.border = '';
                    adminDashboard.style.boxShadow = '';
                }
            }
        }
    };

    // Reset old cached screenshot uploads and product image overrides to show new defaults
    try {
        // Remove older category overrides and individual product image overrides so they default to the newly copied high-quality images
        [
            'kalp_img_polymer',
            'kalp_img_oleo',
            'kalp_img_solvents',
            'kalp_prod_Heat_Stabilizers',
            'kalp_prod_Plasticizers',
            'kalp_prod_Anti-Oxidants',
            'kalp_prod_Anti-Ox-idants',
            'kalp_prod_Slip_Agents',
            'kalp_prod_Fatty_Amines',
            'kalp_prod_Fatty_Alcohols',
            'kalp_prod_Fatty_Aldehydes',
            'kalp_prod_Hydrogenated_Castor_Oil_Flakes'
        ].forEach(key => localStorage.removeItem(key));
    } catch (e) {
        console.error(e);
    }

    // Dynamic Image Replacer (Site-wide)
    const applyDynamicImages = () => {
        try {
            const heroUrl = localStorage.getItem('kalp_img_hero');
            const aboutUrl = localStorage.getItem('kalp_img_about');
            const oleoUrl = localStorage.getItem('kalp_img_oleo');
            const solventsUrl = localStorage.getItem('kalp_img_solvents');
            const polymerUrl = localStorage.getItem('kalp_img_polymer');
            const innerOleoUrl = localStorage.getItem('kalp_img_inner_oleo');
            const innerSolventsUrl = localStorage.getItem('kalp_img_inner_solvents');
            const innerPolymerUrl = localStorage.getItem('kalp_img_inner_polymer');
            const introOleoUrl = localStorage.getItem('kalp_img_intro_oleo');
            const introSolventsUrl = localStorage.getItem('kalp_img_intro_solvents');
            const introPolymerUrl = localStorage.getItem('kalp_img_intro_polymer');

            const isValid = (url) => url && url.trim() !== "" && url.trim() !== "undefined" && url.trim() !== "null";

            if (isValid(heroUrl)) {
                document.querySelectorAll('.hero-bg-img').forEach(img => img.src = heroUrl);
            }
            if (isValid(aboutUrl)) {
                document.querySelectorAll('.about-img-box img, .sustainability-img-box img').forEach(img => img.src = aboutUrl);
            }
            if (isValid(oleoUrl)) {
                document.querySelectorAll('img[alt*="oleo-materials"], img[alt="Oleochemicals category image"]').forEach(img => img.src = oleoUrl);
            }
            if (isValid(solventsUrl)) {
                document.querySelectorAll('img[alt*="Green Solvent"], img[alt*="solvents refining"], img[alt="Industrial Green Solvents category image"]').forEach(img => img.src = solventsUrl);
            }
            if (isValid(polymerUrl)) {
                document.querySelectorAll('img[alt*="Slip Agents"], img[alt="Polymer Additives category image"]').forEach(img => img.src = polymerUrl);
            }
            if (isValid(innerOleoUrl)) {
                document.querySelectorAll('img[alt*="Oleochemical Refinery"], .oleo-page-hero img, img[alt*="Oleochemical Refinery Facility"]').forEach(img => img.src = innerOleoUrl);
            }
            if (isValid(innerSolventsUrl)) {
                document.querySelectorAll('img[alt*="Bio-based green solvents"], .solvents-page-hero img').forEach(img => img.src = innerSolventsUrl);
            }
            if (isValid(innerPolymerUrl)) {
                document.querySelectorAll('img[alt*="Polymer Extrusion"], .polymer-page-hero img').forEach(img => img.src = innerPolymerUrl);
            }
            if (isValid(introOleoUrl)) {
                document.querySelectorAll('img[alt*="Oleochemical refinery facility"]').forEach(img => img.src = introOleoUrl);
            }
            if (isValid(introSolventsUrl)) {
                document.querySelectorAll('img[alt*="Industrial Solvents refining plant"]').forEach(img => img.src = introSolventsUrl);
            }
            if (isValid(introPolymerUrl)) {
                document.querySelectorAll('img[alt*="Polymer Additives manufacturing compounding"]').forEach(img => img.src = introPolymerUrl);
            }

            // Individual specs card product photo mappings
            const productMappings = {
                'Fatty Amines': 'Fatty Amines refinery tanks',
                'Fatty Alcohols': 'Fatty Alcohols processing pipes',
                'Fatty Aldehydes': 'Fatty Aldehyde refinery column',
                'Hydrogenated Castor Oil Flakes': 'Hydrogenated Castor Oil Flakes production',
                'FAME Soya Oil': 'FAME Soya Oil processing',
                'FAME Rice Bran Oil': 'FAME Rice Bran Oil refining',
                'FAME Mustard Oil': 'FAME Mustard Oil processing',
                'FAME Palm Oil': 'FAME Palm Oil refining column',
                'FAME Castor Oil': 'FAME Castor Oil laboratory analysis',
                'Heat Stabilizers': 'Heat Stabilizers refinery tanks',
                'Plasticizers': 'Plasticizers and processing pipes',
                'Anti-Oxidants': 'Anti-Oxidants refinery column',
                'Slip Agents': 'Slip Agents compounding machinery floor'
            };

            Object.keys(productMappings).forEach(key => {
                const storedVal = localStorage.getItem(`kalp_prod_${key.replace(/\s+/g, '_')}`);
                if (isValid(storedVal)) {
                    const altText = productMappings[key];
                    document.querySelectorAll(`img[alt="${altText}"]`).forEach(img => img.src = storedVal);
                }
            });

        } catch (e) {
            console.error('Error applying dynamic images:', e);
        }
    };
    applyDynamicImages();

    // 1. Sticky Header & Scroll Progress Bar Functionality
    const header = document.querySelector('.site-header');
    const scrollProgress = document.getElementById('scrollProgress');
    
    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (scrollProgress) {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (windowHeight > 0) {
                const scrolledPercent = (window.scrollY / windowHeight) * 100;
                scrollProgress.style.width = scrolledPercent + '%';
            }
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    // ----------------------------------------------------
    // 2. Mobile Drawer Navigation
    // ----------------------------------------------------
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    
    // Create backdrop overlay dynamically if it doesn't exist
    let overlay = document.querySelector('.drawer-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'drawer-overlay';
        document.body.appendChild(overlay);
    }

    const toggleDrawer = (forceClose = false) => {
        const isOpen = mobileDrawer.classList.contains('active');
        if (isOpen || forceClose) {
            mobileToggle.classList.remove('active');
            mobileDrawer.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            mobileToggle.classList.add('active');
            mobileDrawer.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    mobileToggle.addEventListener('click', () => toggleDrawer());
    overlay.addEventListener('click', () => toggleDrawer(true));

    // Handle Mobile Dropdown Accordion
    const drawerDropdownToggle = document.querySelector('.drawer-dropdown-toggle');
    const drawerSubmenu = document.querySelector('.drawer-submenu');
    
    if (drawerDropdownToggle && drawerSubmenu) {
        drawerDropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            drawerSubmenu.classList.toggle('active');
            const dropIcon = drawerDropdownToggle.querySelector('.dropdown-icon');
            if (dropIcon) {
                dropIcon.style.transform = drawerSubmenu.classList.contains('active') ? 'rotate(180deg)' : '';
            }
        });
    }

    // Close drawer when clicking links that are not dropdown triggers
    const drawerLinks = document.querySelectorAll('.drawer-link:not(.drawer-dropdown-toggle), .drawer-sublink');
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => toggleDrawer(true));
    });

    // ----------------------------------------------------
    // 3. Scroll Reveal Animation using IntersectionObserver
    // ----------------------------------------------------
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target); // Run animation once
                }
            });
        };
        
        const revealObserver = new IntersectionObserver(revealCallback, {
            root: null,
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(element => {
            element.classList.add('revealed');
        });
    }

    // ----------------------------------------------------
    // 4. Modal System (Success Feedback)
    // ----------------------------------------------------
    // Create modal elements dynamically
    let modalOverlay = document.querySelector('.modal-overlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.innerHTML = `
            <div class="modal-content">
                <svg class="modal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 class="modal-title">Inquiry Received</h3>
                <p class="modal-text" id="modalText">Thank you for your submission. Our commercial team will contact you within 24 business hours.</p>
                <button class="modal-btn" id="modalCloseBtn">Done</button>
            </div>
        `;
        document.body.appendChild(modalOverlay);
    }
    
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalText = document.getElementById('modalText');
    
    const showModal = (message) => {
        if (modalText && message) {
            modalText.innerText = message;
        }
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // ----------------------------------------------------
    // 5. Form Submissions Handling
    // ----------------------------------------------------
    
    // Helper to log inquiries in localStorage
    const logInquiry = (name, company, email, productOrSubject, message) => {
        try {
            const inquiries = JSON.parse(localStorage.getItem('kalp_enquiries') || '[]');
            inquiries.push({
                timestamp: new Date().toLocaleString(),
                name,
                company: company || 'N/A',
                email,
                productOrSubject,
                message
            });
            localStorage.setItem('kalp_enquiries', JSON.stringify(inquiries));
        } catch (e) {
            console.error('Error logging enquiry:', e);
        }
    };

    // Product Category Enquiry Form
    const categoryEnquiryForm = document.getElementById('categoryEnquiryForm');
    if (categoryEnquiryForm) {
        categoryEnquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('enquiryName').value.trim();
            const company = document.getElementById('enquiryCompany').value.trim();
            const email = document.getElementById('enquiryEmail').value.trim();
            const product = document.getElementById('enquiryProduct').value;
            const message = document.getElementById('enquiryMessage').value.trim();
            
            if (!name || !email || !product || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            logInquiry(name, company, email, product, message);
            
            const msg = `Dear ${name}, thank you for your inquiry regarding ${product}. Our technical and commercial team from Kalp Consumer Products will review your request for ${company ? company : 'your company'} and email you specifications, pricing, and MSDS sheets shortly.`;
            
            showModal(msg);
            categoryEnquiryForm.reset();
        });
    }

    // General Contact Form
    const generalContactForm = document.getElementById('generalContactForm');
    if (generalContactForm) {
        generalContactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value.trim();
            const company = document.getElementById('contactCompany').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const subject = document.getElementById('contactSubject').value.trim();
            const message = document.getElementById('contactMessage').value.trim();
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            logInquiry(name, company, email, subject, message);
            
            const msg = `Thank you, ${name}. Your message regarding "${subject}" has been routed to our corporate office. A representative will contact you shortly.`;
            
            showModal(msg);
            generalContactForm.reset();
        });
    }

    // ----------------------------------------------------
    // 6. Interactive 3D Card Tilt Effect
    // ----------------------------------------------------
    const tiltCards = document.querySelectorAll('.product-card, .specs-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((centerY - y) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // ----------------------------------------------------
    // 7. Horizontal Interactive Timeline Controller
    // ----------------------------------------------------
    const timelineNodes = document.querySelectorAll('.timeline-node');
    const timelineTrackFill = document.querySelector('.timeline-track-fill');
    const timelineCards = document.querySelectorAll('.timeline-card-content');
    
    if (timelineNodes.length > 0 && timelineTrackFill) {
        const updateTimeline = (activeIndex) => {
            timelineNodes.forEach((node, idx) => {
                if (idx === activeIndex) {
                    node.classList.add('active');
                } else {
                    node.classList.remove('active');
                }
            });
            
            const percent = (activeIndex / (timelineNodes.length - 1)) * 100;
            timelineTrackFill.style.width = percent + '%';
            
            timelineCards.forEach((card, idx) => {
                if (idx === activeIndex) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        };
        
        timelineNodes.forEach((node, idx) => {
            node.addEventListener('click', () => {
                updateTimeline(idx);
            });
        });
        
        updateTimeline(0);
    }

    // ----------------------------------------------------
    // 8. Products Dropdown Link Click-Close Handler
    // ----------------------------------------------------
    const dropdownMenuLinks = document.querySelectorAll('.dropdown-menu a');
    dropdownMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const dropdownMenu = link.closest('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateX(-50%) translateY(10px)';
                
                setTimeout(() => {
                    dropdownMenu.style.opacity = '';
                    dropdownMenu.style.visibility = '';
                    dropdownMenu.style.transform = '';
                }, 400);
            }
        });
    });

    // 9. "Get a Quote" Product Card Buttons Auto-Scroll & Auto-Select
    const quoteButtons = document.querySelectorAll('.btn-quote-product');
    quoteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = button.getAttribute('data-product');
            const selectElement = document.getElementById('enquiryProduct');
            
            if (selectElement && productName) {
                for (let option of selectElement.options) {
                    if (option.value.toLowerCase() === productName.toLowerCase() || 
                        option.text.toLowerCase() === productName.toLowerCase()) {
                        selectElement.value = option.value;
                        break;
                    }
                }
                selectElement.dispatchEvent(new Event('change'));
            }
            
            const enquirySection = document.querySelector('.enquiry-section');
            if (enquirySection) {
                enquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ----------------------------------------------------
    // 10. Portal & Login Controller (login.html)
    // ----------------------------------------------------
    const tabUserBtn = document.getElementById('tabUserBtn');
    const tabAdminBtn = document.getElementById('tabAdminBtn');
    const portalTitle = document.getElementById('portalTitle');
    const portalSub = document.getElementById('portalSub');
    const portalLoginForm = document.getElementById('portalLoginForm');
    const loginFormWrapper = document.getElementById('loginFormWrapper');
    const userDashboard = document.getElementById('userDashboard');
    const adminDashboard = document.getElementById('adminDashboard');
    const inquiriesTableBody = document.getElementById('inquiriesTableBody');
    const clearInquiriesBtn = document.getElementById('clearInquiriesBtn');
    
    let currentRole = 'user'; // 'user' or 'admin'

    if (tabUserBtn && tabAdminBtn) {
        tabUserBtn.addEventListener('click', () => {
            currentRole = 'user';
            tabUserBtn.classList.add('active');
            tabAdminBtn.classList.remove('active');
            if (portalTitle) portalTitle.innerText = 'User Login';
            if (portalSub) portalSub.innerText = 'Sign in to check inquiry status, request COA documents, and view your custom compound sheets.';
        });

        tabAdminBtn.addEventListener('click', () => {
            currentRole = 'admin';
            tabAdminBtn.classList.add('active');
            tabUserBtn.classList.remove('active');
            if (portalTitle) portalTitle.innerText = 'Admin Panel';
            if (portalSub) portalSub.innerText = 'Authorized administrator login to view, search, and manage corporate B2B product inquiries.';
        });
    }

    // Load dynamic submissions list in Admin Panel
    const populateInquiriesTable = () => {
        if (!inquiriesTableBody) return;
        
        try {
            const inquiries = JSON.parse(localStorage.getItem('kalp_enquiries') || '[]');
            if (inquiries.length === 0) {
                inquiriesTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--color-text-muted);">No inquiries logged yet. Submissions from any page form will show up here.</td></tr>`;
                return;
            }
            
            inquiriesTableBody.innerHTML = inquiries.map(inq => `
                <tr>
                    <td><strong>${escapeHTML(inq.timestamp)}</strong></td>
                    <td>${escapeHTML(inq.name)}</td>
                    <td>${escapeHTML(inq.company)}</td>
                    <td><a href="mailto:${escapeHTML(inq.email)}" style="color: var(--color-accent); text-decoration: underline;">${escapeHTML(inq.email)}</a></td>
                    <td><span class="product-card-badge" style="position: static; font-size: 0.75rem; background: var(--color-primary-light); color: white; display: inline-block;">${escapeHTML(inq.productOrSubject)}</span></td>
                    <td style="font-size: 0.85rem; max-width: 250px; white-space: normal; word-break: break-word;">${escapeHTML(inq.message)}</td>
                </tr>
            `).reverse().join('');
        } catch (e) {
            console.error('Error reading inquiries:', e);
        }
    };

    async function sha256(message) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    if (portalLoginForm) {
        portalLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const usernameInput = document.getElementById('portalUsername').value.trim();
            const passwordInput = document.getElementById('portalPassword').value;
            
            const usernameHash = await sha256(usernameInput);
            const passwordHash = await sha256(passwordInput);
            
            if (currentRole === 'user') {
                if (usernameHash === '04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb' && 
                    passwordHash === 'e606e38b0d8c19b24cf0ee3808183162ea7cd63ff7912dbb22b5e803286b4446') {
                    loginFormWrapper.style.display = 'none';
                    userDashboard.style.display = 'block';
                } else {
                    alert('Invalid User credentials.');
                }
            } else if (currentRole === 'admin') {
                if (usernameHash === '02292ad53909226eaa31b7318819e500dfdb73c361445a0c77a1ff1176ebfc22' && 
                    passwordHash === 'd826567841e1b5f0eb91af824bc77a28cca2f0c9a06fbff2a25e606b6d8fab27') {
                    loginFormWrapper.style.display = 'none';
                    adminDashboard.style.display = 'block';
                    adjustLayoutForAdmin(true);
                    populateInquiriesTable();
                } else {
                    alert('Invalid Admin credentials.');
                }
            }
        });
    }

    // Photo Form Submission Handler (Base64 file reader)
    const adminPhotoForm = document.getElementById('adminPhotoForm');
    if (adminPhotoForm) {
        adminPhotoForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const fileHero = document.getElementById('fileHero').files[0];
            const fileAbout = document.getElementById('fileAbout').files[0];
            
            const fileOleo = document.getElementById('fileOleo').files[0];
            const oleoTarget = document.getElementById('selectOleoTarget').value;

            const fileSolvents = document.getElementById('fileSolvents').files[0];
            const solventsTarget = document.getElementById('selectSolventsTarget').value;

            const filePolymer = document.getElementById('filePolymer').files[0];
            const polymerTarget = document.getElementById('selectPolymerTarget').value;

            const readAsBase64 = (file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = new Image();
                        img.onload = () => {
                            const canvas = document.createElement('canvas');
                            let width = img.width;
                            let height = img.height;
                            
                            const maxDim = 800;
                            if (width > maxDim || height > maxDim) {
                                if (width > height) {
                                    height = Math.round((height * maxDim) / width);
                                    width = maxDim;
                                } else {
                                    width = Math.round((width * maxDim) / height);
                                    height = maxDim;
                                }
                            }
                            
                            canvas.width = width;
                            canvas.height = height;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0, width, height);
                            
                            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
                            resolve(compressedBase64);
                        };
                        img.onerror = () => reject(new Error('Invalid image file.'));
                        img.src = e.target.result;
                    };
                    reader.onerror = () => reject(reader.error);
                    reader.readAsDataURL(file);
                });
            };

            try {
                let updated = false;

                if (fileHero) {
                    const base64 = await readAsBase64(fileHero);
                    localStorage.setItem('kalp_img_hero', base64);
                    updated = true;
                }
                if (fileAbout) {
                    const base64 = await readAsBase64(fileAbout);
                    localStorage.setItem('kalp_img_about', base64);
                    updated = true;
                }
                
                if (fileOleo) {
                    const base64 = await readAsBase64(fileOleo);
                    if (oleoTarget === "MAIN_OLEO") {
                        localStorage.setItem('kalp_img_oleo', base64);
                    } else if (oleoTarget === "HERO_INNER_OLEO") {
                        localStorage.setItem('kalp_img_inner_oleo', base64);
                    } else if (oleoTarget === "INTRO_OLEO") {
                        localStorage.setItem('kalp_img_intro_oleo', base64);
                    } else {
                        localStorage.setItem(`kalp_prod_${oleoTarget.replace(/\s+/g, '_')}`, base64);
                    }
                    updated = true;
                }

                if (fileSolvents) {
                    const base64 = await readAsBase64(fileSolvents);
                    if (solventsTarget === "MAIN_SOLVENTS") {
                        localStorage.setItem('kalp_img_solvents', base64);
                    } else if (solventsTarget === "HERO_INNER_SOLVENTS") {
                        localStorage.setItem('kalp_img_inner_solvents', base64);
                    } else if (solventsTarget === "INTRO_SOLVENTS") {
                        localStorage.setItem('kalp_img_intro_solvents', base64);
                    } else {
                        localStorage.setItem(`kalp_prod_${solventsTarget.replace(/\s+/g, '_')}`, base64);
                    }
                    updated = true;
                }

                if (filePolymer) {
                    const base64 = await readAsBase64(filePolymer);
                    if (polymerTarget === "MAIN_POLYMER") {
                        localStorage.setItem('kalp_img_polymer', base64);
                    } else if (polymerTarget === "HERO_INNER_POLYMER") {
                        localStorage.setItem('kalp_img_inner_polymer', base64);
                    } else if (polymerTarget === "INTRO_POLYMER") {
                        localStorage.setItem('kalp_img_intro_polymer', base64);
                    } else {
                        localStorage.setItem(`kalp_prod_${polymerTarget.replace(/\s+/g, '_')}`, base64);
                    }
                    updated = true;
                }

                if (updated) {
                    applyDynamicImages();
                    alert('Site image changes applied successfully! The selected photos have been updated across the entire site.');
                    adminPhotoForm.reset();
                } else {
                    alert('Please select at least one image file to upload.');
                }
            } catch (err) {
                console.error('Error uploading images:', err);
                alert('Error processing image uploads. Please try again.');
            }
        });
    }

    // B2B Admin Console Controller System
    if (adminDashboard) {
        
        // 1. Initialize Seed Data in localStorage if not already present
        const initSeedData = () => {
            // Overwrite mock default seeds if they exist to start fresh
            const existingEnq = localStorage.getItem('kalp_enquiries');
            if (!existingEnq || existingEnq.includes('ENQ101')) {
                localStorage.setItem('kalp_enquiries', JSON.stringify([]));
            }
            const existingQuotes = localStorage.getItem('kalp_quotes');
            if (!existingQuotes || existingQuotes.includes('QT201')) {
                localStorage.setItem('kalp_quotes', JSON.stringify([]));
            }
            const existingCusts = localStorage.getItem('kalp_customers');
            if (!existingCusts || existingCusts.includes('Global Organics')) {
                localStorage.setItem('kalp_customers', JSON.stringify([]));
            }
            const existingActs = localStorage.getItem('kalp_activities');
            if (!existingActs || existingActs.includes('System Initialized')) {
                localStorage.setItem('kalp_activities', JSON.stringify([]));
            }

            if (!localStorage.getItem('kalp_categories')) {
                const defaultCats = ["Oleochemicals", "Industrial Green Solvents", "Polymer Additives", "Vegetable Oils", "Industrial Chemicals"];
                localStorage.setItem('kalp_categories', JSON.stringify(defaultCats));
            }
            if (!localStorage.getItem('kalp_products')) {
                const defaultProds = [
                    {
                        id: "p1",
                        name: "Fatty Amines",
                        cas: "61788-45-2",
                        category: "Oleochemicals",
                        moq: "1000 kg",
                        packaging: "170 kg drums",
                        availability: "In Stock",
                        featured: true,
                        img: "Fatty_Derivatives_Images/fatty_amines.png",
                        desc: "High-grade aliphatic nitrogen compounds used as key flotation agents, fuel additives, and corrosion inhibitors.",
                        apps: ["Flotation agents in mining", "Corrosion inhibitors in petroleum", "Fabric softeners"],
                        benefits: ["Excellent thermal stability", "High purity grade", "Eco-friendly natural origin"],
                        specs: {"Purity": "min 98%", "Moisture": "max 0.2%", "Iodine Value": "min 75"}
                    },
                    {
                        id: "p2",
                        name: "FAME Soya Oil",
                        cas: "67784-80-9",
                        category: "Industrial Green Solvents",
                        moq: "20000 kg",
                        packaging: "Flexitank / ISO Tank",
                        availability: "In Stock",
                        featured: true,
                        img: "assets/images/green_solvents_category.png",
                        desc: "Fatty Acid Methyl Ester derived from high-quality soya bean oil, acting as an excellent eco-friendly replacement for mineral oils.",
                        apps: ["Biodegradable cleaning solvents", "Ink formulations", "Agricultural adjuvants"],
                        benefits: ["Low VOC profile", "Non-toxic and biodegradable", "High flash point"],
                        specs: {"Methyl Ester content": "min 96.5%", "Flash Point": "min 130°C", "Acid Value": "max 0.5"}
                    },
                    {
                        id: "p3",
                        name: "Heat Stabilizers",
                        cas: "N/A",
                        category: "Polymer Additives",
                        moq: "500 kg",
                        packaging: "25 kg bags",
                        availability: "In Stock",
                        featured: true,
                        img: "Polymer_Additives_Images/heat_stabilizers.png",
                        desc: "RoHS-compliant complex calcium-zinc heat stabilizers designed to prevent degradation during PVC extrusion.",
                        apps: ["PVC pipes and fittings", "Cable insulation compounding", "Window profiles"],
                        benefits: ["Lead-free eco-stabilizer", "Superior initial color hold", "Great processing latitude"],
                        specs: {"Appearance": "White/Off-white powder", "Volatiles": "max 1.0%", "Metal Content": "Zinc: 3.5%, Calcium: 2.8%"}
                    }
                ];
                localStorage.setItem('kalp_products', JSON.stringify(defaultProds));
            }
        };
        initSeedData();

        // 2. Navigation Tab Routing Controls
        const tabs = document.querySelectorAll('#adminSidebar a');
        const panels = document.querySelectorAll('.admin-view-panel');

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                tab.classList.add('active');
                const target = document.getElementById(`view-${tab.dataset.tab}`);
                if (target) {
                    target.classList.add('active');
                    if (tab.dataset.tab === 'dashboard') {
                        loadDashboardData();
                    } else if (tab.dataset.tab === 'products') {
                        renderProducts();
                    } else if (tab.dataset.tab === 'categories') {
                        renderCategories();
                    } else if (tab.dataset.tab === 'customers') {
                        renderCustomers();
                    } else if (tab.dataset.tab === 'inquiries') {
                        renderInquiriesBoard();
                    } else if (tab.dataset.tab === 'quotes') {
                        renderQuotes();
                    }
                }
            });
        });

        // Logger helper
        const logActivity = (text) => {
            const acts = JSON.parse(localStorage.getItem('kalp_activities') || '[]');
            acts.unshift({ time: new Date().toLocaleString(), text: text });
            if (acts.length > 20) acts.pop(); // keep last 20
            localStorage.setItem('kalp_activities', JSON.stringify(acts));
        };

        // 3. View Renderers
        // Dashboard Tab
        let salesChart = null;
        let categoryChart = null;

        const loadDashboardData = () => {
            const prods = JSON.parse(localStorage.getItem('kalp_products') || '[]');
            const cats = JSON.parse(localStorage.getItem('kalp_categories') || '[]');
            const custs = JSON.parse(localStorage.getItem('kalp_customers') || '[]');
            const enqs = JSON.parse(localStorage.getItem('kalp_enquiries') || '[]');
            const quotes = JSON.parse(localStorage.getItem('kalp_quotes') || '[]');
            const acts = JSON.parse(localStorage.getItem('kalp_activities') || '[]');

            document.getElementById('statUsers').innerText = custs.length;
            document.getElementById('statInquiries').innerText = enqs.filter(e => e.status === 'New').length;
            document.getElementById('statQuotes').innerText = quotes.filter(q => q.status === 'Sent' || q.status === 'Draft').length;
            document.getElementById('statProducts').innerText = prods.length;
            const revenue = quotes.reduce((acc, q) => acc + (parseFloat(q.price) * parseFloat(q.qty) || 0) + (parseFloat(q.freight) || 0), 0);
            document.getElementById('statRevenue').innerText = `₹${revenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

            document.getElementById('inquiryBadgeCount').innerText = enqs.filter(e => e.status === 'New').length;

            // Render Recent Activities list
            const actsContainer = document.getElementById('dashboardActivities');
            actsContainer.innerHTML = acts.map(a => `
                <div style="font-size:0.8rem; border-bottom:1px solid #f1f5f9; padding:8px 0; display:flex; justify-content:space-between; gap:10px;">
                    <span style="color:#64748b; white-space:nowrap;">${escapeHTML(a.time)}</span>
                    <span style="color:#334155; text-align:right;">${escapeHTML(a.text)}</span>
                </div>
            `).join('');

            // Render Top Products list
            const topContainer = document.getElementById('dashboardTopProducts');
            topContainer.innerHTML = prods.slice(0, 3).map(p => `
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #f1f5f9; padding:8px 0;">
                    <span style="font-weight:600; font-size:0.85rem;">${escapeHTML(p.name)}</span>
                    <span style="background:var(--color-primary-light); color:var(--color-primary-dark); font-size:0.75rem; padding:2px 8px; border-radius:10px; font-weight:700;">Active</span>
                </div>
            `).join('');

            // Render Chart.js monthly inquires & sales charts
            if (typeof Chart !== 'undefined') {
                const ctxSales = document.getElementById('chartSales').getContext('2d');
                const ctxCategory = document.getElementById('chartCategory').getContext('2d');

                if (salesChart) salesChart.destroy();
                if (categoryChart) categoryChart.destroy();

                salesChart = new Chart(ctxSales, {
                    type: 'line',
                    data: {
                        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        datasets: [
                            {
                                label: 'Inquiries',
                                data: [12, 19, 15, 25, 22, enqs.length + 10],
                                borderColor: '#0f766e',
                                backgroundColor: 'rgba(15, 118, 110, 0.1)',
                                fill: true,
                                tension: 0.3
                            },
                            {
                                label: 'Sales (₹100s)',
                                data: [8, 12, 10, 18, 15, 20],
                                borderColor: '#ea580c',
                                backgroundColor: 'rgba(234, 88, 12, 0.1)',
                                fill: true,
                                tension: 0.3
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { position: 'top' } }
                    }
                });

                // Count categories product volume
                const catCounts = {};
                prods.forEach(p => {
                    catCounts[p.category] = (catCounts[p.category] || 0) + 1;
                });

                categoryChart = new Chart(ctxCategory, {
                    type: 'doughnut',
                    data: {
                        labels: Object.keys(catCounts),
                        datasets: [{
                            data: Object.values(catCounts),
                            backgroundColor: ['#0f766e', '#ea580c', '#3b82f6', '#10b981', '#6366f1']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { position: 'right' } }
                    }
                });
            }
        };

        // Products Management
        window.renderProducts = () => {
            const prods = JSON.parse(localStorage.getItem('kalp_products') || '[]');
            const cats = JSON.parse(localStorage.getItem('kalp_categories') || '[]');
            
            // Populate category select dropdowns
            const selectFilter = document.getElementById('productFilterCategory');
            selectFilter.innerHTML = '<option value="">All Categories</option>' + 
                cats.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');

            const selectModal = document.getElementById('prodCategory');
            selectModal.innerHTML = cats.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');

            const tbody = document.getElementById('productsTableBody');
            tbody.innerHTML = prods.map(p => `
                <tr>
                    <td><img src="${escapeHTML(p.img || 'assets/images/logo.jpg')}" style="width:40px; height:40px; object-fit:cover; border-radius:4px; border:1px solid #cbd5e1;"></td>
                    <td style="font-weight:600;">${escapeHTML(p.name)}</td>
                    <td>${escapeHTML(p.cas || 'N/A')}</td>
                    <td><span style="font-size:0.75rem; background:#cbd5e1; color:#1e293b; padding:2px 8px; border-radius:10px;">${escapeHTML(p.category)}</span></td>
                    <td>${escapeHTML(p.moq || 'N/A')}</td>
                    <td><span style="font-size:0.75rem; background:#dcfce7; color:#166534; padding:2px 8px; border-radius:10px; font-weight:600;">${escapeHTML(p.availability)}</span></td>
                    <td>
                        <div style="display:flex; gap:6px;">
                            <button class="admin-btn admin-btn-secondary" onclick="editProduct('${escapeHTML(p.id)}')">Edit</button>
                            <button class="admin-btn admin-btn-secondary" onclick="duplicateProduct('${escapeHTML(p.id)}')" style="background:#f1f5f9; color:#0f766e;">Duplicate</button>
                            <button class="admin-btn admin-btn-danger" onclick="deleteProduct('${escapeHTML(p.id)}')">Delete</button>
                        </div>
                    </td>
                </tr>
            `).join('');
        };

        // Category Management
        window.renderCategories = () => {
            const cats = JSON.parse(localStorage.getItem('kalp_categories') || '[]');
            const tbody = document.getElementById('categoriesTableBody');
            tbody.innerHTML = cats.map((c, i) => `
                <tr>
                    <td style="font-weight:600; color:var(--color-primary);">${i + 1}</td>
                    <td style="font-weight:600;">${escapeHTML(c)}</td>
                    <td>
                        <div style="display:flex; gap:6px;">
                            <button class="admin-btn admin-btn-danger" onclick="deleteCategory('${escapeHTML(c)}')">Delete</button>
                        </div>
                    </td>
                </tr>
            `).join('');
        };

        // Customer Management
        window.renderCustomers = () => {
            const custs = JSON.parse(localStorage.getItem('kalp_customers') || '[]');
            const tbody = document.getElementById('customersTableBody');
            tbody.innerHTML = custs.map(c => `
                <tr>
                    <td style="font-weight:600;">${escapeHTML(c.company)}</td>
                    <td>${escapeHTML(c.person)}</td>
                    <td>${escapeHTML(c.email)}<br><span style="color:#64748b; font-size:0.8rem;">${escapeHTML(c.phone)}</span></td>
                    <td>${escapeHTML(c.gst || 'N/A')}</td>
                    <td>${escapeHTML(c.country)}</td>
                    <td><span style="font-size:0.75rem; background:#dcfce7; color:#166534; padding:2px 8px; border-radius:10px; font-weight:600;">${escapeHTML(c.status)}</span></td>
                    <td>
                        <button class="admin-btn admin-btn-secondary" onclick="viewCustomerDetails('${escapeHTML(c.id)}')">View History</button>
                    </td>
                </tr>
            `).join('');
        };

        // Inquiry Board
        window.renderInquiriesBoard = () => {
            const enqs = JSON.parse(localStorage.getItem('kalp_enquiries') || '[]');
            const tbody = document.getElementById('inquiriesBoardTableBody');
            tbody.innerHTML = enqs.map(e => `
                <tr>
                    <td style="font-weight:600; color:var(--color-primary);">${escapeHTML(e.id || 'ENQ' + Math.floor(Math.random()*1000))}</td>
                    <td><strong>${escapeHTML(e.company || 'N/A')}</strong><br><span style="color:#64748b; font-size:0.8rem;">${escapeHTML(e.name)}</span></td>
                    <td>${escapeHTML(e.product)}</td>
                    <td>${escapeHTML(e.qty || 'N/A')}</td>
                    <td>${escapeHTML(e.country || 'N/A')}</td>
                    <td><span style="font-size:0.75rem; background:${e.status === 'New' ? '#ffedd5' : '#e2e8f0'}; color:${e.status === 'New' ? '#ea580c' : '#475569'}; padding:2px 8px; border-radius:10px; font-weight:600;">${escapeHTML(e.status)}</span></td>
                    <td>
                        <div style="display:flex; gap:6px;">
                            <button class="admin-btn admin-btn-primary" onclick="openInquiryModal('${escapeHTML(e.id)}')">Process</button>
                        </div>
                    </td>
                </tr>
            `).join('');
        };

        // Quotations Tab
        window.renderQuotes = () => {
            const quotes = JSON.parse(localStorage.getItem('kalp_quotes') || '[]');
            const tbody = document.getElementById('quotesTableBody');
            tbody.innerHTML = quotes.map(q => `
                <tr>
                    <td style="font-weight:600; color:var(--color-primary);">${escapeHTML(q.id)}</td>
                    <td><strong>${escapeHTML(q.customer)}</strong></td>
                    <td>${escapeHTML(q.product)} (${escapeHTML(q.qty)})</td>
                    <td style="font-weight:700; color:#166534;">$${(parseFloat(q.price) * parseFloat(q.qty) || 0).toLocaleString()}</td>
                    <td>${escapeHTML(q.validUntil)}</td>
                    <td><span style="font-size:0.75rem; background:${q.status === 'Accepted' ? '#dcfce7' : '#f1f5f9'}; color:${q.status === 'Accepted' ? '#166534' : '#334155'}; padding:2px 8px; border-radius:10px; font-weight:600;">${escapeHTML(q.status)}</span></td>
                    <td>
                        <div style="display:flex; gap:6px;">
                            <button class="admin-btn admin-btn-secondary" onclick="exportQuotePDF('${escapeHTML(q.id)}')">Export PDF</button>
                            <button class="admin-btn admin-btn-primary" onclick="simulateEmailQuote('${escapeHTML(q.id)}')" style="background:#3b82f6;">Email Quote</button>
                            <button class="admin-btn admin-btn-danger" onclick="deleteQuote('${escapeHTML(q.id)}')">Delete</button>
                        </div>
                    </td>
                </tr>
            `).join('');
        };

        // 4. Products CRUD Actions
        window.openProductModal = (title = 'Add Product') => {
            document.getElementById('productForm').reset();
            document.getElementById('productEditId').value = '';
            document.getElementById('productModalTitle').innerText = title;
            document.getElementById('modalProduct').style.display = 'flex';
        };

        window.closeProductModal = () => {
            document.getElementById('modalProduct').style.display = 'none';
        };

        window.saveProduct = (e) => {
            e.preventDefault();
            const id = document.getElementById('productEditId').value || 'p_' + Date.now();
            const name = document.getElementById('prodName').value;
            const cas = document.getElementById('prodCas').value;
            const category = document.getElementById('prodCategory').value;
            const availability = document.getElementById('prodAvailability').value;
            const packaging = document.getElementById('prodPackaging').value;
            const moq = document.getElementById('prodMoq').value;
            const desc = document.getElementById('prodDesc').value;
            const img = document.getElementById('prodImg').value || 'assets/images/default.png';
            const featured = document.getElementById('prodFeatured').checked;

            const apps = document.getElementById('prodApps').value.split('\n').filter(Boolean);
            const benefits = document.getElementById('prodBenefits').value.split('\n').filter(Boolean);
            
            const specs = {};
            document.getElementById('prodSpecs').value.split('\n').forEach(line => {
                const parts = line.split(':');
                if (parts.length >= 2) {
                    specs[parts[0].trim()] = parts.slice(1).join(':').trim();
                }
            });

            const prods = JSON.parse(localStorage.getItem('kalp_products') || '[]');
            const index = prods.findIndex(p => p.id === id);

            const productObj = { id, name, cas, category, availability, packaging, moq, desc, img, featured, apps, benefits, specs };

            if (index > -1) {
                prods[index] = productObj;
                logActivity(`Updated product: ${name}`);
            } else {
                prods.push(productObj);
                logActivity(`Added new product: ${name}`);
            }

            localStorage.setItem('kalp_products', JSON.stringify(prods));
            closeProductModal();
            renderProducts();
        };

        window.editProduct = (id) => {
            const prods = JSON.parse(localStorage.getItem('kalp_products') || '[]');
            const p = prods.find(item => item.id === id);
            if (!p) return;

            openProductModal('Edit Product');
            document.getElementById('productEditId').value = p.id;
            document.getElementById('prodName').value = p.name;
            document.getElementById('prodCas').value = p.cas || '';
            document.getElementById('prodCategory').value = p.category;
            document.getElementById('prodAvailability').value = p.availability;
            document.getElementById('prodPackaging').value = p.packaging || '';
            document.getElementById('prodMoq').value = p.moq || '';
            document.getElementById('prodDesc').value = p.desc || '';
            document.getElementById('prodImg').value = p.img || '';
            document.getElementById('prodFeatured').checked = !!p.featured;

            document.getElementById('prodApps').value = (p.apps || []).join('\n');
            document.getElementById('prodBenefits').value = (p.benefits || []).join('\n');
            
            const specLines = [];
            for (let k in (p.specs || {})) {
                specLines.push(`${k}: ${p.specs[k]}`);
            }
            document.getElementById('prodSpecs').value = specLines.join('\n');
        };

        window.duplicateProduct = (id) => {
            const prods = JSON.parse(localStorage.getItem('kalp_products') || '[]');
            const p = prods.find(item => item.id === id);
            if (!p) return;

            const copy = { ...p, id: 'p_' + Date.now(), name: p.name + ' (Copy)' };
            prods.push(copy);
            localStorage.setItem('kalp_products', JSON.stringify(prods));
            logActivity(`Duplicated product: ${p.name}`);
            renderProducts();
        };

        window.deleteProduct = (id) => {
            if (confirm('Are you sure you want to delete this product?')) {
                let prods = JSON.parse(localStorage.getItem('kalp_products') || '[]');
                const p = prods.find(item => item.id === id);
                prods = prods.filter(item => item.id !== id);
                localStorage.setItem('kalp_products', JSON.stringify(prods));
                if (p) logActivity(`Deleted product: ${p.name}`);
                renderProducts();
            }
        };

        // 5. Category Actions
        window.addNewCategory = () => {
            const input = document.getElementById('newCategoryInput');
            const name = input.value.trim();
            if (!name) return;

            const cats = JSON.parse(localStorage.getItem('kalp_categories') || '[]');
            if (cats.includes(name)) {
                alert('Category already exists.');
                return;
            }

            cats.push(name);
            localStorage.setItem('kalp_categories', JSON.stringify(cats));
            logActivity(`Added category: ${name}`);
            input.value = '';
            renderCategories();
        };

        window.deleteCategory = (name) => {
            if (confirm(`Are you sure you want to delete the category "${name}"?`)) {
                let cats = JSON.parse(localStorage.getItem('kalp_categories') || '[]');
                cats = cats.filter(c => c !== name);
                localStorage.setItem('kalp_categories', JSON.stringify(cats));
                logActivity(`Deleted category: ${name}`);
                renderCategories();
            }
        };

        // 6. Customer History & Detail Modal
        window.viewCustomerDetails = (id) => {
            const custs = JSON.parse(localStorage.getItem('kalp_customers') || '[]');
            const c = custs.find(item => item.id === id);
            if (!c) return;

            const enqs = JSON.parse(localStorage.getItem('kalp_enquiries') || '[]');
            const quotes = JSON.parse(localStorage.getItem('kalp_quotes') || '[]');

            const custEnqs = enqs.filter(e => e.company === c.company);
            const custQuotes = quotes.filter(q => q.customer === c.company);

            document.getElementById('customerModalTitle').innerText = c.company;
            const body = document.getElementById('customerDetailsBody');

            body.innerHTML = `
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.85rem; border-bottom:1px solid #cbd5e1; padding-bottom:15px;">
                    <div><strong>Contact Person:</strong> ${escapeHTML(c.person)}</div>
                    <div><strong>Industry Sector:</strong> ${escapeHTML(c.industry)}</div>
                    <div><strong>GST / Tax ID:</strong> ${escapeHTML(c.gst || 'N/A')}</div>
                    <div><strong>Country Location:</strong> ${escapeHTML(c.country)}</div>
                    <div><strong>Email:</strong> ${escapeHTML(c.email)}</div>
                    <div><strong>Phone:</strong> ${escapeHTML(c.phone)}</div>
                </div>
                <div>
                    <h4 style="margin: 10px 0 5px 0;">Customer Activity Logs</h4>
                    <p style="font-size:0.8rem; font-weight:600; color:var(--color-primary); margin-bottom:5px;">COA Downloads (2):</p>
                    <ul style="font-size:0.8rem; margin:0 0 15px 15px; padding:0; color:#475569;">
                        <li>COA - Fatty Amines - Batch 99A20 (Downloaded 2 days ago)</li>
                        <li>COA - Heat Stabilizers - Batch 11C82 (Downloaded 1 week ago)</li>
                    </ul>
                    
                    <p style="font-size:0.8rem; font-weight:600; color:var(--color-primary); margin-bottom:5px;">Quotation Logs (${custQuotes.length}):</p>
                    <div style="font-size:0.8rem; color:#475569;">
                        ${custQuotes.map(q => `<div>Quote ${escapeHTML(q.id)} - ${escapeHTML(q.product)} (${escapeHTML(q.qty)}) - Status: ${escapeHTML(q.status)}</div>`).join('') || 'No quotations issued.'}
                    </div>
                </div>
            `;
            document.getElementById('modalCustomer').style.display = 'flex';
        };

        window.closeCustomerModal = () => {
            document.getElementById('modalCustomer').style.display = 'none';
        };

        // 7. Inquiry Processing Actions
        window.openInquiryModal = (id) => {
            const enqs = JSON.parse(localStorage.getItem('kalp_enquiries') || '[]');
            const e = enqs.find(item => item.id === id);
            if (!e) return;

            const body = document.getElementById('inquiryDetailsBody');
            body.innerHTML = `
                <div style="font-size:0.9rem; display:flex; flex-direction:column; gap:8px;">
                    <div><strong>Inquiry ID:</strong> ${escapeHTML(e.id)}</div>
                    <div><strong>Company Name:</strong> ${escapeHTML(e.company || 'N/A')}</div>
                    <div><strong>Contact Sender:</strong> ${escapeHTML(e.name)} (${escapeHTML(e.email)})</div>
                    <div><strong>Product Required:</strong> ${escapeHTML(e.product)}</div>
                    <div><strong>Quantity Required:</strong> ${escapeHTML(e.qty || 'N/A')}</div>
                    <div><strong>Origin Country:</strong> ${escapeHTML(e.country || 'N/A')}</div>
                    <div style="background:#f1f5f9; padding:10px; border-radius:6px; margin-top:5px;">
                        <strong>Message:</strong><br>
                        ${escapeHTML(e.message)}
                    </div>
                </div>
            `;

            document.getElementById('inquiryLostBtn').onclick = () => {
                e.status = 'Lost';
                localStorage.setItem('kalp_enquiries', JSON.stringify(enqs));
                logActivity(`Marked Inquiry ${e.id} as Lost.`);
                closeInquiryModal();
                renderInquiriesBoard();
            };

            document.getElementById('inquiryQuoteBtn').onclick = () => {
                closeInquiryModal();
                openQuoteGenerator(e.id);
            };

            document.getElementById('modalInquiry').style.display = 'flex';
        };

        window.closeInquiryModal = () => {
            document.getElementById('modalInquiry').style.display = 'none';
        };

        window.clearInquiryLogs = () => {
            if (confirm('Clear all inquiries logs from dashboard?')) {
                localStorage.setItem('kalp_enquiries', JSON.stringify([]));
                logActivity('Cleared inquiry board logs.');
                renderInquiriesBoard();
            }
        };

        // 8. Quotation Creation Actions
        window.openQuoteGenerator = (inquiryId = '') => {
            document.getElementById('quoteForm').reset();
            document.getElementById('quoteInquiryId').value = inquiryId;
            document.getElementById('quoteValidUntil').value = new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0];

            if (inquiryId) {
                const enqs = JSON.parse(localStorage.getItem('kalp_enquiries') || '[]');
                const e = enqs.find(item => item.id === inquiryId);
                if (e) {
                    document.getElementById('quoteCustomer').value = e.company || '';
                    document.getElementById('quoteProduct').value = e.product;
                    document.getElementById('quoteQuantity').value = e.qty || '';
                }
            }

            document.getElementById('modalQuote').style.display = 'flex';
        };

        window.closeQuoteModal = () => {
            document.getElementById('modalQuote').style.display = 'none';
        };

        window.saveQuotation = (e) => {
            e.preventDefault();
            const inquiryId = document.getElementById('quoteInquiryId').value;
            const customer = document.getElementById('quoteCustomer').value;
            const product = document.getElementById('quoteProduct').value;
            const qty = document.getElementById('quoteQuantity').value;
            const price = parseFloat(document.getElementById('quotePrice').value);
            const freight = parseFloat(document.getElementById('quoteFreight').value) || 0;
            const taxes = parseFloat(document.getElementById('quoteTaxes').value) || 0;
            const incoterms = document.getElementById('quoteIncoterms').value;
            const validUntil = document.getElementById('quoteValidUntil').value;

            const quoteId = 'QT' + Math.floor(Math.random() * 900 + 100);
            const quoteObj = {
                id: quoteId,
                customer,
                product,
                qty,
                price,
                freight,
                taxes,
                incoterms,
                validUntil,
                status: "Sent"
            };

            const quotes = JSON.parse(localStorage.getItem('kalp_quotes') || '[]');
            quotes.unshift(quoteObj);
            localStorage.setItem('kalp_quotes', JSON.stringify(quotes));

            // Log activity
            logActivity(`Generated Quote ${quoteId} for ${customer}.`);

            // If linked to an inquiry, update status to converted
            if (inquiryId) {
                const enqs = JSON.parse(localStorage.getItem('kalp_enquiries') || '[]');
                const enqIndex = enqs.findIndex(item => item.id === inquiryId);
                if (enqIndex > -1) {
                    enqs[enqIndex].status = 'Converted';
                    localStorage.setItem('kalp_enquiries', JSON.stringify(enqs));
                }
            }

            closeQuoteModal();
            renderQuotes();
        };

        window.deleteQuote = (id) => {
            if (confirm('Delete this quotation?')) {
                let quotes = JSON.parse(localStorage.getItem('kalp_quotes') || '[]');
                quotes = quotes.filter(q => q.id !== id);
                localStorage.setItem('kalp_quotes', JSON.stringify(quotes));
                logActivity(`Deleted Quotation ${id}.`);
                renderQuotes();
            }
        };

        window.exportQuotePDF = (id) => {
            const quotes = JSON.parse(localStorage.getItem('kalp_quotes') || '[]');
            const q = quotes.find(item => item.id === id);
            if (!q) return;

            // Generate HTML to print/export
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html>
                <head>
                    <title>Quotation ${q.id}</title>
                    <style>
                        body { font-family: sans-serif; padding: 40px; color: #334155; }
                        .header { display: flex; justify-content: space-between; border-bottom: 2px solid #0f766e; padding-bottom: 20px; }
                        .logo { font-size: 24px; font-weight: 800; color: #0f766e; }
                        .details { margin: 30px 0; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                        table { width: 100%; border-collapse: collapse; margin-top: 30px; }
                        th, td { padding: 12px; border-bottom: 1px solid #cbd5e1; text-align: left; }
                        th { background: #f1f5f9; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <div>
                            <div class="logo">KALP CONSUMER PRODUCTS</div>
                            <p>Etawah, Uttar Pradesh, India 206001</p>
                        </div>
                        <div style="text-align: right;">
                            <h2>QUOTATION</h2>
                            <p><strong>Quote ID:</strong> ${q.id}</p>
                            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                            <p><strong>Valid Until:</strong> ${q.validUntil}</p>
                        </div>
                    </div>
                    <div class="details">
                        <div>
                            <h4>ISSUED TO:</h4>
                            <strong>${q.customer}</strong>
                        </div>
                        <div>
                            <h4>SHIPPING TERMS:</h4>
                            <strong>Incoterms:</strong> ${q.incoterms}<br>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Sourced</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${q.product}</td>
                                <td>${q.qty}</td>
                                <td>₹${parseFloat(q.price).toFixed(2)}</td>
                                <td>₹${(parseFloat(q.price) * parseFloat(q.qty)).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align:right; font-weight:bold;">Freight Charges:</td>
                                <td>₹${parseFloat(q.freight).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colspan="3" style="text-align:right; font-weight:bold;">GST/Taxes (${q.taxes}%):</td>
                                <td>₹${((parseFloat(q.price) * parseFloat(q.qty) + parseFloat(q.freight)) * parseFloat(q.taxes) / 100).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                            </tr>
                            <tr style="background:#f8fafc; font-size:1.1rem; font-weight:700;">
                                <td colspan="3" style="text-align:right; color:#0f766e;">Grand Total:</td>
                                <td style="color:#0f766e;">₹${((parseFloat(q.price) * parseFloat(q.qty) + parseFloat(q.freight)) * (1 + parseFloat(q.taxes) / 100)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="margin-top: 50px; text-align: center; color: #64748b; font-size: 0.85rem;">Thank you for your business enquiry. Feel free to contact our commercial sales office for order finalization.</p>
                    <script>window.print();</script>
                </body>
                </html>
            `);
            printWindow.document.close();
        };

        window.simulateEmailQuote = (id) => {
            const quotes = JSON.parse(localStorage.getItem('kalp_quotes') || '[]');
            const q = quotes.find(item => item.id === id);
            if (!q) return;
            alert(`Quotation ${q.id} has been compiled and emailed to the registered procurement manager of ${q.customer} successfully!`);
            logActivity(`Emailed Quotation ${q.id} to client.`);
        };
        
        // 10. Add Customer Modal Controllers
        window.openAddCustomerModal = () => {
            const modal = document.getElementById('modalAddCustomer');
            if (modal) modal.style.display = 'flex';
        };

        window.closeAddCustomerModal = () => {
            const modal = document.getElementById('modalAddCustomer');
            if (modal) {
                modal.style.display = 'none';
                const form = document.getElementById('addCustomerForm');
                if (form) form.reset();
            }
        };

        const addCustomerForm = document.getElementById('addCustomerForm');
        if (addCustomerForm) {
            addCustomerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const company = document.getElementById('custCompany').value.trim();
                const person = document.getElementById('custPerson').value.trim();
                const industry = document.getElementById('custIndustry').value.trim() || 'N/A';
                const email = document.getElementById('custEmail').value.trim();
                const phone = document.getElementById('custPhone').value.trim() || 'N/A';
                const gst = document.getElementById('custGst').value.trim() || 'N/A';
                const country = document.getElementById('custCountry').value.trim();
                const status = document.getElementById('custStatus').value;

                const custs = JSON.parse(localStorage.getItem('kalp_customers') || '[]');
                const newCust = {
                    id: 'CUST' + Math.floor(1000 + Math.random() * 9000),
                    company,
                    person,
                    industry,
                    email,
                    phone,
                    gst,
                    country,
                    status
                };

                custs.push(newCust);
                localStorage.setItem('kalp_customers', JSON.stringify(custs));
                logActivity(`Added customer account: ${company}`);
                
                closeAddCustomerModal();
                renderCustomers();
                loadDashboardData();
            });
        }

        // 11. Database Backup & Restore Systems
        window.exportDatabaseBackup = () => {
            const keys = ['kalp_products', 'kalp_categories', 'kalp_customers', 'kalp_enquiries', 'kalp_quotes', 'kalp_activities'];
            const backupObj = {};
            keys.forEach(k => {
                backupObj[k] = JSON.parse(localStorage.getItem(k) || '[]');
            });

            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupObj, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `kalp_db_backup_${new Date().toISOString().split('T')[0]}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            logActivity('Exported local database configuration backup.');
        };

        window.importDatabaseBackup = (event) => {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    const keys = ['kalp_products', 'kalp_categories', 'kalp_customers', 'kalp_enquiries', 'kalp_quotes', 'kalp_activities'];
                    
                    keys.forEach(k => {
                        if (data[k]) {
                            localStorage.setItem(k, JSON.stringify(data[k]));
                        }
                    });

                    alert('Database restored successfully from backup!');
                    logActivity('Restored local database configuration from uploaded backup.');
                    
                    // Refresh views
                    loadDashboardData();
                    renderProducts();
                    renderCategories();
                    renderCustomers();
                    renderInquiriesBoard();
                    renderQuotes();
                } catch (err) {
                    alert('Invalid JSON file or backup format.');
                    console.error(err);
                }
            };
            reader.readAsText(file);
        };

        // 12. Activity Log Exporter
        window.exportSystemLogs = () => {
            const acts = JSON.parse(localStorage.getItem('kalp_activities') || '[]');
            if (acts.length === 0) {
                alert('No system activity logs found.');
                return;
            }

            const logContent = acts.map(a => `[${a.time}] ${a.text}`).join('\n');
            const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(logContent);
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `kalp_system_activity_logs_${new Date().toISOString().split('T')[0]}.txt`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            logActivity('Downloaded system activity logs.');
        };
        
        // Initial dashboard statistics load
        loadDashboardData();
    }

    // Logout and Inquiry Clear controllers
    const userLogoutBtn = document.getElementById('userLogoutBtn');
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    
    const handleLogout = () => {
        if (portalLoginForm) portalLoginForm.reset();
        if (userDashboard) userDashboard.style.display = 'none';
        if (adminDashboard) adminDashboard.style.display = 'none';
        if (loginFormWrapper) loginFormWrapper.style.display = 'block';
        adjustLayoutForAdmin(false);
    };

    if (userLogoutBtn) userLogoutBtn.addEventListener('click', handleLogout);
    if (adminLogoutBtn) adminLogoutBtn.addEventListener('click', handleLogout);
});

