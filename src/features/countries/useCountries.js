import { useDispatch, useSelector } from 'react-redux';
import { loadCountries, selectCountriesInfo, selectFilteredCountries } from './countries-slice';
import { selectControls } from '../controls/controls-slice';
import { useEffect } from 'react';

export const useCountries = () => {
	const dispatch = useDispatch();

	const controls = useSelector(selectControls)
	const visibleCountries = useSelector(state => selectFilteredCountries(state, controls))
	const { status, error, qty } = useSelector(selectCountriesInfo);

	useEffect(() => {
		if (!qty) {
			dispatch(loadCountries());
		}
	}, [qty, dispatch]);

	return [visibleCountries, status, error]
}