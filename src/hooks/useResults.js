import React, { useState } from "react";

//TODO: Make this reusable hook to make network request
export default ({ initialValue }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [results, setResults] = useState(initialValue);
};
