import { assert } from 'chai'

import SignupPage from '../pageobjects/signup.page'
import AddTeamMember from '../pageobjects/addteammember.page'
import AddClient from '../pageobjects/addclient.page'
import AddProject from '../pageobjects/addproject.page'

describe('Ace Invoice QA Task Tests', () => {
    it('should complete the signup process', () => {
        
        //TestData
        let email = Math.random().toString(36).substring(2,5) + "@test.com"
        let password = "Password123"
        let firstName = "Test FirstName"
        let lastName = "Test LastName"
        let orgName = "Test Organization Name"
        let orgEmail = "TestOrgEmail@test.com"

        SignupPage.open()
        SignupPage.createAccount(email, password)

        
        assert.ok(SignupPage.headerText.getText().includes('Enter your Preferences'))
        SignupPage.enterPreferences(firstName, lastName)

        
        assert.ok(SignupPage.headerText.getText().includes('Add New Organization'))
        SignupPage.addNewOrganisation(orgName, orgEmail)
        
        
        assert.ok(SignupPage.headerText.getText().includes('Team'))
    })

    it('should add new team member and verify', () => {

        //TestData
        let email = Math.random().toString(36).substring(2,5) + "@test.com"
        let firstName = "Test TMFirstName"
        let lastName = "Test TMLastName"

        AddTeamMember.addTeamMember()
        AddTeamMember.enterTeamMemberDetails(email, firstName, lastName)
        AddTeamMember.saveTeamMemberDetails()

        assert.ok(AddTeamMember.teamMemName.getText().includes(firstName + " " + lastName))
    })

    it('should add new client', () => {

        //TestData
        let clientName = "Test Client"
        let address = "Test Address"

        AddClient.tapClients()
        AddClient.addNewClient()
        AddClient.enterClientDetails(clientName, address)
   
        AddClient.tapClients()
        assert.ok(AddClient.clientName.getText().includes(clientName))
    })

    it('should add new project', () => {

        //TestData
        let projectName = "Test Project"
        let rate = "100"

        AddProject.tapProjects()
        AddProject.addNewProject()
        AddProject.enterProjectDetails(projectName, rate)
   
        AddProject.tapClients()
        assert.ok(AddProject.projectNameVerify.getText().includes(projectName))
    })

    it('should edit project name', () => {

        //TestData
        let projectName = "Test Edit Project"
        let rate = "100"

        AddProject.editProjectName(projectName)
    
   
        AddProject.tapClients()
        assert.ok(AddProject.projectNameVerify.getText().includes(projectName))
    })
})