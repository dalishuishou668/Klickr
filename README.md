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
![1352x1311_screen_landing](https://user-images.githubusercontent.com/92266749/190946660-09a13f4c-2a91-4a50-bdad-3a9dcd1d25b3.gif)

### Login Page
![output-20_41_54](https://user-images.githubusercontent.com/92266749/190946669-e9eb38fd-b387-4d1f-bb7f-5e9ebe8ad331.gif)

### Explore Page
![output-20_42_29](https://user-images.githubusercontent.com/92266749/190946693-8e10d420-2c02-430a-8179-57285c8216ac.gif)

### Single Image Page
![output-20_46_0](https://user-images.githubusercontent.com/92266749/190946698-13f8505d-1a13-4660-82d3-47209ac85293.gif)

### User profile Page
![output-20_44_59](https://user-images.githubusercontent.com/92266749/190946712-1047d290-ec8d-4bd7-9604-ff87662f1b65.gif)

### Search Page
![output-20_39_17](https://user-images.githubusercontent.com/92266749/190946719-f5902184-4588-420d-9ea4-72d91a8fc130.gif)


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


