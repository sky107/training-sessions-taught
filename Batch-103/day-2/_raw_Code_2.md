    <center>
         <h1>User Registration</h1>
    
    <form action="https://jsonplaceholder.typicode.com/todos" method="post" enctype="multipart/form-data">
     <table border="solid 1px black">

        <tbody>
            <tr>
                <td>Name</td>
                <td>
                    <input type="text"/>
                </td>
            </tr>

            <tr>
                <td>Gender</td>
                <td>

                    <!-- Name should be same in this case -->
                   <!-- { name : value} -->
                    <!-- {gender : Male} -->
                    <input name="gender" type="radio" value="Male" /> Male 
                    <!-- {gender: Female} -->
                    <input name="gender" type="radio" value="Female"/> Female
                </td>
            </tr>


            <tr>
                <td>Qualification</td>
                <td>
                    
                    <!-- {intermediate:"12th"} -->
                    <input name="intermediate" type="checkbox" value="12th" /> 12th Pass
                    <!-- {matrix: "10th"} -->
                    <input name="matrix" type="checkbox" value="10th"/> 10th Pass

                </td>
            </tr>


            <tr>
                <td>City</td>
                <td>
                        <!-- {city  : mumbai} -->
                    <select  name="city">
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                    </select>

                </td>
            </tr>

            <tr>
                <td>Addhar Card</td>
                <td>
                  <input type="file" accept="image/png,image/jpg,application/pdf" />
                </td>
            </tr>


            <tr>
                <td></td>
                <td>
                    <!-- SUbmit the at mentioned ACTION URL using METHOD and ENCTYPE -->
                    <input type="submit" value="Submit Registration Form" />
                </td>
            </tr>
        </tbody>

     </table>
    </form>

    </center>
