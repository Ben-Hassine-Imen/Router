import StarRatingComponent from 'react-star-rating-component'



const Search = ({setSearch,setRate}) => {
const handleChange=(e)=>{
setSearch(e.target.value)	
}



  return (
	<div className=' col-sm-4'>
	<input 	className='form-control'
	placeholder='search a movie'
          onChange={handleChange}
          type="text"

        />
                <StarRatingComponent onStarClick={(nextValue, prevValue, name)=>setRate(nextValue)} />

      </div>
    );
}

export default Search;