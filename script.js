const bookButton = document.querySelector(".book-btn");
const dateInput = document.querySelector(".appointment-form input");

const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);
bookButton.addEventListener("click", function () {
    const doctor = document.querySelector(".appointment-form select").value;
    const date = document.querySelector(".appointment-form input").value;
    const time = document.querySelectorAll(".appointment-form select")[1].value;
    const appointmentId = "ARX" + Math.floor(10000 + Math.random() * 90000);
    if (date === "") {
        alert("Please select an appointment date. 📅");
        return;
    }
     if (time === "") {
    alert("Please select an appointment time. 🕐");
    return;
}
    alert(
        "Appointment booked successfully! ✅\n\n" +
        "Appointment ID: " + appointmentId + "\n" +
        "Doctor: " + doctor + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time
    );
});
function showMedicines() {
    alert(
        "Today's Medicines 💊\n\n" +
        "1. Calcium Dobesilate Casules 500mg\n" +
        "   1 tablet • After breakfast\n\n" +
        "2. Enalapril\n" +
        "   1 tablet • After lunch"
    );
}
function showNotifications() {
    alert(
        "Notifications 🔔\n\n" +
        "📅 Appointment reminder: 12 September at 10:00 AM\n\n" +
        "💊 Medicine reminder: Enalapril at 2:00 PM"
    );
}function callEmergency() {
    alert(
        "🚨 Emergency Assistance\n\n" +
        "Please contact your nearest emergency service immediately.\n\n" +
        "Emergency Number: 112"
    );
}

function showAppointmentDetails() {
    alert(
        "📅 Appointment Details\n\n" +
        "Doctor: Dr. Neha Ola\n" +
        "Specialization: Cardiologist\n" +
        "Date: 12 September 2026\n" +
        "Time: 10:00 AM"
    );
}