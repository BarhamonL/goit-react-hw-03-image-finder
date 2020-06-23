import React, { Component } from "react";
import { func } from "prop-types";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
  };

  state = { inputValue: "" };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className={styles.searchBar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
