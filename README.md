# AWS Developer Final Project

#### Intro
You are a developer for Creative Solutions Inc. Your company just aquired a new contract for a local surf company to build out a new and more effective ordering system.

#### Task
You are to use your knowledge of AWS resources to build them a new ordering system. You will be using EC2, SQS, and SNS to achieve this. Your application will have the following flow: 

![](https://i.imgur.com/dzXj7Eh.png)

#### Instructions
- Clone this repo and ```npm install```
- To start your Node server, use ```node app.js```
- In the config.js file, input your aws keys. Make sure to include in your gitignore file!!!!!!
- Create a function called "createQueue", this function will create a new SQS. Check your AWS console to ensure you created the queue. This function will run when your server starts everytime. Make note of the Url as you will use this later.
- Create a .env that includes your queue url and topic_ARN. Ask instructor for help at this step.
- The home.js route should accept GET requests and render the appropriate template.
- The new-order.js route should accept GET and POST requests and render appropriate template.
- In new-order.js, you will have to write logic that takes users input from a post request and sends that data to your SQS.
- In new-order.js create a function called "sendOrderStatus". This will be called after your order is sent to SQS. It should send a text message to the subscriber letting them know their order has been received.
- Let instructor know when have reached this point.





#### Deployment Instructions
- Launch a new EC2 

