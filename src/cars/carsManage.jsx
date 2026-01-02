import { useDispatch, useSelector } from "react-redux";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCars, getCarsStatus, getDataCars, selectAllCars } from "./carsSlice";

function CarsManage() {
    const dispatch = useDispatch();
    const cars = useSelector(selectAllCars);
    const status = useSelector(getCarsStatus);
    const navigate = useNavigate()
    useEffect(function(){
        if(status === 'idle'){
            dispatch(getDataCars())
        }
        
    },[dispatch, status])

    const handlerDelete = (id) =>{
        if(window.confirm("Are you sure you want to delete this flight?")){
            dispatch(deleteCars(id))
        } 
    }


    

    return(
        <>
        <div className="container mt-5">
        
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold m-0">Manage Cars</h4>
            <button onClick={() => navigate("addEditCar")} className="btn btn-dark d-flex align-items-center gap-2 px-3 py-2 rounded-3 shadow-sm">
                <Plus size={18} /> Add Car
            </button>
        </div>

        
        <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '12px' }}>
            <div className="container mt-5">
                <div className="table-responsive shadow-sm rounded-4 border">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th className="ps-4 py-3 text-secondary fw-semibold">Name</th>
                            <th className="py-3 text-secondary fw-semibold">Category</th>
                            <th className="py-3 text-secondary fw-semibold">Company</th>
                            <th className="py-3 text-secondary fw-semibold">Passengers</th>
                            <th className="py-3 text-secondary fw-semibold">Price</th>
                            <th className="pe-4 py-3 text-secondary fw-semibold text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cars.map((car, index) => <tr key={index}>
                                    <td className="ps-4">{car.name}</td>
                                    <td>{car.category}</td>
                                    <td>{car.provider}</td>
                                    <td>{car.passengers}</td>
                                    <td>{car.price}</td>
                                    <td className="pe-4 text-end">
                                        <button onClick={() => navigate(`addEditCar/${car.id}`)} className="btn btn-outline-secondary btn-sm border-light-subtle me-1">
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button onClick={() => handlerDelete(car.id)} className="btn btn-danger btn-sm">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                    
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
  
        </>
    )
}
export default CarsManage;