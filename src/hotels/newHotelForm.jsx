import { X } from "lucide-react"

function NewHotelForm(){
    return(
        <>
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card border-0 shadow-lg p-4" style={{ width: '100%', maxWidth: '500px', borderRadius: '15px' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold m-0">Add New Hotel</h4>
                    <button className="btn btn-link text-dark p-0"><X size={20} /></button>
                </div>

                <form>
                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Hotel Name</label>
                        <input type="text" className="form-control bg-light border-0 py-2" placeholder="Enter hotel name" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Image URL</label>
                        <input
                            type="text"
                            name="imagURL" className="form-control bg-light border-0 py-2"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Location</label>
                        <input type="text" name="city" className="form-control bg-light border-0 py-2"
                        placeholder="city, Country"
                        />
                    </div>

                    <div className="row mb-3">
                        <div className="col-6">
                            <label className="form-label fw-semibold small">Rating (0-5)</label>
                            <input 
                                type="text" name="rating" step="0.1" className="form-control bg-light border-0 py-2"
                                placeholder="0"
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label fw-semibold small">Number of Reviews</label>
                            <input 
                                type="number" name="reviews" className="form-control bg-light border-0 py-2"
                                placeholder="12"
                            />
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Price per night ($)</label>
                        <input 
                            type="number" name="price" className="form-control bg-light border-0 py-2"
                            placeholder="0"
                        />
                    </div>
                    <div className="mn-4">
                        <label className="form-label fw-semibold small">Amenities (comma-separated)</label>
                        <input type="text" name="amenities" className="form-control bg-light border-0 py-2"
                            placeholder="WiFi, Breakfast, Pool, Gym"
                        />
                    </div>

                    <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-dark flex-grow-1 py-2 fw-bold" style={{ backgroundColor: '#0a0d14' }}>
                            Add Hotel
                        </button>
                        <button type="button" className="btn btn-outline-secondary px-4 py-2 border-opacity-25">
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