# ktu-api-gateway

This is a simple API gateway made in the context of the course "Cloud Computing" at Kaunas University of Technology.

It links to the following services:
- student-api
- course-api

## How to run

### Docker

To run the gateway using docker, you need to have docker installed on your machine. Then, you can run the following command:

```bash
    docker-compose build && docker-compose up
```

## How to use

The gateway is available at http://localhost:80. It has the following endpoints:

**Student API**
- GET /students - returns all students
- GET /students/{id} - returns a student with the given id
- UPDATE /students/{id} - updates a student with the given id
- POST /students - creates a new student
- DELETE /students/{id} - deletes a student with the given id

**Course API**
- GET /courses - returns all courses
- GET /courses/{id} - returns a course with the given id
- UPDATE /courses/{id} - updates a course with the given id
- POST /courses - creates a new course
- DELETE /courses/{id} - deletes a course with the given id
