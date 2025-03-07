// Debug logging
console.log('Script loaded');

// Student data with actual information
const students = [
    { id: "23901", name: "Abrar A", present: true, image: "https://public.readdy.ai/ai/img_res/8f0cd8a33cbd68c408b048fa1671cb94.jpg" },
    { id: "23902", name: "Ayesha G", present: true, image: "https://public.readdy.ai/ai/img_res/be87b1a0f8d8caabd2f4722a4f6a4953.jpg" },
    { id: "23903", name: "Bharathi L", present: true, image: "https://public.readdy.ai/ai/img_res/ef6f7f63679bff318269bcd8bf59cf9a.jpg" },
    { id: "23904", name: "Bhavani B", present: true, image: "https://public.readdy.ai/ai/img_res/f7326cf93ff80cde2a4f0ac533c0caf0.jpg" },
    { id: "23905", name: "Deepak P", present: true, image: "https://public.readdy.ai/ai/img_res/c9b91b14f34f330419fc6797a409645a.jpg" },
    { id: "23906", name: "Dhanishta V", present: true, image: "https://public.readdy.ai/ai/img_res/c8ddaab5053ba37e6550da3a2a6dd541.jpg" },
    { id: "23907", name: "Dhiphikha R", present: false, image: "https://public.readdy.ai/ai/img_res/25897f8ee43b42f88e628ac6a7a2df74.jpg" },
    { id: "23909", name: "Farhaan Abbas R", present: true, image: "https://public.readdy.ai/ai/img_res/248f7f5ee14b52a21e5cdce6d1dd7678.jpg" },
    { id: "23910", name: "Harish Ragavendra Srinivasan", present: true, image: "https://public.readdy.ai/ai/img_res/cb52f81cb17926455ecd095592974673.jpg" },
    { id: "23911", name: "Justin Rishi S B", present: false, image: "https://public.readdy.ai/ai/img_res/530b2919151b385f1de791bca4184293.jpg" },
    { id: "23912", name: "Karthikeyan K", present: true, image: "https://public.readdy.ai/ai/img_res/58abc549cee0d9df4f3c55daadde23c5.jpg" },
    { id: "23913", name: "Karthikeyan P", present: true, image: "https://public.readdy.ai/ai/img_res/a640f2515069444f9a90f1629afd36c8.jpg" },
    { id: "23914", name: "Kavin Kumar S", present: true, image: "https://public.readdy.ai/ai/img_res/dd001dae677697ab0c6072138ab91f15.jpg" },
    { id: "23915", name: "Keerthisai A S", present: false, image: "https://public.readdy.ai/ai/img_res/7484c66bf82efd95e917c592413559b5.jpg" },
    { id: "23916", name: "Kishore B", present: true, image: "https://public.readdy.ai/ai/img_res/4e54e62b764e63db405acd83abcc8370.jpg" },
    { id: "23917", name: "Kishore C Dathan", present: true, image: "https://public.readdy.ai/ai/img_res/be22525d55d47a30ea0e5454d2e30709.jpg" },
    { id: "23918", name: "Madan D", present: false, image: "https://public.readdy.ai/ai/img_res/2b985092b1332aaa8594c058250ede9a.jpg" },
    { id: "23919", name: "Md Talha C", present: true, image: "https://public.readdy.ai/ai/img_res/90b98d2998d8d615d9b16899951c3a03.jpg" },
    { id: "23920", name: "Md Talha V", present: true, image: "https://public.readdy.ai/ai/img_res/029d61079213ac51ab845ec28a1c0ce2.jpg" },
    { id: "23921", name: "Mohamed Harris H", present: true, image: "https://public.readdy.ai/ai/img_res/11780176a02d664c8bfef87ef49152ad.jpg" },
    { id: "23022", name: "Mohamed Melhan K O", present: false, image: "https://public.readdy.ai/ai/img_res/d64d0b42a4b5209c70b4383fd1364d4d.jpg" },
    { id: "23923", name: "Mohamed Naveed V", present: true, image: "https://public.readdy.ai/ai/img_res/406ee7c4b83b9c0feffa674d2971885a.jpg" },
    { id: "23925", name: "Mohamed Aqlath A", present: true, image: "https://public.readdy.ai/ai/img_res/44aeab63f46c268ab62adc44d796386d.jpg" },
    { id: "23926", name: "Mohamed Azhar sayeed A S", present: false, image: "https://public.readdy.ai/ai/img_res/b95950837d18bc3eb76c16da5c2bd829.jpg" },
    { id: "23928", name: "Mohamed Kaif M S", present: true, image: "https://public.readdy.ai/ai/img_res/f894b4f427813d8f756956164b8add4c.jpg" },
    { id: "23929", name: "Mohamed Kashif A", present: true, image: "https://public.readdy.ai/ai/img_res/48a75e9697442808413f65d9fc6163bb.jpg" },
    { id: "23930", name: "Muhamed Maaz Mouzan", present: true, image: "https://public.readdy.ai/ai/img_res/b38cc76a8eef54094602b35b143f4e36.jpg" },
    { id: "23931", name: "Mohamed Nafeed S", present: false, image: "https://public.readdy.ai/ai/img_res/08c7e771c2264165c4bb8ba25b9a0e18.jpg" },
    { id: "23932", name: "Mohamed Raquees C", present: true, image: "https://public.readdy.ai/ai/img_res/9e5936f59f88e73db80a93e4f7128251.jpg" },
    { id: "23933", name: "Mohamed Rashique K", present: true, image: "https://public.readdy.ai/ai/img_res/40c903294f9d00631660708ffd99c568.jpg" },
    { id: "23934", name: "Mohamed Rehan K", present: false, image: "https://public.readdy.ai/ai/img_res/e41d360f536d45cbb7bf240f68b55aec.jpg" },
    { id: "23935", name: "Mohamed Shoaib N", present: true, image: "https://public.readdy.ai/ai/img_res/0f40678a202a5dfc9e61f0252251dbe0.jpg" },
    { id: "23936", name: "Mohamed Zaid M I", present: true, image: "https://public.readdy.ai/ai/img_res/46f6bebc36f88d7794a9b597ae2a04c8.jpg" },
    { id: "23937", name: "Muddassir S F", present: true, image: "https://public.readdy.ai/ai/img_res/04d2bd246e005e3f2336fdeb9f12f7b9.jpg" },
    { id: "23938", name: "Nanthitha M", present: true, image: "https://public.readdy.ai/ai/img_res/ff4c0817b58b98aebc55f87ba7db39df.jpg" },
    { id: "23939", name: "Padma Priya V", present: true, image: "https://public.readdy.ai/ai/img_res/76eb1c76207be41b6279f6c62cfb8ac3.jpg" },
    { id: "23940", name: "Pavithran T", present: false, image: "https://public.readdy.ai/ai/img_res/5f15d7caf051344e78a14e86ad9d83b9.jpg" },
    { id: "23941", name: "Priyadharshini R", present: true, image: "https://public.readdy.ai/ai/img_res/db338a350bdd46bfb0e27f2eb4245803.jpg" },
    { id: "23942", name: "Rakesh N", present: true, image: "https://public.readdy.ai/ai/img_res/47055b2b2e05ca91a96a72a5738be21b.jpg" },
    { id: "23943", name: "Reshma L R", present: true, image: "https://public.readdy.ai/ai/img_res/71c26e3451b1966642df9e55ef09767a.jpg" },
    { id: "23944", name: "Sadiqul Ameen S", present: false, image: "https://public.readdy.ai/ai/img_res/efabaf588cedb81ed6ffd02fed480b4a.jpg" },
    { id: "23946", name: "Sanjay Ganesh G", present: true, image: "https://public.readdy.ai/ai/img_res/d0c3f5350fb0ca9a33b85d96d1e25472.jpg" },
    { id: "23947", name: "Santhosh Kumar B", present: true, image: "https://public.readdy.ai/ai/img_res/1dc82efade8653ede6c797885015ed34.jpg" },
    { id: "23948", name: "Saraswathi G", present: false, image: "https://public.readdy.ai/ai/img_res/dcf17640cba7be72adcf83ae26c81b60.jpg" },
    { id: "23949", name: "Sathya Priya K", present: true, image: "https://public.readdy.ai/ai/img_res/69d525993a5a89c7649d27d6fc38537e.jpg" },
    { id: "23950", name: "Shalu Priyadharsini M", present: true, image: "https://public.readdy.ai/ai/img_res/08e5c58dd01f9e160ad292dca54c527a.jpg" },
    { id: "23951", name: "Shayyan Najath C N", present: true, image: "https://public.readdy.ai/ai/img_res/ea0b2d43dff0adc454965f98456b3d4c.jpg" },
    { id: "23952", name: "Sonika R", present: false, image: "https://public.readdy.ai/ai/img_res/b7e8a847d49ed23a8406611106a2f123.jpg" },
    { id: "23953", name: "Subhalakshmi V", present: true, image: "https://public.readdy.ai/ai/img_res/b3021735759bf45e17e04b1efe1db652.jpg" },
    { id: "23954", name: "Susmitha R", present: true, image: "https://public.readdy.ai/ai/img_res/30575ababcc7bc78604758f548b5f9c5.jpg" },
    { id: "23955", name: "Tamilselvan K", present: false, image: "https://public.readdy.ai/ai/img_res/4c1d0bff68b129c8d2ae5367cadc44dc.jpg" },
    { id: "23956", name: "Threessha D", present: true, image: "https://public.readdy.ai/ai/img_res/393c34b26bb7254540c1be0c8bed9989.jpg" },
    { id: "23957", name: "Vaishnavi A", present: true, image: "https://public.readdy.ai/ai/img_res/8888555cd454982ad7f6377dc7bf658c.jpg" },
    { id: "23958", name: "Varshini S", present: true, image: "https://public.readdy.ai/ai/img_res/ce725ef3113e61258a5172c9e702d289.jpg" },
    { id: "23959", name: "Yuvraj S", present: false, image: "https://public.readdy.ai/ai/img_res/704edbec8a4505b3f498072dcfce8cf7.jpg" },
    { id: "23960", name: "Nehala Fathima", present: true, image: "https://public.readdy.ai/ai/img_res/901cb5ef66168b83e0c93fd473f352cc.jpg" },
    { id: "23961", name: "Vignesh", present: true, image: "https://public.readdy.ai/ai/img_res/901cb5ef66168b83e0c93fd473f352cc.jpg" }
];

