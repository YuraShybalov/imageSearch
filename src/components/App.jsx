import { Component } from 'react';
import { fetchImg } from './API/imeges';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class App extends Component {
  state = {
    serchValue: '',
    imagesData: [],
    page: 1,
    showBtnLoadMore: false,
    showLoader: false,
    showModal: false,
    modalData: null,
    error: null,
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  fetchImages = async () => {
    const { serchValue, page } = this.state;

    this.setState({ showLoader: true });

    try {
      const data = await fetchImg(serchValue, page);

      this.setState(prevState => ({
        imagesData: [...prevState.imagesData, ...data.hits],
        showLoader: false,
        showBtnLoadMore: data.hits.length > 0,
      }));
    } catch (error) {
      this.setState({ error: error.message, showLoader: false });
    }
  };

  componentDidMount() {
    this.fetchImages();
  }

  render() {
    return (
      <div className="app">
        <Searchbar state={this.state} handleChange={this.handleChange} />
        {this.state.error && <p className="error">{this.state.error}</p>}
        <ImageGallery>
          {this.state.imagesData.length > 0 && (
            <ImageGalleryItem imagesData={this.state.imagesData} />
          )}
        </ImageGallery>
        {this.state.showLoader && <p>Loading...</p>}
      </div>
    );
  }
}

export default App;
