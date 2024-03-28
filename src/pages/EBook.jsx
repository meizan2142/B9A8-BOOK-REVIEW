import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const EBook = () => {
    return (
        <div>
            {/* <NavLink to='/bookdetails'>
                <div>
                    <div className="card bg-base-100 shadow-2xl">
                        <figure className="px-10 pt-10">
                            <img src='' alt="Shoes" className="rounded-xl w-52 lg:w-[280px] lg:h-[250px] bg-[#1313130d] shadow-xl" />
                        </figure>
                        <div className="card-body">
                            <div className="space-x-3">
                                <button className="btn btn-sm rounded-full text-[#23BE0A] font-bold">Saif</button>
                                <button className="btn btn-sm rounded-full text-[#23BE0A] font-bold">Saif</button>
                            </div>
                            <div className="mt-4 space-y-4">
                                <h1 className="text-2xl font-bold">Saif</h1>
                                <p className="#131313cc text-base font-medium">By : Saif</p>
                            </div>
                            <div className="flex justify-evenly items-center">
                                <h1 className="font-medium">Saif</h1>
                                <div className="flex gap-2">
                                    <p className="font-medium">Saif</p>
                                    <img className="w-6" src="https://i.ibb.co/swTKnNX/icons8-star-48.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink> */}
            <p>Saif</p>
        </div>
    );
};
EBook.propTypes = {
    ebook: PropTypes.object
}

export default EBook;