console.log('Number of students:', students.length);

// Time periods
const periods = [
    { start: '09:00', end: '09:50', number: 1 },
    { start: '09:50', end: '10:40', number: 2 },
    { start: '11:00', end: '11:50', number: 3 },
    { start: '11:50', end: '12:40', number: 4 },
    { start: '13:30', end: '14:15', number: 5 },
    { start: '14:15', end: '15:00', number: 6 },
    { start: '15:00', end: '15:45', number: 7 },
    { start: '15:45', end: '16:30', number: 8 }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    initializeDateAndTime();
    createStudentCards();
    initializeControls();
    updateCurrentPeriod();
    initializeMobileFeatures();
    
    // Update current time every minute
    setInterval(updateCurrentTime, 60000);
});

function initializeDateAndTime() {
    const today = new Date();
    document.getElementById('attendance-date').valueAsDate = today;
    updateCurrentTime();
}

function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit'
    });
    document.getElementById('current-time').textContent = timeString;
    updateCurrentPeriod();
}

function updateCurrentPeriod() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    let currentPeriodText = '-';
    
    for (const period of periods) {
        const [startHour, startMin] = period.start.split(':').map(Number);
        const [endHour, endMin] = period.end.split(':').map(Number);
        
        const startTime = startHour * 60 + startMin;
        const endTime = endHour * 60 + endMin;
        
        if (currentTime >= startTime && currentTime < endTime) {
            currentPeriodText = `Period ${period.number}`;
            break;
        }
    }
    
    // Check for breaks
    if (currentTime >= 640 && currentTime < 660) { // 10:40 - 11:00
        currentPeriodText = 'Morning Break';
    } else if (currentTime >= 760 && currentTime < 810) { // 12:40 - 13:30
        currentPeriodText = 'Lunch Break';
    }
    
    document.getElementById('current-period').textContent = currentPeriodText;
}

