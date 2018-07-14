// @flow

import {connect} from 'react-redux';
import {ListItems} from '../components/ListItems';
import {AddItem} from '../components/AddItem';
import {TodoItem} from '../components/TodoItem';
import {RandomButton} from '../components/RandomButton';
import {FiltersComp} from '../components/FiltersComp';
import {ModalTodo} from '../modal/ModalTodo';
import {
  toggleTodo,
  addTodo,
  storeEdit,
  toggleFilter,
  toggleEdit,
  generateRamdomTodo,
  fetchCatFunction,
} from '../actions';

const mapStateToProps = state => {
  return {
    todos: state.filter ? state.todos : state.todos.filter(el => !el.doneAt),
    filter: state.filter,
    catPic: state.cat,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleItem: id => {
      dispatch(toggleTodo(id));
    },
    addItem: text => {
      dispatch(addTodo(text));
    },
    writeChanges: (id, text) => {
      console.log(text);
      dispatch(storeEdit(id, text));
    },
    toggleEdit: id => {
      dispatch(toggleEdit(id));
    },
    filterList: () => {
      dispatch(toggleFilter());
    },
    generateRamdom: () => dispatch(generateRamdomTodo()),
    fetchCat: pic => dispatch(fetchCatFunction(pic)),
  };
};

export const ItemList = connect(
  mapStateToProps,
  null
)(ListItems);

export const ItemAdd = connect(
  null,
  mapDispatchToProps
)(AddItem);

export const ItemToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);

export const FilterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersComp);

export const ButtonRandom = connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomButton);

export const TodoModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalTodo);
