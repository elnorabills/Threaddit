# **Threaddit**

Welcome to Threaddit, a shallow clone of Reddit. Checkout the live site by clicking [Threaddit](https://threaddit-eb.herokuapp.com/).

## **Technologies Used**
This project uses the following technologies:
- Docker
- **Backend**
    - Python
    - Flask
    - WTForms
    - SQLAlchemy
    - Alembic
    - SQLite3 (development)
    - PostgreSQL (production)
- **Frontend**
    - Javascript
    - React
    - React-Router
    - React-Redux
    - CSS

## **To get started on your local environment**

1. Clone the repo and run `pipenv install` to install the dependencies
2. Create .env file, for example:
    ```
    SECRET_KEY=[add secret key here]
    DATABASE_URL=sqlite:///dev.db
    ```
3. Start pipenv shell `pipenv shell`
4. Migrate and seed database `flask db migrate` and `flask seed all`
5. Run flask `flask run`
6. cd into the `react-app`
7. run `npm install` to install the frontend dependencies
8. run `npm start` to start the frontend
9. go to [localhost:3000](localhost:3000) in your browser

## **Features**
- Signup
- Login
- Demo user with full functionality
- View all Posts
- View only your Posts and your Comments
- Comment on any Post
- Respond to any Comment
- Update or Delete only a Post that you created
- Update or Delete only a Comment you posted
- Delete any response to a Comment you made

## Future additions
- Add a vote feature to either upvote or downvote a Post
- Add categories for posts based on sub-threaddit category
- The ability to follow only certain sub-threaddits based on the users preferences

## Eleanor Billerbeck Links
 - [Github](https://github.com/elnorabills)
 - [Linkedin](https://www.linkedin.com/in/eleanor-billerbeck-9165021b0/)

## API Documentation
- [API Documentation Link](https://github.com/elnorabills/Threaddit/wiki/API-Documentation)
