
            var arithmetic = [];
            var numericValue = [];
            /*
                A function that clears out the text box
            */
           function erase(){
            document.getElementById("output").value = "";
        
        }

        /*
            Passing the event of the specific button, to gain access to its indivudal value
        */
        function display(event){
            var elementValue = event.target.value;

            //output the value of that pressed button
            console.log(elementValue);

            //Appends changes the value on the output
            document.getElementById("output").value += elementValue;
        }

        /*
            A function that takes an event as a parameter to distinguish which operation 
            is to be perfomed
        */
        function operation(event){
            
            //adding new value to global numeric array 
            var value = document.getElementById("output").value;
            numericValue.push(parseInt(value));

            erase();

            var arithmeticValue = event.target.value;
            
            arithmetic.push(arithmeticValue);

        }

        /*
            This function changes the users input into a percentage
        */
        function percent(){
            var userInput = document.getElementById("output").value;
            var percentage = userInput/100;
            document.getElementById("output").value = percentage;
        }

        /*
        This function will change the sign of the inputed value
        */
        function changeSigns(){
           var userInput = document.getElementById("output").value;
           document.getElementById("output").value = userInput*-1;
        }

        function squareRoot(){
            var userInput = document.getElementById("output").value;
            var squared = Math.sqrt(parseInt(userInput));
            document.getElementById("output").value = squared.toString(10);
        }

        /*
            This function is responsible for parsing the value inside the text box
            performing operation of arithmetic
            returning a result
        */
        function result(){
            
            //Has to get remaining variable in text box and append it to array
            var input = document.getElementById("output").value;

           

            numericValue.push(parseInt(input));

            

            //clear output box to display answer
            erase();

            var i = 0; var j =0;  

            //Hoping that once an element is removed from the array that it will automatically reduce length
            var temp = numericValue.shift();

            while(i<numericValue.length){
                switch(arithmetic[j]){
                    case "+":
                    temp +=numericValue[i]; 
                    break;

                    case "-":
                    temp -= numericValue[i];
                    break;

                    case "/":
                    temp /= numericValue[i];
                    break;

                    case "*":
                    temp *= numericValue[i];
                    break;

                    default:
                    return;

                }

                i++;
                j++;
            }

            document.getElementById("output").value = temp;
            
            //To reset the arrays
            arithmetic =[];
            numericValue =[];


        }
