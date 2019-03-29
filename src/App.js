import React, { Component } from 'react';
import { CheckIn } from './components/CheckIn';

const PRICE = 433;

const AVAILABLE_DATES = new Set([
    '2019-03-26',
    '2019-03-27',
    '2019-03-29',
    '2019-03-30',
    '2019-04-01',
    '2019-04-02',
    '2019-04-03',
    '2019-04-06',
    '2019-04-07',
    '2019-04-08',
    '2019-04-12',
    '2019-04-13',
    '2019-04-14',
    '2019-04-16',
    '2019-04-17',
    '2019-04-20',
    '2019-04-21',
    '2019-04-25',
    '2019-04-26',
    '2019-05-01',
    '2019-05-02',
    '2019-05-03',
    '2019-05-06',
    '2019-05-07',
    '2019-05-08',
    '2019-05-12',
    '2019-05-13',
    '2019-05-14',
    '2019-05-16',
    '2019-05-17',
    '2019-05-20',
    '2019-05-21',
]);

class App extends Component {
    render() {
        return (
            <div className="App">
                <CheckIn
                    price={PRICE}
                    rating={3.7}
                    reviewsCount={143}
                    availableDates={AVAILABLE_DATES} />
            </div>
        );
    }
}

export default App;
