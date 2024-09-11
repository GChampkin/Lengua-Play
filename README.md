# LENGUA PLAY - An interactive Spanish learning website

The premise for this site is to create a fun and friendly environment for English-speaking learners of Spanish to engage with learning content and apply their knowledge in related interactive games that test their understanding. 
This website will be particularly useful for young learners currently in the education system due to its overall aesthetic and content taken from the British National Curriculum system. However, it is intended for use by all learners irrespective of age.

<img src="assets/images/Device imagery.JPG" alt = "site on multiple devices">

## Features

### Navigation bar 

* The navigation bar features 3 simple buttons linking to other areas of the site for easy navigation by the user. 
* Buttons have been used here to assist with CSS styling and consitency across the site as buttons are also used in the game on the battle page. A javascript call to function is required in the battle page, hence the use of buttons to achieve this. 

<img src="assets/images/Navigation bar.JPG" title = "Navigation bar">

### Landing Page (About Us and contact section)

* The landing page is designed to be a basic information page for the user's awareness of the purpose of the site. 
* The information provided has been kept brief to maintain user interest and contact information clearly stated beneath, should the user need/wish to make contact with the creator.
* Also featured are the important navigation bar links to other areas of the site as well as the footer for key information acertaining to social media and copyright information. 

<img src="assets/images/landing page.JPG" title = "landing page">

### Footer

* The footer features the copyright information of the site as well as the social media links, should the user wish to find the company on social media. 
* It is designed to contrast the rest of the page for clarity of the important information. 

<img src="assets/images/footer.JPG" title = "footer">

### Play zone

* This is the landing zone for the user to find and access the game they wish to play. 
* It is simply laid out to ensure maximum clarity for the user with a clear division between the information and the games to be selected. 

<img src="assets/images/play zone.JPG" title="play zone">

### Learning area

* The learning area features required information the user will need to refresh their memory in order to successfully partake in the game. 
* The first div contains the premise to the game.
* The second div below then contains the revision information for the user, followed then by the revision notes, again for the user to refresh their memory before "heading into battle". 
* The revision notes have been purposefully colour coded so that the user knows which verb applies to which anagram and what to do with that information.

<img src="assets/images/learning zone.JPG" title = "learning zone">

### Battle arena

* This is the main game area and the focal point of the project.
* It features the same content as all other HTML pages within the site (logo, nav bar and heading) but also features a game area, purposefully centred with all required elements surrounding it for maximum accessibility for the user. 
* You can see the randomly generated phrase first, and beneath an input box for the user to write their chosen answer, and 2 buttons (1 for checking the answer and the other for resetting the game). 
* Below this is then the battle between the 2 characters where you see the characters (uniquely designed for the game), their names for clarity of the user's character and their points. 
* There is also a blank div that is empty and shows nothing until the user gets an answer either correct or incorrect. 

<img src="assets/images/battle zone.JPG" title = "battle game page">

### Features left to implement

* This project has been created with the intent of expanding it for further use in the future.
* The "Play Zone" has been designed to be a landing platform for a bank of various interactive games for the user to choose the most relevant game to their needs.
* Moving forwards I will be ensuring to create more games that can be added to the site.

## Testing

* Upon review of the overall functionality of the site, everything proves to work as intended. 
* The process to building the site, however, came with multiple hurdles due to the complexity of the design of the HTML pages with multiple images and logos being used. With research and time this was not an issue and did not end up impacting the overall success of the project. 
* The Javascript code to run the game was the most difficult to achieve due to the complexity of what I wanted the computer to achieve. However, again this just took some time to work out through extended research into more complex functions that were required to random generate phrases from a mixture of arrays and objects, allow a user input based on the phrase, produce a correct or incorrect message upon the click of a button, followed by the generation of points depending on whetehr the answer is correct or incorrect and then subsequently a new phrase being generated. 
* Adding a functionality for resetting the game was also necessary for user enjoyment to avoid having to navigate back through the pages or refresh the current pages. 

## Validator testing

### HTML
* When run through the official W3C Validator, an error is thrown in relation to the presence of the background element being used within the <body> tag. However after extensive research I found that doing it this way was the only way to be able to insert my own image saved on my device as a background image behind all elements. I will need to conduct further research in order to work out how to use my own image that does not have a link as a background. 
* Other errors were thrown on all pages due to mistaken presence of a semi-colon where it is was not need nor allowed. This was easily rectified. 
* There were no other errors thrown on the HTML files. 

### CSS

* There were no errors thrown when the style.css file was passed through the official (Jigsaw) W3C Validator. 

<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

### JavaScript

* When run through the JSHint JavaScript Validator, some errors were thrown stating that there were some variables and functions that are not called. However this was due to the presence of "onclick" elements being used within the HTML file. These functions are in fact called in the game in specific moments. 

### Accessibility

* When run through Lighthouse in DevTools, the site proves to have a high performance rating and very good practices. However there are some accessibility issues that should be addressed for maximum accessibility. 

<img src="assets/images/Lighthouse Performance Rating.JPG" alt = "Lighthouse performance rating">

### Unfixed bugs

* There are currently no bugs left un-fixed. 

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
* In the GitHub repository, navigate to the Settings tab
* From the source section drop-down menu, select the Master Branch
* Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
* The live link can be found here - https://gchampkin.github.io/Lengua-Play/ 

## Credits

### Content

* Chat GPT was used to create the "Lingua Play" logo and imagery, following my specific requests.
* Support was taken for styling the logo with a shadow effect and to layer it on the border image from https://stackoverflow.com and https://w3schools.com .
* Images were edited to have transparent backgrounds using https://photopea.com .
* Fonts were imported from Google Fonts. 
* Background colour gradient was sourced via https://colorspace.com . 