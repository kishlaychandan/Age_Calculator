    const form = document.querySelector('form');
    const dobInput = document.getElementById('dob');
    const ageDisplay = document.getElementById('ageDisplay');
    // ageDisplay.textContent = 'greatttttttPlease enter your date of birth';
    ageDisplay.textContent = `Please enter your date of birth`;
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const dobValue = dobInput.value;
        // alert(dobValue)
        if (dobValue) {
            const age = calculateAge(new Date(dobValue));
            if(age<0){
                ageDisplay.textContent = 'Date of birth cannot be more than todays date';
            }
            else ageDisplay.textContent = `Your age is ${age} years old`;
        } else {
            ageDisplay.textContent = 'Please enter your correct date of birth';
        }
    });

    function calculateAge(dob) {
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }
