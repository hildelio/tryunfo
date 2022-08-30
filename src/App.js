import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuHcDm2ps-0nByEvBM_q0Z5g6ujaZQbd4cQ_z_iymeW0zIBeBo2zg6KUcjsrm5GHlGqE&usqp=CAU',
    cardRare: 'normal',
    cardTrunfo: false,
    data: [],
    isSaveButtonDisabled: true,
    previewOn: false,
  };

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
      } = this.state;

      // const valid = (
      //   cardName.length > 0 && cardDescription.length > 0
      //   && cardImage.length > 0
      // );
      // const n0 = -1;
      const n = 90;
      const min = (
        Number(cardAttr1) >= 0
        && Number(cardAttr2) >= 0
        && Number(cardAttr3) >= 0);
      const max = (
        Number(cardAttr1) <= n
        && Number(cardAttr2) <= n
        && Number(cardAttr3) <= n);
      const valueMax = 210;
      const valueNeutro = 0;
      const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const between = sum <= valueMax && sum >= valueNeutro;

      if (cardName && cardDescription && cardImage && min && max && between) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  onSaveClick = (objInfo) => {
    this.setState((prevState) => ({
      data: [...prevState.data, objInfo],
      previewOn: true,
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      data,
      isSaveButtonDisabled,
      previewOn,
    } = this.state;
    return (
      <div>
        <Form
          onSaveButtonClick={ this.onSaveClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          previewOn === true && data.map((e) => (<Card
            key={ e.cardName }
            cardName={ e.cardName }
            cardDescription={ e.cardDescription }
            cardAttr1={ e.cardAttr1 }
            cardAttr2={ e.cardAttr2 }
            cardAttr3={ e.cardAttr3 }
            cardImage={ e.cardImage }
            cardRare={ e.cardRare }
            cardTrunfo={ e.cardTrunfo }
          />))
        }

      </div>
    );
  }
}

export default App;
