<%@ page contentType:"text/html;charset=UTF-8" laguage="java" %>
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h1 style="color: blue; text-align: center; " >Ordering service</h1>
        <hr>
        <form action="Ordering" method="post" style="margin: 40px auto; width: fit-content; border: 1px solid black " >
        <table>
            <tr>
                <td>Full name:</td>
                <td><input type="text" placeholder="Enter full-name" ></td>
            </tr>
            <tr>
                <td>Phone number:</td>
                <td><input type="number" placeholder="Enter your Phone number"> </td>
            </tr>
            <tr>
                <td>Address:</td>
                <td>
                    <input type="text" placeholder="number"><br>
                    <input type="text" placeholder="street"><br>
                    <input type="text" placeholder="city"><br>
                </td>
            </tr>
            <tr>
                <td>Day of Ordering</td>
                <td><input type="date" placeholder="dd/mm/yy" ></td>
            </tr>
            <tr>
                <td>Quantity:</td>
                <td><input type="number" placeholder="Number of products"></td>
            </tr>
            <tr>
                <td>Shipping method:</td>
                <td><select>
                    <option value="" >--Select--</option>
                    <option value="Shiping">Shiping</option>
                    <option value="PostOffice">Post Office</option>
                </select></td>
            </tr>
            <tr>
                <td>Payment method:</td>
                <td><select>
                    <option value="">--Select--</option>
                    <option value="COD">Cash on Delivery</option>
                    <option value="Credit">Credit card</option>
                    <option value="Paypal">Paypal</option>
                </select></td>
            </tr>
            <tr style="text-align: center;" >
                <td><button type = "Order">Order</button></td>
                <td><button type = "Reset">Reset</button></td>
            </tr>

        </table>
        </form>
    </body>
</html>