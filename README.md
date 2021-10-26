# fluffy-journey
The Search for ducks

----
### Summary
This README is a little different than the usual ones.  I'm working through a
project, and I've worked out the logic and considerations here.  Towards the
bottom of the file are instructions on how to set up and run the project, but
they have not been fully tested yet, so they may not work.  Given more time,
I would be able to solidify the process.

---
### Problem Statements
**Assignment #1** - Create a test suite using any language / UI automation framework
that you're comfortable with that searches Google for "Ducks". Write any tests
that you see fit that would demonstrate how you would verify that ducks were
properly searched for.

**Assignment #2** - Create a test suite using Javascript that you would like that
performs requests on 'https://jsonplaceholder.typicode.com/posts', and validates
the functionality. Write tests that demonstrate how you would approach verifying
the response.

---
### Assumptions
Since the requirements aren't specific, I will make the assumptions specified below.

Had this been an actual feature test, I would have requested more specific
information during the grooming session(s), or directly to the requirements
author (usually a PO) if clarity was needed outside of the Agile ceremonies.

#### Assignment #1 Assumptions
  * I have taken 'searches Google for "Ducks"' to mean the aquatic bird.                            
  * During the grooming session I would have asked questions like:
    * What kind of ducks?  
      * Sports teams/mascots?
      * Animated?
      * Male or Female?
      * A particular breed (Mallard, Teal, Duckbill)?

#### Assignment #2 Assumptions
  * The requirement specifies performing requests.
  * I initially thought that was specifying GET requests (read only).  
  * However, a request can use any of various verbs (GET, POST, DELETE, etc.)
  * That particular web site will mock responses without changing the actual data
  * So at some point, I would have asked for clarity on the scope of the testing.

---
### Design Considerations
Decision for source language is JavaScript integrated with the Cypress testing framework.

Pros:
* I'm currently using Cypress with JavaScript at work
* The second assignment specifies JavaScript

Cons:
* I don't have a lot of experience with JavaScript, so I'm still learning it
* The Cypress framework we're using at work was built for me, so I'll be starting from scratch

Result:
* I'm going to double up and use this as an additional learning experience.
* It's a gamble, but I feel confident I can make enough progress in the alotted time to make it worth it.

---
### Prerequisites

#### Frameworks
* node installed
* npm installed
* Cypress installed

#### Editor
* I'm also using JetBrains' WebStorm for editing only (not using the
Cypress plugin features).

#### Environment
* Testing was done with the latest Chrome browser (95)

---
## Setting Up
* Go to a directory on your local system where you can download the code.
* Clone the repo using a command similar to below.
  * `git clone https://github.com/incredifan/fluffy-journey.git`
* `npm init` to create package.json file.
* `npm install cypress --save-dev` to install node_modules, etc.
* Start Cypress with: ``./node_modules/.bin/cypress open`
* When Cypress starts, you can clean up the platform by going to the window and
  selecting "No thanks, delete example files".
* Click one of the scenarios to run the tests.
  * google_ducks_spec.js
  * jsonplaceholder_spec.js
---
