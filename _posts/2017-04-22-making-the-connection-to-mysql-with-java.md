---
layout: post
title: "Making the connection to MySQL with Java"
tags: [MySQL, Java]
---

Java has libraries for connecting to and working with SQL databases built right in to the standard Java SDK. This article assumes some knowledge of Java, and that you're here to figure out how to work with a database[^ref].

This is the code to connect to a MySQL database server on your own computer, hence the loopback ip. We're pretending it has a database called `myDatabase` which has a table called `users` with some user data.

<!-- more -->

First we'll select some data, then insert a new row, and then update an existing row, all with the same database and connection. 

Hopefully this will be enough to get you started. Once you have the basics, the rest is pretty self explanatory. You're basically just using SQL statements you (probably) already know inside of Java.

{% highlight java %}
{% raw %}

//First, some imports. Be careful with the Date and Timestamp imports, there's a java.sql.Date class too:

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;


public class DBTest {

// Some variables:

private static final String db_ip = "127.0.0.1";
private static final String db_name = "myDatabase";
private static final String db_user = "username";
private static final String db_pass = "password";

private Connection conn = null;

public void dbTest(){

// Now, to connect:

    try {
    
           conn = DriverManager.getConnection("jdbc:mysql://" + db_ip + ":3306/" + db_name, db_user, db_pass); 
                                                 
    } catch (SQLException e) {
            //do something with the error
    }

    //Now we should have a connection, but it's foot to check that it isn't null, then select some data


    if(conn !=  null){

    //Let's get a list of users who live in the zip code 11111.

    String zipToGet = "11111";

    String userQuery = "SELECT age, user_name, created_on FROM users WHERE zip = " + zipToGet;

    Statement userStatement = conn.createStatement();

    ResultSet userResult = userStatement.exequteQuery(userQuery);

    //Not to scary so far, right? in the userQuery we're saying we want the age, user_name, and created_on fields from the 
    //users table whenever the zip is the one we specified. This is just a MySQL statement.


    //userResult will be null if something went wrong, or if there's just no result.

    if(userResult != null){
         List<User> users = new ArrayList<>(); //hypothetical user class
        while(userResult.hasNext(){
        int age = result.getInt("age");
        String username = result.getString("user_name");
        Date createdOn = result.getTimestamp("created_on"); //This returns a Timestamp, but it can be cast directly into a date

       //Do stuff with this data:
       //Using the hypothetical user class with what data we have

        User user = new User(username); 
        user.age = age;
        user.createDate = createdOn;
        users.add(user);
    }


    for(user : users){
        //do something with the users
    }

    }else{
        //here is where you put code to deal with no result from user query
    }
    }

//Now we'll work on inserting new data into the database. Keep in mind that manipulating that data has no affect on the //database, for that we need to to create another statement:

PreparedStatement insertStatement = null;

String insertString = "INSERT INTO users (user_name, created_on, age) VALUES (?,?,?)";
if(conn != null){

insert = conn.prepareStatement(insertString); //creates the statement

insert.setString(1, "newUserName); // 1 represents the position of the question mark we left in the insertString

Date now = new Date();

insert.setTimestamp(2, new Timestamp(now.getTime()); 

insert.setInt(3, 28);

insert.execute();

insert.close();
}
 
//Now we've selected and inserted, we can also update:

if(conn != null){

String update = "UPDATE users SET age WHERE user_name = 'someUser'"; 
//this assumes usernames are unique, usually would use an id number

Statement updateStatement = conn.createStatement();

updateStatement.execute(update);

}

//And of course close the connection when you're done:

conn.close();

}
}

{% endraw %}
{% endhighlight %}

There you have it. Java and MySQL.  You can use this example code as a basis to get you started on your project that requires you to connect to a MySQL database using Java.


[^ref]: ["MySQL and java"](https://www.thoughtco.com/mysql-and-java-2694108), ThoughtCo.