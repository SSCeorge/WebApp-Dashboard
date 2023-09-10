//Alert banner toggle
const banner = document.getElementById('banner');
const closeBan = document.getElementById('closeBan');

closeBan.addEventListener('click', () => {
    banner.style.visibility = 'hidden';
})

//Charts
const trfChart = document.getElementById('trfChart');
const dailyChart = document.getElementById('dailyCh');
const mobilePie = document.getElementById('mobileDon');

//Active chart
const chartList = document.querySelectorAll('.chartlist li');

chartList.forEach(item => {
  item.addEventListener('click', () => {

    chartList.forEach(li => li.classList.remove('active'));

    item.classList.add('active');
  });
});

//Toggle chart
const chartBtns = document.querySelectorAll('.chartlist li');

const hlyData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
const dlyData = [1111, 1444, 1222, 2222, 1888, 2111, 1444, 2222, 2777, 1999, 3333];
const wlyData = [5300, 10500, 6400, 14800, 12600, 14700, 10500, 17540, 18900, 12600, 21000];
const mlyData = [25200, 42000, 33600, 62200, 50400, 48800, 42000, 62160, 75600, 50400, 84000];

const backgroundColors = {
    daily: 'rgba(71, 163, 141, .3)',
    weekly: 'rgba(140, 101, 194, .3)',
    monthly: 'rgba(255, 99, 132, .3)',
};

const labelz = {
    hourly: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    daily: ["16-26", "23-33", "25-5", "6-12", "10-20", "20-30", "25-3",
    "5-15", "11-19", "15-24", "25-31"],
    weekly: ["16-25", "20-29", "30-55", "60-12", "13-19", "20-26", "27-30",
    "4-10", "10-17", "18-44", "25-31"],
    monthly: ["16-27", "25-29", "30-55", "16-12", "13-99", "21-26", "27-30",
    "40-10", "11-77", "88-44", "25-11"]
};

chartBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const chartType = this.textContent.toLowerCase();
        
        let newData;
        let newBackgroundColor;
        let newLabelz;

        switch (chartType) {
            case 'hourly':
                newData = hlyData;
                newLabelz = labelz.hourly;
                break;
            case 'daily':
                newData = dlyData;
                newBackgroundColor = backgroundColors.daily;
                newLabelz = labelz.daily;
                break;
            case 'weekly':
                newData = wlyData;
                newBackgroundColor = backgroundColors.weekly;
                newLabelz = labelz.weekly;
                break;
            case 'monthly':
                newData = mlyData;
                newBackgroundColor = backgroundColors.monthly;
                newLabelz = labelz.monthly;
                break;
        }

        //Update, populate and refresh the chart
        trafficChart.data.datasets[0].data = newData;
        trafficChart.data.datasets[0].backgroundColor = newBackgroundColor;
        trfData.labels = newLabelz;
        trafficChart.update();
    });
});


//Traffic
let trfData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: /*[750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500]*/ hlyData,
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
}

let trfOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
};

let trafficChart = new Chart(trfChart, {
    type: 'line',
    data: trfData,
    options: trfOptions
});

//Daily
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
};

let chartDaily = new Chart(dailyChart, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//Mobile
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
    }
};

let mobileChart = new Chart(mobilePie, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//Svg path length
/*const svg = document.querySelector('.ssvg');
const leng = svg.getTotalLength();
console.log("total:", leng);*/

//Search, messaging services
const notifications = [];

const memberNames = [
    "Victoria Chambers",
    "Dale Byrd",
    "Dawn Wood",
    "Dan Oliver"
];

const srchInput = document.getElementById('srchInput');
const srchRes = document.getElementById('srchRes');
const msgF = document.getElementById('msg-box');
const sndBtn = document.getElementById('snd-btn');
const bell = document.getElementById('bellz');

//Filter members based on input
function filterMembers(search) {
    return memberNames.filter(name =>
        name.toLowerCase().includes(search.toLowerCase())
    );
}

//Display search results
function displayResults(results) {
    srchRes.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            listItem.addEventListener('click', () => {
                srchInput.value = result;
                srchRes.style.display = 'none'; 
            });
            srchRes.appendChild(listItem);
        });
        srchRes.style.display = 'block'; 
    } else {
        srchRes.style.display = 'none'; 
    }
}

//Event listener for input changes
srchInput.addEventListener('input', () => {
    const searchTerm = srchInput.value;
    const filteredMembers = filterMembers(searchTerm);
    displayResults(filteredMembers);
});

//Send button functionality 
sndBtn.addEventListener('click', (e) => {
    // ensure user and message fields are filled out
    e.preventDefault();
    if (srchInput.value === "" && msgF.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (srchInput.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (msgF.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        notifications.push(`${srchInput.value} has a new message`);
        alert(`Message successfully sent to: ${srchInput.value}`);
        banner.style.visibility = '';
        bell.style.display = '';
    }
});

//Display notifications in the popup
function displayNotifications(notifications) {
    const notificationContent = document.getElementById('notificationContent');
    notificationContent.innerHTML = ''; // Clear previous notifications

    notifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.textContent = notification;
        notificationContent.appendChild(notificationItem);
    });

    // Display the popup
    const notificationPopup = document.getElementById('notificationPopup');
    notificationPopup.style.display = 'block';
}

//Event listener for svg-bell
const svgBell = document.querySelector('.svg-bell');
const popx = document.querySelector('.popx');

popx.addEventListener('click', () => {
    const notificationPopup = document.getElementById('notificationPopup');
    notificationPopup.style.display = 'none';
});

svgBell.addEventListener('click', () => {
    displayNotifications(notifications);
    bell.style.display = 'none';
});

//Local Memory setup
const emailSwitch = document.getElementById('email-switch');
const profileSwitch = document.getElementById('profile-switch');
const msgBox = document.getElementById('msg-box');
const tzList = document.getElementById('tz-list');

//Local Storage
if (localStorage.getItem('emailSetting') === 'true') {
    emailSwitch.checked = true;
}
if (localStorage.getItem('profileSetting') === 'true') {
    profileSwitch.checked = true;
}

const savedMsg = localStorage.getItem('savedMessage');
if (savedMsg) {
    msgBox.value = savedMsg;
}
const savedName = localStorage.getItem('savedName');
if (savedName) {
    srchInput.value = savedName;
}
const savedTzIndex = localStorage.getItem('savedTz');
if (savedTzIndex !== null) {
    tzList.selectedIndex = parseInt(savedTzIndex);
}

//Save button
document.getElementById('save-btn').addEventListener('click', () => {
    // Save settings to Local Storage
    localStorage.setItem('emailSetting', emailSwitch.checked);
    localStorage.setItem('profileSetting', profileSwitch.checked);
    localStorage.setItem('savedMessage', msgBox.value);
    localStorage.setItem('savedName', srchInput.value);
    localStorage.setItem('savedTz', tzList.selectedIndex);

    alert('Settings saved successfully.');
});

//Cancel button
document.getElementById('cnc-btn').addEventListener('click', () => {
    //Clear saved settings from Local Storage
    localStorage.removeItem('emailSetting');
    localStorage.removeItem('profileSetting');
    localStorage.removeItem('savedMessage');
    localStorage.removeItem('savedName');
    localStorage.removeItem('savedTz');

    //Reset form elements
    emailSwitch.checked = false;
    profileSwitch.checked = false;
    msgBox.value = '';
    srchInput.value = '';
    tzList.selectedIndex = 0;

    alert('Settings cleared.');
});