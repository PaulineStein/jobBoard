const router = require("express").Router();
const { getJobs, getJob, createJob, updateJob, deleteJob, searchJob } = require("./controllers/job");


router.get("/", (req, res) => {
    res.send("API for 'My Job Board'");
});

//router get all the jobs
router.get("/api/jobs", getJobs);

//router get one job
router.get("/api/jobs/:jobID", getJob);

//router update one job
router.put("/api/jobs/:jobID", updateJob);

//router create one job
router.post("/api/jobs", createJob);

//router delete one job
router.delete("/api/jobs/:jobID", deleteJob);

//router search with multibles keys
router.get("/api/search", searchJob);

//router search a job by a key word
// router.get("/api/search/:key", searchJob);

module.exports = router;