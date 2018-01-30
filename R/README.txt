install R: https://www.r-project.org

Open an R shell

install json dependency:

>install.packages('curl)
>install.packages('jsonlite')

You may need to tell R to use a personal directory, then select a CRAN mirror
In my linux enviornment I needed to install some additional system dependencies, these were not required on Windows.


Then execute the following lines from the ddes-rest.R script:

# include the jsonlite package
require("jsonlite")

# request the dataset from the API
data <- fromJSON("https://devcentral.app.cloud.gov/api/index.php/api_longname?api=longname&transform=1&order=longname&page=1,100")

# Convert the results into a dataframe and display it
data_frame <- data["api_longname"]
View(data_frame)
