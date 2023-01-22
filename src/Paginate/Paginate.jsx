import { useContext } from "react"
import ReactPaginate from "react-paginate"
import { Context } from "../Context"

export const Paginate = ({pageCount}) =>{ 
    const {activePage, setActivePage} = useContext(Context)
    const handleChange = (event) => {
        setActivePage(event.selected+1)
    }
    return(
        <div className="d-flex justify-content-center">
            <ReactPaginate pageCount={pageCount} pageLinkClassName="btn btn-outline-primary m-2" className="pagination text-truncute d-flex align-items-center" nextClassName="btn btn-primary" nextLinkClassName="text-light text-decoration-none" previousClassName="btn btn-primary" previousLinkClassName="text text-light text-decoration-none" onPageChange={handleChange} ></ReactPaginate>
        </div>
    )
}