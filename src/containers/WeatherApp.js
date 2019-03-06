import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchWeatherAction} from '../actions/weatherActions';
import WButton from '../components/common/WButton';
import WTextbox from '../components/common/WTextbox';
import WTable from '../components/common/table/WTable';
import WCheckbox from '../components/common/WCheckbox';

class Modify extends Component
{
    constructor (props) {
        super(props);
        this.state = {
            zipcode: '',
            showColumnCheck: false
        }
    }

    textChangeHandler = (e) => {
        this.setState({zipcode: e.target.value});
    }
    
    searchHandler = () => {
        this.props.fetchWeatherAction(this.state.zipcode);
    }
    dropdownHandler = (e) => this.setState({columns: e.target.name});

    chkboxHandler = (e) => {
        this.setState({[e.target.value]: e.target.checked});
    }

    showCheckboxes = () => {
        const {showColumnCheck} = this.state;
        this.setState({showColumnCheck: !showColumnCheck});
    }

    render()
    {
        
        if(this.props.weather) {
            var {list, city} = this.props.weather;
        }
        
        if(city) {
         var {name, country, coord} = city;
        }

        const columns = [];
        if (list) {
            const entry = list[0];
            for (let i in entry) {
                if (typeof entry[i] == 'object') {
                    for (let j in entry[i]) {
                        columns.push(j);
                    }
                } else {
                    columns.push(i);
                }
                
            }
        }
           
        return(
            <div className='modify-container header-margin'>
                <div className='zipcode-container'>
                    <WTextbox description = 'Allowed Zip codes: 35801, 35802, 35803' type='number' title='Zip Code:' value={this.state.zipcode} changeHandler={this.textChangeHandler}/>
                    <WButton title= 'SEARCH' clickHandler={this.searchHandler}/>
                </div>
                    {
                        list && list.length > 0 ?
                        <div className='loc-chkbox-container'>
                            <div className='city-details-container'>
                                <div className ='city-details-header'>
                                    Location Details 
                                </div>
                                <div className='city-name'>
                                    <span className='city-label'>City:</span> {name}
                                </div>   
                                <div className='country-name'>
                                    <span className='city-label'>Country:</span> {country}
                                </div>
                                <div className='city-coord'>
                                    <span className='city-label'>Coords:</span> {`Lat: ${coord.lat}, Lon: ${coord.lon}`}
                                </div>    
                            </div> 

                            <div className='chkbox-container'>
                                <div className='trigger-chkbox' onClick={this.showCheckboxes}>Select columns to Hide</div>
                                {
                                    this.state.showColumnCheck &&
                                    <div className='chkbox-div'>
                                        {
                                            columns.map((item) => <WCheckbox value={item} name={item} onChangeHandler = {this.chkboxHandler}/>)
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                        : null
                    }
                    {
                        !this.props.weather && <div> Weather Data for this city are not found </div>
                    }
                <WTable tableData={list || []} checkColumns={this.state}/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchWeatherAction: fetchWeatherAction
};
const mapStateToProps = (state) => ({
    weather: state.weatherReducer.weather
})

export default connect(mapStateToProps, mapDispatchToProps)(Modify);