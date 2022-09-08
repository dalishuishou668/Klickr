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
<img width="1164" alt="7c1900aa05f8b42cfe9a426ad31a047" src="https://user-images.githubusercontent.com/92266749/189178779-a05e4b7b-9e47-4783-ae0d-aab10073d8e1.png">


### Login Page
<img width="1164" alt="cea20808f8d58f6aabce48220e6c8f7" src="https://user-images.githubusercontent.com/92266749/189178750-316302b8-4be0-46ae-bac7-4ba3a60d551c.png">

### Explore Page
<img width="1159" alt="4908d5280def826831c0c02382f054d" src="https://user-images.githubusercontent.com/92266749/189178803-cb91bcf1-f4c9-42a4-8e93-e5cee6157f4d.png">

### Single Image Page
<img width="1009" alt="b5d9b1a613744d34b26fa2095bb7530" src="https://user-images.githubusercontent.com/92266749/189178827-4824b524-2d12-4089-9e16-ffc06e12750e.png">

### User profile Page
<img width="1003" alt="7aae1d4e0e9a52568a0cec34585b857" src="https://user-images.githubusercontent.com/92266749/189178876-3d9e4e23-8156-483d-ac0b-36adda59514f.png">

### Search Page
<img width="1004" alt="9762e97b9986fee77c789e40932e28a" src="https://user-images.githubusercontent.com/92266749/189178894-5462b023-1360-4436-ae9c-3c40f495db85.png">


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


