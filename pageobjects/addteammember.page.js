import Page from './page'

class AddTeamMember extends Page {

    /**
     * define elements
     */
    get addTeamMemButton () { return $('.btn.btn-primary') }
    get emailInput () { return $('[name="user[email]"]') }
    get saveAndInviteButton () { return $('[value="Save and Invite"]') }
    get firstName () { return $('[name="user[first_name]"]') }
    get lastName () { return $('[name="user[last_name]"]') }
    get saveButton () { return $('[value="Save"]') }
    get teamMemName () { return $('tr:nth-child(2) td.sorting_1') }
    get addTeamMemHeaderText () { return $('//h1[text()="Add New Team Member"]') }
    get editTeamMemHeaderText () { return $('//h1[text()="Edit Team Member"]') }
    get teamHeaderText () { return $('//h1[text()="Team"]') }

     enterTeamMemberDetails (email, fName, lName) {

        this.emailInput.addValue(email);
        this.firstName.addValue(fName)
        this.lastName.addValue(lName)
        this.saveAndInviteButton.click();
        this.editTeamMemHeaderText.waitForVisible(3000)
    }

     addTeamMember () {

        this.addTeamMemButton.click();
        this.addTeamMemHeaderText.waitForVisible(3000)
    }

     saveTeamMemberDetails () {
        
        this.saveButton.click();
        this.teamHeaderText.waitForVisible(3000)
    }

}

export default new AddTeamMember()
