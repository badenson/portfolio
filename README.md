# Portfolio
Portfolio

# ☁️ Cloud Resume Challenge - AWS  
**A serverless resume website demonstrating AWS cloud skills**  

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Terraform](https://img.shields.io/badge/Terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-%232088FF.svg?style=for-the-badge&logo=github-actions&logoColor=white)  

**Live Demo:** [barbaradenson.com](https://barbaradenson.com) *(replace with your actual URL)*  

---

## 📌 Overview  
This project completes the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/) using AWS serverless technologies. It includes:  
- **Frontend**: Hosted on S3, delivered via CloudFront with HTTPS.  
- **Backend**: Visitor counter powered by Lambda + DynamoDB.  
- **Infrastructure as Code**: Fully deployed with Terraform.  
- **CI/CD**: Automated pipelines via GitHub Actions.  

---

## 🛠️ Tech Stack  
| Category       | Technologies Used |  
|----------------|-------------------|  
| **Cloud**      | AWS S3, CloudFront, Route 53, ACM |  
| **Serverless** | Lambda (Python), API Gateway, DynamoDB |  
| **IaC**        | Terraform         |  
| **CI/CD**      | GitHub Actions    |  
| **Frontend**   | HTML5, CSS3, JavaScript |  

---

## 📂 Project Structure  
```bash
.
├── frontend/          # Static website files (HTML/CSS/JS)
├── backend/           # Lambda function code
├── terraform/         # Infrastructure as Code
├── .github/workflows/ # CI/CD pipelines
└── README.md

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
