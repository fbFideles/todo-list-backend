# 💾 Todo List API
> Todo List web app REST API

# 🎯 Objective:
> API built for the data manegement of the web app Todo List, and to study the basicconcepts of REST and CORS

# 🔬 Techs: 
* NodeJs
* ExpressJs
* MongoDB

# 🔭 Documentation

**Index Tasks**
----
  Returns a list of json about the tasks.

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      [
        {
          "_id": "5ef0bf8c76edf12768eb0fa9",
          "title": "Titulo",
          "description": "descrição",
          "createdAt": "2020-06-22T14:26:20.839Z",
          "updatedAt": "2020-06-22T14:26:20.839Z",
          "__v": 0
        },
        {
          "_id": "5ef0bf8d76edf12768eb0faa",
          "title": "Titulo",
          "description": "descrição",
          "createdAt": "2020-06-22T14:26:21.563Z",
          "updatedAt": "2020-06-22T14:26:21.563Z",
          "__v": 0
        }
      ]
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message: 'api internal error could not get', error }`

**show a Task**
----
  Returns a single json about a task.

* **URL**

  /tasks/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    /:id ex:. /5ef0bf6976edf12768eb0fa7


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "_id": "5ef0bf8c76edf12768eb0fa9",
        "title": "Titulo",
        "description": "descrição",
        "createdAt": "2020-06-22T14:26:20.839Z",
        "updatedAt": "2020-06-22T14:26:20.839Z",
        "__v": 0
      },
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message: 'api internal error could not get', error }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: 'could not find' }`

**store a Task**
----
  Stores the json send in the request body in the database.

* **URL**

  /tasks

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
  None


* **Data Params**

  ```json
    {
      "title": "Titulo",
      "description": "descrição",    
    }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "_id": "5ef0bf8c76edf12768eb0fa9",
        "title": "Titulo",
        "description": "descrição",
        "createdAt": "2020-06-22T14:26:20.839Z",
        "updatedAt": "2020-06-22T14:26:20.839Z",
        "__v": 0
      },
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message: 'could not store a task', error }`

**update a Task**
----
  Updates the given camp passed in json on the id passed in params.

* **URL**

  /tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
    /:id ex:. /5ef0bf6976edf12768eb0fa7


* **Data Params**

  ```json
    {
      "title": "titulo"
    }
  ```

  OR

  ```json
    {
      "description": "description"
    }
  ```

  OR

  ```json
    {
      "title": "titulo",
      "description": "description"
    }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "_id": "5ef0bf8c76edf12768eb0fa9",
        "title": "Titulo Atualizado",
        "description": "descrição Atualizada",
        "createdAt": "2020-06-22T14:26:20.839Z",
        "updatedAt": "2020-06-22T14:26:20.839Z",
        "__v": 0
      },
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message: 'could not update', error }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: 'could not find' }`

**delete a Task**
----
  Deletes a task.

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
    /:id ex:. /5ef0bf6976edf12768eb0fa7


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      { 
        "message": "task is gone" 
      }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message: 'could not delete a task', error }`


# 🏗 In Construction

Project under [📕 MIT license](https://github.com/fbFideles/todo-list-backend/blob/master/LICENSE)
Built by [Felipe Fideles](https://github.com/fbFideles)