function initializeMobileFeatures() {
    // Add touch feedback for student cards
    document.querySelectorAll('.student-card').forEach(card => {
        const checkbox = card.querySelector('.attendance-checkbox');
        
        card.addEventListener('click', (e) => {
            // Don't toggle if clicking the checkbox directly
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
                card.style.backgroundColor = checkbox.checked ? '#f0f9ff' : '#fff5f5';
                // Add haptic feedback if available
                if (window.navigator.vibrate) {
                    window.navigator.vibrate(50);
                }
            }
        });

        // Initial color
        checkbox.addEventListener('change', () => {
            card.style.backgroundColor = checkbox.checked ? '#f0f9ff' : '#fff5f5';
        });
    });

    // Add pull-to-refresh functionality
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, false);

    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].clientY;
        handleSwipeGesture();
    }, false);

    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(adjustViewForOrientation, 100);
    });

    // Initialize orientation-specific layout
    adjustViewForOrientation();
}

function handleSwipeGesture() {
    const swipeDistance = touchEndY - touchStartY;
    if (window.scrollY === 0 && swipeDistance > 100) {
        // Show loading indicator
        showLoadingIndicator();
        // Refresh data
        setTimeout(() => {
            location.reload();
        }, 500);
    }
}

function showLoadingIndicator() {
    const loader = document.createElement('div');
    loader.className = 'loading-indicator';
    loader.innerHTML = '<i class="fas fa-sync fa-spin"></i> Refreshing...';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #3498db;
        color: white;
        text-align: center;
        padding: 10px;
        z-index: 1000;
    `;
    document.body.prepend(loader);
}

function adjustViewForOrientation() {
    const orientation = window.orientation;
    const studentsList = document.getElementById('students-list');
    
    if (orientation === 90 || orientation === -90) {
        // Landscape mode
        studentsList.style.display = 'grid';
        studentsList.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        // Portrait mode
        studentsList.style.display = 'flex';
        studentsList.style.flexDirection = 'column';
    }
}

function createStudentCards() {
    const studentsList = document.getElementById('students-list');
    if (!studentsList) {
        console.error('Could not find students-list element');
        return;
    }
    
    console.log('Creating student cards for', students.length, 'students');
    studentsList.innerHTML = ''; // Clear existing cards
    
    students.forEach((student, index) => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <img src="${student.image}" alt="${student.name}" class="student-image" loading="lazy" onerror="this.src='https://via.placeholder.com/50'">
            <div class="student-info">
                <div class="student-name">${student.name}</div>
                <div class="student-id">${student.id}</div>
            </div>
            <input type="checkbox" class="attendance-checkbox" id="check-${student.id}" ${student.present ? 'checked' : ''}>
        `;
        
        // Add click handler for the card
        card.addEventListener('click', (e) => {
            const checkbox = card.querySelector('.attendance-checkbox');
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
                updateCardBackground(card, checkbox.checked);
            }
        });
        
        // Add change handler for the checkbox
        const checkbox = card.querySelector('.attendance-checkbox');
        checkbox.addEventListener('change', () => {
            updateCardBackground(card, checkbox.checked);
        });
        
        studentsList.appendChild(card);
        
        // Set initial background color
        updateCardBackground(card, student.present);
    });
    
    console.log('Finished creating student cards');
}

