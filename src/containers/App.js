import React, {Component} from 'react';
import Header from '../components/common/Header';
import WeatherApp from './WeatherApp';

export default class App extends Component
{
    render()
    {
        return(
            <div className='app-container'>
                <Header header='Login'/>
                <WeatherApp/>
            </div>
        )
    }
}