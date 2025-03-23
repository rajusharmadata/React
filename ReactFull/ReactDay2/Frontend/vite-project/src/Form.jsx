export default function from(){
function handleonClick(e){
    e.preventDefault(); // Prevent the default form submission
    console.log("Form submitted");
}
    return(
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <button type="submit" onClick={handleonClick}>Submit</button>
        </form>
    )
}