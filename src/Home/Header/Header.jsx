import {Layout, Col, Row, Input } from "antd"
import { useContext } from "react"
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { Context } from "../../Context"
import { Movie } from "../../Popular"
import { Popularing } from "../../Popular/Components"
import { Search } from "../../Search"
const {Header: H} = Layout
export const Header = () => {
    const {searchName, setSearchName} = useContext(Context)
    const navigator = useNavigate()
    const handleChange = (event) => {
        if(event.currentTarget.value.length >= 1){
            navigator("/search")
            setSearchName(event.currentTarget.value)
        }else{
            navigator("/popular")
        }
    }
    return(
        <>
        <H>
            <Row justify={"space-between"} align="middle">
                <Col span={8}>
                    <Link to={"/"}>Logo</Link>    
                </Col>
                <Col span={12} style={{display:"flex", alignItems: "center", justifyContent:"space-evenly"}}>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"popular"}>Popular</NavLink>
                    <NavLink to={"hit"}>Hit</NavLink>
                </Col>
                <Col span={4}>
                    <Input onChange={handleChange} placeholder="search"></Input>
                </Col>
            </Row>
        </H>
        <Routes>
            <Route index element={<>Home</>}/>
            <Route path="/popular" element={<Popularing/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
        </>
    )
}