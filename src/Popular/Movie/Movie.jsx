import { Card, Col, Image, Row, Typography } from "antd"
import { useCallback, useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { Api, BASE_IMG_URL } from "../../API"
import { Context } from "../../Context"
const {Title, Text} = Typography
export const Movie = () => {
   const params = useParams()
   const [datas, setData] = useState([])
   const {names, setName} = useContext(Context)
   const getFilms = useCallback( () => {
    const data = Api.getFilm(params.id)
    data.then((response) => {
        setData([response.data])
        console.log(response)
        setName(response.data.title)
        
    }) 
   },[params.id])
   useEffect(() => {
    getFilms()

   },[getFilms])
   return(
        <>
            {datas.length > 0?
                <Row justify={"center"} style={{minHeight: "90vh"}} align="middle">
                    {datas.map((item) => ( 
                        <Col style={{textAlign: "center"}}>
                                 <Text style={   {position: "absolute", top: 0, right: 0, zIndex: 1, background: "#fff", padding: "1rem", borderRadius: 
                                "10px"}}>{Math.round(item.vote_average)}</Text>
                            <Image width={300} src={BASE_IMG_URL + "/"+  item.poster_path}></Image>
                            <Title>{item.title}</Title>
                            <Link to={`/actors/${item.id}`}> Actors </Link>
                        </Col>
                    ))}
                </Row>
            :<Title>False</Title>}
        </>
    )
}