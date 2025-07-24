// Browse experts page functionality

// Dummy data for experts
const expertsData = [
    {
        id: 1,
        name: "Dr. Priya Sharma",
        title: "Mathematics Professor",
        category: "education",
        rating: 4.9,
        reviews: 143,
        price: 60,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
        specialties: ["Calculus", "Algebra", "Statistics", "IIT JEE Prep"],
        experience: "18+ years",
        description: "Former IIT professor with expertise in advanced mathematics and competitive exam preparation."
    },
    {
        id: 2,
        name: "Michael Johnson",
        title: "Financial Advisor & CPA",
        category: "finance",
        rating: 4.8,
        reviews: 189,
        price: 120,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        specialties: ["Investment Planning", "Retirement", "Tax Strategy", "Estate Planning"],
        experience: "16+ years",
        description: "Certified Public Accountant specializing in comprehensive financial planning and wealth management."
    },
    {
        id: 3,
        name: "Sarah Martinez",
        title: "Business Strategy Consultant",
        category: "business",
        rating: 4.7,
        reviews: 167,
        price: 95,
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
        specialties: ["Strategic Planning", "Market Analysis", "Growth Strategy", "Digital Transformation"],
        experience: "12+ years",
        description: "Former McKinsey consultant helping businesses scale and optimize operations globally."
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        title: "Computer Science Professor",
        category: "education",
        rating: 4.9,
        reviews: 234,
        price: 85,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
        specialties: ["Machine Learning", "Algorithms", "Data Structures", "AI Ethics"],
        experience: "14+ years",
        description: "Stanford professor and former Google researcher specializing in artificial intelligence and computer science education."
    },
    {
        id: 5,
        name: "Emily Chen",
        title: "Language & Communication Expert",
        category: "skills",
        rating: 4.8,
        reviews: 156,
        price: 65,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
        specialties: ["English", "Mandarin", "TOEFL", "Business Communication", "Public Speaking"],
        experience: "8+ years",
        description: "Multilingual communication expert helping professionals master English and presentation skills."
    },
    {
        id: 6,
        name: "David Thompson",
        title: "Investment Specialist",
        category: "finance",
        rating: 4.6,
        reviews: 98,
        price: 110,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
        specialties: ["Portfolio Management", "Risk Assessment", "Options Trading", "ESG Investing"],
        experience: "11+ years",
        description: "Wall Street veteran with expertise in portfolio management and alternative investments."
    },
    {
        id: 7,
        name: "Lisa Rodriguez",
        title: "Digital Marketing Strategist",
        category: "business",
        rating: 4.7,
        reviews: 189,
        price: 75,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
        specialties: ["Digital Strategy", "Content Marketing", "Social Media", "Brand Development"],
        experience: "9+ years",
        description: "Former Facebook marketing lead helping businesses build powerful digital presence and brand strategy."
    },
    {
        id: 8,
        name: "Dr. Raj Patel",
        title: "Data Science Mentor",
        category: "skills",
        rating: 4.9,
        reviews: 201,
        price: 80,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
        specialties: ["Machine Learning", "Python", "Statistics", "AI", "Analytics"],
        experience: "13+ years",
        description: "MIT alumnus and data science expert at leading tech companies helping students master AI and ML."
    },
    {
        id: 9,
        name: "Amanda Foster",
        title: "Executive Coach & MBA",
        category: "business",
        rating: 4.8,
        reviews: 124,
        price: 100,
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face",
        specialties: ["Leadership", "Career Development", "Executive Coaching", "Team Building"],
        experience: "15+ years",
        description: "Harvard MBA and executive coach helping professionals advance their careers and leadership skills."
    },
    {
        id: 10,
        name: "Robert Kim",
        title: "Software Engineering Mentor",
        category: "education",
        rating: 4.9,
        reviews: 312,
        price: 70,
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&h=300&fit=crop&crop=face",
        specialties: ["JavaScript", "React", "Node.js", "System Design", "Interview Prep"],
        experience: "10+ years",
        description: "Senior engineer at Netflix helping developers master modern web technologies and crack technical interviews."
    },
    {
        id: 11,
        name: "Dr. Jennifer Adams",
        title: "Academic Writing Coach",
        category: "skills",
        rating: 4.7,
        reviews: 143,
        price: 60,
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
        specialties: ["Academic Writing", "Research Methods", "Thesis Writing", "Publication Strategy"],
        experience: "12+ years",
        description: "Oxford PhD helping students and researchers excel in academic writing and publication."
    },
    {
        id: 12,
        name: "Dr. Alex Martinez",
        title: "Medical School Advisor",
        category: "education",
        rating: 4.9,
        reviews: 287,
        price: 90,
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
        specialties: ["MCAT Prep", "Medical School Admissions", "Clinical Skills", "Healthcare Career Planning"],
        experience: "12+ years",
        description: "Johns Hopkins graduate helping pre-med students navigate medical school admissions and healthcare careers."
    }
];

