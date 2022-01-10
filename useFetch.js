import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {

  const [state, setstate] = useState({ data:null, loading:true, error:null } );
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])


  useEffect(() => {

    // Estado para cuando se hace una nueva peticion
    setstate({
      data:null,
      loading:true,
      error:null
    });


    fetch( url )
      .then( resp => resp.json() )
      .then( data => {

        if ( isMounted.current ) {
          setstate({
            data,
            loading:false,
            error:null
        });
        }

      } );

  }, [url])

  return state;
}