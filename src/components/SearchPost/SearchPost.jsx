import './SearchPost.css'
import SearchIcon from '@mui/icons-material/Search';

export function SearchPost({ handleSearchPost }) {

    function handleSearch(e) {
        handleSearchPost(e.target.value);
    }

    return (
        <div className="SearchPost">
            <div className="search-box">
                <input type="text" placeholder='Search Post...' onChange={handleSearch} />
                <div className="search-icon">
                    <SearchIcon sx={{fontSize:30}} />
                </div>
            </div>
        </div>
    );
}