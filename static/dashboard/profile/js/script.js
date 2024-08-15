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
searchButton.addEventListener('click', function(e) {
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
notificationIcon.addEventListener('click', function() {
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



// Check if dark mode preference is saved in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Function to set dark mode based on stored preference
function setDarkMode() {
	if (isDarkMode) {
		document.body.classList.add('dark');
		document.getElementById('switch-mode').checked = true;
	} else {
		document.body.classList.remove('dark');
		document.getElementById('switch-mode').checked = false;
	}
}

// Apply dark mode on initial load
setDarkMode();

// Toggle dark mode on checkbox change
const switchMode = document.getElementById('switch-mode');
switchMode.addEventListener('change', function () {
	if (this.checked) {
		document.body.classList.add('dark');
		localStorage.setItem('darkMode', 'true');
	} else {
		document.body.classList.remove('dark');
		localStorage.setItem('darkMode', 'false');
	}
});


// JavaScript to toggle the modal
document.addEventListener('DOMContentLoaded', function() {
    var profileLink = document.querySelector('.pofile');
    var modal = document.getElementById('user-details-modal');
    var closeButton = document.querySelector('.close');

    // Show modal when profile link is clicked
    profileLink.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    // Close modal when close button or outside modal is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});



// Sample data (you can replace this with your actual data)
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const subscriptions = [100, 150, 120, 180, 200, 220, 250, 300, 280, 320, 350, 380];

// Get the canvas element
const ctx = document.getElementById('subscriptionChart').getContext('2d');

// Create the chart
const myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: months,
		datasets: [{
			label: 'Total Subscriptions',
			data: subscriptions,
			backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color with transparency
			borderColor: 'rgba(54, 162, 235, 1)', // Blue color
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
});


