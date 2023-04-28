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
- Single: single page where the job offer is detailed
- AddPage: a create page with a form to submit the new job offer (http://localhost:3000/add-a-page)
- UpdatePage: a update page with a form to submit the update job offer