let filteredExperts = [...expertsData];

document.addEventListener('DOMContentLoaded', function() {
    // Check for URL parameters first
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromURL = urlParams.get('category');

    // Display all experts initially
    displayExperts(expertsData);
    setupFilters();

    if (categoryFromURL) {
        // Set the category filter dropdown
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.value = categoryFromURL;
        }
        // Apply the filter immediately
        filterExperts();

        // Update the page title to show the filtered category
        const categoryName = categoryFromURL.charAt(0).toUpperCase() + categoryFromURL.slice(1);
        const pageTitle = document.querySelector('h1');
        if (pageTitle) {
            pageTitle.textContent = `${categoryName} Experts`;
        }
    }
});

function displayExperts(experts) {
    const grid = document.getElementById('experts-grid');
    if (!grid) return;

    grid.innerHTML = experts.map(expert => `
        <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 fade-in">
            <div class="p-6">
                <div class="flex items-start space-x-4 mb-4">
                    <img src="${expert.image}" alt="${expert.name}" 
                         class="w-16 h-16 rounded-full object-cover">
                    <div class="flex-1">
                        <h3 class="text-lg font-semibold text-gray-900">${expert.name}</h3>
                        <p class="text-gray-600">${expert.title}</p>
                        <div class="flex items-center mt-2">
                            <div class="flex text-yellow-400 text-sm">
                                ${generateStars(expert.rating)}
                            </div>
                            <span class="text-gray-600 text-sm ml-2">${expert.rating} (${expert.reviews} reviews)</span>
                        </div>
                    </div>
                </div>
                
                <p class="text-gray-600 text-sm mb-4">${expert.description}</p>
                
                <div class="mb-4">
                    <div class="flex flex-wrap gap-2">
                        ${expert.specialties.map(specialty => 
                            `<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">${specialty}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="flex items-center justify-between mb-4">
                    <div class="text-sm text-gray-600">
                        <i class="fas fa-clock mr-1"></i>
                        ${expert.experience}
                    </div>
                    <div class="text-lg font-bold text-gray-900">
                        $${expert.price}/hour
                    </div>
                </div>
                
                <div class="flex space-x-2">
                    <button onclick="viewProfile(${expert.id})" 
                            class="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition">
                        View Profile
                    </button>
                    <button onclick="bookExpert(${expert.id})" 
                            class="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const ratingFilter = document.getElementById('rating-filter');

    if (searchInput) {
        searchInput.addEventListener('input', filterExperts);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterExperts);
    }

    if (ratingFilter) {
        ratingFilter.addEventListener('change', filterExperts);
    }
}

function filterExperts() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    const selectedCategory = document.getElementById('category-filter')?.value || '';
    const selectedRating = document.getElementById('rating-filter')?.value || '';

    filteredExperts = expertsData.filter(expert => {
        const matchesSearch = expert.name.toLowerCase().includes(searchTerm) ||
                            expert.title.toLowerCase().includes(searchTerm) ||
                            expert.specialties.some(s => s.toLowerCase().includes(searchTerm));

        const matchesCategory = !selectedCategory || expert.category === selectedCategory;

        const matchesRating = !selectedRating || expert.rating >= parseFloat(selectedRating);

        return matchesSearch && matchesCategory && matchesRating;
    });

    displayExperts(filteredExperts);
}

