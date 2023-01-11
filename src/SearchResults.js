import React from "react";

const SearchResults = (props) => {

    const myList = props.results;
  
   const myData= myList !=undefined ?myList.map((info) => {
                 
    
        return(  <tr>
              <td>{info.id}</td>
              <td>{info.title}</td>
              <td>{info.firstName}</td>
              <td>{info.surname}</td>
              <td>{info.email}</td>
              <td>{info.roomId}</td>
              <td>{info.checkInDate}</td>
              <td>{info.checkOutDate}</td>
              <td>{info.NumberofNights}</td>
  
          </tr>)
        
                 
                      
  }):""


return(
    <div class="container">
        <table class="table table-bordered">
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>First Name</th>
                <th>Sur Name</th>
                <th>Email</th>
                <th>Room ID</th>
                <th>Check In Date</th>
                <th>Check Out Date</th>
                <th>Number of Nights</th>
                </tr>
            </thead>

        

            <tbody>
             
                
            
            {myData}

                
            </tbody>


        </table>
         
    </div>
)

}
export default SearchResults;