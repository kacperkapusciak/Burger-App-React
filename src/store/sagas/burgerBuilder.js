import axios from "../../axios-orders";
import { put } from "redux-saga/effects";
import * as actions from "../actions";

export function* fetchIngredients(action) {
  try {
    const response = yield axios.get(
      "https://burger-react-6775d.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
