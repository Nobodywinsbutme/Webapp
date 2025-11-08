list 3 framework:
React front end lib, 
tool: node.js
program language: javascript, type script
API : GraphQL, RESTful
lib: React Router, Redux
Database: as a frontend lib, React does not connect directly to a database
Spring boot: backend
tool:Spring Inntializr
languge: java, Kotlin
API:GraphQL,Spring webflux
lib: Spring data JPA, Spring security,Spring web
data: mySQL
express.js:backend 
tool:node.js
programming: javascript,typescript
API:RESTful,GrapghQL
lib:n/a
database:mySQL

dynamic web, social media web, code of web change on each user real-time
static web: fixed web all the user see the same website
performance, security, work
server pre build code for user directly to the browser,
server executes code and queries a database to build the page before sending it.
                  +---------------------------+
                  |        Web Browser        |
                  |   (User Interface Layer)  |
                  +------------+--------------+
                               |
                               | HTTP Request / Response
                               v
                +--------------+---------------+
                |        Controller Layer       |
                |  (Handles user requests,      |
                |   routes actions, validates)  |
                | Framework: Express.js / ASP.NET / Django |
                +--------------+---------------+
                               |
                 +-------------+-------------+
                 |                           |
                 v                           v
      +----------+-----------+     +---------+----------+
      |       View Layer      |     |       Model Layer  |
      | (HTML, CSS, JS, React)|     | (Business logic,   |
      |  Generates UI pages)  |     |  database access)  |
      +----------+-----------+     +---------+----------+
                                          |
                                          | SQL Query / ORM
                                          v
                               +----------+----------+
                               |   Database System    |
                               |   (DBMS: MySQL /     |
                               |    PostgreSQL / MongoDB) |
                               +----------------------+
                      
                      
                      
                      
                      Use case diagram
                      
                      +---------------------------------+
                      |           Customer              |
                      +---------------------------------+
                        |          |            |
        ----------------+----------+------------+-------------------
        |               |                       |                   |
        v               v                       v                   |
+----------------+  +----------------+   +----------------+          |
|  Register/Login|  | Browse Product |   | View Product   |          |
+----------------+  +----------------+   +----------------+          |
        |                   |                     |                  |
        +-----------+-------+---------------------+------------------+
                    |                                          |
                    v                                          |
            +---------------+                                  |
            |  Add to Cart  |                                  |
            +---------------+                                  |
                    |                                          |
                    v                                          |
            +---------------+                                  |
            |  Place Order  |----------------------------------+
            +---------------+         interacts with
                    |                             |
                    v                             v
            +-------------------+          +---------------------+
            |   Make Payment    |----------|   Payment System     |
            +-------------------+          +---------------------+
                    |
                    v
            +-------------------+
            | Get Confirmation  |
            +-------------------+


                +------------------------------------+
                |               Admin                |
                +------------------------------------+
                    |                 |             |
                    v                 v             v
           +---------------+   +---------------+  +----------------+
           | Manage Product|   | Manage Orders |  | Manage Shipment|
           +---------------+   +---------------+  +----------------+
