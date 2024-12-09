import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';

// import imeges from './API/Imeges';

class App extends Component {
  state = {
    serchValue: '',
    imagesData: null,
    page: 1,
    showBtnLoadMore: false,
    showLoader: false,
    showModal: false,
    modalData: null,
  };

  render() {
    return (
      <div className="app">
        <Searchbar />
      </div>
    );
  }
}

export default App;
