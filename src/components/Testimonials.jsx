import { useState } from "react";
import Card from "./Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function Testimonials(props) {
    let reviews = props.reviews;
    const [ counter, setCounter] = useState(0)
    function leftShiftHandler() { 
        if(counter === 0) {
            setCounter(reviews.length - 1);
        } else {
            setCounter(counter - 1);
        }
    }
    function rightShiftHandler() {
        if(counter === reviews.length - 1) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    }
    function surpriseHandler() {
        setCounter(Math.floor(Math.random() * reviews.length));
    }
    return (
        <div className="w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center item-center mt-10 p-10 transition all duration-700 hover:shadow-xl">
           <Card item = {counter} review ={reviews[counter]}></Card>
           <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold justify-center'>
                <button className='cursor-pointer hover:text-violet-500' onClick={leftShiftHandler}><IoIosArrowBack /></button>
                <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}><IoIosArrowForward /></button>
            </div>

            <div>
                <button className='cursor-pointer bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5' onClick={surpriseHandler}>Surprise Me</button>
            </div> 
        </div>
    )
}
export default Testimonials;