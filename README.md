# mini-project

Welcome To My Mini-Project Github Repository!

## How to start?

Use the command:

```
git clone https://github.com/EdenWolf/mini-project.git
```

### Backend:

Use the command:

```
pip install -r requirements.txt
```

Use the command:

```
python ./main.py
```

### Frontend

Go to the directory “frontend".
Use the command:

```
npm install
```

Use the command:

```
npm start
```

## About This Project

This is a web app, created with Python, Flask, TypeScript, and React.
It has two parts: the Backend (Python & Flask) is the "main.py" file and the Frontend (TypeScript & React) is in the directory "frontend".

### Backend

There are two main database models:

#### PeopleModal

this is what we use to store all the information about people:
id: a random string, created when we get a "post" request. this is the primary key.
name: string- The name of this person.
email: string- the email of this person, must be unique.
activeTaskCount: number- the number of tasks this person has that are "active".
favoriteProgrammingLanguage: string- this person's favorite programming language.

#### TaskModal

this is what we use to store all the information about tasks:

**id:** a random string, created when we get a "post" request. this is the primary key.

**title:** string- the title of this task.

**details:** string- the details of this task.

**dueDate:** string- the due date of this task.

**status:** string- the status of this task, can be "active" or "done".

**ownerId:** string- the ID of the person to whom this task belongs.

### Frontend

This was created mainly to see what we get from the backend and use it.

#### Generel files

**Calls.tsx**: all the requests we need for this app.

**types.d.ts**: types that can be used in a few different places.

#### Components:

**Container**: the container of this app. Contains the name of the app and the list of the people we got from the backend.

**Person**: all the details of this person and the list of his tasks.

**AddPerson**: a form that can be used to add more people.

**TaskList**: contains the list of this person's tasks.

**Task**: a window that shows more details about this task.

**Add Task**: a window that contains a form that can be used to add a new task.

## Notes

The System protects the data it stores from being corrupted by checking all the data before storing it. An example of these tests is the tests that check the date format and that the task's status is "active" or done. The system also creates a unique ID for each person and task. The system does not store any information but the specific information that was defined for each call.
Python's dynamic typing made it harder to make sure the types are the right ones, but Flask and SQLAlchemy did help with that by defining the types we expect to get in the requests, and the types we expect to put in the database.
Python did help with checking the date format, using `dateTime`.

Mapping entities from JSON to the database and back was easy, using `reqparse` from `flask_restful` and `jsonify` from `flask`.

Reading entities from the database was also very easy, using `db.Model` from `flask_sqlalchemy` made it as easy as using an object.

Preforming summation queries on the database was simple with `flask_sqlalchemy`.
