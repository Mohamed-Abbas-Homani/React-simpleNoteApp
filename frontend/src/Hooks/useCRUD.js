//A hook for the crud operation.
import { useCallback, useEffect, useState } from 'react'
import axios from "axios"

const useCRUD = (
  urls, Reset
) => {
  const [crudE, setCrudE] = useState(1);
  const [data, setData] = useState([]);


  useEffect(() => {
    (async () => {
      const response = await axios.get(urls.r);
      setData(response.data)

    })();
  },[urls.r, crudE])

  const Create = useCallback(
    body => async () => {
      await axios.post(urls.c, {body});
      Reset()
      setCrudE(last => -last)
    }
  , [urls.c, Reset]);
  
  const Update = useCallback(
    (id, body) => async () => {
      await axios.put(urls.u + id, {body});
      Reset()
      setCrudE(last => -last);

    }
  , [urls.u, Reset]);
  
  const Delete = useCallback(
    id => async () => {
      await axios.delete(urls.d + id);
      Reset()
      setCrudE(last => -last);
  
    }
  , [urls.d, Reset]);
  

  return [
    data,
    Create,
    Update,
    Delete,
  ];
}

export default useCRUD;