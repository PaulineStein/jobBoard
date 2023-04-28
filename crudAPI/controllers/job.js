const Job = require("../model/job");

// print all the jobs
const getJobs = (req, res) => {
    Job.find()
        .then((jobs) => {
            res.json(jobs);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};


// update a job
const updateJob = (req, res) => {
    Job.findOneAndUpdate(
        { _id: req.params.jobID },
        {
            $set: {
                id: req.body.id,
                company: req.body.company,
                logo: req.body.logo,
                logoBackground: req.body.logoBackground,
                position: req.body.position,
                postedAt: req.body.postedAt,
                contract: req.body.contract,
                location: req.body.location,
                website: req.body.website,
                apply: req.body.apply,
                description: req.body.description,
                requirements: req.body.requirements,
                role: req.body.role,
            },
        },
        { new: true }
    )
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};


// get a single job
const getJob = (req, res) => {
    Job.findOne(
        { _id: req.params.jobID },
    )
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};


// Create a new job
const createJob = (req, res) => {
    const job = new Job({
        company: req.body.company,
        logo: req.body.logo,
        logoBackground: req.body.logoBackground,
        position: req.body.position,
        posteAt: req.body.posteAt,
        contract: req.body.contract,
        location: req.body.location,
        website: req.body.website,
        apply: req.body.apply,
        description: req.body.description,
        requirements: req.body.requirements,
        role: req.body.role,
    });
    job
        .save()
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

// delete a single job
const deleteJob = (req, res) => {
    Job.deleteOne(
        { _id: req.params.jobID }
    )
        .then(() => res.json({ message: "This job has been deleted" }))
        .catch((err) => res.send(err));
};


// search a job with multiple filed -Greg version-
const searchJob = async (req, res) => {
    const { position, contract, location } = req.query;

    try {
        const query = {}
        if (position) query.position = position;
        if (contract) query.contract = contract;
        if (location) query.location = location;

        const jobs = await Job.find(query);
        res.json(jobs);

    } catch (err) {
        res.status(500).send(err.message)
    }
}


// search a job with multiple filed -Pauline version
// const searchJob = (req, res) => {
//     Job.find(
//         {
//             "$or": [
//                 { company: { $regex: req.params.key } },
//                 { position: { $regex: req.params.key } },
//                 { requirements: { $regex: req.params.key } },
//             ]
//         }
//     )
//         .then((jobs) => {
//             res.json(jobs);
//         })
//         .catch((err) => {
//             res.status(500).send(err.message);
//         });
// };



// export functions
module.exports = {
    getJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
    searchJob,
};