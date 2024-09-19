// Sample alumni data for demonstration
const alumniData = [

        {
            name: "Farzana Jawale",
            branch: "Computer Engineering",
            year: "2024",
            company: "Accenture",
            contact:"Farzana12@gmail.com"
        },
        {
            name: "Nikita sartape",
            branch: "Computer Engineering",
            year: "2024",
            company: "Infosys",
            contact:"NitkitaSArtapea12@gmail.com"
        },
        {
            name: "Sumedh Joshi",
            branch: "Computer Engineering",
            year: "2023",
            company: "Capgemini",
             contact:"joshiSumdhe2@gmail.com"
        },
        {
            name: "Vaishnavi Babar",
            branch: "Computer Engineering",
            year: "2023",
            company: "HP"
        },
    
        {    name: "Shreyas Yerole",
            branch: "Computer Engineering",
            year: "2023",
            company: "TCS"
        },
        {    name: "Dhiraj Dinesh Chordiya",
            branch: "Mechanical",
            year: "2023",
            company: "TCS"
        },
        {    name: "Chetan Shivprakash Agroya",
            branch: "Mechanical",
            year: "2023",
            company: "Accenture"
        },
        {     name: "Sujay Kate",
            branch: "Mechanical",
            year: "2023",
            company: "KPIT"
        },
        {     name: "Kalagate Ruchika Shashikant",
            branch: "Electronics and Telecommunication",
            year: "2023",
            company: "Mercedes"
        },
        {     name: "Amit Amange",
            branch: "Electronics and Telecommunication",
            year: "2023",
            company: "KPIT"
        },
        {     name: "Bhandari Sairaj Kumar",
            branch: "Electronics and Telecommunication",
            year: "2023",
            company: "Mercedes"
        },
        {     name: "Mayur Pralhad Hole",
            branch: "Information Technology",
            year: "2023",
            company: "Capgemini"
        },
        {     name: "Aishwarya Devidas Rane",
            branch: "Information Technology",
            year: "2023",
            company: "TCS"
        },
        {     name: "KOKITKAR PRATHAMESH PARASHARAM",
            branch: "Computer Engineering",
            year: "2022",
            company: "Capgemini"
        },
        {     name: "SIMRAN SUNIL SUKUMARAN",
            branch: "Computer Engineering",
            year: "2022",
            company: "Accenture"
        },
        {    name: "SONALI KALA",
            branch: "Mechanical",
            year: "2022",
            company: "KPIT"
        },
        {     name: "Aditya Gupta",
            branch: "Information Technology",
            year: "2022",
            company: "HP"
        },
        {     name: "Nilesh Mathaji Bangar",
            branch: "Information Technology",
            year: "2022",
            company: "Accenture"
        },
        {     name: "Shraddha Girish Haveli",
            branch: "Electronics and Telecommunication",
            year: "2022",
            company: "Infosys"
        },
        {     name: "Prathamesh Bhoite",
            branch: "Electronics and Telecommunication",
            year: "2022",
            company: "Capgemini"
        },
        {     name: "DHERE RUTUJA UJWAL",
            branch: "Computer Engineering",
            year: "2021",
            company: "Infosys"
        },
        {    name: "AKSHADA POPAT ZAWARE",
            branch: "Computer Engineering",
            year: "2021",
            company: "HP"
        },
        {     name: "Baglane Abhishek Rajesh",
            branch: "Electronics and Telecommunication",
            year: "2021",
            company: "TCS"
        },
        {    name: "Aniket Dalwani",
            branch: "Information Technology",
            year: "2021",
            company: "Capgemini"
        },
        {     name: "ASHISH HALLE",
            branch: "Information Technology",
            year: "2021",
            company: "TCS"
    
        },
    
    ];
    // Add more alumni data here

// Function to render alumni cards
function renderAlumniList(alumni) {
    const alumniContainer = document.getElementById('alumniContainer');
    alumniContainer.innerHTML = '';

    alumni.forEach(alum => {
        const card = document.createElement('div');
        card.classList.add('alumni-card');
        card.innerHTML = `
            <h3>${alum.name}</h3>
            <p><strong>Branch:</strong> ${alum.branch}</p>
            <p><strong>Year:</strong> ${alum.year}</p>
            <p><strong>Company:</strong> ${alum.company}</p>
            <p><strong>Contact:</strong> <a href="mailto:${alum.contact}">${alum.contact}</a></p> <!-- Display email/contact -->
            <button class="message-btn" onclick="contactAlumni('${alum.contact}')">Message</button> <!-- Button for messaging -->

        `;
        alumniContainer.appendChild(card);
    });
}

// Initial rendering of all alumni
renderAlumniList(alumniData);

// Function to apply filters
function applyFilters() {
    const branch = document.getElementById('branch').value;
    const year = document.getElementById('year').value;
    const company = document.getElementById('company').value;

    const filteredAlumni = alumniData.filter(alum => {
        return (branch === 'All' || alum.branch === branch) &&
               (year === 'All' || alum.year === year) &&
               (company === 'All' || alum.company === company);
    });

    renderAlumniList(filteredAlumni);
}

// Add event listener to filter button
document.getElementById('filterBtn').addEventListener('click', applyFilters);

// Add event listener to reset button
document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('filterForm').reset();
    renderAlumniList(alumniData);
});
