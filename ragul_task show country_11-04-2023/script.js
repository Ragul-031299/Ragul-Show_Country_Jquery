class FormValidation{
    formValues = {
        country : "",
        address : "",
        city : "",
        state : "",
        pincode : "",
        type:""
    }
    errorValues = {
        countryErr : "",
        addressErr : "",
        cityErr : "",
        stateErr : "",
        pincodeErr: "",
        type:""

    } //Err msg ()
    showErrorMsg(index,msg){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.classList.remove('success')
        form_group.getElementsByTagName('span')[0].textContent = msg   
    }
    //success msg()
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')

    }
    //get input()
    getInputs(){
        this.formValues.username = document.getElementById('country').value.trim()
        this.formValues.address = document.getElementById('address').value.trim()
        this.formValues.city = document.getElementById('city').value.trim()
        this.formValues.password = document.getElementById('state').value.trim()
        this.formValues.pincode = document.getElementById('pincode').value.trim()
        this.formValues.username = document.getElementById('type').value.trim()

    }
    //validation start

    //country
    validateCountry()
            {
                let c = document.getElementById("country");
                let strUser = c.options[c.selectedIndex].value;

                let strUser1 = c.options[c.selectedIndex].text;
                if(strUser==0)
                {
                    // alert("Please select a user");
                    this.errorValues.countryErr = "* Please select a country"
                    this.showErrorMsg(0,this.errorValues.countryErr)
                }else {
                    this.errorValues.countryErr = ""
                    this.showSuccessMsg(0)
                }
            }

            //address
    validateAddress(){
        if(this.formValues.address === ""){
            this.errorValues.addressErr = "* Please Enter a Address"
            this.showErrorMsg(1,this.errorValues.addressErr)
        } else if(this.formValues.address.length <= 4 ){
            this.errorValues.addressErr = "* Address must be atleast 5 Characters"
            this.showErrorMsg(1,this.errorValues.addressErr)
        } else {
            this.errorValues.addressErr = ""
            this.showSuccessMsg(1)
        }
    }

    //city
    validateCity(){
       if(this.formValues.city === ""){
           this.errorValues.cityErr = "* Please Enter a City"
           this.showErrorMsg(2,this.errorValues.cityErr)
       }else if(this.formValues.city.length <= 2 ){
        this.errorValues.cityErr = "*Please enter valid city name"
        this.showErrorMsg(2,this.errorValues.cityErr)
       }else {
        this.errorValues.cityErr = ""
        this.showSuccessMsg(2)
    }
    }

    //state
    validateState()
            {
                let c = document.getElementById("state");
                let strUser4 = c.options[c.selectedIndex].value;

                let strUser5 = c.options[c.selectedIndex].text;
                if(strUser4==0)
                {
                    // alert("Please select a user");
                    this.errorValues.stateErr = "* Please select a state"
                    this.showErrorMsg(3,this.errorValues.stateErr)
                }      
                else {
                    this.errorValues.stateErr = ""
                    this.showSuccessMsg(3)
                }
            }

            //pincode
    validatePincode(){
        if(this.formValues.pincode === ""){
            this.errorValues.pincodeErr = "* Please Enter Pincode"
            this.showErrorMsg(4,this.errorValues.pincodeErr)

        } else if(this.formValues.pincode.length <= 5){
            this.errorValues.pincodeErr = "* Pincode must be 6 Characters"
            this.showErrorMsg(4,this.errorValues.pincodeErr)
        }
        else {
            this.errorValues.pincodeErr= ""
            this.showSuccessMsg(4);
        }
        
    }
    //address type
    validateType()
    {
        let c = document.getElementById("type");
        let strUser2 = c.options[c.selectedIndex].value;

        let strUser3 = c.options[c.selectedIndex].text;
        if(strUser2==0)
        {
            // alert("Please select a user");
            this.errorValues.typeErr = "* Please select an address"
            this.showErrorMsg(5,this.errorValues.typeErr)
        }else {
            this.errorValues.typeErr = ""
            this.showSuccessMsg(5)
        }
    }

    //alert msg
    alertMessage(){
        const {countryErr , addressErr , cityErr , stateErr , pincodeErr,typeErr}= this.errorValues
        if(countryErr === "" && addressErr === "" && cityErr === "" && stateErr === "" && pincodeErr === ""&& typeErr===""){
               swal("Save Successful","ThankYou Buddy..."+this.formValues.country,"success").then(() => {
                this.removeInputs()
            })
        
        } else { swal("Please fill all required valid inputs","Do you want to continue to  click'OK'?","error")
    }
    }
//remove inputs
    removeInputs(){
        const form_groups = document.getElementsByClassName('form-group')
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = ""
            element.getElementsByTagName('span')[0].textContent = ""
            element.classList.remove('success')
        })
    }
} 
//state list
const states= [
    {
   "id": 1,
    "state": "Alabama",
    "state_code": "AL",
   "country": "1"
   },
    {
   "id": 2,
    "state": "Alaska",
   "state_code": "AK",
    "country": "1"
    },
   {
   "id": 3,
    "state": "Arizona",
    "state_code": "AZ",
    "country": "1"
    },
   {
   "id": 4,
   "state": "Arkansas",
   "state_code": "AR",
    "country": "1"
    },
   {
   "id": 5,
   "state": "California",
   "state_code": "CA",
    "country": "1"
   },
   {
    "id": 51,
    "state": "Alberta",
    "state_code": "AB",
    "country": "2"
   },
    {
    "id": 52,
   "state": "British Columbia",
    "state_code": "BC",
    "country": "2"
    },
    {
   "id": 53,
    "state": "Manitoba",
    "state_code": "MB",
    "country": "2"
   },
   {
   "id": 54,
    "state": "New Brunswick",
   "state_code": "NB",
   "country": "2"
   },
   {
   "id": 55,
   "state": "Newfoundland and Labra",
    "state_code": "NL",
    "country": "2"
    }
   ]
   
   const countrySelect = document.getElementById('country');
   const stateSelect = document.getElementById('state');
   countrySelect.addEventListener('change', () => {
    
    // Filter states by selected country
    const filteredStates = states.filter(s => s.country === countrySelect.value);
    
    // Add filtered states to select dropdown
    filteredStates.forEach(s => {
      const option = document.getElementById('option');
      option.text = s.state;
      option.value = s.country;
      stateSelect.add(option);
    });
  }); 

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateCountry()
    ValidateUserInputs.validateAddress()
    ValidateUserInputs.validateCity()
    ValidateUserInputs.validateState()
    ValidateUserInputs.validatePincode()
    ValidateUserInputs.validateType()
    ValidateUserInputs.alertMessage()
})
















































       