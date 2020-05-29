import { useState, useEffect } from "react";
import mangoApi from "../api";

export default (query, variables, isLazyFetch = false) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);
	useEffect(() => {
		if (isLazyFetch) return;
		fetchResults();
	}, []);
	const fetchResults = async () => {
		try {
			setLoading(true);
			const response = await mangoApi.post("/", {
				query,
				variables,
			});
			setData(response.data);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			setError(err);
			console.log(err);
		}
	};

	const lazyFetchResults = async (lazyVariables) => {
		try {
			setLoading(true);
			const response = await mangoApi.post("/", {
				query,
				variables: lazyVariables,
			});
			setData(response.data);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			setError(err);
			console.log(err);
		}
	};

	return { loading, error, data, lazyFetchResults };
};
