# Portfolio
Portfolio
Project Overview
#Cloud Resume Challenge - AWS
Overview


This repository contains my implementation of the Cloud Resume Challenge - AWS. The challenge is a hands-on project that demonstrates various AWS cloud skills by building a serverless resume website.

Project Components
Frontend
Hosting: Static website hosted on AWS S3

DNS: Managed via AWS Route 53

SSL: HTTPS enabled through AWS CloudFront

Technologies: HTML, CSS, JavaScript

Backend
Visitor Counter:

AWS Lambda function (Python)

Data stored in DynamoDB

Accessed via API Gateway

Infrastructure as Code
AWS Resources: Deployed using Terraform

CI/CD Pipeline: GitHub Actions for automated deployment

Architecture Diagram

## Architecture

![Architecture Diagram](/img/resume-cloud-challenge.png)


**Services Used**:

- S3
- AWS CloudFront
- Certificate Manager
- AWS Lambda
- Dynamo DB
- GitHub Actions
- Terraform

**Features**
- Static website resume built with HTML, CSS and Javascript
- HTTPS security using CloudFront
- Visitor counter using DynamoDB and Lambda
- CI/CD pipeline for automated deployments
- Infrastructure as Code using AWS SAM/CloudFormation
