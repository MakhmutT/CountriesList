import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadNeighborsByBorder, selectNeighbors } from './details-slice';

export const useNeighbous = (borders) => {
	const dispatch = useDispatch()
	const neighbors = useSelector(selectNeighbors)

	useEffect(() => {
		if (borders.length) {
			dispatch(loadNeighborsByBorder(borders))
		}
	}, [dispatch, borders])

	return neighbors
}