# AWS Developer Final Project

#### Intro
You are a developer for Creative Solutions Inc. Your company just aquired a new contract for a local surf company to build out a new and more effective ordering system.

#### Task
You are to use your knowledge of AWS resources to build them a new ordering system. You will be using EC2, SQS, and SNS to achieve this. Your application will have the following flow: 

![](https://github.com/junior-devleague/aws-developer-final/blob/master/images/AWS%20Web%20Application%20Publishing.png)

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

#### VPC Instructions
- Create the following VPC for your web application.
![](https://github.com/junior-devleague/aws-developer-final/blob/master/images/AWS%20Network%20Diagram.png)


#### Deployment Instructions
- Launch a new EC2 instance in us-west-2 and assign to your VPC.
- SSH into your instance using your key-pair.pem file.
- Run ```yum update``` to install any updates.
- Install git
- Install Node.js
- Clone your repo and cd into the project.
- Run ```npm install```
- You will have to create a new .env file and read them in using process.env.
- Start your server, and navigate to the instances public IP address:Port# . ex. ```54.168.22.34:3000```. You should see your website if configured properly.
- Test your ordering system to ensure it all works still.

#### CleanUp
- Delete VPC 
- Delete EC2 and key-pairs not being used.

#### Stretch Goals
- Create a function to delete the message from queue after it has been processed.
- Style your application
- Add more pages to the application

#### Resources
[Node](https://nodejs.org/docs/latest-v9.x/api/)
[Installing Node](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)
[Node-SDK SQS Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)
[Node-SDK SNS Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)


