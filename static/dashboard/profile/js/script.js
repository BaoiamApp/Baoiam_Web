const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})



// Selecting elements
const searchButton = document.querySelector('#search-btn');
const searchButtonIcon = searchButton.querySelector('.bx');
const searchForm = document.querySelector('#search-form');

// Event listener for the search button
searchButton.addEventListener('click', function (e) {
	if (window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');

		// Toggle icon based on form visibility
		if (searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
});


// Selecting the notification icon
const notificationIcon = document.querySelector('#notifications');

// Event listener for the notification icon
notificationIcon.addEventListener('click', function () {
	// Example action: Display an alert
	alert('You have new notifications!');
	// Alternatively, you could toggle a notifications menu or panel here
	// document.querySelector('#notifications-menu').classList.toggle('show');
});


if (window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if (this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})










document.addEventListener('DOMContentLoaded', function () {
	var email = "{{user.username}}";  // Replace with actual method to get username
	var username = email.split('@')[0];
	document.getElementById('username-link').textContent = username;
});

document.addEventListener('DOMContentLoaded', function () {
	// Extract username from Django template
	const username = "{{ user.username }}";

	// Function to get current time and generate a greeting message
	function getGreetingMessage() {
		const now = new Date();
		const hours = now.getHours();
		let greeting;

		if (hours < 12) {
			greeting = 'Good morning';
		} else if (hours < 18) {
			greeting = 'Good afternoon';
		} else {
			greeting = 'Good evening';
		}

		return greeting;
	}

	// Update the greeting message in the HTML
	const greetingMessageElement = document.getElementById('greeting-message');
	if (greetingMessageElement) {
		const greetingMessage = getGreetingMessage();
		greetingMessageElement.textContent = `${greetingMessage}`;
	}
});

function toggleLogo() {
	const logoImg = document.getElementById('logo-img');
	logoImg.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    // Get references to modal and its components
    const modal = document.getElementById('user-details-modal');
    const closeModal = modal.querySelector('.close');
    const profileLink = document.getElementById('profile-link');

    // Open modal and populate data
    profileLink.addEventListener('click', function(e) {
        e.preventDefault();

        // Show the modal
        modal.style.display = 'flex';
    });

    // Close modal when close button is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
	const profileSidebarLink = document.getElementById('profile-sidebar-link');
    const profileSection = document.getElementById('profile-section');

    if (profileSidebarLink && profileSection) {
        profileSidebarLink.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            
            // Hide all sections except profile
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });

            profileSection.style.display = 'block'; // Show profile section
        });
    }
})


document.addEventListener('DOMContentLoaded', function () {
    // Toggle the visibility of the course container
	const courseSidebarLink = document.getElementById('course-sidebar-link');
    const courseContainer = document.getElementById('course-section');

    if (courseSidebarLink && courseContainer) {
        courseSidebarLink.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            
            // Hide all sections except course
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });

            courseContainer.style.display = 'block'; // Show course section
        });
    }

    // Handle course details visibility
    document.querySelectorAll('.course-title').forEach(button => {
        button.addEventListener('click', function () {
            const courseId = this.getAttribute('data-course-id');
            toggleCourseDetails(courseId);
        });
    });
});

function toggleCourseDetails(courseId) {
	// Get all course details elements
	const allDetailsElements = document.querySelectorAll('.course-details');

	// Hide all course details elements except the one being clicked
	allDetailsElements.forEach(function (element) {
		if (element.id !== `details-course-${courseId}`) {
			element.style.display = 'none';
		}
	});

	// Show or hide the clicked course details element
	const detailsElement = document.getElementById(`details-course-${courseId}`);
	if (detailsElement) {
		detailsElement.style.display = 'block';
	} else {
		console.error(`Element with id "details-course-${courseId}" not found.`);
	}
}


document.addEventListener('DOMContentLoaded', function () {
	// Handle certificate section visibility
    const certificateSidebarLink = document.getElementById('certificate-sidebar-link');
    const certificateSection = document.getElementById('certificate-section');

    if (certificateSidebarLink && certificateSection) {
        certificateSidebarLink.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            
            // Hide all sections except certificate
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });

            certificateSection.style.display = 'block'; // Show certificate section
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Handle livestream section visibility
    const livestreamSidebarLink = document.getElementById('livestream-sidebar-link');
    const livestreamSection = document.getElementById('livestream-section');

    if (livestreamSidebarLink && livestreamSection) {
        livestreamSidebarLink.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            
            // Hide all sections except livestream
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });

            livestreamSection.style.display = 'block'; // Show livestream section
        });
    }

    // Handle live card interactions
    document.querySelectorAll('.live-card').forEach(card => {
        card.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const content = document.getElementById(targetId);

            // Toggle visibility of the content
            if (content) {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});
