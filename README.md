
## Working Contact Form in PHP

- Contact Form is an important element on a page that allows users to communicate with the website owner. This contact form has some input fields for filling in: name, email address, subject, message, etc.

### Scope

- It is fully validated: the user can’t send a message without entering valid data (email address and message).

- Ajax is used in JavaScript so the contact form isn’t refreshed regardless the message status (sending, failed, or sent). Using ajax, all form data is sent to the PHP file.

- After all form data is taken, the email and message fields are checked, as they are mandactory. After that, in case of positive checking, the message is sent to the provided e-mail address by using PHP built-in mail() function.

- If the message is not sent either invalid e-mail, empty message field or network issue, then an error message is thrown and displayed via JavaScript. 

#### Files
- HTML
- CSS
- JavaScript
- PHP



