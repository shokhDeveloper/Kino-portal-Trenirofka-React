import { Col, Row, Typography } from "antd"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { useCallback } from "react"
import { Api } from "../../API"
import { Context } from "../../Context"
import { Paginate } from "../../Paginate"
import { Card } from "../Card"
const {Title} = Typography
export const Popularing = () => {
    const {popular, setPopular, activePage} = useContext(Context)
    console.log(popular, activePage)
    const [infos, setInfos] = useState(0)
    const gets = useCallback(() => {
        const api = Api.getPopular(activePage)
        api.then((response) => {
            setInfos(response.data)
            setPopular(response.data.results)})
    },[activePage])
    useEffect(() => {
        gets()
    },[gets])
    const {total_pages} = infos
    return(
        <>
        <Row justify={"center"}>
            <Col>
                <Title style={{fontSize: "40px"}} level={3}>Popular</Title>
            </Col>
            <Col style={{width: "100%"}}>
                {popular?.length ?
                <Row style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", width: "100%"}}>
                    {popular?.map((item) => (
                        <Card key={item.id} id={item.id} title={item.title} rating={item.vote_average} image={item.poster_path} date={item.release_date}/>
                    ))}
                </Row>
                :<Title>Not film</Title>}
            </Col>
        </Row>
            <Paginate  pageCount={500}/>
        </>
    )
}