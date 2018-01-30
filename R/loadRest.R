#!/usr/bin/env Rscript

# include the jsonlite package
require("jsonlite")

# request the dataset from the API
data <- fromJSON("https://devcentral.app.cloud.gov/api/index.php/api_longname?api=longname&transform=1&order=longname&page=1,100")

# Convert the results into a dataframe and display it
data_frame <- data["api_longname"]
View(data_frame)
