import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Ordering")
public class Ordering extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Get data from form
        String fullName = request.getParameter("fullName");
        String phone = request.getParameter("phone");
        String addrNumber = request.getParameter("address_number");
        String addrStreet = request.getParameter("address_street");
        String addrCity = request.getParameter("address_city");
        String orderDay = request.getParameter("orderDay");
        String quantity = request.getParameter("quantity");
        String shipping = request.getParameter("shippingMethod");
        String payment = request.getParameter("paymentMethod");

        // Print to console (for debugging)
        System.out.println("===== ORDER RECEIVED =====");
        System.out.println("Name: " + fullName);
        System.out.println("Phone: " + phone);
        System.out.println("Address: " + addrNumber + " " + addrStreet + ", " + addrCity);
        System.out.println("Date: " + orderDay);
        System.out.println("Quantity: " + quantity);
        System.out.println("Shipping: " + shipping);
        System.out.println("Payment: " + payment);
        System.out.println("==========================");

        // Send a confirmation response
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<html><body>");
        out.println("<h1 style='color:green; text-align:center;'>Order Received!</h1>");
        out.println("<p style='text-align:center;'>Thank you, <b>" + fullName + "</b>.</p>");
        out.println("<p style='text-align:center;'>Your order for <b>" + quantity + "</b> item(s) will be shipped via <b>" + shipping + "</b>.</p>");
        out.println("<p style='text-align:center;'>Payment method: " + payment + "</p>");
        out.println("<p style='text-align:center;'><a href='order.jsp'>Place another order</a></p>");
        out.println("</body></html>");
    }
}
