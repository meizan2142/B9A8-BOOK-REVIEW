import PropTypes from 'prop-types';
const BookDetails = ({book}) => {
    return (
        <div className='lg:w-[1200px] lg:mx-auto text-center m-2 lg:mt-12'>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold"></h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
BookDetails.propTypes = {
    book: PropTypes.object
}


export default BookDetails;