import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
    filterName: '',
    filterRare: '',
    filterTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }), () => {
      const n = 90;
      const valueMax = 210;
      const { cardName, cardDescription, cardImage,
        cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const greaterThanOne = (Number(cardAttr1) >= 0
        && Number(cardAttr2) >= 0 && Number(cardAttr3) >= 0);

      const max = (Number(cardAttr1) <= n
      && Number(cardAttr2) <= n && Number(cardAttr3) <= n);

      const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= valueMax;
      if (cardName && cardDescription && cardImage
        && greaterThanOne && max && sum) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  onSaveButtonClick = (objInfo) => {
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      data: [...prevState.data, objInfo],
    }), () => {
      const { cardTrunfo } = this.state;
      if (cardTrunfo) {
        this.setState({ hasTrunfo: true });
      }
      this.setState({ cardTrunfo: false });
    });
  };

  onDeleteCard = ({ target }) => {
    const { data } = this.state;
    const card = target.parentNode;
    const cardValue = card.children[0].children[0].innerText;
    this.setState(() => ({
      data: data.filter((e) => e.cardName !== cardValue) }), () => {
      const { cardTrunfo } = this.state;
      if (!cardTrunfo) {
        this.setState({ hasTrunfo: false });
        card.remove();
      }
    });
  };

  filterName = ({ target }) => {
    this.setState({ filterName: target.value });
  };

  filterRare = ({ target }) => {
    this.setState({ filterRare: target.value });
  };

  filterTrunfo = () => {
    const { filterTrunfo } = this.state;
    if (filterTrunfo) {
      this.setState({ filterTrunfo: false });
    } else {
      this.setState({ filterTrunfo: true });
    }
  };

  render() {
    const { data, filterName, filterRare, filterTrunfo } = this.state;
    return (
      <div className="flex">
        <h1>Adicionar Nova Carta</h1>
        <div className="column">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...this.state }
          />
        </div>
        <div>
          <h2>Todas as cartas</h2>
          <form>
            <input
              data-testid="name-filter"
              type="text"
              onChange={ this.filterName }
              disabled={ filterTrunfo }
            />
            <select
              data-testid="rare-filter"
              onChange={ this.filterRare }
              disabled={ filterTrunfo }
            >
              <option value="">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            <label htmlFor="super">
              Super Trunfo
              <input
                data-testid="trunfo-filter"
                type="checkbox"
                onClick={ this.filterTrunfo }
              />
            </label>
          </form>
          {data
            .filter((card) => card.cardName.includes(filterName))
            .filter((card) => {
              if (filterRare === 'raro' && filterRare !== '') {
                return card.cardRare === filterRare;
              }
              return card.cardRare.includes(filterRare);
            })
            .filter((card) => {
              if (filterTrunfo) {
                return card.cardTrunfo === true;
              }
              return true;
            })
            .map((card) => (
              <div
                key={ card.cardName }
              >
                <Card key={ card.cardName } { ...card } />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ this.onDeleteCard }
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
