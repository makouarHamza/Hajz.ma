import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCars, editCars, selectAllCars } from './carsSlice';


function CarsFrom (){

    const {idToEdit} = useParams();

    const dataCar = useSelector(selectAllCars);

    const existingCar = dataCar.find(car => car.id === idToEdit);

    useEffect(function(){
        if(existingCar){
            setObjCar(existingCar)
        }
    },[existingCar])


    const [objCar, setObjCar] = useState({
            idCars: "",
            name: "",
            provider: "",
            category: "Economy",
            passengers: 0,
            bags: 0,
            transmission: "Automatic",
            fuelType: "Petrol",
            price: 0,
            imageUrl: ""
    });

    const dispatch = useDispatch()

    const resetForm = () => {
        setObjCar({idCars: "",
            name: "",
            provider: "",
            category: "",
            passengers: 0,
            bags: 0,
            transmission: "",
            fuelType: "",
            price: 0,
            imageUrl: ""})
    }
    const navigate = useNavigate();  

    const onChangeName =(e) => {
        setObjCar({...objCar, name:e.target.value})
    }
    const onChangeImageUrl =(e) => {
        setObjCar({...objCar, imageUrl:e.target.value})
    }
    const onChangeProvider =(e) => {
        setObjCar({...objCar, provider:e.target.value})
    }
    const onChangeCategory =(e) => {
        setObjCar({...objCar, category:e.target.value})
    }
    const onChangePassengers =(e) => {
        setObjCar({...objCar, passengers:e.target.value})
    }
    const onChangePrice =(e) => {
        setObjCar({...objCar, price:e.target.value})
    }
    const onChangeFuelType =(e) => {
        setObjCar({...objCar, fuelType:e.target.value})
    }
    const onChangeTransmission =(e) => {
        setObjCar({...objCar, transmission:e.target.value})
    }
    const onChangeBags =(e) => {
        setObjCar({...objCar, bags:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(objCar.name.trim().length ===0 ||
             objCar.imageUrl.trim().length ===0 ||
             objCar.category.trim().length ===0 
            ){
            alert("all field required")
            return
        }
        if(idToEdit){
            dispatch(editCars({...objCar, id: idToEdit}))
            navigate("/manageCars")

            return
        }else{
            dispatch(addCars(objCar))
        }

        navigate("/manageCars")
        
    }

    return (
        <>
        <div className="container mt-5 d-flex justify-content-center">
        <div className="card border-0 shadow-lg rounded-4 p-4" style={{ maxWidth: '800px', width: '100%' }}>
            
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">{idToEdit ? "Edit Car" : "Add New Car"}</h4>
            <button onClick={() => navigate("/manageCars")} className="btn btn-link text-dark p-0"><X size={24} /></button>
            </div>

            <form onSubmit={onSubmit}>
            {/* Full Width Inputs */}
            <div className="mb-3">
                <label className="form-label fw-semibold small">Car Name</label>
                <input value={objCar.name} onChange={onChangeName} type="text" className="form-control border-0 bg-light py-2 rounded-3" placeholder="e.g., Toyota Camry" />
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small">Image URL</label>
                <input value={objCar.imageUrl} onChange={onChangeImageUrl} type="text" className="form-control border-0 bg-light py-2 rounded-3" placeholder="https://example.com/image.jpg" />
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small">Rental Company</label>
                <input value={objCar.provider} onChange={onChangeProvider} type="text" className="form-control border-0 bg-light py-2 rounded-3" placeholder="e.g., Enterprise, Hertz" />
            </div>

            {/* Two Column Grid Section */}
            <div className="row g-3 mb-3">
                <div className="col-6">
                <label className="form-label fw-semibold small">Category</label>
                <select value={objCar.category} onChange={onChangeCategory} className="form-select border-0 bg-light py-2 rounded-3">
                    <option>Economy</option>
                    <option>SUV</option>
                    <option>Luxury</option>
                </select>
                </div>
                <div className="col-6">
                <label className="form-label fw-semibold small">Transmission</label>
                <select value={objCar.transmission} onChange={onChangeTransmission} className="form-select border-0 bg-light py-2 rounded-3">
                    <option>Automatic</option>
                    <option>Manual</option>
                </select>
                </div>
            </div>

            <div className="row g-3 mb-3">
                <div className="col-6">
                <label className="form-label fw-semibold small">Passengers</label>
                <input value={objCar.passengers} onChange={onChangePassengers} type="number" className="form-control border-0 bg-light py-2 rounded-3" placeholder="5" />
                </div>
                <div className="col-6">
                <label className="form-label fw-semibold small">Luggage Capacity</label>
                <input value={objCar.bags} onChange={onChangeBags} type="number" className="form-control border-0 bg-light py-2 rounded-3" placeholder="2" />
                </div>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-6">
                <label className="form-label fw-semibold small">Fuel Type</label>
                <select value={objCar.fuelType} onChange={onChangeFuelType} className="form-select border-0 bg-light py-2 rounded-3">
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                </select>
                </div>
                <div className="col-6">
                <label className="form-label fw-semibold small">Price per Day ($)</label>
                <input value={objCar.price} onChange={onChangePrice} type="number" className="form-control border-0 bg-light py-2 rounded-3" placeholder="0" />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-dark w-75 py-2 fw-bold rounded-3">{idToEdit ? "Edit Car" : "Add Car"}</button>
                <button type="button" className="btn btn-outline-secondary w-25 py-2 fw-bold rounded-3 bg-white text-dark border-light-subtle">Cancel</button>
            </div>
            </form>
        </div>
        </div>       
        </>
    )
}export default CarsFrom;