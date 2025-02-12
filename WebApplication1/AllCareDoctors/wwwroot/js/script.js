// Get references to DOM elements
const calendarGrid = document.getElementById('calendar-grid');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const selectedDateDisplay = document.getElementById('selected-date');

// Get today's date, month, and year
const today = new Date();
let currentMonth = today.getMonth();  // 0-11 (0 = January)
let currentYear = today.getFullYear();

// Function to render the calendar based on the current month and year
function renderCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay(); // Day of the week the month starts on (0-6, Sunday-Saturday)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the month
    const prevMonthDays = new Date(year, month, 0).getDate(); // Number of days in the previous month

    // Display current month and year
    monthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

    // Clear any previous calendar cells
    calendarGrid.innerHTML = '';

    // Render the previous month's "leading" days (days from the last month that fill up the first week)
    for (let i = firstDay - 1; i >= 0; i--) {
        calendarGrid.appendChild(createCell(prevMonthDays - i, '#ccc'));  // Add disabled cells in gray
    }

    // Render the current month's days
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = createCell(day);

        // Highlight the current day
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            cell.classList.add('current');
        }

        // Add event listener to each cell for selecting a date
        cell.addEventListener('click', () => selectDate(day, month, year));
        calendarGrid.appendChild(cell);
    }

    // Fill the remaining cells for the next month (if the grid is not complete)
    const totalCells = firstDay + daysInMonth;
    const extraCells = totalCells > 35 ? 42 - totalCells : 35 - totalCells;
    for (let i = 1; i <= extraCells; i++) {
        calendarGrid.appendChild(createCell(i, '#ccc'));  // Add empty cells for the next month in gray
    }
}

// Helper function to create a calendar cell with a given day number and text color
function createCell(day, color = 'black') {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell';
    cell.textContent = day;
    cell.style.color = color;
    return cell;
}

// Function to handle date selection and highlight the selected date
function selectDate(day, month, year) {
    // Remove the selected class from all cells
    document.querySelectorAll('.calendar-cell').forEach(cell => cell.classList.remove('selected'));

    // Add the 'selected' class to the clicked cell
    const selectedCell = event.target;
    selectedCell.classList.add('selected');

    // Update the displayed selected date
    selectedDateDisplay.textContent = new Date(year, month, day).toDateString();
}

// Event listeners for navigating between months
prevBtn.addEventListener('click', () => {
    // Go to the previous month
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    if (currentMonth === 11) currentYear--; // Change year when moving backward
    renderCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener('click', () => {
    // Go to the next month
    currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    if (currentMonth === 0) currentYear++; // Change year when moving forward
    renderCalendar(currentMonth, currentYear);
});

// Initial rendering of the current month and year
renderCalendar(currentMonth, currentYear);

// Function to update the selected time (not directly related to the calendar, but included in the script)
function selectTime(time) {
    document.getElementById("selectedTime").textContent = time;
}