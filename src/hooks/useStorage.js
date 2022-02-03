/*
	AUTHOR: SARMED RIZVI
   SUMMARY: FOR ASYNC STORAGE VALUES
*/

import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = (id, props = {}) =>
{
	const {isObject} = props
	const [result, setResult] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	React.useEffect(() =>
	{
		async function fetchStorage()
		{
			try
			{
				setLoading(true);
				const value = await AsyncStorage.getItem(id);
				setResult(isObject ? JSON.parse(value || "{}") : value);
				setLoading(false);
			} catch (error)
			{
				setLoading(false);
			}
		}
		if (id !== "")
		{
			fetchStorage();
		}
	}, [id]);
	return [result, loading];
}

export default useStorage;
