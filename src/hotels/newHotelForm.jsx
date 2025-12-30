import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { allHotelsData } from "./hotelsSlice"

function NewHotelForm(){
    const navigate = useNavigate()
    const { idToEdit } =useParams()
    const hotelData = useSelector(allHotelsData);
    const [objHotel, setObjHotel] = useState({
                                    idHotel: "",
                                    nameHotel: "",
                                    description: "",
                                    city: "",
                                    price: 0,
                                    rating: 0.0,
                                    images: [],
                                    commentaires: [],
                                    amenities: [],
                                    like: 0,
                                    heart: 0,
                                })

    const onChangeName =(e) => {
        setObjHotel({...objHotel, nameHotel:e.target.value})
    }
    const onChangeImages =(e) => {
        setObjHotel({...objHotel, images:e.target.value.split(",")})
    }
    const onChangeLocation =(e) => {
        setObjHotel({...objHotel, city:e.target.value})
    }
    const onChangeDescription =(e) => {
        setObjHotel({...objHotel, description:e.target.value})
    }
    const onChangePrice =(e) => {
        setObjHotel({...objHotel, price:e.target.value})
    }
    const onChangeRating =(e) => {
        setObjHotel({...objHotel, rating:e.target.value})
    }
    const onChangeAmenities =(e) => {
        setObjHotel({...objHotel, amenities:e.target.value.split(",")})  
    }
    
    const existingHotel = hotelData.find(hotel => hotel.id === idToEdit);
    useEffect(function(){
        if(existingHotel){
            const formFriendlyData = {
            ...existingHotel,
            // Turn ['WiFi', 'Pool'] into "WiFi, Pool" for the <input>
            amenities: Array.isArray(existingHotel.amenities) 
                ? existingHotel.amenities.join(', ') 
                : existingHotel.amenities,
            images: Array.isArray(existingHotel.images
                ? existingHotel.images.join(',')
                : existingHotel.images
            )    
        };
        setObjHotel(formFriendlyData);
        }
    },[existingHotel, idToEdit])

    const handletHideForm = () =>{
        navigate('/manageHotels')
        setObjHotel({idHotel: "", nameHotel: "", description: "", city: "", price: 0,
                                    rating: 0.0,
                                    images: [],
                                    commentaires: [],
                                    amenities: [],
                                    like: 0,
                                    heart: 0,
                                })
    }
    const handlerAddedHotel = (e) => {
        e.preventDefault();
        console.log(objHotel);
    }

    const resetform = () => {
        if(window.confirm("are you sure you want to reset form")){
            setObjHotel({idHotel: "", nameHotel: "", description: "", city: "", price: 0,
                                        rating: 0.0,
                                        images: [],
                                        commentaires: [],
                                        amenities: [],
                                        like: 0,
                                        heart: 0,
                                    })
    }

    }


    return(
        <>
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card border-0 shadow-lg p-4" style={{ width: '100%', maxWidth: '500px', borderRadius: '15px' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold m-0">{idToEdit?"Edit Hotel":"Add New Hotel"}</h4>
                    <button  onClick={handletHideForm} className="btn btn-link text-dark p-0"><X size={20} /></button>
                </div>
               
                <form onSubmit={handlerAddedHotel}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Hotel Name</label>
                        <input type="text" value={objHotel.nameHotel} onChange={onChangeName} className="form-control bg-light border-0 py-2" placeholder="Enter hotel name" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Images URL's</label>
                        <input
                            onChange={onChangeImages}
                            value={objHotel.images}
                            type="text"
                            name="imagURL"
                            className="form-control bg-light border-0 py-2"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Location</label>
                        <input type="text" 
                            value={objHotel.city}
                            onChange={onChangeLocation}
                            name="city" className="form-control bg-light border-0 py-2"
                            placeholder="city, Country"
                        />
                    </div>

                    <div className="row mb-3">
                        <div className="col-6">
                            <label className="form-label fw-semibold small">Rating (0-5)</label>
                            <input 
                                value={objHotel.rating}
                                onChange={onChangeRating}
                                type="number" name="rating"
                                max={5}
                                min={0}
                                step="0.1" className="form-control bg-light border-0 py-2"
                                placeholder="0"
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label fw-semibold small">Price per Night ($)</label>
                            <input 
                                value={objHotel.price}
                                onChange={onChangePrice}
                                type="number" name="price" min={0}
                                className="form-control bg-light border-0 py-2"
                                placeholder="12"
                            />
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Description</label>
                        <textarea 
                            value={objHotel.description}
                            onChange={onChangeDescription}
                            name="description" className="form-control bg-light border-0 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label fw-semibold small">Amenities (comma-separated)</label>
                        <input 
                            value={objHotel.amenities}
                            onChange={onChangeAmenities}
                            type="text" name="amenities" className="form-control bg-light border-0 py-2"
                            placeholder="WiFi, Breakfast, Pool, Gym"
                        />
                    </div>

                    <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-dark flex-grow-1 py-2 fw-bold" style={{ backgroundColor: '#0a0d14' }}>
                            {idToEdit ? "Edit ":"Add Hotel"}
                        </button>
                        <button 
                            type="reset"
                            onClick={resetform}
                            className="btn btn-outline-secondary px-4 py-2 border-opacity-25">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default NewHotelForm