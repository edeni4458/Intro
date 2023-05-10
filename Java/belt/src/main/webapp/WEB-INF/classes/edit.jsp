<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit ${course.name}</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/edit.css"> 
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
</head>
<body class="p-3 mb-2 bg-dark text-white">
    <div class="container">
        <h1>${course.name}</h1>
        <div class="container-md">
            <form:form action="/classes/${course.id}" method="post" modelAttribute="course">
                <input type="hidden" name="_method" value="put">
                <form:input type="hidden" path="user" value="${userId}"></form:input>
                <div class="form-control">
                    <form:label path="name">Course Name</form:label>
                    <form:errors path="name"></form:errors>
                    <form:input class="form-control" path="name"></form:input>
                </div>
                <div class="form-control">
                    <form:label path="day">Weekday</form:label>
                    <form:errors path="day"></form:errors>
                    <form:select class="form-control" path="day">
                        <form:option value="Sunday">Sunday</form:option>
                        <form:option value="Monday">Monday</form:option>
                        <form:option value="Tuesday">Tuesday</form:option>
                        <form:option value="Wednesday">Wednesday</form:option>
                        <form:option value="Thursday">Thursday</form:option>
                        <form:option value="Friday">Friday</form:option>
                        <form:option value="Saturday">Saturday</form:option>
                    </form:select>
                </div>
                <div class="form-control">
                    <form:label path="price">Price $</form:label>
                    <form:errors path="price"></form:errors>
                    <form:input class="form-control" type="number" min="0" path="price"></form:input>
                </div>
                <div class="form-control">
                    <form:label path="time">Time</form:label>
                    <form:errors path="time"></form:errors>
                    <form:input class="form-control" min="1" max="12" path="time"></form:input>
                </div>
                <div class="form-control">
                    <form:label path="amPm"></form:label>
                    <form:errors path="amPm"></form:errors>
                    <form:select class="form-control" path="amPm">
                        <form:option value="AM">AM</form:option>
                        <form:option value="PM">PM</form:option>
                    </form:select>
                </div>
                <div class="form-control">
                    <form:label path="description">Description</form:label>
                    <form:errors path="description"></form:errors>
                    <form:textarea class="form-control" rows="5" cols="25" path="description"></form:textarea>
                </div>
                <div class="buttons">
                    <input class="btn btn-primary" type="submit" value="submit">
                </form:form>
                    <a class="btn btn-warning" href="/classes">cancel</a>
                    <c:if test="${course.user.id == userId}">
                        <form action="/classes/${course.id}" method="post">
                            <input type="hidden" name="_method" value="delete">
                            <input class="btn btn-danger" type="submit" value="delete">
                        </form>
                    </c:if>
                </div>
        </div>
    </div>
    
</body>
</html>