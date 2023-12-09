import axios from "axios";
import {
	ADD_FAV,
	REMOVE_FAV,
	FILTER_CARDS,
	ORDER_CARDS,
	GET_FAV,
} from "./action-types";
//!----------------------------------------------------+/

const URL = "http://localhost:3001/rickandmorty/fav";

const addFav = (character) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(URL, character);
			return dispatch({
				type: ADD_FAV,
				payload: data,
			});
		} catch (error) {
			console.error(error);
		}
	};
};

const removeFav = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.delete(`${URL}/${id}`);
			return dispatch({
				type: REMOVE_FAV,
				payload: data,
			});
		} catch (error) {
			console.error(error);
		}
	};
};

const filterCards = (gender) => {
	return {
		type: FILTER_CARDS,
		payload: gender,
	};
};

const orderCards = (order) => {
	return {
		type: ORDER_CARDS,
		payload: order,
	};
};

const getFav = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(URL);
			return dispatch({
				type: GET_FAV,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export { addFav, removeFav, filterCards, orderCards, getFav };
