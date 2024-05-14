function generatePassword() {
    try {
        const minLength = 8; // Minimum password length
        const maxLength = 15; // Maximum password length
        const length = parseInt(document.getElementById("passwordLength").value);
        
        // Ensure length is within the range [minLength, maxLength]
        const passwordLength = Math.max(minLength, Math.min(maxLength, length));
        
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        const charsetLength = charset.length;
        let password = [];
        
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charsetLength);
            password.push(charset[randomIndex]);
        }
        
        document.getElementById("password").value = password.join('');
    } catch (error) {
        console.error(error);
    }
}
