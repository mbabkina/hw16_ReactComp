import React, { Component } from 'react';
import Contact from './Contact';
import './ContactList.css';

const lightGreyColor = 'rgb(166, 157, 157)'
const seacrhIcon = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="search-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={ lightGreyColor} d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>

const contacts = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666"
    }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
    }];


class ContactList extends Component {
    state = {
        contacts: [...contacts],
        search: '',
        contactsFiltered: [...contacts],
        isMale: true,
        isFemale: true,
        isNone: true
    };

    handleSearchChange = async (e) => {
        await this.setState({ search: e.target.value })
            this.applyFilter()
    }
    
    filterMale =  async () => {
        await this.setState({ isMale: !this.state.isMale })
           this.applyFilter()
    }

     filterFemale =  async () => {
        await this.setState({ isFemale: !this.state.isFemale })
             this.applyFilter() 
    }

     filterAbsent =  async () => {
        await this.setState({ isNone: !this.state.isNone })
            this.applyFilter() 
    }
    
    
    applyFilter = async () => {
        await this.setState(() => {
                           
         const filterData = this.state.search.toLowerCase()
                    
        let filtered = this.state.contactsFiltered.filter( contact => 
            ((contact.gender === 'male') && this.state.isMale) ||
            ((contact.gender === 'female') && this.state.isFemale) ||
            ((contact.gender === undefined) && this.state.isNone))
          .filter(contact =>
                         contact.firstName.toLowerCase().includes(filterData) ||
                        contact.lastName.toLowerCase().includes(filterData) ||
                        contact.phone.toLowerCase().includes(filterData))
            
          
            if (!filterData && (this.state.isMale && this.state.isFemale && this.state.isNone))
                filtered = [...contacts]
              
         return { contactsFiltered: [...filtered] }
    })
    }
        
    
    render() {
        return (<main className="wrapper">
            <div className="search-wrapper">

                <div className="gender-wrapper">
                    
                <div className="gender">
                        <input type="radio" name="gender-male" id="gender-male"
                            checked={this.state.isMale}
                            onClick= {this.filterMale}
                        />
                    <label htmlFor="gender-male">Male</label>
                    </div>
                    
                     <div className="gender">
                        <input type="radio" name="gender-female" id="gender-female"
                            checked={this.state.isFemale}
                            onClick= {this.filterFemale}
                        />
                    <label htmlFor="gender-female">Female</label>
                    </div>
                    
                     <div className="gender">
                        <input type="radio" id="gender-absent" name="gender-absent"
                            checked={this.state.isNone}
                            onClick= {this.filterAbsent}
                        />
                           <label htmlFor="gender-absent">Not set</label>
                </div>

                </div>

            <div className="search-form">
                {seacrhIcon}
                <input className="search"
                    type="text"
                    placeholder="Search"
                    value={this.state.search}
                 onChange={this.handleSearchChange}/>
                </div>
                
               
            </div>    
            
            <div className="contacts-wrapper">
            {this.state.contactsFiltered.map((el, i) =>
                el = <Contact {...this.state.contactsFiltered[i]} />)} 
            </div>

        </main>)
            };
}


export default ContactList;