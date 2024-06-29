import React, { useEffect, useState } from 'react'

export const withListHoc = (WrappedComponent, getData) => {

    const GetDataComponent = (props) => {
        const [alist, setAlist] = useState([]);
        const [loading, setLoading] = useState(true);

        const getAllData = async () => {
            const data = await getData(props);
            if (data) {
                setAlist(data);
                setLoading(false);
            }
        }

        useEffect(() => {
            getAllData();
        }, []);

        return <WrappedComponent {...props} loading={loading} data={alist} />
    }

  return GetDataComponent;
}