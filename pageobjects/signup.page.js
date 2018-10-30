import Page from './page'

class SignupPage extends Page {

    /**
     * define elements
     */
    get emailInput () { return $('[name=email]') }
    get getStartedButton () { return $('[name=get_started]') }
    get passwordInput () { return $('[name=password]');  }
    get passwordConfirmation () { return $('[name=password_confirmation]') }
    get continueButton () { return $('[name=continue]') }
    
    get headerText () { return $('//h1') }
    get preferencesHeaderText () { return $('//h1[text()="Enter your Preferences"]') }
    get firstName () { return $('[name="user[first_name]"]') }
    get lastName () { return $('[name="user[last_name]"]') }
    get submitButton () { return $('[value=Submit]') }

    get addNewOrgHeaderText () { return $('//h1[text()="Add New Organization"]') }
    get orgName()   { return browser.element('//input[@name="name"]') }
    get orgEmail()   { return browser.element('//input[@name="email"]') }
    

get teamHeaderText () { return $('//h1[text()="Team"]') }
    /**
     * define or overwrite page methods
     */
    open () {
        super.open('sign_up');
    }

    generateEmail () {

        let randomEmail = Math.random().toString(36).substring(7);
        console.log("randomEmail", randomEmail);
        return randomEmail;
    }

     createAccount (email, password) {

        this.emailInput.addValue(email);
        this.getStartedButton.click();
        this.passwordInput.addValue(password)
        this.passwordConfirmation.addValue(password)
        this.continueButton.click();
        this.preferencesHeaderText.waitForVisible(3000)
    }

     enterPreferences (firstname, lastname) {

        this.firstName.addValue(firstname)
        this.lastName.addValue(lastname)
        this.submitButton.click();
        this.addNewOrgHeaderText.waitForVisible(3000)
    }

     addNewOrganisation (name, email) {
        
        this.orgName.addValue(name)
        this.orgEmail.addValue(email)
        this.submitButton.click();
        this.teamHeaderText.waitForVisible(3000)
    }

}

export default new SignupPage()
