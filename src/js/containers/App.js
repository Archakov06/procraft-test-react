import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions';

import InputMask from 'react-input-mask';
import { Container, Form, Flag, Button } from 'semantic-ui-react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      phoneMask: {
        ru: '+7 999 99 99',
        ua: '+380 99 999 99 99',
        kz: '+1 999 99 99',
      },
      selectedFlag: 'ru',
      countries: [
        {
          key: 'ru',
          value: 'ru',
          text: <Flag name='ru' />,
        },
        {
          key: 'ua',
          value: 'ua',
          text: <Flag name='ua' />,
        },
        {
          key: 'kz',
          value: 'kz',
          text: <Flag name='kz' />,
        },
      ],
      professions: [
        {
          value: '0',
          text: 'Парикмахер',
        },
        {
          value: '1',
          text: 'Визажист',
        },
        {
          value: '2',
          text: 'Строитель',
        },
        {
          value: '3',
          text: 'Программист',
        },
        {
          value: '4',
          text: 'Тракторист',
        },
        {
          value: '5',
          text: 'Киллер',
        },
      ],
    };
  }

  changeFlag(_, { value }) {
    this.setState({
      selectedFlag: value,
    });
  }

  render() {
    return (
      <Container>
        <p><b>Зарегистрируйтесь</b> и начните продавать услуги через интернет сегодня</p>
        <br />
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Имя' placeholder='Иван' />
            <Form.Input label='Фамилия' placeholder='Иванов' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Select
              options={this.state.professions}
              label='Профессия'
              search
              placeholder='Выберите профессию'
            />
          </Form.Group>
          <Form.Group className='countries-dropdown'>
            <Form.Select
              options={this.state.countries}
              label='Номер телефона'
              onChange={this.changeFlag.bind(this)}
              defaultValue={this.state.selectedFlag}
            />
          <Form.Input
            className="phone-mask"
            children={
              <InputMask
                mask={this.state.phoneMask[this.state.selectedFlag]}
                placeholder={this.state.phoneMask[this.state.selectedFlag]}
                maskChar=" "
              />
            }
          />
          </Form.Group>
          <Button fluid primary>Зарегистрироваться</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ currentStore }) => ({
  currentStore: currentStore,
});

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
