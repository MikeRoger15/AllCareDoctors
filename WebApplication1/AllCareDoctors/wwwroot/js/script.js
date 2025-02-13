// Get references to DOM elements
const calendarGrid = document.getElementById('calendar-grid');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const selectedDateDisplay = document.getElementById('selected-date');

// Get today's date
const today = new Date();
let currentMonth = today.getMonth();  // 0-11 (January = 0)
let currentYear = today.getFullYear();

// Function to render the calendar
function renderCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay(); // Day of the week the month starts on (0-6)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month
    const prevMonthDays = new Date(year, month, 0).getDate(); // Total days in the previous month

    // Update month and year in header
    monthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

    // Clear existing calendar cells
    calendarGrid.innerHTML = '';

    // Render previous month's days (gray cells)
    for (let i = firstDay - 1; i >= 0; i--) {
        calendarGrid.appendChild(createCell(prevMonthDays - i, 'gray', true));
    }

    // Render current month's days
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = createCell(day, 'black', false);

        // Highlight today’s date
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            cell.classList.add('current');
        }

        // Add event listener to select date
        cell.addEventListener('click', (event) => selectDate(event, day, month, year));
        calendarGrid.appendChild(cell);
    }

    // Fill remaining days from next month
    const totalCells = firstDay + daysInMonth;
    const extraCells = totalCells > 35 ? 42 - totalCells : 35 - totalCells;
    for (let i = 1; i <= extraCells; i++) {
        calendarGrid.appendChild(createCell(i, 'gray', true));
    }
}

// Helper function to create a calendar cell
function createCell(day, color, isDisabled) {
    const cell = document.createElement('div');
    cell.className = `calendar-cell ${isDisabled ? 'disabled' : ''}`;
    cell.textContent = day;
    cell.style.color = color;
    return cell;
}

// Function to handle date selection
function selectDate(event, day, month, year) {
    // Remove previous selection
    document.querySelectorAll('.calendar-cell').forEach(cell => cell.classList.remove('selected'));

    // Highlight selected date
    event.target.classList.add('selected');

    // Update selected date display
    selectedDateDisplay.textContent = new Date(year, month, day).toDateString();
}

// Event listeners for previous/next month buttons
prevBtn.addEventListener('click', () => {
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    if (currentMonth === 11) currentYear--; // If moving back from January, go to previous year
    renderCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener('click', () => {
    currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    if (currentMonth === 0) currentYear++; // If moving forward from December, go to next year
    renderCalendar(currentMonth, currentYear);
});

// Initial render of the calendar
renderCalendar(currentMonth, currentYear);

// Function to update the selected time
function selectTime(time) {
    document.getElementById("selectedTime").textContent = time;
}

// Simulated patient data (fetched from a database)
const patientData = {
    fullName: "John Doe",
    dob: "1990-05-15",
    medicalHistory: "Hypertension, Diabetes",
    currentMedications: "Metformin, Lisinopril",
    allergies: "Penicillin"
};

// Populate patient data on the UI
document.getElementById('patient-name').textContent = patientData.fullName;
document.getElementById('patient-dob').textContent = patientData.dob;
document.getElementById('medical-history').textContent = patientData.medicalHistory;
document.getElementById('current-medications').textContent = patientData.currentMedications;
document.getElementById('allergies').textContent = patientData.allergies;

// Handle tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Handle payment method selection
const methodButtons = document.querySelectorAll('.method-btn');
const checkDetails = document.getElementById('checkDetails');
const selectedMethodSpan = document.getElementById('selectedMethod');

methodButtons.forEach(button => {
    button.addEventListener('click', () => {
        methodButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const method = button.dataset.method;
        selectedMethodSpan.textContent = method.charAt(0).toUpperCase() + method.slice(1);

        if (method === 'check') {
            checkDetails.style.display = 'block';
        } else {
            checkDetails.style.display = 'none';
        }
    });
});

// Handle form submission
document.getElementById('submitBtn').addEventListener('click', () => {
    alert('Payment submitted successfully!');
});
