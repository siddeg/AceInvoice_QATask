import Page from './page'

class AddProject extends Page {

    /**
     * define elements
     */
    get projectsTab () { return $('[title=Projects]') }
    get addNewProjectButton () { return $('[href*="projects/new"]') }
    get selectClientCombo () { return $('[name=client_id]') }
    get projectName () { return $('[name=project_name]') }
    get billingMethod () { return $('[name=billing_method]') }
    get projectRate () { return $('[name=project_level_rate]') }
    get submitButton () { return $('//button[text()="Submit"]') }
    get editButton () { return $('//button[text()="Edit"]') }
    get projectsHeaderText () { return $('//h1[text()="Projects"]') }
    get addNewProjectHeaderText () { return $('//h1[text()="Add New Project"]') }
    get infoHeaderText () { return $('//span[text()="Info"]') }
    get projectNameVerify () { return $('td [href*="/projects/"]') }
    

    
    enterProjectDetails (name, rate) {

        this.selectClientCombo.selectByValue('280')
        this.projectName.addValue(name)
        this.billingMethod.selectByValue('hourly_project_rate')
        this.projectRate.addValue(rate)
        this.submitButton.click()
        this.infoHeaderText.waitForVisible(5000)
    }

    addNewProject () {

        this.addNewProjectButton.click();
        this.addNewProjectHeaderText.waitForVisible(3000)
    }

    tapProjects () {

        this.projectsTab.click();
        this.projectsHeaderText.waitForVisible(3000)
    }

    editProjectName (name) {

        this.editButton.click()
        this.projectName.clearElement()
        this.projectName.addValue(name)
        this.submitButton.click()
        this.infoHeaderText.waitForVisible(5000)

    }
 
}

export default new AddProject()
