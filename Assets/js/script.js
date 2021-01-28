var todaysDate = document.getElementById("currentDay");

todaysDate.textContent = moment().format("dddd" + ", " + "MMMM D" + ", " + "YYYY");

var nineEl = document.getElementById("nine");
var tenEl = document.getElementById("ten");
var elevenEl = document.getElementById("eleven");
var twelveEl = document.getElementById("twelve");
var oneEl = document.getElementById("one");
var twoEl = document.getElementById("two");
var threeEl = document.getElementById("three");
var fourEl = document.getElementById("four");
var fiveEl = document.getElementById("five");

var nineTextEl = document.getElementById("nine-text");
var tenTextEl = document.getElementById("ten-text");
var elevenTextEl = document.getElementById("eleven-text");
var twelveTextEl = document.getElementById("twelve-text");
var oneTextEl = document.getElementById("one-text");
var twoTextEl = document.getElementById("two-text");
var threeTextEl = document.getElementById("three-text");
var fourTextEl = document.getElementById("four-text");
var fiveTextEl = document.getElementById("five-text");

var nineBtnEl = document.getElementById("nine-btn");
var tenBtnEl = document.getElementById("ten-btn");
var elevenBtnEl = document.getElementById("eleven-btn");
var twelveBtnEl = document.getElementById("twelve-btn");
var oneBtnEl = document.getElementById("one-btn");
var twoBtnEl = document.getElementById("two-btn");
var threeBtnEl = document.getElementById("three-btn");
var fourBtnEl = document.getElementById("four-btn");
var fiveBtnEl = document.getElementById("five-btn");

var localTime = moment().format("LLL");
var localTimeFormat = "MMMM D, YYYY h:mm A";
var localTimeConverted = moment(localTime, localTimeFormat);

nineTextEl.textContent = JSON.parse(localStorage.getItem('9 AM'));
tenTextEl.textContent = JSON.parse(localStorage.getItem('10 AM'));
elevenTextEl.textContent = JSON.parse(localStorage.getItem('11 AM'));
twelveTextEl.textContent = JSON.parse(localStorage.getItem('12 PM'));
oneTextEl.textContent = JSON.parse(localStorage.getItem('1 PM'));
twoTextEl.textContent = JSON.parse(localStorage.getItem('2 PM'));
threeTextEl.textContent = JSON.parse(localStorage.getItem('3 PM'));
fourTextEl.textContent = JSON.parse(localStorage.getItem('4 PM'));
fiveTextEl.textContent = JSON.parse(localStorage.getItem('5 PM'));

$(".saveBtn").on("click", function() {
    var textSave = $(this).siblings(".description").val();
    var timeSave = $(this).siblings(".hour").text();
    localStorage.setItem(timeSave, JSON.stringify(textSave));
});

nineEl.textContent = "9 AM";
var nineMomentEl = moment(todaysDate.textContent + " " + nineEl.textContent,"dddd, MMMM D, YYYY h A");
var diffFromNine = nineMomentEl.diff(localTimeConverted,'hours');

if (diffFromNine < 0) {
    nineTextEl.classList.add("past");
} else if (diffFromNine == 0){
    nineTextEl.classList.add("present");
} else if (diffFromNine > 0){
    nineTextEl.classList.add("future");
}

tenEl.textContent = "10 AM";
var tenMomentEl = moment(todaysDate.textContent + " " + tenEl.textContent,"dddd, MMMM D, YYYY h A");
var diffFromTen = tenMomentEl.diff(localTimeConverted,'hours');

if (diffFromTen < 0) {
    tenTextEl.classList.add("past");
} else if (diffFromTen == 0){
    tenTextEl.classList.add("present");
} else if (diffFromTen > 0){
    tenTextEl.classList.add("future");
}

elevenEl.textContent = "11 AM";
var elevenMomentEl = moment(todaysDate.textContent + " " + elevenEl.textContent,"dddd, MMMM D, YYYY h A");
var diffFromEleven = elevenMomentEl.diff(localTimeConverted,'hours');

if (diffFromEleven < 0) {
    elevenTextEl.classList.add("past");
} else if (diffFromEleven == 0){
    elevenTextEl.classList.add("present");
} else if (diffFromEleven > 0){
    elevenTextEl.classList.add("future");
}

twelveEl.textContent = "12 PM";
var twelveMomentEl = moment(todaysDate.textContent + " " + twelveEl.textContent,"dddd, MMMM D, YYYY h A");
var diffFromTwelve = twelveMomentEl.diff(localTimeConverted,'hours');

if (diffFromTwelve < 0) {
    twelveTextEl.classList.add("past");
} else if (diffFromTwelve == 0){
    twelveTextEl.classList.add("present");
} else if (diffFromTwelve > 0){
    twelveTextEl.classList.add("future");
}

oneEl.textContent = "1 PM";
var oneMomentEl = moment(todaysDate.textContent + " " + oneEl.textContent,"dddd, MMMM D, YYYY h A");
var diffFromOne = oneMomentEl.diff(localTimeConverted,'hours');

if (diffFromOne < 0) {
    oneTextEl.classList.add("past");
} else if (diffFromOne == 0){
    oneTextEl.classList.add("present");
} else if (diffFromOne > 0){
    oneTextEl.classList.add("future");
}

twoEl.textContent = "2 PM";
var twoMomentEl = moment(todaysDate.textContent + " " + twoEl.textContent,"dddd, MMMM D, YYYY h A");
var diffFromTwo = twoMomentEl.diff(localTimeConverted,'hours');
if (diffFromTwo < 0) {
    twoTextEl.classList.add("past");
} else if (diffFromTwo == 0){
    twoTextEl.classList.add("present");
} else if (diffFromTwo > 0){
    twoTextEl.classList.add("future");
}

threeEl.textContent = "3 PM";
var threeMomentEl = moment(todaysDate.textContent + " " + threeEl.textContent,"dddd, MMMM D, YYYY h A");
var diffFromThree = threeMomentEl.diff(localTimeConverted,'hours');
if (diffFromThree < 0) {
    threeTextEl.classList.add("past");
} else if (diffFromThree == 0){
    threeTextEl.classList.add("present");
} else if (diffFromThree > 0){
    threeTextEl.classList.add("future");
}

fourEl.textContent = "4 PM";
var fourMomentEl = moment(todaysDate.textContent + " " + fourEl.textContent,"dddd, MMMM D, YYYY h A");
var diffFromFour = fourMomentEl.diff(localTimeConverted,'hours');
if (diffFromFour < 0) {
    fourTextEl.classList.add("past");
} else if (diffFromFour == 0){
    fourTextEl.classList.add("present");
} else if (diffFromFour > 0){
    fourTextEl.classList.add("future");
}

fiveEl.textContent = "5 PM";
var fiveMomentEl = moment(todaysDate.textContent + " " + fiveEl.textContent,"dddd, MMMM D, YYYY h A");
var diffFromFive = fiveMomentEl.diff(localTimeConverted,'hours');
if (diffFromFive < 0) {
    fiveTextEl.classList.add("past");
} else if (diffFromFive == 0){
    fiveTextEl.classList.add("present");
} else if (diffFromFive > 0){
    fiveTextEl.classList.add("future");
}
