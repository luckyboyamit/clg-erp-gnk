// script.js

// डमी डेटा
const studentData = {
    
    
    attendance: "85%",
    fees: "₹5,000 blance (last date: 20 april)",
    
    subjects: [
        { name: "maths", teacher: "Mukul sharma ji" },
        { name: "science", teacher: "Nidhi ji" },
        { name: "computer ", teacher: "Nitin ji" },
        { name: "histry", teacher: "Mukul sharma ji" },
        { name: "polity", teacher: "Nidhi ji" },
        { name: "economics ", teacher: "Nitin ji" },
        { name: "drawing", teacher: "Mukul sharma ji" },
        { name: "hindi", teacher: "Nidhi ji" },
        { name: "english", teacher: "Nitin ji" },
        { name: "physics", teacher: "Mukul sharma ji" },
        { name: "chemistry", teacher: "Nidhi ji" },
        { name: "biolozy", teacher: "Nitin ji" }
    ]
     
    
};


function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "admin" && pass === "123") {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
    } else {
        document.getElementById('error-msg').innerText = "worng id password!";
    }
}

function showSection(type) {
    const display = document.getElementById('main-display');
    const title = document.getElementById('section-title');

    if (type === 'attendance') {
        title.innerText = "atenndance report";
        display.innerHTML = `<div class="card"><h3>your total atandance: ${studentData.attendance}</h3><p>situatiton : safe</p></div>`;
    } 
    else if (type === 'fees') {
        title.innerText = "fee details";
        display.innerHTML = `<div class="card"><h3>fee update:</h3><p>${studentData.fees}</p><button>pay now</button></div>`;
    }
    else if (type === 'subjects') {
        title.innerText = "subject";
        let html = '<div class="card"><ul>';
        studentData.subjects.forEach(s => {
            html += `<li><strong>${s.name}</strong> - ${s.teacher}</li>`;
        });
        html += '</ul></div>';
        display.innerHTML = html;
    }
    
}

function logout() {
    location.reload(); // पेज रिफ्रेश करके वापस लॉगिन पर ले जाएगा
}