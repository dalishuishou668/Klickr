# Klickr

Klickr is a clone of the popular photo sharing website - Flickr. The Klickr features you createing and sharing your images with others. In Klickr, you can manage your own images and albums, and you can also explore your interested images and share thoughts with other. The images are saved in the cloud using PostgreSQL and Amazon AWS.

Live site: https://klickrr.herokuapp.com/

Documentation: https://github.com/dalishuishou668/Klickr/wiki 

Feature List: https://github.com/dalishuishou668/Klickr/wiki/Features


## Technologies used


![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Preview
### Landing Page
![screen_landing](https://user-images.githubusercontent.com/92266749/190917145-c73bbc68-c58f-42f0-b4a9-e0f2d9cd4aed.gif)

### Login Page
![screen_login](https://user-images.githubusercontent.com/92266749/190917631-036d9874-8255-4ced-8dfb-739053efb4ec.gif)

### Explore Page
![screen_explore](https://user-images.githubusercontent.com/92266749/190917134-663885c6-7e4c-41b6-8b48-32d6f4852727.gif)

### Single Image Page
![sscreen_singlepage](https://user-images.githubusercontent.com/92266749/190917147-d467bef1-68e0-48d7-9945-fe1a20774462.gif)

### User profile Page
![screen_yourpage](https://user-images.githubusercontent.com/92266749/190917157-89a84abf-d720-4837-b7bb-35c7ee6a1409.gif)

### Search Page
![screen_search](https://user-images.githubusercontent.com/92266749/190917651-d85beb5a-b643-43c3-9ad8-03423eff5942.gif)


## Run Locally

### Clone the project

   ```bash
   git clone https://github.com/dalishuishou668/Klickr.git
   ```

### Install dependencies

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```
      
### Create a .env file

   ```bash
   FLASK_APP=app
   FLASK_ENV=development
   SECRET_KEY=
   DATABASE_URL=
   S3_BUCKET=<your bucket name>
   S3_KEY=<Access key Id>
   S3_SECRET=<Secret access key>
   ```

### Setup your PostgreSQL user, password and database

   ```bash
   CREATE USER <USERNAME> WITH PASSWORD 'password';
   CREATE DATABASE <DATABASENAME> WITH ONWER <USERNAME>;
   ```

### Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

### Run React App in development

   ```bash
   cd react-app
   ```
   
   ```bash
   npm install
   ```


