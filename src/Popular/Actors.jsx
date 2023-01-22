import { Row, Col, Typography, Image } from "antd"
import { useCallback, useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { Api, BASE_IMG_URL, BASE_URL } from "../API"
import { Context } from "../Context"
const {Title, Text} = Typography
export const Actors = () => {
    const {names, setName} = useContext(Context)
    const params = useParams()
    const [data, setData] = useState([])
    const getUsers = useCallback(() => {
        const data = Api.getActors(params.id)
        data.then((response) => {
            console.log(response.data.cast)
            setData(response.data.cast)})
    },[params.id])
    const Usha = () => {
        let result = []
        if(data.length > 0){
            for(let i = 0; i<data.length; i++){
                if(data[i].profile_path){
                    result = [...result, data[i].profile_path]
                }
            }
        }
        console.log(result)
    }
    useEffect(() => {
        
        getUsers()
        
    },[getUsers])
    useEffect(() => {
        Usha()
    },[params.id])
    
    return(
        <>
        <Title level={3} style={{textAlign: "center"}}>Actors for {names} </Title>
            {data.length> 0?
            
            <Row justify={"space-evenly"} align="middle" style={{textAlign: "center"}}>
                {data?.map((item) => (
                    <Link  style={{width: "25%", margin: "1rem auto"}} to={`/actor/${item.credit_id}`}>
                    <Col>
                        <Image width={300} src={BASE_IMG_URL+"/"+item.profile_path}></Image>
                        <Title level={3}>{item.original_name}</Title>
                        <Text>{item.character}</Text>
                    </Col>
                    </Link>
                ))}
            </Row>
            :<Title level={4}>Not Actors</Title>}
        </>
    )
}