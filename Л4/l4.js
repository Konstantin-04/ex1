
        document.getElementById("registrationForm").addEventListener("submit", function(event) {  
            event.preventDefault();  
            let lastName = document.getElementById("lastName").value;  
            let firstName = document.getElementById("firstName").value;  
            let age = document.getElementById("age").value;  
  
            if (age < 18) {  
                alert("Карта выдается только после 18 лет");  
            } else {  
                let cardNumber = Math.floor(Math.random() * 100000) + 1;  
                alert(`Номер карты: ${cardNumber}\nФамилия: ${lastName}\nИмя: ${firstName}`);  
            }  
        });  
  
        function resetForm() {  
            document.getElementById("firstName").value = "";  
            document.getElementById("lastName").value = "";  
            document.getElementById("phoneNumber").value = "";  
            document.getElementById("age").value = "";  
        }  