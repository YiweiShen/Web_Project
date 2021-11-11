# Movie Ticket Booking System
## CSD 3313 Web Final Project

User can register and login and this website can be used to book tickets for movies.

- Register

The input will be checked by JavaScript on page and after verification the data is stored into MongoDB.

![Register Page](https://github.com/YiWeiShen/Web_Project/blob/7e2208e8519c053e726216e0089faf247fd4d6b8/Screen%20Shot_Register.png)

- Login

Read data from MongoDB and compare with user input, if the data is not matching any record in the database, error message will show.

![Login Page](https://github.com/YiWeiShen/Web_Project/blob/7e2208e8519c053e726216e0089faf247fd4d6b8/Screen%20Shot_Login.png)

- Movie List

A list of available movies to book for user to choose. The chosen movie with datetime will be recorded into MongoDB with userID.

![Movie List Page](https://github.com/YiWeiShen/Web_Project/blob/7e2208e8519c053e726216e0089faf247fd4d6b8/Screen%20Shot_MovieList.png)

- Order List

Show a list of orders which is made by the current user. The user can update or delete any chosen order and database will be updated as well.

![Order List Page](https://github.com/YiWeiShen/Web_Project/blob/7e2208e8519c053e726216e0089faf247fd4d6b8/Screen%20Shot_OrderList.png)
