import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { addCommentToHotel, allHotelsData, heartHotel, thumbsUpHotel } from "./hotelsSlice";
import { CheckCircle2, Coffee, Heart, MapPin, MessageSquare, Send, Star, ThumbsUp, Wifi, Wind, Wine } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HotelDetails() {
    const { idDetailHotel } = useParams();
    const hotelData = useSelector(allHotelsData)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [comment, setComment] = useState("")
    const onChangeComment = (e) => setComment(e.target.value);

    
    const existingHotel = hotelData.find((hotel) => hotel.id === idDetailHotel);

    const HandlerBtnSend = () => {
        if(comment.trim() !== ""){
            alert("Comment submitted: " + comment);
            setComment("");
            dispatch(addCommentToHotel({comment: comment.trim(), existingHotel: existingHotel}));
        }
    }

    const handlerThumbsUp = () => {
        alert("You liked this hotel!");
        dispatch(thumbsUpHotel(existingHotel))
    }

    const handlerHeart = () => {
        alert("You added this hotel to your favorites!");
        dispatch(heartHotel(existingHotel))
    }

    if(!existingHotel){
        return(<div className="container mt-5">Hotel not found.</div>);
    }
    
    return (
        <>
        <div className="container mt-4">
            <div className="card mb-4 overflow-hidden shadow-sm" style={{ borderRadius: '12px', border: 'none' }}>
                <div className="row g-0">
                    {/* Image Section */}
                    <div className="col-md-5">
                       
                        <Swiper 
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            style={{ height: '100%', width:"100%" }}
                        >
                            {existingHotel.images.map((image, index) => 
                                <SwiperSlide key={index} >
                                    <img
                                        src={"/assets/imgHotels/" + image}
                                        className="img-fluid h-100 w-100"
                                        alt={existingHotel.nameHotel}
                                    />
                                </SwiperSlide>
                            )}
                        </Swiper>

                    </div>

                    {/* Content Section */}
                    <div className="col-md-7">
                        <div className="card-body d-flex flex-column h-100 p-4">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <h2 className="card-title fw-bold mb-1">{existingHotel.nameHotel}</h2>
                                    <p className="text-muted mb-2">
                                        <MapPin size={16} className="me-1 text-danger" />
                                        {existingHotel.city}
                                    </p>
                                </div>
                                <div className="text-end">
                                    <div className="d-flex align-items-center justify-content-end text-warning">
                                        <Star size={20} fill="currentColor" />
                                        <span className="ms-1 fs-5 fw-bold text-dark">{existingHotel.rating}</span>
                                    </div>
                                    <div className="d-flex gap-3 mt-2 justify-content-end">
                                        <span onClick={handlerThumbsUp} className="small text-primary d-flex align-items-center">
                                            <ThumbsUp size={14} className="me-1"/> {existingHotel.like}
                                        </span>
                                        <span onClick={handlerHeart} className="small text-danger d-flex align-items-center">
                                            <Heart size={14} className="me-1" fill="red"/> {existingHotel.heart}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-3 text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                {existingHotel.description}
                            </p>

                            {/* Amenities Dynamically */}
                            <div className="d-flex flex-wrap gap-2 my-3">
                                {existingHotel.amenities.map((amenity, index) => (
                                    <span key={index} className="badge bg-light text-dark border d-flex align-items-center py-2 px-3">
                                        <CheckCircle2 size={14} className="me-2 text-success"/> {amenity}
                                    </span>
                                ))}
                            </div>

                            <hr className="mt-auto"/>

                            {/* Comments Section */}
                            <div className="mb-3">
                                <h6 className="fw-bold d-flex align-items-center">
                                    <MessageSquare size={16} className="me-2"/> Recent Comments
                                </h6>
                                <ul className="list-unstyled mb-0">
                                    {existingHotel.commentaires.map((comment, index) => (
                                        <li key={index} className="small text-muted mb-1 italic">
                                            - "{comment}"
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <p className="text-muted mb-0 small">Price starting from</p>
                                    <h3 className="fw-bold mb-0 text-success">${existingHotel.price} <span className="fs-6 text-muted fw-normal">/night</span></h3>
                                </div>
                                <button 
                                    onClick={() => navigate(`/hotels`)} 
                                    className="btn btn-dark btn-lg px-4 fw-bold" 
                                    style={{ borderRadius: '8px' }}
                                >
                                    Back to List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment-input-section mt-4 pt-4 border-top">
                <h6 className="fw-bold mb-3">Leave a Comment</h6>
                <div className="d-flex gap-3">
                    {/* User Avatar Placeholder */}
                    <div 
                        className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white" 
                        style={{ minWidth: '40px', height: '40px', fontSize: '0.8rem' }}
                    >
                        User
                    </div>

                    <div className="flex-grow-1">
                        <div className="input-group shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                            <textarea 
                                onChange={onChangeComment}
                                value={comment}
                                className="form-control border-end-0" 
                                placeholder="Share your experience at Farah Inn..." 
                                rows="1"
                                style={{ 
                                    resize: 'none', 
                                    padding: '12px',
                                    border: '1px solid #dee2e6',
                                    borderRadius: '12px 0 0 12px'
                                }}
                            ></textarea>
                            <button 
                                onClick={HandlerBtnSend}
                                className="btn btn-dark d-flex align-items-center px-3" 
                                type="button"
                                style={{ borderRadius: '0 12px 12px 0' }}
                            >
                                <Send size={18} className="me-2" />
                                Post
                            </button>
                        </div>
                        <small className="text-muted mt-2 d-block" style={{ fontSize: '0.75rem' }}>
                            Your comment will be public.
                        </small>
                        </div>
                    </div>
                </div>   
            </div>  


         
        </>
    )
}
export default HotelDetails;