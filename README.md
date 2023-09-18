# ahmadrivaldhi_webdriverio_project
this project is my first using WebdriverIO with Page Object Models 
- folder src for source code for page action and locators
- folder base for page url
- folder test for running test and implementation from page action
- file constant for source string/expected result

how to run this project:
- can clone this project directly
- can download this project
- open your local device
- after that type on the terminal 'npm install'
- and run on the terminal with 'npm run wdio' for the run all test parallel
- spesific test can use 'npx wdio run wdio.conf.js  --spec ./test/scene-1/scene-test-1.js' for scene 1
- spesific test can use 'npx wdio run wdio.conf.js  --spec ./test/scene-2/scene-test-2.js' for scene 2
- after running you can type 'allure open' for see the result of the test


nb: maybe you will found error for the locator, so you can updated based on ebay website, and you can use this project with another website you want test.
