const calendarGrid = document.getElementById('calendar-grid'),
    monthYear = document.getElementById('month-year'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    selectedDateDisplay = document.getElementById('selected-date');

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Function to render the calendar
function renderCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay(),
        daysInMonth = new Date(year, month + 1, 0).getDate(),
        prevMonthDays = new Date(year, month, 0).getDate();

    monthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
    calendarGrid.innerHTML = ''; // Clear previous cells

    // Render cells for previous month, current month, and next month
    for (let i = firstDay - 1; i >= 0; i--) {
        calendarGrid.appendChild(createCell(prevMonthDays - i, '#ccc'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = createCell(day);
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            cell.classList.add('current');
        }
        cell.addEventListener('click', () => selectDate(day, month, year));
        calendarGrid.appendChild(cell);
    }

    const totalCells = firstDay + daysInMonth;
    const extraCells = totalCells > 35 ? 42 - totalCells : 35 - totalCells;
    for (let i = 1; i <= extraCells; i++) {
        calendarGrid.appendChild(createCell(i, '#ccc'));
    }
}

// Helper function to create a calendar cell
function createCell(day, color = 'black') {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell';
    cell.textContent = day;
    cell.style.color = color;
    return cell;
}

// Function to handle date selection
function selectDate(day, month, year) {
    document.querySelectorAll('.calendar-cell').forEach(cell => cell.classList.remove('selected'));
    const selectedCell = event.target;
    selectedCell.classList.add('selected');
    selectedDateDisplay.textContent = new Date(year, month, day).toDateString();
}

// Event listeners for prev and next buttons
prevBtn.addEventListener('click', () => {
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    if (currentMonth === 11) currentYear--;
    renderCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener('click', () => {
    currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    if (currentMonth === 0) currentYear++;
    renderCalendar(currentMonth, currentYear);
});

// Initial render of the calendar
renderCalendar(currentMonth, currentYear);

function selectTime(time) {
    document.getElementById("selectedTime").textContent = time;
}
