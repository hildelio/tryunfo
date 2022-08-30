import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h1>
          Adicionar nova carta
        </h1>
        <label htmlFor="cardName">
          Nome
          <input
            name="cardName"
            placeholder="Nome da Carta"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            required
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição
          <textarea
            name="cardDescription"
            data-testid="description-input"
            placeholder="Descrição da carta"
            value={ cardDescription }
            onChange={ onInputChange }
            required
          />
        </label>

        <label htmlFor="cardAttr1">
          Primeiro atributo
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            min={ 0 }
            max={ 90 }
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2">
          Segundo atributo
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            min={ 0 }
            max={ 90 }
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          Terceiro atributo
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            min={ 0 }
            max={ 90 }
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage">
          Imagem
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            required
          />
        </label>

        <label htmlFor="cardRare">
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            required
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          Super Trybe Trunfo
          <input
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          name="save-button"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick({
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          }) }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
