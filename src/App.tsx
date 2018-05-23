import * as React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Route } from 'react-router';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { News } from './components/News/News';
import { Contact } from './components/Contact/Contact';

class App extends React.Component {
    public render(): any {
        return (
            <div>
                <Navbar/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/news" component={News}/>
                <Route path="/contact" component={Contact}/>
            </div>
        );
    }
}

export default App;
