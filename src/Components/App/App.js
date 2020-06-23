import React, { Component } from "react";

// components
import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import Loader from "../Loader";
import Button from "../Button";
import Modal from "../Modal";

//utils
import apiService, { quantityPictures } from "../../Services/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import scroll from "../../utils/scroll";

//styles
import styles from "./App.modul.css";

export default class App extends Component {
  state = {
    hits: [],
    totalPage: "",
    loading: false,
    error: null,
    query: "",
    page: 1,
    largeImageURL: null,
  };

  handleSearchFormSubmit = (query) => {
    if (!query) {
      this.showNotif("Enter some query");
      return;
    }

    this.setState({ query: query, hits: [], page: 1 });
    this.fetchImages(query);
  };

  fetchImages = (query) => {
    this.setState({ loading: true });
    const { page } = this.state;

    apiService
      .fetchPicturesWithQuery(query, page)
      .then((data) => {
        if (data.length === 0) {
          this.showNotif("No results were found for your request.");
          return;
        }
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...data.hits],
          page: prevState.page + 1,
          totalPage: Math.ceil(data.totalHits / quantityPictures + 1),
        }));
      })
      .catch((error) => this.showNotif(`Ups...error${error.message}`))
      .finally(() => {
        this.setState({ loading: false });
        scroll();
      });
  };

  loadMore = () => {
    const { query } = this.state;
    this.fetchImages(query);
  };

  showNotif = (message) => {
    this.setState({ showNotif: true });
    toast.error(`${message}`);
  };

  showModal = (url) => {
    this.setState({ largeImageURL: url });
  };
  closeModal = () => {
    this.setState({ largeImageURL: "" });
  };

  render() {
    const { hits, loading, largeImageURL, totalPage, page } = this.state;

    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {hits.length > 0 && (
          <ImageGallery hits={hits} showModal={this.showModal} />
        )}
        {loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={2000}
          />
        )}
        {hits.length > 0 && !loading && page !== totalPage && (
          <Button onClick={this.loadMore} />
        )}
        {largeImageURL && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={this.closeModal}
          ></Modal>
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </div>
    );
  }
}
