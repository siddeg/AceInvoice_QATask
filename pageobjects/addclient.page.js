import Page from './page'

class AddClient extends Page {

    /**
     * define elements
     */
    get clientsTab () { return $('[title=Clients]') }
    get addNewClientButton () { return $('//a[text()="Add New Client"]/.') }
    get clientsName () { return $('[name="client[name]"]') }
    get addressInput () { return $('[name="client[address_line1]"]') }
    get submitButton () { return $('[value="Submit"]') }
    get addNewClientHeaderText () { return $('//h1[text()="Add New Client"]') }
    get clientsHeaderText () { return $('//h1[text()="Clients"]') }
    get clientName () { return $('td:nth-child(2) a') }

    enterClientDetails (name, adress) {

        this.clientsName.addValue(name);
        this.addressInput.addValue(adress)
        this.submitButton.click();
        this.clientName.waitForVisible(5000)
    }

    addNewClient () {

        this.addNewClientButton.click();
        this.addNewClientHeaderText.waitForVisible(3000)
    }

    tapClients () {

        this.clientsTab.click();
        this.clientsHeaderText.waitForVisible(3000)
    }

}

export default new AddClient()
