import * as React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { News } from './components/News/News';
import { Contact } from './components/Contact/Contact';
import { Switch } from 'react-router';

class App extends React.Component {
    public render(): any {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/about" component={About}/>
                    <Route path="/news" component={News}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
                </div>
        );
    }
}

export default App;
