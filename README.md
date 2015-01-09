# Top Pot Store Sales Calculator

We already had the function to calculate the daily and hourly sales for a Top Pot Store, so the first thing we did was lay out how we wanted the html to display and what tags we should use for different sections on paper.

Besides the standard html, head, and body tags, we also added sections for the info entry, the list of stores, and the results. We did not create any footers or asides, because this was a simple website.
After the header section, we decided that we needed a section with text entry boxes where users can enter the information about their new store. This section also needed a button with an onclick event to push the information in the different boxes into our array of stores.

Below that we added a section to display the names of the stores as they are added. Our final section with the results appears at the bottom. It contains a button to get the results and then every time the user clicks the get results button, the new store is added to the list of results. In order the get the results of all the stores, without repeating the stores that had already been entered we added code to the function to clear out the previous results. In order to keep the button from disappearing with the earlier results, however, we placed the button in this section inside of a separate div.
