/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        // complete the loop
        if (/[a-z|A-Z|0-9|_]+@northeastern\.edu$/.test(email)) {
            const atIdx = email.indexOf('@');
            const front = email.substring(0, atIdx);
            const domain = email.substring(atIdx); // includes @
            const anonymizedEmail = '*'.repeat(front.length) + domain; // Replace local part with asterisks
            const listItem = document.createElement('li');
            listItem.textContent = anonymizedEmail;
            list.appendChild(listItem);
        }
    }
}