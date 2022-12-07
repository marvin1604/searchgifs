import React, {useEffect,useState} from 'react'
import Gifs from "../components/Gifs"
import getGifs from "../Hooks/getGifs"

const ListGifs = ({keyword}) => {
  // const {keyword} = params
  // console.log(keyword);
  const [gifs, setGifs] = useState([])

  useEffect(function(){
    getGifs(keyword).then(gifs => setGifs(gifs))
  }, [keyword])
  return (
    <>
    {
      gifs.map(gift =>
        < Gifs
          key={gift.id}
          title = {gift.title}
          url = {gift.url}
          id = {gift.id}
        />)
    }
    </>
  )
}

export default ListGifs