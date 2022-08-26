import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" data-testid="name-input" />
        <textarea data-testid="description-input" />
        <input type="number" data-testid="attr1-input" />
        <input type="number" data-testid="attr2-input" />
        <input type="number" data-testid="attr3-input" />
        <input type="text" data-testid="image-input" />
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <input type="checkbox" data-testid="trunfo-input" />
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
