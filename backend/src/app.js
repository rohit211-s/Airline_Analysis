// Third Party Packages
const express = require("express");
const cors = require("cors");

// Global Setup
require("dotenv").config();

// Custom packages
const utils = require("./utils/utils");

// Custom Routes
const rawEditorRouter = require("./routes/raw_editor");
const dashboardRouter = require("./routes/dashboard");
const trendQuery2Router = require("./routes/trend_query2");
const trendQuery4Router = require("./routes/trend_query4");

// Setup
const app = express();

app.use(cors());
app.use(express.json());
app.use(rawEditorRouter);
app.use(trendQuery2Router);
app.use(trendQuery4Router);
app.use(dashboardRouter);

module.exports = app;
