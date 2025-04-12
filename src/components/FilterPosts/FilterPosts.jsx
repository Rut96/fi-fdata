import './FilterPosts.css';

export function FilterPosts({ handleSelect }) {

    function handleSelectValue(e) {
        handleSelect(e.target.value);
    }

    return (
        <div className="FilterPosts">
            <select defaultValue="" onChange={handleSelectValue}>
                <option value="" disabled>Select filter</option>
                <option value="comments">Comments</option>
                <option value="title">Title</option>
            </select>
        </div>
    );
}