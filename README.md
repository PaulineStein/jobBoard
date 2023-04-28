# JobBoard Read.me

JobBoard is an exercice done during an exam of dev. It's an web app to consult job offers and aply for them, to post, modify and delete some job offers. This project in not finish : the search bar is not functional, the modify job also is not functional.
The backend is composed of MongoDB and Node.js.
The frontend of composed React.js


### Dependencies
The app has dependencies (you can consulte them in package.json):
- "@testing-library/jest-dom": "^5.16.5"
- "@testing-library/react": "^13.4.0"
- "@testing-library/user-event": "^13.5.0"
- "moment": "^2.29.4",
- "moment-timezone": "^0.5.43",
- "cors": "^2.8.5"
- "dotenv": "^16.0.3"
- "moment": "^2.29.4"
- "mongoose": "^7.0.4"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-media": "^1.10.0"
- "react-router-dom": "^6.10.0"
- "react-scripts": "5.0.1"
- "web-vitals": "^2.1.4"


## Backend
The API Rest has several routes, you can see them in router.js:
- Get all the job, function getJobs(): http://localhost:8000/api/jobs
- Get one job by his id, function getJob(): http://localhost:8000/api/jobs/:ID
- Put one job by his id, function updateJob(): http://localhost:8000/api/jobs/:ID
- Post one job, function createJob(): http://localhost:8000/api/jobs
- Delete one job by his id, function deleteJob() : http://localhost:8000/api/:jobID
- Get some jobs by research, function searchJob() : http://localhost:8000/api/search

These functions are declared in crudAPI > controllers > job.js



Data are structured in json in this way :

```bash
company: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    logoBackground: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
    contract: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    apply: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        content: {
            type: String,
            required: true,
        },
        items: {
            type: [String],
            required: true,
        }
    },
    role: {
        content: {
            type: String,
            required: true,
        },
        items: {
            type: [String],
            required: true,
        }
    }
```

You will find the schema of the data in crudAPI > model > job.js



## Frontend
In this file, you will fill the different functions fetch in job-board > src > api > api.js. they are imported into the different pages. 
There is four pages (/route) declared in job-board > src > App.js :
- Home: home page with all the job offer (http://localhost:3000/)
- Single: single page where the job offer is detailed (http://localhost:3000/job/:id)
- AddPage: a create page with a form to submit the new job offer (http://localhost:3000/add-a-page)
- UpdatePage: a update page with a form to submit the update job offer (http://localhost:3000/update-a-job/:id)

You will find these pages in job-board > src > components


### components
Here the list of the components of the project and their use :
- ButtonPrimary (value, functionClick): this the main button of the app. It has two propos : "value" which is the button text and "functionClick" which is a click-triggered function.
- Card (postedAt, id, logo, logoBackground, contract, position, company, location): this is the Card, an overview of a job offer, used in the Home page. Its props are the different data values.
- CheckboxSlider : this is the components who could handle dark or light themes. It's not functional for the moment. It's called in the Header.
- CompanyApply (apply, company, position): this is the section in the Single page to apply. It's props are the different data values.
- CompanyBan (logo, logoBackground, company, website) : this is the section of company presentation in the Single page. Its props are the different data values.
- CompanyDesc (data) : this is the section of de job description in the Single page. Its props is the object data.
- Header: this the header of the app. You will find it in each page.
- Home: this is the main page. It calls "Header", "SearchBar", "ButtonPrimary" and "LinkButton".
- LinkButton (value, link, style, returnSingle, blank): this is the main <a> of the app. The props "value" is its text, "link" is its href, "returnSingle" is a click-triggered function, "blank" is the target of the link and "style" is the style of the link. "style" can have two value : 0 or 1, each of them have a associated style.
- PageAdd: this is the page to create a new job offer with a form. It call "Header", "LinkButton" and "ButtonPrimary".
- SearchBar: this is the search bar component. It is not functional at this time.
- Single: this is the Single page. It call "Header", "CompanyBan", "CompanyDesc", "SingleAction" and "CompanyApply".
- SingleAction (id, data ): this is the components with the delete action and the edit action. The props "id" is the id needed for the crud action, the props "data" is the object data.
- UpdatePage: this the page to update a job offer with a form. It call "Header", "LinkButton" and "ButtonPrimary".
        

### Others
You will find the img in job-board > src > assets > img and the fonts in job-board > src > assets > fonts. The fonts are declared in job-board > src > index.css.
      



Link for the loom : https://www.loom.com/share/b6e63733edd245cfbfa0d34176867133
(j'ai pas réussi à retirer l'icône pour la caméra... :( )
