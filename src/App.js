import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import PaletteList from './PaletteList';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

class App extends Component {
  findPalette(id) {
    return seedPalettes.find(function(palette) {
      return palette.id === id;
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <PaletteList palettes={seedPalettes} />} />
        <Route exact path='/palette/:id' render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedPalettes[4])} />
      // </div>
    );
  }
}

export default App;