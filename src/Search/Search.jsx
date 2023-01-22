import axios from "axios"
import { Typography, Row, Col, Image } from "antd"
import { useCallback, useContext, useEffect, useState } from "react"
import { BASE_IMG_URL, BASE_URL } from "../API"
import { Link } from "react-router-dom"
import { Context } from "../Context"
import { Paginate } from "../Paginate"
const {Title, Text} = Typography
export const Search = () => {
    const {searchName, setSearchName, activePage, setActivePage} = useContext(Context)
    const api = BASE_URL +`/search/movie?api_key=fac1e5db51e94e0a4f7245d1164a32e4&query=${searchName}&page=${activePage}`
    const [data, setData] = useState([])
    const [infos, setInfos] = useState(0)
    setActivePage(1)
    const getFilm = useCallback( async() => {
        const jsons = await axios({
            method: "GET",
            url: api
        }).catch((error) => {
            console.log(error)
        })
        setInfos(jsons.data.total_pages)
        const response = await jsons.data.results
        setData(response)
    },[api])
    useEffect(() => {
        getFilm()
        
    },[getFilm])
    return(
        <>
          {data?.length > 0?
            <Row justify={"space-evenly" } style={{flexWrap: "wrap"}} align="middle" >
                {data?.map((item) => (
                    <Link to={`/movie/${item.id}`} style={{width: "25%", margin: "1rem"}}>
                        <Col>
                        <Image width={300} height={400} src={`${BASE_IMG_URL}/${item.poster_path}`}></Image>
                        <Title>
                            {item.title}
                        </Title>
                    </Col>
                    </Link> 
                ))}
            </Row>
          :<Title>Error</Title>}
        <Paginate pageCount={infos}/>
        </>
    )
}