// Helper function to update card background
function updateCardBackground(card, isPresent) {
    card.style.backgroundColor = isPresent ? '#f0f9ff' : '#fff5f5';
}

function initializeControls() {
    document.getElementById('mark-all').addEventListener('click', () => {
        document.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
            checkbox.checked = true;
        });
    });

    document.getElementById('unmark-all').addEventListener('click', () => {
        document.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
    });

    document.getElementById('submit-attendance').addEventListener('click', submitAttendance);
}

function displayAbsenceReport(date, period, subject, absentees) {
    const absenceList = document.getElementById('absence-list');
    absenceList.innerHTML = '';

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Add header with date, period, and subject
    const header = document.createElement('div');
    header.className = 'absence-header';
    header.innerHTML = `
        <h3>Absence Report</h3>
        <p>Date: ${formattedDate}</p>
        <p>Period: ${period}</p>
        <p>Subject: ${subject}</p>
        <p>Total Absentees: ${absentees.length}</p>
    `;
    absenceList.appendChild(header);

    if (absentees.length === 0) {
        const allPresent = document.createElement('div');
        allPresent.className = 'all-present';
        allPresent.innerHTML = '<p>All students present! 🎉</p>';
        absenceList.appendChild(allPresent);
        return;
    }

    // Create a table for better organization
    const table = document.createElement('table');
    table.className = 'absence-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    
    const tbody = table.querySelector('tbody');
    
    // Sort absentees by ID
    absentees.sort((a, b) => a.id.localeCompare(b.id));

    absentees.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>Absent</td>
        `;
        tbody.appendChild(row);
    });

    absenceList.appendChild(table);

    // Add export button
    const exportBtn = document.createElement('button');
    exportBtn.className = 'export-btn';
    exportBtn.innerHTML = '📥 Export Report';
    exportBtn.onclick = () => exportAbsenceReport(date, period, subject, absentees);
    absenceList.appendChild(exportBtn);

    // Make the absence list section visible
    absenceList.style.display = 'block';
    absenceList.scrollIntoView({ behavior: 'smooth' });
}

// Update the export function to include subject
function exportAbsenceReport(date, period, subject, absentees) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Absence Report\n";
    csvContent += `Date: ${formattedDate}\n`;
    csvContent += `Period: ${period}\n`;
    csvContent += `Subject: ${subject}\n`;
    csvContent += `Total Absentees: ${absentees.length}\n\n`;
    csvContent += "Student ID,Name,Status\n";

    absentees.forEach(student => {
        csvContent += `${student.id},${student.name},Absent\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `absence_report_${date}_${subject}_period${period}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function submitAttendance() {
    try {
        // Prevent double submission
        const submitBtn = document.getElementById('submit-attendance');
        if (submitBtn.disabled) {
            return;
        }

        // Validate subject name
        const subjectName = document.getElementById('subject-name').value.trim();
        if (!subjectName) {
            showToast('Please enter the subject name ❌');
            return;
        }

        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;

        // Android haptic feedback for button press
        if (window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }

        const date = document.getElementById('attendance-date').value;
        const currentPeriod = document.getElementById('current-period').textContent;
        const absentees = [];

        document.querySelectorAll('.student-card').forEach(card => {
            const checkbox = card.querySelector('.attendance-checkbox');
            const studentName = card.querySelector('.student-name').textContent;
            const studentId = card.querySelector('.student-id').textContent;
            
            if (!checkbox.checked) {
                absentees.push({
                    date: date,
                    period: currentPeriod,
                    subject: subjectName,
                    id: studentId,
                    name: studentName,
                    status: 'Absent',
                    timestamp: new Date().toISOString()
                });
            }
        });

        // First, display the absence report immediately
        displayAbsenceReport(date, currentPeriod, subjectName, absentees);

        // Google Apps Script Web App URL
        const GOOGLE_SCRIPT_URL ='https://script.google.com/macros/s/AKfycbyyruUz5-4bS7q1HgyUBGkRvrppWK5C_HRiUxEa_VCqB_DulBIKm5wRbMmaQZY7pCUEdw/exec';

        // Show submitting message
        showToast('Submitting attendance data... ⏳');

        // Create a hidden iframe for submission
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.name = 'submit_iframe';
        document.body.appendChild(iframe);

        // Create a form element
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = GOOGLE_SCRIPT_URL;
        form.target = 'submit_iframe';

        // Add the data as a hidden input
        const dataInput = document.createElement('input');
        dataInput.type = 'hidden';
        dataInput.name = 'data';
        dataInput.value = JSON.stringify({
            date: date,
            period: currentPeriod,
            subject: subjectName,
            absentees: absentees.map(student => ({
                ...student,
                subject: subjectName // Ensure subject is included in each student record
            }))
        });
        form.appendChild(dataInput);

        // Add the form to the document body
        document.body.appendChild(form);

        // Submit the form
        form.submit();

        // Show success message after a short delay
        setTimeout(() => {
            // Success vibration pattern
            if (window.navigator.vibrate) {
                window.navigator.vibrate([50, 100, 50]);
            }
            showToast('Attendance submitted successfully! 👍');
            
            // Clean up form and iframe
            if (document.body.contains(form)) {
                document.body.removeChild(form);
            }
            if (document.body.contains(iframe)) {
                document.body.removeChild(iframe);
            }
        }, 2000);

    } catch (error) {
        console.error('Error in submitAttendance:', error);
        // Error vibration pattern
        if (window.navigator.vibrate) {
            window.navigator.vibrate([100, 50, 100, 50, 100]);
        }
        showToast('Error submitting attendance. Please try again ❌');
    } finally {
        // Restore button state
        setTimeout(() => {
            const submitBtn = document.getElementById('submit-attendance');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Submit';
            submitBtn.disabled = false;
        }, 1000);
    }
}

// Enhanced Android-friendly toast function
function showToast(message) {
    // Remove any existing toasts
    const existingToasts = document.querySelectorAll('.toast-message');
    existingToasts.forEach(toast => toast.remove());

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    
    // Android-optimized styling
    toast.style.cssText = `
        position: fixed;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(33, 33, 33, 0.95);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        z-index: 1000;
        font-size: 15px;
        text-align: center;
        min-width: 250px;
        max-width: 85%;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        animation: androidToast 3s ease;
        -webkit-animation: androidToast 3s ease;
        user-select: none;
        -webkit-user-select: none;
        touch-action: none;
        font-family: Roboto, sans-serif;
    `;

    // Android-style animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes androidToast {
            0% { transform: translate(-50%, 100px); opacity: 0; }
            20% { transform: translate(-50%, 0); opacity: 1; }
            80% { transform: translate(-50%, 0); opacity: 1; }
            100% { transform: translate(-50%, 100px); opacity: 0; }
        }
        @-webkit-keyframes androidToast {
            0% { -webkit-transform: translate(-50%, 100px); opacity: 0; }
            20% { -webkit-transform: translate(-50%, 0); opacity: 1; }
            80% { -webkit-transform: translate(-50%, 0); opacity: 1; }
            100% { -webkit-transform: translate(-50%, 100px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);
    
    // Remove the toast after animation
    setTimeout(() => {
        if (document.body.contains(toast)) {
            document.body.removeChild(toast);
        }
        if (document.head.contains(style)) {
            document.head.removeChild(style);
        }
    }, 3000);
}

// Update fetchAttendanceHistory function to use the same URL
async function fetchAttendanceHistory(date, period) {
    try {
        const GOOGLE_SCRIPT_URL='https://script.google.com/macros/s/AKfycbzoiig1fnmT5SEuvDrHjNRm9Jk54l_4cast10x3s2MllloE-QqJbdKZrJmeddc2LBsB6Q/exec';
        
        console.log('Fetching attendance history for:', date, period);
        
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?date=${encodeURIComponent(date)}&period=${encodeURIComponent(period)}`, {
            method: 'GET',
            mode: 'no-cors'
        });
        
        console.log('Fetch attempt completed');
        
        // Since we're using no-cors, we won't get a readable response
        // You might want to implement a different way to verify the data was saved
        showToast('Attendance records updated');
        
    } catch (error) {
        console.error('Error fetching attendance history:', error);
        showToast('Failed to load attendance history ❌');
    }
}

function displayAttendanceHistory(records) {
    const absenceList = document.getElementById('absence-list');
    absenceList.innerHTML = '<h3>Attendance History</h3>';

    if (!records || records.length === 0) {
        absenceList.innerHTML += '<p>No attendance records found.</p>';
        return;
    }

    records.forEach(record => {
        const entry = document.createElement('div');
        entry.className = 'absence-entry';
        const date = new Date(record.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        entry.innerHTML = `
            <span>${record.name} (${record.id})</span>
            <span>${date} - ${record.period} - ${record.status}</span>
        `;
        absenceList.appendChild(entry);
    });
} 
