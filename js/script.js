const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    //In order for the values to change every minute we put them inside
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12 : hour
    const minutes = time.getMinutes();
    const amORpm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+ hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+ minutes: minutes) + ' ' + `<span id="am-pm">${amORpm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]
    //to show day not a number do like this ==> days[day]  
}, 1000);







// let months, days, now;
// months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November','December'];
// days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// now = new Date();

// let nowDate, nowDay, nowMonth, nowYear;

// nowDate = now.getDate();
// nowDay = days[now.getDay()];
// nowMonth = months[now.getMonth()];
// nowYear = now.getFullYear();

// let toDayDate = document.getElementById('toDayDate');

// let info = `
//     <div class="ui cards cardShape">
//     <div class="card cardStyle">
//       <div class="content">
//         <div class="nowYear">${nowYear}</div>
//         <div class="meta">
//           <p class="nowMonth">${nowMonth}</p>
//         </div>
//         <span>
//           <p class="nowDay">${nowDay}</p>
//         </span>
//         <span>
//           <p class="nowDate">${nowDate}</p>
//         </span>
        
//       </div>

//     </div>
// </div>`;
// toDayDate.innerHTML +=info;




