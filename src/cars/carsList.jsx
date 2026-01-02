import { useDispatch, useSelector } from "react-redux"
import { getCarsError, getCarsStatus, getDataCars, selectAllCars } from "./carsSlice"
import { useEffect } from "react";
import CardCar from "./carCard";

function ListCars() {
    const dispatch = useDispatch();
    const status = useSelector(getCarsStatus)
    const error = useSelector(getCarsError)
    const carsData = useSelector(selectAllCars)


    useEffect(function(){
        if(status === 'idle'){
            dispatch(getDataCars())
        }
    },[dispatch, status])

    let content = "";
    if(status === "loading"){
        content = <p>Loading...</p>
    }else if(status === "succeeded"){
        content = carsData.map((car, index) =><div  key={index}  className="col-md-4"> <CardCar car={car} /></div>)
    }else if(status === "failed"){
        content = <p>{error}</p>
    }

   

    return (
        <>
        <div className='container py-5'>
            <h2 className='mb-4 fw-bold'>Available Cars</h2>
            <div className="row g-4">
                {content}
            </div>

        </div>
        </>
    )
}
export default ListCars