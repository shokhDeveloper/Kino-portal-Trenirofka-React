import { Col, Image, Typography } from "antd"
import { Link } from "react-router-dom"
import { BASE_IMG_URL } from "../API"
const {Title, Text} = Typography
export const Card = ({title, image, id, rating, date}) => {
    return(
        <>
            <Link to={`/movie/${id}`} style={{width: "20%", margin: "1rem", textAlign: "center"}}>
            <Col key={id}>
            <Text style={   {position: "absolute", top: 0, right: 0, zIndex: 1, background: "#fff", padding: "1rem", borderRadius: 
        "10px"}}>{rating}</Text>
            <Image src={`${BASE_IMG_URL}/${image}`}></Image>
            <Title level={4}>{title}</Title>
            <Text>{date}</Text>
            </Col>
            </Link>
        </>
    )
}