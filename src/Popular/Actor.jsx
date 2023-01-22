import { Col, Image, Row, Typography } from "antd"
import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { Api, api_key, BASE_IMG_URL } from "../API"
const {Title, Text} = Typography
export const Actor = () => {
    const params = useParams()
    const [data, setData] = useState([])
    const getActoring = useCallback( async() => {
        const data = await Api.getActor(params.id)
        const response = await data.data
        console.log(response)
        setData([response])
    },[params.id])
    useEffect(() => {
        getActoring()
        const levels = Api.getKino(params.id)
        levels.then((response) => console.log(response.data))
    },[getActoring])
    return(
        <>
        {data.length> 0?
            <Row justify={"space-evenly"} align="middle" style={{textAlign: "center", minHeight: "100vh"}}>
                {data?.map((item) => (
                    <Col key={item.id} style={{width: "25%", margin: "0 auto", textAlign: "center"}}>
                        <Image width={300} src={BASE_IMG_URL+"/"+item.person.profile_path}></Image>
                        <Title level={3}>{item.person.original_name}</Title>
                        <Title level={4}>{item.job}</Title>
                    </Col>
                ))}
            </Row>
            :<Title level={4}>Not Actors</Title>}  
        </>
    )
}