function viewProfile(expertId) {
    const expert = expertsData.find(e => e.id === expertId);
    if (expert) {
        showProfileModal(expert);
    }
}

function showProfileModal(expert) {
    // Create modal HTML
    const modalHTML = `
        <div id="profile-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
                <div class="p-6">
                    <!-- Header -->
                    <div class="flex justify-between items-start mb-6">
                        <div class="flex items-center space-x-4">
                            <img src="${expert.image}" alt="${expert.name}" 
                                 class="w-20 h-20 rounded-full object-cover">
                            <div>
                                <h2 class="text-2xl font-bold text-gray-900">${expert.name}</h2>
                                <p class="text-lg text-gray-600">${expert.title}</p>
                                <div class="flex items-center mt-2">
                                    <div class="flex text-yellow-400">
                                        ${generateStars(expert.rating)}
                                    </div>
                                    <span class="text-gray-600 ml-2">${expert.rating} (${expert.reviews} reviews)</span>
                                </div>
                            </div>
                        </div>
                        <button onclick="closeProfileModal()" class="text-gray-400 hover:text-gray-600">
                            <i class="fas fa-times text-2xl"></i>
                        </button>
                    </div>

                    <!-- Details -->
                    <div class="space-y-6">
                        <!-- About -->
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">About</h3>
                            <p class="text-gray-600">${expert.description}</p>
                        </div>

                        <!-- Experience -->
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">Experience</h3>
                            <div class="flex items-center text-gray-600">
                                <i class="fas fa-clock mr-2"></i>
                                <span>${expert.experience}</span>
                            </div>
                        </div>

                        <!-- Specialties -->
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">Specialties</h3>
                            <div class="flex flex-wrap gap-2">
                                ${expert.specialties.map(specialty => 
                                    `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${specialty}</span>`
                                ).join('')}
                            </div>
                        </div>

                        <!-- Category -->
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">Category</h3>
                            <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm capitalize">${expert.category}</span>
                        </div>

                        <!-- Pricing -->
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">Pricing</h3>
                            <div class="text-2xl font-bold text-primary">$${expert.price}/hour</div>
                        </div>

                        <!-- Sample Reviews -->
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">Recent Reviews</h3>
                            <div class="space-y-3">
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <div class="flex items-center mb-2">
                                        <div class="flex text-yellow-400 text-sm">
                                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                        </div>
                                        <span class="text-gray-600 text-sm ml-2">by Sarah M.</span>
                                    </div>
                                    <p class="text-gray-600 text-sm">"Excellent session! Really helped me understand the concepts better."</p>
                                </div>
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <div class="flex items-center mb-2">
                                        <div class="flex text-yellow-400 text-sm">
                                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                        </div>
                                        <span class="text-gray-600 text-sm ml-2">by John D.</span>
                                    </div>
                                    <p class="text-gray-600 text-sm">"Professional and knowledgeable. Highly recommend!"</p>
                                </div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex space-x-4 pt-4 border-t">
                            <button onclick="bookExpert(${expert.id}); closeProfileModal();" 
                                    class="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition font-medium">
                                <i class="fas fa-calendar-plus mr-2"></i>Book Appointment
                            </button>
                            <button onclick="closeProfileModal()" 
                                    class="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition font-medium">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Prevent body scrolling
    document.body.style.overflow = 'hidden';

    // Close modal when clicking outside
    document.getElementById('profile-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProfileModal();
        }
    });
}

function closeProfileModal() {
    const modal = document.getElementById('profile-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto'; // Restore body scrolling
    }
}

function bookExpert(expertId) {
    const expert = expertsData.find(e => e.id === expertId);
    if (expert) {
        // Store expert data in localStorage for the booking page
        localStorage.setItem('selectedExpert', JSON.stringify(expert));

        // Show a brief loading message
        utils.showNotification('Redirecting to booking page...', 'info');

        // Redirect to booking page after a short delay
        setTimeout(() => {
            window.location.href = 'booking.html';
        }, 800);
    } else {
        utils.showNotification('Expert not found. Please try again.', 'error');
    }
}
